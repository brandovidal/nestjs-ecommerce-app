interface ResponseMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

interface ResponseError {
  status: number
  name: string
  message: string
  details: unknown
}

export interface Response<T> {
  data: T | null
  meta: ResponseMeta
  error: ResponseError
}
