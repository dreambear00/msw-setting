// src/mocks/handlers.js
import { http } from 'msw'

export const handlers = [
  // Sample response for POST /login request
  http.post('/login', (req, res, ctx) => res(ctx.json({ status: 'ok' }))),
  // Sample response for GET /user request
  http.get('/user', (req, res, ctx) => res(ctx.json({ user: 'John Doe' })))
]

