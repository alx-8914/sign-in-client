import { FastifyReply, FastifyRequest } from 'fastify';
import { ListCustomersService } from '../services/listCustomersService';

class ListCustomersConttrollers{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listCustomersService = new ListCustomersService();
    const customers = await listCustomersService.execute();

    reply.send(customers);
  }
}

export {ListCustomersConttrollers}