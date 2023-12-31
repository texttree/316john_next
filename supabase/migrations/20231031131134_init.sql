create table "public"."translations" (
    "id" bigint generated by default as identity not null,
    "text" text,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."translations" enable row level security;

CREATE UNIQUE INDEX translations_pkey ON public.translations USING btree (id);

alter table "public"."translations" add constraint "translations_pkey" PRIMARY KEY using index "translations_pkey";


