create table newsfeed (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references user_profiles on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default now()
);

alter table newsfeed enable row level security;

create policy "Allow logged-in users to view newsfeed"
  on newsfeed
  for select
  to authenticated
  using (true);

create policy "Allow logged-in users to insert newsfeed"
  on newsfeed
  for insert
  to authenticated
  with check (auth.uid() = user_id);
