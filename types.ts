import { GraphQLResolveInfo } from 'graphql';
import { Customer as CustomerModel, Project as ProjectModel, Functionality as FunctionalityModel, Card as CardModel, Map as MapModel, PhotoGallery as PhotoGalleryModel, Blog as BlogModel, Timeline as TimelineModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddProjectInput = {
  customerId: Scalars['String'];
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  projectName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  websiteCategory: WebsiteCategory;
  websiteType: WebsiteType;
};

export type Blog = {
  __typename?: 'Blog';
  commentSection?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  projecId: Scalars['String'];
  socialSharing?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  status: Status;
};

export type BlogInput = {
  commentSection?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
  socialSharing?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type Card = {
  __typename?: 'Card';
  customerId: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  projectName: Scalars['String'];
  status: Scalars['String'];
};

export type CreateCustomerInput = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  email?: Maybe<Scalars['String']>;
  functionality?: Maybe<Functionality>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type Functionality = {
  __typename?: 'Functionality';
  api: Scalars['Boolean'];
  calender: Scalars['Boolean'];
  chatPopup: Scalars['Boolean'];
  contactForm: Scalars['Boolean'];
  customerId: Scalars['ID'];
  emailMarketing: Scalars['Boolean'];
  id: Scalars['ID'];
  other?: Maybe<Scalars['String']>;
  productCatalog: Scalars['Boolean'];
  productSearch: Scalars['Boolean'];
  videoGallery: Scalars['Boolean'];
};

export type FunctionalityInput = {
  api: Scalars['Boolean'];
  blog: Scalars['Boolean'];
  blogComments: Scalars['Boolean'];
  blogPosts: Scalars['Boolean'];
  calender: Scalars['Boolean'];
  chatPopup: Scalars['Boolean'];
  contactForm: Scalars['Boolean'];
  customerId: Scalars['String'];
  emailMarketing: Scalars['Boolean'];
  id: Scalars['String'];
  other?: InputMaybe<Scalars['String']>;
  productCatalog: Scalars['Boolean'];
  productSearch: Scalars['Boolean'];
  videoGallery: Scalars['Boolean'];
};

export type Map = {
  __typename?: 'Map';
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  projectId: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Status;
};

export type MapInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['String']>;
  status: Status;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlog?: Maybe<Blog>;
  addFunctionality?: Maybe<Customer>;
  addMap?: Maybe<Map>;
  addPhotoGallery?: Maybe<PhotoGallery>;
  addProject?: Maybe<Project>;
  addTimeline?: Maybe<Timeline>;
  createCustomer?: Maybe<Customer>;
  deleteBlog?: Maybe<Blog>;
  deleteCustomer?: Maybe<Customer>;
  deleteMap?: Maybe<Map>;
  deletePhotoGallery?: Maybe<PhotoGallery>;
  deleteProject?: Maybe<Project>;
  updateCustomer?: Maybe<Customer>;
};


export type MutationAddBlogArgs = {
  input: BlogInput;
};


export type MutationAddFunctionalityArgs = {
  input: FunctionalityInput;
};


export type MutationAddMapArgs = {
  input: MapInput;
};


export type MutationAddPhotoGalleryArgs = {
  input: PhotoGalleryInput;
};


export type MutationAddProjectArgs = {
  input: AddProjectInput;
};


export type MutationAddTimelineArgs = {
  input: TimelineInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMapArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePhotoGalleryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};

export type PhotoGallery = {
  __typename?: 'PhotoGallery';
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  projectId: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Status;
};

export type PhotoGalleryInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
  startDate?: InputMaybe<Scalars['String']>;
  status: Status;
};

export type Project = {
  __typename?: 'Project';
  blog?: Maybe<Blog>;
  customerId?: Maybe<Scalars['ID']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  map?: Maybe<Map>;
  photoGallery?: Maybe<PhotoGallery>;
  projectName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  timeline?: Maybe<Timeline>;
  websiteCategory?: Maybe<WebsiteCategory>;
  websiteType?: Maybe<WebsiteType>;
};

export type Query = {
  __typename?: 'Query';
  customer?: Maybe<Customer>;
  getAllCards: Array<Card>;
  getAllCustomers: Array<Customer>;
  getMaps: Array<Map>;
  getPhotoGalleries: Array<PhotoGallery>;
  getProject?: Maybe<Project>;
  timeline?: Maybe<Timeline>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryGetProjectArgs = {
  id: Scalars['ID'];
};


export type QueryTimelineArgs = {
  id: Scalars['ID'];
};

export enum Status {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type Timeline = {
  __typename?: 'Timeline';
  alterations: Status;
  clarify: Status;
  deploy: Status;
  functionality: Status;
  id: Scalars['ID'];
  implementDesign: Status;
  implementFunctionality: Status;
  layout: Status;
  projectId: Scalars['ID'];
  review: Status;
  testing: Status;
  tools: Status;
};

export type TimelineInput = {
  alterations: Status;
  clarify: Status;
  deploy: Status;
  functionality: Status;
  id: Scalars['ID'];
  implementDesign: Status;
  implementFunctionality: Status;
  layout: Status;
  projectId: Scalars['ID'];
  review: Status;
  testing: Status;
  tools: Status;
};

export type UpdateCustomerInput = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export enum WebsiteCategory {
  Automotive = 'AUTOMOTIVE',
  BusinessSupportAndSupplies = 'BUSINESS_SUPPORT_AND_SUPPLIES',
  ComputersAndElectronics = 'COMPUTERS_AND_ELECTRONICS',
  ContructionAndContracting = 'CONTRUCTION_AND_CONTRACTING',
  Education = 'EDUCATION',
  Entertainment = 'ENTERTAINMENT',
  FoodAndDining = 'FOOD_AND_DINING',
  HealthAndMedicine = 'HEALTH_AND_MEDICINE',
  HomeAndGarden = 'HOME_AND_GARDEN',
  LegAlAndFinancial = 'LEGAl_AND_FINANCIAL',
  ManufacturingWholesaleAndDistribution = 'MANUFACTURING_WHOLESALE_AND_DISTRIBUTION',
  MerchantsAndRetail = 'MERCHANTS_AND_RETAIL',
  Other = 'OTHER',
  PersonalCareAndServices = 'PERSONAL_CARE_AND_SERVICES',
  RealEstate = 'REAL_ESTATE',
  TravelAndTransportation = 'TRAVEL_AND_TRANSPORTATION'
}

export enum WebsiteType {
  BlogWebsite = 'BLOG_WEBSITE',
  BusinessWebsite = 'BUSINESS_WEBSITE',
  EcommerceWebsite = 'ECOMMERCE_WEBSITE',
  EventWebsite = 'EVENT_WEBSITE',
  InformationalWebsite = 'INFORMATIONAL_WEBSITE',
  MembershipWebsite = 'MEMBERSHIP_WEBSITE',
  NonprofitWebsite = 'NONPROFIT_WEBSITE',
  OnlineForum = 'ONLINE_FORUM',
  Other = 'OTHER',
  PersonalWebsite = 'PERSONAL_WEBSITE',
  PortfolioWebsite = 'PORTFOLIO_WEBSITE'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddProjectInput: AddProjectInput;
  Blog: ResolverTypeWrapper<BlogModel>;
  BlogInput: BlogInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Card: ResolverTypeWrapper<CardModel>;
  CreateCustomerInput: CreateCustomerInput;
  Customer: ResolverTypeWrapper<CustomerModel>;
  Functionality: ResolverTypeWrapper<FunctionalityModel>;
  FunctionalityInput: FunctionalityInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Map: ResolverTypeWrapper<MapModel>;
  MapInput: MapInput;
  Mutation: ResolverTypeWrapper<{}>;
  PhotoGallery: ResolverTypeWrapper<PhotoGalleryModel>;
  PhotoGalleryInput: PhotoGalleryInput;
  Project: ResolverTypeWrapper<ProjectModel>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  Timeline: ResolverTypeWrapper<TimelineModel>;
  TimelineInput: TimelineInput;
  UpdateCustomerInput: UpdateCustomerInput;
  WebsiteCategory: WebsiteCategory;
  WebsiteType: WebsiteType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddProjectInput: AddProjectInput;
  Blog: BlogModel;
  BlogInput: BlogInput;
  Boolean: Scalars['Boolean'];
  Card: CardModel;
  CreateCustomerInput: CreateCustomerInput;
  Customer: CustomerModel;
  Functionality: FunctionalityModel;
  FunctionalityInput: FunctionalityInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Map: MapModel;
  MapInput: MapInput;
  Mutation: {};
  PhotoGallery: PhotoGalleryModel;
  PhotoGalleryInput: PhotoGalleryInput;
  Project: ProjectModel;
  Query: {};
  String: Scalars['String'];
  Timeline: TimelineModel;
  TimelineInput: TimelineInput;
  UpdateCustomerInput: UpdateCustomerInput;
};

export type BlogResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  commentSection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projecId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialSharing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  functionality?: Resolver<Maybe<ResolversTypes['Functionality']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Functionality'] = ResolversParentTypes['Functionality']> = {
  api?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  calender?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatPopup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contactForm?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  emailMarketing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  other?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productCatalog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productSearch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  videoGallery?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Map'] = ResolversParentTypes['Map']> = {
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationAddBlogArgs, 'input'>>;
  addFunctionality?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationAddFunctionalityArgs, 'input'>>;
  addMap?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType, RequireFields<MutationAddMapArgs, 'input'>>;
  addPhotoGallery?: Resolver<Maybe<ResolversTypes['PhotoGallery']>, ParentType, ContextType, RequireFields<MutationAddPhotoGalleryArgs, 'input'>>;
  addProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'input'>>;
  addTimeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<MutationAddTimelineArgs, 'input'>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  deleteBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationDeleteBlogArgs, 'id'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'id'>>;
  deleteMap?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType, RequireFields<MutationDeleteMapArgs, 'id'>>;
  deletePhotoGallery?: Resolver<Maybe<ResolversTypes['PhotoGallery']>, ParentType, ContextType, RequireFields<MutationDeletePhotoGalleryArgs, 'id'>>;
  deleteProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
};

export type PhotoGalleryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PhotoGallery'] = ResolversParentTypes['PhotoGallery']> = {
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  photoGallery?: Resolver<Maybe<ResolversTypes['PhotoGallery']>, ParentType, ContextType>;
  projectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  timeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType>;
  websiteCategory?: Resolver<Maybe<ResolversTypes['WebsiteCategory']>, ParentType, ContextType>;
  websiteType?: Resolver<Maybe<ResolversTypes['WebsiteType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  getAllCards?: Resolver<Array<ResolversTypes['Card']>, ParentType, ContextType>;
  getAllCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  getMaps?: Resolver<Array<ResolversTypes['Map']>, ParentType, ContextType>;
  getPhotoGalleries?: Resolver<Array<ResolversTypes['PhotoGallery']>, ParentType, ContextType>;
  getProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetProjectArgs, 'id'>>;
  timeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<QueryTimelineArgs, 'id'>>;
};

export type TimelineResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']> = {
  alterations?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  clarify?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  deploy?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  functionality?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  implementDesign?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  implementFunctionality?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  layout?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  review?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  testing?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  tools?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Blog?: BlogResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Functionality?: FunctionalityResolvers<ContextType>;
  Map?: MapResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PhotoGallery?: PhotoGalleryResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
};


export const AddCustomerFragmentDoc = gql`
    fragment AddCustomer on Customer {
  id
  name
  email
  phone
}
    `;
export const AddProjectFragmentDoc = gql`
    fragment AddProject on Project {
  id
  projectName
  customerId
  status
  websiteType
  websiteCategory
}
    `;
export const CardFragmentDoc = gql`
    fragment Card on Card {
  projectName
  status
  image
  customerId
}
    `;
export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  id
  name
  email
  phone
  project {
    projectName
    status
    startDate
    endDate
    websiteType
    websiteCategory
    image
    map {
      status
      startDate
      endDate
      price
      notes
    }
    photoGallery {
      status
      startDate
      endDate
      price
      notes
    }
    blog {
      status
      startDate
      endDate
      price
      notes
      commentSection
      socialSharing
    }
    timeline {
      id
      projectId
      clarify
      functionality
      layout
      tools
      implementFunctionality
      implementDesign
      review
      alterations
      testing
      deploy
    }
  }
  functionality {
    customerId
    calender
    chatPopup
    contactForm
    emailMarketing
    productCatalog
    productSearch
    videoGallery
    api
    other
  }
}
    `;
export const TimelineFragmentDoc = gql`
    fragment Timeline on Timeline {
  clarify
  functionality
  layout
  tools
  implementFunctionality
  implementDesign
  review
  alterations
  testing
  deploy
}
    `;
export const AddCustomerDocument = gql`
    mutation AddCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    ...AddCustomer
  }
}
    ${AddCustomerFragmentDoc}`;
export type AddCustomerMutationFn = Apollo.MutationFunction<AddCustomerMutation, AddCustomerMutationVariables>;

/**
 * __useAddCustomerMutation__
 *
 * To run a mutation, you first call `useAddCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCustomerMutation, { data, loading, error }] = useAddCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCustomerMutation(baseOptions?: Apollo.MutationHookOptions<AddCustomerMutation, AddCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCustomerMutation, AddCustomerMutationVariables>(AddCustomerDocument, options);
      }
export type AddCustomerMutationHookResult = ReturnType<typeof useAddCustomerMutation>;
export type AddCustomerMutationResult = Apollo.MutationResult<AddCustomerMutation>;
export type AddCustomerMutationOptions = Apollo.BaseMutationOptions<AddCustomerMutation, AddCustomerMutationVariables>;
export const AddProjectDocument = gql`
    mutation AddProject($input: AddProjectInput!) {
  addProject(input: $input) {
    id
    customerId
    projectName
    websiteCategory
    websiteType
  }
}
    `;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const GetAllCardsDocument = gql`
    query GetAllCards {
  getAllCards {
    ...Card
  }
}
    ${CardFragmentDoc}`;

/**
 * __useGetAllCardsQuery__
 *
 * To run a query within a React component, call `useGetAllCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
      }
export function useGetAllCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
        }
export type GetAllCardsQueryHookResult = ReturnType<typeof useGetAllCardsQuery>;
export type GetAllCardsLazyQueryHookResult = ReturnType<typeof useGetAllCardsLazyQuery>;
export type GetAllCardsQueryResult = Apollo.QueryResult<GetAllCardsQuery, GetAllCardsQueryVariables>;
export const GetAllCustomersDocument = gql`
    query GetAllCustomers {
  getAllCustomers {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useGetAllCustomersQuery__
 *
 * To run a query within a React component, call `useGetAllCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCustomersQuery, GetAllCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomersQuery, GetAllCustomersQueryVariables>(GetAllCustomersDocument, options);
      }
export function useGetAllCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomersQuery, GetAllCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomersQuery, GetAllCustomersQueryVariables>(GetAllCustomersDocument, options);
        }
export type GetAllCustomersQueryHookResult = ReturnType<typeof useGetAllCustomersQuery>;
export type GetAllCustomersLazyQueryHookResult = ReturnType<typeof useGetAllCustomersLazyQuery>;
export type GetAllCustomersQueryResult = Apollo.QueryResult<GetAllCustomersQuery, GetAllCustomersQueryVariables>;
export const CustomerDocument = gql`
    query Customer($id: ID!) {
  customer(id: $id) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerQuery(baseOptions: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
      }
export function useCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const TimelineDocument = gql`
    query Timeline($id: ID!) {
  timeline(id: $id) {
    ...Timeline
  }
}
    ${TimelineFragmentDoc}`;

/**
 * __useTimelineQuery__
 *
 * To run a query within a React component, call `useTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimelineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTimelineQuery(baseOptions: Apollo.QueryHookOptions<TimelineQuery, TimelineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options);
      }
export function useTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimelineQuery, TimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options);
        }
export type TimelineQueryHookResult = ReturnType<typeof useTimelineQuery>;
export type TimelineLazyQueryHookResult = ReturnType<typeof useTimelineLazyQuery>;
export type TimelineQueryResult = Apollo.QueryResult<TimelineQuery, TimelineQueryVariables>;
export type AddCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type AddCustomerMutation = { __typename?: 'Mutation', createCustomer?: { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null } | null };

export type AddCustomerFragment = { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null };

export type AddProjectMutationVariables = Exact<{
  input: AddProjectInput;
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject?: { __typename?: 'Project', id: string, customerId?: string | null, projectName?: string | null, websiteCategory?: WebsiteCategory | null, websiteType?: WebsiteType | null } | null };

export type AddProjectFragment = { __typename?: 'Project', id: string, projectName?: string | null, customerId?: string | null, status?: Status | null, websiteType?: WebsiteType | null, websiteCategory?: WebsiteCategory | null };

export type CardFragment = { __typename?: 'Card', projectName: string, status: string, image?: string | null, customerId: string };

export type CustomerFragment = { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: { __typename?: 'Project', projectName?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, websiteType?: WebsiteType | null, websiteCategory?: WebsiteCategory | null, image?: string | null, map?: { __typename?: 'Map', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, blog?: { __typename?: 'Blog', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null, timeline?: { __typename?: 'Timeline', id: string, projectId: string, clarify: Status, functionality: Status, layout: Status, tools: Status, implementFunctionality: Status, implementDesign: Status, review: Status, alterations: Status, testing: Status, deploy: Status } | null } | null, functionality?: { __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, other?: string | null } | null };

export type GetAllCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCardsQuery = { __typename?: 'Query', getAllCards: Array<{ __typename?: 'Card', projectName: string, status: string, image?: string | null, customerId: string }> };

export type GetAllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCustomersQuery = { __typename?: 'Query', getAllCustomers: Array<{ __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: { __typename?: 'Project', projectName?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, websiteType?: WebsiteType | null, websiteCategory?: WebsiteCategory | null, image?: string | null, map?: { __typename?: 'Map', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, blog?: { __typename?: 'Blog', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null, timeline?: { __typename?: 'Timeline', id: string, projectId: string, clarify: Status, functionality: Status, layout: Status, tools: Status, implementFunctionality: Status, implementDesign: Status, review: Status, alterations: Status, testing: Status, deploy: Status } | null } | null, functionality?: { __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, other?: string | null } | null }> };

export type CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: { __typename?: 'Project', projectName?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, websiteType?: WebsiteType | null, websiteCategory?: WebsiteCategory | null, image?: string | null, map?: { __typename?: 'Map', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null } | null, blog?: { __typename?: 'Blog', status: Status, startDate?: string | null, endDate?: string | null, price: number, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null, timeline?: { __typename?: 'Timeline', id: string, projectId: string, clarify: Status, functionality: Status, layout: Status, tools: Status, implementFunctionality: Status, implementDesign: Status, review: Status, alterations: Status, testing: Status, deploy: Status } | null } | null, functionality?: { __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, other?: string | null } | null } | null };

export type TimelineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TimelineQuery = { __typename?: 'Query', timeline?: { __typename?: 'Timeline', clarify: Status, functionality: Status, layout: Status, tools: Status, implementFunctionality: Status, implementDesign: Status, review: Status, alterations: Status, testing: Status, deploy: Status } | null };

export type TimelineFragment = { __typename?: 'Timeline', clarify: Status, functionality: Status, layout: Status, tools: Status, implementFunctionality: Status, implementDesign: Status, review: Status, alterations: Status, testing: Status, deploy: Status };
