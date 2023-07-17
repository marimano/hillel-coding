import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify();

server.register(cors, { 
  // put your options here
})

// first plugin
server.register(fastifyStatic, {
  root: path.join(__dirname, '../client')
})

server.get('/planets', (request, reply) => {
  return reply.send([{name: 'Earth', population: 'Duzhe bahato', solarSystemOrder: 3}])
})

server.post('/user', (request, reply) => {
  // create user
  // added to db
  reply.send({ id: 10 })
})

server.listen({ port: 5555 })
  .then(() => {
    console.log('Server started')
  })
  .catch((error) => {
    console.log('Error', error)
  })