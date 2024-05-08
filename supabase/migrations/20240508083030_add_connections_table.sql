create table connections (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  connection_user_id uuid references auth.users(id) on delete cascade not null,
  created_at timestamp with time zone default now()
);

alter table connections enable row level security;

create policy "Allow logged-in users to view connections"
  on connections
  for select
  to authenticated
  using (true);

create policy "Allow logged-in users to insert connections"
  on connections
  for insert
  to authenticated
  with check (auth.uid() = user_id);