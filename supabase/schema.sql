-- Upskill Supabase starter schema

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique,
  full_name text,
  email text,
  role text check (role in ('learner', 'company', 'admin')) default 'learner',
  created_at timestamp with time zone default now()
);

create table if not exists courses (
  id text primary key,
  title text not null,
  level text,
  created_at timestamp with time zone default now()
);

create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  course_id text references courses(id) on delete cascade,
  title text not null,
  lesson_order int not null
);

create table if not exists progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  course_id text references courses(id),
  lesson_id uuid references lessons(id),
  completed boolean default false,
  completed_at timestamp with time zone,
  unique(user_id, lesson_id)
);

create table if not exists company_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  email text not null,
  skill_needed text not null,
  experience_level text,
  project_type text,
  budget_range text,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists shortlist_matches (
  id uuid primary key default gen_random_uuid(),
  company_request_id uuid references company_requests(id) on delete cascade,
  learner_user_id uuid,
  match_score int default 0,
  status text default 'suggested',
  created_at timestamp with time zone default now()
);

insert into courses (id, title, level) values
('video-editing', 'Video Editing', 'Beginner to hire-ready'),
('graphic-design', 'Graphic Design', 'Beginner to portfolio-ready'),
('websites', 'Website Building', 'Beginner to landing-page ready'),
('copywriting', 'Copywriting', 'Beginner to client-ready'),
('social-media', 'Social Media Management', 'Beginner to campaign-ready'),
('virtual-assistant', 'Virtual Assistant', 'Beginner to operations-ready'),
('ai-automation', 'AI Tools & Automation', 'Beginner to workflow-ready')
on conflict (id) do nothing;
