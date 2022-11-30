import {Endereco} from "./endereco"
import {Contato} from "./contato";
import {Admin} from "./admin";

export interface Empresas {
  id?: string
  nome: string
  cnpj: string
  sobre: string
  contato: Contato
  endereco: Endereco
  recrutadores: Admin[]
}
