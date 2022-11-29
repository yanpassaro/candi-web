import {Empresa} from "./empresa";

export interface Vaga {
  id?: string
  nome: string
  tipo: string
  beneficios: string
  sobre?: string
  dataTermino?: Date
  perguntas?: string[];
  empresa?: Empresa
}
