import {Atividades} from "./atividades"
import {Endereco} from "./endereco"
import {Contato} from "./contato";

export interface Usuario {
  id?: string
  nome: string
  senha: string;
  sobrenome: string
  email: string
  sobre?: string
  contato?: Contato
  endereco?: Endereco
  atividades?: Atividades[]
}
