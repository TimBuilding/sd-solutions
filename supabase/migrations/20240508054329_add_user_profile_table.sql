create type role as enum ('user', 'admin');

create table user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  email text,
  role role default 'user',
  created_at timestamp with time zone default now()
);

alter table user_profiles enable row level security;

create policy "Allow users to view profile"
  on user_profiles for select
  using (true);

-- trigger to create a profile when a user is created
create or replace function public.create_user_profile()
  returns trigger as $$
  begin
    insert into public.user_profiles (user_id, first_name, last_name, email)
    values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name', new.email);

    return new;
  end;
  $$ language plpgsql security definer;

create trigger create_user_profile
  after insert on auth.users
  for each row
  execute procedure public.create_user_profile();

-- first_name & last_name search
create function first_last_name(user_profiles) returns text as $$
  select $1.first_name || ' ' || $1.last_name;
$$ language sql immutable;
