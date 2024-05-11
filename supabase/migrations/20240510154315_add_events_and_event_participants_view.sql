CREATE VIEW events_with_participants AS
SELECT 
    e.title AS event_title,
    up.first_name,
    up.last_name,
    up.email,
    ep.created_at,
    'event' AS type
FROM 
    events e
JOIN 
    event_participants ep ON e.id = ep.event_id
JOIN
    user_profiles up ON ep.user_id = up.user_id
UNION ALL
SELECT 
    e.title AS event_title,
    up.first_name,
    up.last_name,
    up.email,
    ep.created_at,
    'participant' AS type
FROM 
    event_participants ep
JOIN 
    events e ON e.id = ep.event_id
JOIN
    user_profiles up ON ep.user_id = up.user_id;
