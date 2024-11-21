'use server'

import { ResponseData } from '@/types/response'

const { STRAPI_URL, STRAPI_TOKEN } = process.env

export async function query<T>(url: string) {
  const response = await fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`
    }
  })

  const responseData = (await response.json()) as ResponseData<T>
  return responseData
}
