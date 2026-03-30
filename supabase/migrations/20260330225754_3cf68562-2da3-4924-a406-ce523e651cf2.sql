
CREATE TABLE public.agendamentos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT,
  cep TEXT,
  descricao TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.agendamentos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert agendamentos"
  ON public.agendamentos FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public read access"
  ON public.agendamentos FOR SELECT
  USING (false);
