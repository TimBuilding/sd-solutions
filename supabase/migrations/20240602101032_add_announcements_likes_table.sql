create table announcements_likes (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null references user_profiles(user_id) on delete cascade,
    announcement_id uuid not null references announcements(id) on delete cascade,
    created_at timestamp with time zone default now()
);

create unique index on announcements_likes (user_id, announcement_id);

alter table announcements_likes enable row level security;

create policy "users can view likes"
    on announcements_likes
    for select
    to authenticated
    using (true);

create policy "users can insert their own likes"
    on announcements_likes
    for insert
    to authenticated
    with check (user_id = auth.uid());

create policy "users can delete likes"
    on announcements_likes
    for delete
    to authenticated
    using (user_id = auth.uid());