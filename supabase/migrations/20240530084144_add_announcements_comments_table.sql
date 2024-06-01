create table announcement_comments (
  id uuid primary key default uuid_generate_v4(),
  announcement_id uuid not null references announcements(id) on delete cascade,
  user_id uuid not null references user_profiles(user_id) on delete cascade,
  content text not null,
  created_at timestamp with time zone not null default now()
);

alter table announcement_comments enable row level security;

create policy "only authenticated users can view the comments"
    on announcement_comments
    for select
    to authenticated
    using (true);


create policy "only authenticated users can create comments"
    on announcement_comments
    for insert
    to authenticated
    with check (true);