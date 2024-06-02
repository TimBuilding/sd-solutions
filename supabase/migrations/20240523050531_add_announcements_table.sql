create table announcements (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid references user_profiles(user_id) on delete cascade not null,
    title text not null,
    content text not null,
    created_at timestamp with time zone default now()
);


alter table announcements enable row level security;

create policy "Allow logged-in users to view announcements"
    on announcements
    for select
    to authenticated
    using (true);

create policy "Allow admin to insert announcements"
    on announcements
    for insert
    to authenticated
    with check (
        exists (
            select 1
            from user_profiles
            where user_profiles.user_id = auth.uid() and user_profiles.role = 'admin'
        )
    );