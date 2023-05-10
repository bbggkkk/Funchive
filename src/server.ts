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

global.observer = {}
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    // global.observer.twitch = new TwitchObserver({ clientID: 'orn9957u6u5s3431rraz7ez0hp5mhr', clientSecret: 'y307gzoun4nv81l85h3e6usv2291qu' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();