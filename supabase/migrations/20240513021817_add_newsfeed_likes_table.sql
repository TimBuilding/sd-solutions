create table newsfeed_likes (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null references user_profiles(user_id) on delete cascade,
    newsfeed_id uuid not null references newsfeed(id) on delete cascade,
    created_at timestamp with time zone default now()
);

create unique index on newsfeed_likes (user_id, newsfeed_id);

alter table newsfeed_likes enable row level security;

create policy "users can view likes"
    on newsfeed_likes
    for select
    to authenticated
    using (true);

create policy "users can insert their own likes"
    on newsfeed_likes
    for insert
    to authenticated
    with check (user_id = auth.uid());

create policy "users can delete likes"
    on newsfeed_likes
    for delete
    to authenticated
    using (user_id = auth.uid());
