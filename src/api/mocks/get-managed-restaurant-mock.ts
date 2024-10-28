import { http, HttpResponse } from 'msw'

import { getManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  getManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custon-restaurant-id',
    name: 'Pizza Shop',
    createdAt: new Date(),
    updatedAt: null,
    description: 'lkdlaksdmlaksd',
    managerId: '45',
  })
})
