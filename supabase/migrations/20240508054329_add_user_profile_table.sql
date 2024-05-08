create table user_profile (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  created_at timestamp with time zone default now()
);

alter table user_profile enable row level security;

create policy "Allow users to view profile"
  on user_profile for select
  using (true);

-- trigger to create a profile when a user is created
create or replace function public.create_user_profile()
  returns trigger as $$
  begin
    insert into public.user_profile (user_id) values (new.id);
    return new;
  end;
  $$ language plpgsql security definer;

create trigger create_user_profile
  after insert on auth.users
  for each row
  execute procedure public.create_user_profile();

