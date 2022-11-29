export interface Response<M> {
  date: Date
  statusCode: number
  status: string
  message: string
  devMessage?: string
  data?: M
  datas?: M
}
