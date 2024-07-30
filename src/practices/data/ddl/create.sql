-- ====================================== TABLE START =================================
-- Table: public.nvplrmstockavailable

-- DROP TABLE IF EXISTS public.nvplrmstockavailable;

CREATE TABLE IF NOT EXISTS public.testuser
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    status boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    CONSTRAINT nvplrmstockavailable_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.testuser
    OWNER to postgres;

-- ====================================== TABLE END ===============================================