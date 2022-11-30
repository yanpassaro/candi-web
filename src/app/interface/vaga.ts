import {Empresa} from "./empresa";

export interface Vaga {
  id: string
  nome: string
  tipo: string
  beneficios: string
  sobre?: string
  dataTermino: string
  perguntas?: string[];
  empresa: Empresa
}
