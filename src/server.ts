import Fastify from 'fastify';
import next from 'next'

import { TwitchObserver } from './observer/twitch';


const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname: 'localhost', port })
const fastify = Fastify()
const handle = app.getRequestHandler()

fastify.get('*', (req, res) => {
  handle(req.raw, res.raw)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();