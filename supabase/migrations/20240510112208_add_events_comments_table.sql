create table event_participants (
    id uuid primary key default uuid_generate_v4(),
    event_id uuid not null references events(id) on delete cascade,
    user_id uuid not null references user_profiles(user_id) on delete cascade,
    created_at timestamp with time zone not null default now()
);

alter table event_participants enable row level security;

create policy "only authenticated users can view the participants"
    on event_participants
    for select
    to authenticated
    using (true);

create policy "only authenticated users can create participants"
    on event_participants
    for insert
    to authenticated
    with check (true);