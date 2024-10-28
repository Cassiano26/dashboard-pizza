import { http, HttpResponse } from 'msw'

import { getProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, getProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custon-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '6523652365',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
