create view events_with_participants as
select
  e.title as event_title,
  e.created_at,
  'event' as type,
  up.first_name,
  up.last_name,
  up.email
from
  events e
  join event_participants ep on e.id = ep.event_id
  join user_profiles up on ep.user_id = up.user_id
union
select
  e.title as event_title,
  ep.created_at,
  'participant' as type,
  up.first_name,
  up.last_name,
  up.email
from
  event_participants ep
  join events e on ep.event_id = e.id
  join user_profiles up on ep.user_id = up.user_id;
