import { API_URL } from '@/lib/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get plan from your database
  const url = `${API_URL}/api/v1/plan`
  const cookies = req.cookies
  const token = cookies.token
  if (url) {
    try {
      const result = await fetch(url, {
        method: 'GET'
      })
      if (result.ok) {
        const data = await result.json()
        return await res.status(200).json(data)
      }
    } catch (error) {}
  }
}
