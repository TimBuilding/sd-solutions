create table comments_likes (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null references user_profiles(user_id) on delete cascade,
    comment_id uuid not null references announcement_comments(id) on delete cascade,
    created_at timestamp with time zone default now(),
    likes boolean default false,
    dislike boolean default false
);

create unique index on comments_likes (user_id, comment_id);

alter table comments_likes enable row level security;

create policy "users can view likes"
    on comments_likes
    for select
    to authenticated
    using (true);

create policy "users can insert their own likes"
    on comments_likes
    for insert
    to authenticated
    with check (user_id = auth.uid());

create policy "users can delete likes"
    on comments_likes
    for delete
    to authenticated
    using (user_id = auth.uid());