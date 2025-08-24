import { FastifyInstance, FastifyReply, FastifyRequest, FastifyPluginOptions } from 'fastify';
import { CreateControllers } from './controllers/CreateControllers';
import { ListCustomersConttrollers } from './controllers/listCustomersConttrollers';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  })

  fastify.post("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
   return new CreateControllers().handle(request, reply);
  });

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
   return new ListCustomersConttrollers().handle(request, reply);
  });

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
   return new DeleteCustomerController().handle(request, reply);
  });
}

