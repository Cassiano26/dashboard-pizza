import { api } from '@/lib/axios'

export interface RegisterRestaurentBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurent({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurentBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
