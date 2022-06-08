CREATE TABLE public.empleado (
	idemp bigserial NOT NULL,
	nomemp varchar NOT NULL,
	CONSTRAINT empleado_pk PRIMARY KEY (idemp)
);

CREATE TABLE public.adoptador (
	idadopta bigserial NOT NULL,
	nomadopta varchar NOT NULL,
	celadopta bigserial NOT NULL,
	CONSTRAINT adoptador_pk PRIMARY KEY (idadopta)
);

CREATE TABLE public.mascota (
	idmascota bigserial NOT NULL,
	razamascota varchar NOT NULL,
	tipomascota varchar NOT NULL,
	CONSTRAINT mascota_pk PRIMARY KEY (idmascota)
);

CREATE TABLE public.adopcion (
	idadopta bigserial NOT NULL,
	idmascota bigserial NOT NULL,
	idemp bigserial NOT NULL,
	fecadop date NOT NULL
);