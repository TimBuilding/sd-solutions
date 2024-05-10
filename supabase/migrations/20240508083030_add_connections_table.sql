create table connections (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references user_profiles on delete cascade not null,
  connection_user_id uuid references user_profiles on delete cascade not null,
  created_at timestamp with time zone default now() not null
);

create index connections_user_id_index on connections(user_id);
create index connections_connection_user_id_index on connections(connection_user_id);

alter table connections enable row level security;

create policy "allow authenticated users to view all connections"
  on connections
  for select
  to authenticated
  using (true);

create policy "allow authenticated users to create connections"
  on connections
  for insert
  with check (user_id = auth.uid());

create policy "allow authenticated users to delete their connections"
  on connections
  for delete
  using (user_id = auth.uid());