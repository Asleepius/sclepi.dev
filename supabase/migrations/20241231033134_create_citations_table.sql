create schema private;

create table private.citations (
    event_id uuid default gen_random_uuid(),
    created_at timestamptz not null default current_timestamp,
    id SERIAL,
    change int not null,
    type text,
    url text,
    misc jsonb
);

alter table private."citations" enable row level security;

create policy "Anyone can read citations"
on private."citations" for select
to anon using ( true );

insert into private.citations (change, url, type, misc) 
values  
    (0, '_M4o0ExLQCs', 'YouTube',
    '{ "title": "Get Kata", "author": "Kevlin Henney" }'::jsonb),
    (0, 'NdSD07U5uBs', 'YouTube',
    '{ "title": "The Power of Simplicity", "author": "Alan Kay" }'::jsonb),
    (0, 'https://kevlinhenney.medium.com/need-something-sorted-sleep-on-it-11fdf8453914', 'Medium',
    '{ "title": "Need Something Sorted? Sleep on it!", "author": "Kevlin Henney" }'::jsonb);

create or replace function all_citations() returns table (
    event_id uuid,
    created_at timestamptz,
    id int,
    change int,
    type text,
    url text,
    misc jsonb
) as $$
    SELECT * FROM (
        SELECT DISTINCT ON (id) *
        FROM private.citations
        ORDER BY id, created_at DESC
    ) AS TEMP WHERE change != 2;
$$ language sql;


