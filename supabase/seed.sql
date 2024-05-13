-- create test users
INSERT INTO
    auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    ) (
        select
            '00000000-0000-0000-0000-000000000000',
            uuid_generate_v4 (),
            'authenticated',
            'authenticated',
            'user' || (ROW_NUMBER() OVER ()) || '@example.com',
            crypt ('password123', gen_salt ('bf')),
            current_timestamp,
            current_timestamp,
            current_timestamp,
            '{"provider":"email","providers":["email"]}',
            jsonb_build_object('first_name', 'FirstName' || (ROW_NUMBER() OVER ()), 'last_name', 'LastName' || (ROW_NUMBER() OVER ())),
            current_timestamp,
            current_timestamp,
            '',
            '',
            '',
            ''
        FROM
            generate_series(1, 10)
    );

-- test user email identities
INSERT INTO
    auth.identities (
        id,
        user_id,
        -- New column
        provider_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) (
        select
            uuid_generate_v4 (),
            id,
            -- New column
            id,
            format('{"sub":"%s","email":"%s"}', id :: text, email) :: jsonb,
            'email',
            current_timestamp,
            current_timestamp,
            current_timestamp
        from
            auth.users
    );

-- Inserting mock events with randomized dates within this year
INSERT INTO events (
    user_id,
    title,
    content,
    created_at
) (
    SELECT
        user_id,
        'Event Title ' || (ROW_NUMBER() OVER ()),
        'This is a description of event ' || (ROW_NUMBER() OVER ()),
        TIMESTAMP '2023-01-01 00:00:00' + random() * (EXTRACT(EPOCH FROM TIMESTAMP '2023-12-31 23:59:59' - TIMESTAMP '2023-01-01 00:00:00')) * INTERVAL '1 second'
    FROM user_profiles
    ORDER BY random()
    LIMIT 5 -- Limiting to 5 random events
);


-- Inserting mock event_participants with randomized dates within this year
INSERT INTO event_participants (
    event_id,
    user_id,
    created_at
) (
    SELECT
        e.id AS event_id,
        up.user_id,
        TIMESTAMP '2023-01-01 00:00:00' + random() * (EXTRACT(EPOCH FROM TIMESTAMP '2023-12-31 23:59:59' - TIMESTAMP '2023-01-01 00:00:00')) * INTERVAL '1 second'
    FROM
        events e
    CROSS JOIN
        user_profiles up
    ORDER BY
        random()
    LIMIT 10 -- Limiting to 10 random event participants
);


-- Inserting mock newsfeed posts
INSERT INTO newsfeed (
    user_id,
    content,
    created_at
) (
    SELECT
        user_id AS user_id,
        'This is a sample post content ' || (ROW_NUMBER() OVER ()),
        TIMESTAMP '2023-01-01 00:00:00' + random() * (EXTRACT(EPOCH FROM TIMESTAMP '2023-12-31 23:59:59' - TIMESTAMP '2023-01-01 00:00:00')) * INTERVAL '1 second'
    FROM user_profiles
    ORDER BY random()
    LIMIT 10 -- Limiting to 10 random newsfeed posts
);


-- Inserting mock newsfeed likes
INSERT INTO newsfeed_likes (
    user_id,
    newsfeed_id,
    created_at
) (
    SELECT
        up.user_id,
        nf.id AS newsfeed_id,
        TIMESTAMP '2023-01-01 00:00:00' + random() * (EXTRACT(EPOCH FROM TIMESTAMP '2023-12-31 23:59:59' - TIMESTAMP '2023-01-01 00:00:00')) * INTERVAL '1 second'
    FROM
        user_profiles up
    CROSS JOIN
        newsfeed nf
    ORDER BY
        random()
    LIMIT 20 -- Limiting to 20 random newsfeed likes
);
