create table events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references user_profiles on delete cascade not null,
  title text not null,
  content text not null,
  created_at timestamp with time zone default now()
);

alter table events enable row level security;

create policy "Allow logged-in users to view events"
  on events
  for select
  to authenticated
  using (true);

create policy "Allow admin to insert events"
  on events
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from user_profiles
      where user_profiles.user_id = auth.uid() and user_profiles.role = 'admin'
    )
  );

create policy "Allow admin to delete events"
  on events
  for delete
  to authenticated
  using (
    exists (
      select 1
      from user_profiles
      where user_profiles.user_id = auth.uid() and user_profiles.role = 'admin'
    )
  );