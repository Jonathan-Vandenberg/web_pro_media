import { createServer } from "@graphql-yoga/node"
import type { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from "next"
import { join } from 'path'
import { findOrCreateCustomer } from "../../lib/customer"
import { prisma } from '../../lib/prisma'
import { Resolvers } from '../../types'

export async function createContext(): Promise<GraphQLContext>{
  return { prisma }
}

export type GraphQLContext = {
  prisma: PrismaClient
}

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), {
  encoding: "utf-8"
})

const resolvers: Resolvers = {
  Query: {
    getCustomer: async (_, { id }, { prisma }) => {
      return prisma.customer.findUnique({
        where: {
          id
        }
      })
    },
    getAllCustomers: async (_, __, { prisma }) => {
      return prisma.customer.findMany()
    },
    getAllCards: async (_, __, { prisma }) => {
      return prisma.project.findMany()
    },
    getMaps: async (_, __, { prisma }) => {
      return prisma.map.findMany()
    },
    getPhotoGalleries: async (_, __, { prisma }) => {
      return prisma.photoGallery.findMany()
    }
  },
  Mutation: {
    createCustomer: async (_, {input}, {prisma}) => {
      const customer = await prisma.customer.create({
        data: {
          id: input.id,
          name: input.name,
          email: input.email,
          phone: input.phone,
        }
      })
      return customer
    },
    deleteCustomer: async (_, {id}, {prisma}) => {
      const customer = await prisma.customer.delete({
        where: {
          id
        }
      })
      return customer
    },
    updateCustomer: async (_, {input}, {prisma}) => {
      const customer = await prisma.customer.update({
        where: {
          id: input.id
        },
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
        }
      })
      return customer
    },
    addProject: async (_, {input}, {prisma}) => {
      const customer = await prisma.customer.findUnique({
        where: {
          id: input.customerId
        }
      })

      const project = await prisma.project.upsert({
        create: {
          customerId: customer!.id,
          projectName: input.projectName,
          id: input.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          websiteType: input.websiteType,
          websiteCategory: input.websiteCategory,
          image: input.image,
        },
        update:{
          projectName: input.projectName,
          customerId: input.id,
          id: input.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          websiteType: input.websiteType,
          websiteCategory: input.websiteCategory,
          image: input.image,
        },
        where:{
          id_customerId: {
            id: input.id,
            customerId: customer!.id
          }
        }
      })
      return project
    },
    deleteProject: async (_, {id}, {prisma}) => {
      const project = await prisma.project.delete({
        where: {
          id
        }
      })
      return project
    },
    addFunctionality: async (_, {input}, {prisma}) => {
      const customer = await findOrCreateCustomer(prisma, input.customerId)
      
      await prisma.functionality.upsert({
        create: {
          id: input.id,
          customerId: customer.id,
          calender: input.calender,
          chatPopup: input.chatPopup,
          contactForm: input.contactForm,
          emailMarketing: input.emailMarketing,
          productCatalog: input.productCatalog,
          productSearch: input.productSearch,
          videoGallery: input.videoGallery,
          api: input.api,
          other: input.other
        },
        update: {
          id: input.id,
          customerId: input.id,
          calender: input.calender,
          chatPopup: input.chatPopup,
          contactForm: input.contactForm,
          emailMarketing: input.emailMarketing,
          productCatalog: input.productCatalog,
          productSearch: input.productSearch,
          videoGallery: input.videoGallery,
          api: input.api,
          other: input.other
        },
        where: {
          id_customerId: {
            id: input.id,
            customerId: customer.id
          }
        }
      })
      return customer
    },
    addMap: async (_, {input}, {prisma}) => {
      const project = await prisma.project.findUnique({
        where: {
          id: input.projectId
        }
      })
      
      const map = await prisma.map.upsert({
        create: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        update: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        where: {
          id_projectId: {
            id: input.id,
            projectId: project!.id
          }
        }
      })

      return map
    },
    deleteMap: async (_, {id}, {prisma}) => {
      const map = await prisma.map.delete({
        where : {
          id
        }
      })

      return map
    },
    addPhotoGallery: async (_, {input}, {prisma}) => {
      const project = await prisma.project.findUnique({
        where: {
          id: input.projectId
        }
      })
      
      const photoGallery = await prisma.photoGallery.upsert({
        create: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        update: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        where: {
          id_projectId: {
            id: input.id,
            projectId: project!.id
          }
        }
      })

      return photoGallery
    },
    deletePhotoGallery: async (_, {id}, {prisma}) => {
      const photoGallery = await prisma.photoGallery.delete({
        where : {
          id
        }
      })
      return photoGallery
    },
    addBlog: async (_, {input}, {prisma}) => {
      const project = await prisma.project.findUnique({
        where: {
          id: input.projectId
        }
      })
      
      const blog = await prisma.blog.upsert({
        create: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price,
          commentSection: input.commentSection,
          socialSharing: input.socialSharing,
        },
        update: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price,
          commentSection: input.commentSection,
          socialSharing: input.socialSharing,
        },
        where: {
          id_projectId: {
            id: input.id,
            projectId: project!.id
          }
        }
      })

      return blog
    },
    deleteBlog: async (_, {id}, {prisma}) => {
      const blog = await prisma.blog.delete({
        where : {
          id
        }
      })
      return blog
    },
  },
  Customer: {
    project: async ({id}, _, { prisma }) => {
      const project = await prisma.customer.findUnique({
        where: {
          id
        }
      }).project()
      return project
    },
    functionality: async ({id}, _, { prisma }) => {
      const functionality = await prisma.customer.findUnique({
        where: {
          id
        }
      }).functionality()
      return functionality
    }
  },
  Project: {
    map: async ({id}, _, { prisma }) => {
      const map = await prisma.project.findUnique({
        where: {
          id
        }
      }).map()
      return map
    },
    photoGallery: async ({id}, _, { prisma }) => {
      const photoGallery = await prisma.project.findUnique({
        where: {
          id
        }
      }).photoGallery()
      return photoGallery
    },
    blog: async ({id}, _, { prisma }) => {
      const blog = await prisma.project.findUnique({
        where: {
          id
        }
      }).blog()
      return blog
    }
  }
}

const server = createServer<{req: NextApiRequest, res: NextApiResponse}>({
  endpoint:"/api",
  schema:{
    typeDefs,
    resolvers
  },
  context: createContext()
})

export default server