import {Usuario} from "./usuario";
import {Vaga} from "./vaga";

export interface Candidatura {
  id: string;
  dataEnvio: string;
  vaga: Vaga;
  status: string;
  candidato: Usuario;
  perguntas?: string[];
  respostas?: string[];
}
