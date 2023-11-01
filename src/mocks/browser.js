// src/mocks/browser.js

// import { http, HttpResponse } from 'msw'
// import { setupWorker as setupMSWWorker } from 'msw/browser' 
// import { handlers } from './handlers'

// const worker = setupMSWWorker(
//   ...handlers, 
//   http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })
// ))

// export { worker }

// Do not start the worker here
// await worker.start()





/////////////////////


// src/mocks/browser.js
import { http } from 'msw'
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Define a new handler directly in this file using http
const additionalHandler = http.get('/resource', (req, res, ctx) => {
  return res(ctx.json({ id: 'abc-123' }))
})

// Combine the handlers
const allHandlers = [...handlers, additionalHandler]

// Set up the worker
const worker = setupWorker(...allHandlers)

export { worker }
