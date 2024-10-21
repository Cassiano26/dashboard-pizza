import { api } from '@/lib/axios'

interface getManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getmanagedRestaurant() {
  const response = await api.get<getManagedRestaurantResponse>(
    '/managed-restaurant',
  )
  return response.data
}
