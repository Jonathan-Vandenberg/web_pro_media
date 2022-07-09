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
    customer: (_, { id }, { prisma }) => {
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
    },
    timeline: (_, {id}, { prisma }) => {
      return prisma.timeline.findUnique({
        where: {
          id
        }
      })
    },
    clarify: (_, {id}, { prisma }) => {
      return prisma.clarify.findUnique({
        where: {
          id
        }
      })
    },
    functionalityTimeline: (_, {id}, { prisma }) => {
      return prisma.functionalityTimeline.findUnique({
        where: {
          id
        }
      })
    },
    layout: (_, {id}, { prisma }) => {
      return prisma.layout.findUnique({
        where: {
          id
        }
      })
    },
    tools: (_, {id}, { prisma }) => {
      return prisma.tools.findUnique({
        where: {
          id
        }
      })
    },
    implementFunctionality: (_, {id}, { prisma }) => {
      return prisma.implementFunctionality.findUnique({
        where: {
          id
        }
      })
    },
    implementDesign: (_, {id}, { prisma }) => {
      return prisma.implementDesign.findUnique({
        where: {
          id
        }
      })
    },
    review: (_, {id}, { prisma }) => {
      return prisma.review.findUnique({
        where: {
          id
        }
      })
    },
    alterations: (_, {id}, { prisma }) => {
      return prisma.alterations.findUnique({
        where: {
          id
        }
      })
    },
    testing: (_, {id}, { prisma }) => {
      return prisma.testing.findUnique({
        where: {
          id
        }
      })
    },
    deploy: (_, {id}, { prisma }) => {
      return prisma.deploy.findUnique({
        where: {
          id
        }
      })
    },
    functionality: (_, {id}, { prisma }) => {
      return prisma.functionality.findUnique({
        where: {
          id
        }
      })
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
          projectName: input.projectName!,
          id: input.id,
          status: input.status!,
          startDate: input.startDate,
          endDate: input.endDate,
          websiteType: input.websiteType,
          websiteCategory: input.websiteCategory,
          image: input.image,
        },
        update:{
          projectName: input.projectName!,
          customerId: input.customerId,
          id: input.id,
          status: input.status!,
          startDate: input.startDate,
          endDate: input.endDate,
          websiteType: input.websiteType,
          websiteCategory: input.websiteCategory,
          image: input.image,
        },
        where:{
          id: input.id
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
      const customer = await findOrCreateCustomer(prisma, input.customerIdRequire)
      
      const functionality = await prisma.functionality.upsert({
        create: {
          id: input.id,
          customerIdRequire: customer.id,
          calenderRequire: input.calenderRequire,
          chatPopupRequire: input.chatPopupRequire,
          contactFormRequire: input.contactFormRequire,
          emailMarketingRequire: input.emailMarketingRequire,
          productCatalogRequire: input.productCatalogRequire,
          productSearchRequire: input.productSearchRequire,
          videoGalleryRequire: input.videoGalleryRequire,
          photoGalleryRequire: input.photoGalleryRequire,
          mapRequire: input.mapRequire,
          blogRequire: input.blogRequire,
          blogCommentsRequire: input.blogCommentsRequire,
          blogPostsRequire: input.blogPostsRequire,
          apiRequire: input.apiRequire,
          otherRequire: input.otherRequire
        },
        update: {
          id: input.id,
          customerIdRequire: input.customerIdRequire,
          calenderRequire: input.calenderRequire,
          chatPopupRequire: input.chatPopupRequire,
          contactFormRequire: input.contactFormRequire,
          emailMarketingRequire: input.emailMarketingRequire,
          productCatalogRequire: input.productCatalogRequire,
          productSearchRequire: input.productSearchRequire,
          videoGalleryRequire: input.videoGalleryRequire,
          blogRequire: input.blogRequire,
          blogCommentsRequire: input.blogCommentsRequire,
          blogPostsRequire: input.blogPostsRequire,
          photoGalleryRequire: input.photoGalleryRequire,
          mapRequire: input.mapRequire,
          apiRequire: input.apiRequire,
          otherRequire: input.otherRequire
        },
        where: {
          id: input.id
        }
      })

      return functionality
    },
    addMap: async (_, {input}, {prisma}) => {
      const project = await prisma.project.findUnique({
        where: {
          id: input.projectId
        }
      })
      
      const map = await prisma.map.upsert({
        create: {
          id: input.id!,
          projectId: project!.id,
          status: input.status,
          required: input.required,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        update: {
          id: input.id!,
          projectId: project!.id,
          required: input.required,
          status: input.status,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        where: {
          id: input.id!
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
          required: input.required,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        update: {
          id: input.id,
          projectId: project!.id,
          status: input.status,
          required: input.required,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price
        },
        where: {
          id: input.id
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
          required: input.required,
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
          required: input.required,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price,
          commentSection: input.commentSection,
          socialSharing: input.socialSharing,
        },
        where: {
          id: input.id!
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
    addTimeline: async (_, {input}, {prisma}) => {
      const timeline = await prisma.timeline.create({
        data: {
          id: input.id,
          customerId: input.customerId,
          
        }
      })

      await prisma.clarify.create({
        data: {
          timelineId: input.id,
          name: "Clarify Project Requirements"
        }
      })

      await prisma.functionalityTimeline.create({
        data: {
          timelineId: input.id,
          name: "Design Functionality Layout"
        }
      })

      await prisma.layout.create({
        data: {
          timelineId: input.id,
          name: "Design UI Layout"
        }
      })

      await prisma.tools.create({
        data: {
          timelineId: input.id,
          name: "Decide on Tools and Libraries"
        }
      })

      await prisma.implementFunctionality.create({
        data: {
          timelineId: input.id,
          name: "Implement Functionality"
        }
      })

      await prisma.implementDesign.create({
        data: {
          timelineId: input.id,
          name: "Implement UI Design"
        }
      })

      await prisma.review.create({
        data: {
          timelineId: input.id,
          name: "Customer Review"
        }
      })

      await prisma.alterations.create({
        data: {
          timelineId: input.id,
          name: "Alterations and Review"
        }
      })

      await prisma.testing.create({
        data: {
          timelineId: input.id,
          name: "Testing"
        }
      })

      await prisma.deploy.create({
        data: {
          timelineId: input.id,
          name: "Deployment"
        }
      })
      return timeline
    },
    updateBlog: async (_, {input}, {prisma}) => {
      const blog = await prisma.blog.update({
        where: {
          id: input.id!
        },
        data: {
          status: input.status,
          id: input.id!,
          required: input.required,
          startDate: input.startDate,
          endDate: input.endDate,
          notes: input.notes,
          price: input.price,
        }
      })
      return blog
    },
    updateClarify: async (_, {input}, {prisma}) => {
      const clarify = await prisma.clarify.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return clarify
    },
    updateFunctionalityTimeline: async (_, {input}, {prisma}) => {
      const functionalityTimeline = await prisma.functionalityTimeline.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return functionalityTimeline
    },
    updateLayout: async (_, {input}, {prisma}) => {
      const layout = await prisma.layout.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return layout
    },
    updateTools: async (_, {input}, {prisma}) => {
      const tools = await prisma.tools.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return tools
    },
    updateImplementFunctionality: async (_, {input}, {prisma}) => {
      const implementFunctionality = await prisma.implementFunctionality.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return implementFunctionality
    },
    updateImplementDesign: async (_, {input}, {prisma}) => {
      const implementDesign = await prisma.implementDesign.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return implementDesign
    },
    updateReview: async (_, {input}, {prisma}) => {
      const review = await prisma.review.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return review
    },
    updateAlterations: async (_, {input}, {prisma}) => {
      const alterations = await prisma.alterations.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return alterations
    },
    updateTesting: async (_, {input}, {prisma}) => {
      const testing = await prisma.testing.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return testing
    },
    updateDeploy: async (_, {input}, {prisma}) => {
      const deploy = await prisma.deploy.update({
        data: {
          id: input.id!,
          timelineId: input.timelineId,
          status: input.status!,
          name: input.name!,
        },
        where: {
          id: input.id!
        }
      })
      return deploy
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
    },
    timeline: async ({id}, _, { prisma }) => {
      const timeline = await prisma.customer.findUnique({
        where: {
          id
        }
      }).timeline()
      return timeline
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
  },
  Timeline: {
    clarify: async ({id}, _, { prisma }) => {
      const clarify = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).clarify()
      return clarify
    },
    functionalityTimeline: async ({id}, _, { prisma }) => {
      const functionalityTimeline = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).functionalityTimeline()
      return functionalityTimeline
    },
    layout: async ({id}, _, { prisma }) => {
      const layout = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).layout()
      return layout
    },
    tools: async ({id}, _, { prisma }) => {
      const tools = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).tools()
      return tools
    },
    implementFunctionality: async ({id}, _, { prisma }) => {
      const implementFunctionality = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).implementFunctionality()
      return implementFunctionality
    },
    implementDesign: async ({id}, _, { prisma }) => {
      const implementDesign = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).implementDesign()
      return implementDesign
    },
    review: async ({id}, _, { prisma }) => {
      const review = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).review()
      return review
    },
    alterations: async ({id}, _, { prisma }) => {
      const alterations = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).alterations()
      return alterations
    },
    testing: async ({id}, _, { prisma }) => {
      const testing = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).testing()
      return testing
    },
    deploy: async ({id}, _, { prisma }) => {
      const deploy = await prisma.timeline.findUnique({
        where: {
          id
        }
      }).deploy()
      return deploy
    },
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