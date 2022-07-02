import {PrismaClient} from '@prisma/client'

export async function findOrCreateProject(prisma: PrismaClient, id: string){
  const project = await prisma.project.findUnique({
    where: {id}
  })
  if(project){
    return project
  }
  return prisma.project.create({
    data: {
      id,
    }
  })
}