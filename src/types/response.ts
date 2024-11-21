export interface ResponseData<T> {
  data: T | null
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } }
  error: { status: number; name: string; message: string; details: unknown }
}
