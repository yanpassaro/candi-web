import { Atividades } from "./atividades"
import { Endereco } from "./endereco"

export interface Usuario {
    id?: string
    nome: string
    sobrenome: string
    email: string
    sobre?: string
    endereco?: Endereco
    atividades?: Atividades[]
}
