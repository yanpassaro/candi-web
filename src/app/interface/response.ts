export interface Response {
  data: string
  statusCode: string
  status: number
  mensagem: string
  devMensagem?: string
  dados?: Map<any, any>
}
