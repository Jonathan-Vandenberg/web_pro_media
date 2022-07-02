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
      const customer = await findOrCreateCustomer(prisma, input.customerId)

      await prisma.project.upsert({
        create: {
          customerId: customer.id,
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
            customerId: customer.id
          }
        }
      })
      return customer
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
          map: input.map,
          photoGallery: input.photoGallery,
          productCatalog: input.productCatalog,
          productSearch: input.productSearch,
          videoGallery: input.videoGallery,
          api: input.api,
          blog: input.blog,
          blogComments: input.blogComments,
          blogPosts: input.blogPosts,
          other: input.other
        },
        update: {
          id: input.id,
          customerId: input.id,
          calender: input.calender,
          chatPopup: input.chatPopup,
          contactForm: input.contactForm,
          emailMarketing: input.emailMarketing,
          map: input.map,
          photoGallery: input.photoGallery,
          productCatalog: input.productCatalog,
          productSearch: input.productSearch,
          videoGallery: input.videoGallery,
          api: input.api,
          blog: input.blog,
          blogComments: input.blogComments,
          blogPosts: input.blogPosts,
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
    }
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