alter table announcements add column image_url text;

insert into storage.buckets 
  (id, name, public)
values
  ('announcements', 'announcements', true);


-- create rls

create policy "allow authenticated user to view"
on storage.objects
for select
using (
  bucket_id = 'announcements'
);

create policy "allow_admin_to_upload_images"
ON storage.objects
for insert with check (
  bucket_id = 'announcements'
);