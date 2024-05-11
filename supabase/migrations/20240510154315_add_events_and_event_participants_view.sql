CREATE VIEW events_with_participants AS
SELECT 
    e.title AS event_title,
    ep.user_id,
    ep.created_at,
    'event' AS type
FROM 
    events e
JOIN 
    event_participants ep ON e.id = ep.event_id
UNION ALL
SELECT 
    e.title AS event_title,
    ep.user_id,
    ep.created_at,
    'participant' AS type
FROM 
    event_participants ep
JOIN 
    events e ON e.id = ep.event_id;
