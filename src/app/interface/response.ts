export interface Response<M> {
  data: string
  statusCode: string
  status: number
  mensagem: string
  devMensagem?: string
  dados?: Map<any, M>
}
