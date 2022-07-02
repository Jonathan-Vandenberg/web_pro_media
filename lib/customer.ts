import {PrismaClient} from '@prisma/client'

export async function findOrCreateCustomer(prisma: PrismaClient, id: string){
  const customer = await prisma.customer.findUnique({
    where: {id}
  })
  if(customer){
    return customer
  }
  return prisma.customer.create({
    data: {
      id
    }
  })
}