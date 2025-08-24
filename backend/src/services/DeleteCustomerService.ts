import prismaClient from '../prisma';

interface DeleteCustonerProps{
  id: string;
}

class DeleteCustomerService{
  async execute({ id}: DeleteCustonerProps){
    if (!id) {
      throw new Error('Solicitação inválida. ⚠️ ID do cliente é obrigatório');
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    if (!findCustomer) {
      throw new Error('Cliente não encontrado. ⚠️ Verifique o ID e tente novamente.');
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: 'Cliente deletado com sucesso! ✅' };

  }
}

export {DeleteCustomerService};