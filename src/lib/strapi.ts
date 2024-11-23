'use server'

import { Response } from '@/types/response'

const { NEXT_PUBLIC_STRAPI_URL, NEXT_PUBLIC_STRAPI_TOKEN } = process.env

export async function query<T>(url: string) {
  const response = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  })

  const responseData = (await response.json()) as Response<T>
  return responseData
}
