import { GraphQLResolveInfo } from 'graphql';
import { Customer as CustomerModel, Project as ProjectModel, Functionality as FunctionalityModel, Card as CardModel, Map as MapModel, PhotoGallery as PhotoGalleryModel, Blog as BlogModel, Timeline as TimelineModel, Clarify as ClarifyModel, FunctionalityTimeline as FunctionalityTimelineModel, Layout as LayoutModel, Tools as ToolsModel, ImplementDesign as ImplementDesignModel, ImplementFunctionality as ImplementFunctionalityModel, Review as ReviewModel, Alterations as AlterationsModel, Testing as TestingModel, Deploy as DeployModel } from '@prisma/client';
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
  projectName: Scalars['String'];
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  websiteCategory: WebsiteCategory;
  websiteType: WebsiteType;
};

export type Alterations = {
  __typename?: 'Alterations';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type AlterationsInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type Blog = {
  __typename?: 'Blog';
  commentSection?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  projecId: Scalars['ID'];
  required: Scalars['Boolean'];
  socialSharing?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type BlogInput = {
  commentSection?: InputMaybe<Scalars['Boolean']>;
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
  required: Scalars['Boolean'];
  socialSharing?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type Card = {
  __typename?: 'Card';
  customerId?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  projectName: Scalars['String'];
  status: Scalars['String'];
};

export type Clarify = {
  __typename?: 'Clarify';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type ClarifyInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
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
  timeline?: Maybe<Timeline>;
};

export type Deploy = {
  __typename?: 'Deploy';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type DeployInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type Functionality = {
  __typename?: 'Functionality';
  apiRequire: Scalars['Boolean'];
  blogCommentsRequire: Scalars['Boolean'];
  blogPostsRequire: Scalars['Boolean'];
  blogRequire: Scalars['Boolean'];
  calenderRequire: Scalars['Boolean'];
  chatPopupRequire: Scalars['Boolean'];
  contactFormRequire: Scalars['Boolean'];
  customerIdRequire: Scalars['ID'];
  emailMarketingRequire: Scalars['Boolean'];
  id: Scalars['ID'];
  mapRequire: Scalars['Boolean'];
  otherRequire?: Maybe<Scalars['String']>;
  photoGalleryRequire?: Maybe<Scalars['Boolean']>;
  productCatalogRequire: Scalars['Boolean'];
  productSearchRequire: Scalars['Boolean'];
  videoGalleryRequire: Scalars['Boolean'];
};

export type FunctionalityInput = {
  apiRequire: Scalars['Boolean'];
  blogCommentsRequire: Scalars['Boolean'];
  blogPostsRequire: Scalars['Boolean'];
  blogRequire: Scalars['Boolean'];
  calenderRequire: Scalars['Boolean'];
  chatPopupRequire: Scalars['Boolean'];
  contactFormRequire: Scalars['Boolean'];
  customerIdRequire: Scalars['String'];
  emailMarketingRequire: Scalars['Boolean'];
  id: Scalars['String'];
  mapRequire: Scalars['Boolean'];
  otherRequire?: InputMaybe<Scalars['String']>;
  photoGalleryRequire: Scalars['Boolean'];
  productCatalogRequire: Scalars['Boolean'];
  productSearchRequire: Scalars['Boolean'];
  videoGalleryRequire: Scalars['Boolean'];
};

export type FunctionalityTimeline = {
  __typename?: 'FunctionalityTimeline';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type FunctionalityTimelineInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type ImplementDesign = {
  __typename?: 'ImplementDesign';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type ImplementDesignInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type ImplementFunctionality = {
  __typename?: 'ImplementFunctionality';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type ImplementFunctionalityInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type Layout = {
  __typename?: 'Layout';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type LayoutInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type Map = {
  __typename?: 'Map';
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  required: Scalars['Boolean'];
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type MapInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  required: Scalars['Boolean'];
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlog?: Maybe<Blog>;
  addFunctionality?: Maybe<Functionality>;
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
  updateAlterations?: Maybe<Alterations>;
  updateBlog?: Maybe<Blog>;
  updateClarify?: Maybe<Clarify>;
  updateCustomer?: Maybe<Customer>;
  updateDeploy?: Maybe<Deploy>;
  updateFunctionalityTimeline?: Maybe<FunctionalityTimeline>;
  updateImplementDesign?: Maybe<ImplementDesign>;
  updateImplementFunctionality?: Maybe<ImplementFunctionality>;
  updateLayout?: Maybe<Layout>;
  updateReview?: Maybe<Review>;
  updateTesting?: Maybe<Testing>;
  updateTools?: Maybe<Tools>;
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


export type MutationUpdateAlterationsArgs = {
  input: AlterationsInput;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};


export type MutationUpdateClarifyArgs = {
  input: ClarifyInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateDeployArgs = {
  input: DeployInput;
};


export type MutationUpdateFunctionalityTimelineArgs = {
  input: FunctionalityTimelineInput;
};


export type MutationUpdateImplementDesignArgs = {
  input: ImplementDesignInput;
};


export type MutationUpdateImplementFunctionalityArgs = {
  input: ImplementFunctionalityInput;
};


export type MutationUpdateLayoutArgs = {
  input: LayoutInput;
};


export type MutationUpdateReviewArgs = {
  input: ReviewInput;
};


export type MutationUpdateTestingArgs = {
  input: TestingInput;
};


export type MutationUpdateToolsArgs = {
  input: ToolsInput;
};

export type PhotoGallery = {
  __typename?: 'PhotoGallery';
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  required: Scalars['Boolean'];
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type PhotoGalleryInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['String'];
  required: Scalars['Boolean'];
  startDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type Project = {
  __typename?: 'Project';
  blog?: Maybe<Blog>;
  customerId: Scalars['ID'];
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  map?: Maybe<Map>;
  photoGallery?: Maybe<PhotoGallery>;
  projectName: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Status;
  websiteCategory: WebsiteCategory;
  websiteType: WebsiteType;
};

export type Query = {
  __typename?: 'Query';
  alterations?: Maybe<Alterations>;
  clarify?: Maybe<Clarify>;
  customer?: Maybe<Customer>;
  deploy?: Maybe<Deploy>;
  functionality?: Maybe<Functionality>;
  functionalityTimeline?: Maybe<FunctionalityTimeline>;
  getAllCards: Array<Card>;
  getAllCustomers: Array<Customer>;
  getMaps: Array<Map>;
  getPhotoGalleries: Array<PhotoGallery>;
  getProject?: Maybe<Project>;
  implementDesign?: Maybe<ImplementDesign>;
  implementFunctionality?: Maybe<ImplementFunctionality>;
  layout?: Maybe<Layout>;
  review?: Maybe<Review>;
  testing?: Maybe<Testing>;
  timeline?: Maybe<Timeline>;
  tools?: Maybe<Tools>;
};


export type QueryAlterationsArgs = {
  id: Scalars['ID'];
};


export type QueryClarifyArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryDeployArgs = {
  id: Scalars['ID'];
};


export type QueryFunctionalityArgs = {
  id: Scalars['ID'];
};


export type QueryFunctionalityTimelineArgs = {
  id: Scalars['ID'];
};


export type QueryGetProjectArgs = {
  id: Scalars['ID'];
};


export type QueryImplementDesignArgs = {
  id: Scalars['ID'];
};


export type QueryImplementFunctionalityArgs = {
  id: Scalars['ID'];
};


export type QueryLayoutArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryTestingArgs = {
  id: Scalars['ID'];
};


export type QueryTimelineArgs = {
  id: Scalars['ID'];
};


export type QueryToolsArgs = {
  id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type ReviewInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export enum Status {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type Testing = {
  __typename?: 'Testing';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type TestingInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
};

export type Timeline = {
  __typename?: 'Timeline';
  alterations?: Maybe<Alterations>;
  clarify?: Maybe<Clarify>;
  customerId: Scalars['String'];
  deploy?: Maybe<Deploy>;
  functionalityTimeline?: Maybe<FunctionalityTimeline>;
  id: Scalars['String'];
  implementDesign?: Maybe<ImplementDesign>;
  implementFunctionality?: Maybe<ImplementFunctionality>;
  layout?: Maybe<Layout>;
  review?: Maybe<Review>;
  testing?: Maybe<Testing>;
  tools?: Maybe<Tools>;
};

export type TimelineInput = {
  customerId: Scalars['String'];
  id: Scalars['String'];
};

export type Tools = {
  __typename?: 'Tools';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Status;
  timelineId: Scalars['ID'];
};

export type ToolsInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: InputMaybe<Status>;
  timelineId: Scalars['ID'];
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
  Alterations: ResolverTypeWrapper<AlterationsModel>;
  AlterationsInput: AlterationsInput;
  Blog: ResolverTypeWrapper<BlogModel>;
  BlogInput: BlogInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Card: ResolverTypeWrapper<CardModel>;
  Clarify: ResolverTypeWrapper<ClarifyModel>;
  ClarifyInput: ClarifyInput;
  CreateCustomerInput: CreateCustomerInput;
  Customer: ResolverTypeWrapper<CustomerModel>;
  Deploy: ResolverTypeWrapper<DeployModel>;
  DeployInput: DeployInput;
  Functionality: ResolverTypeWrapper<FunctionalityModel>;
  FunctionalityInput: FunctionalityInput;
  FunctionalityTimeline: ResolverTypeWrapper<FunctionalityTimelineModel>;
  FunctionalityTimelineInput: FunctionalityTimelineInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImplementDesign: ResolverTypeWrapper<ImplementDesignModel>;
  ImplementDesignInput: ImplementDesignInput;
  ImplementFunctionality: ResolverTypeWrapper<ImplementFunctionalityModel>;
  ImplementFunctionalityInput: ImplementFunctionalityInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Layout: ResolverTypeWrapper<LayoutModel>;
  LayoutInput: LayoutInput;
  Map: ResolverTypeWrapper<MapModel>;
  MapInput: MapInput;
  Mutation: ResolverTypeWrapper<{}>;
  PhotoGallery: ResolverTypeWrapper<PhotoGalleryModel>;
  PhotoGalleryInput: PhotoGalleryInput;
  Project: ResolverTypeWrapper<ProjectModel>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<ReviewModel>;
  ReviewInput: ReviewInput;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  Testing: ResolverTypeWrapper<TestingModel>;
  TestingInput: TestingInput;
  Timeline: ResolverTypeWrapper<TimelineModel>;
  TimelineInput: TimelineInput;
  Tools: ResolverTypeWrapper<ToolsModel>;
  ToolsInput: ToolsInput;
  UpdateCustomerInput: UpdateCustomerInput;
  WebsiteCategory: WebsiteCategory;
  WebsiteType: WebsiteType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddProjectInput: AddProjectInput;
  Alterations: AlterationsModel;
  AlterationsInput: AlterationsInput;
  Blog: BlogModel;
  BlogInput: BlogInput;
  Boolean: Scalars['Boolean'];
  Card: CardModel;
  Clarify: ClarifyModel;
  ClarifyInput: ClarifyInput;
  CreateCustomerInput: CreateCustomerInput;
  Customer: CustomerModel;
  Deploy: DeployModel;
  DeployInput: DeployInput;
  Functionality: FunctionalityModel;
  FunctionalityInput: FunctionalityInput;
  FunctionalityTimeline: FunctionalityTimelineModel;
  FunctionalityTimelineInput: FunctionalityTimelineInput;
  ID: Scalars['ID'];
  ImplementDesign: ImplementDesignModel;
  ImplementDesignInput: ImplementDesignInput;
  ImplementFunctionality: ImplementFunctionalityModel;
  ImplementFunctionalityInput: ImplementFunctionalityInput;
  Int: Scalars['Int'];
  Layout: LayoutModel;
  LayoutInput: LayoutInput;
  Map: MapModel;
  MapInput: MapInput;
  Mutation: {};
  PhotoGallery: PhotoGalleryModel;
  PhotoGalleryInput: PhotoGalleryInput;
  Project: ProjectModel;
  Query: {};
  Review: ReviewModel;
  ReviewInput: ReviewInput;
  String: Scalars['String'];
  Testing: TestingModel;
  TestingInput: TestingInput;
  Timeline: TimelineModel;
  TimelineInput: TimelineInput;
  Tools: ToolsModel;
  ToolsInput: ToolsInput;
  UpdateCustomerInput: UpdateCustomerInput;
};

export type AlterationsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Alterations'] = ResolversParentTypes['Alterations']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  commentSection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  projecId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  socialSharing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  customerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClarifyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Clarify'] = ResolversParentTypes['Clarify']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  functionality?: Resolver<Maybe<ResolversTypes['Functionality']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  timeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Deploy'] = ResolversParentTypes['Deploy']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Functionality'] = ResolversParentTypes['Functionality']> = {
  apiRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blogCommentsRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blogPostsRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blogRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  calenderRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatPopupRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contactFormRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customerIdRequire?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  emailMarketingRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mapRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  otherRequire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoGalleryRequire?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productCatalogRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productSearchRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  videoGalleryRequire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionalityTimelineResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FunctionalityTimeline'] = ResolversParentTypes['FunctionalityTimeline']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImplementDesignResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImplementDesign'] = ResolversParentTypes['ImplementDesign']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImplementFunctionalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImplementFunctionality'] = ResolversParentTypes['ImplementFunctionality']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayoutResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Layout'] = ResolversParentTypes['Layout']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Map'] = ResolversParentTypes['Map']> = {
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationAddBlogArgs, 'input'>>;
  addFunctionality?: Resolver<Maybe<ResolversTypes['Functionality']>, ParentType, ContextType, RequireFields<MutationAddFunctionalityArgs, 'input'>>;
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
  updateAlterations?: Resolver<Maybe<ResolversTypes['Alterations']>, ParentType, ContextType, RequireFields<MutationUpdateAlterationsArgs, 'input'>>;
  updateBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationUpdateBlogArgs, 'input'>>;
  updateClarify?: Resolver<Maybe<ResolversTypes['Clarify']>, ParentType, ContextType, RequireFields<MutationUpdateClarifyArgs, 'input'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateDeploy?: Resolver<Maybe<ResolversTypes['Deploy']>, ParentType, ContextType, RequireFields<MutationUpdateDeployArgs, 'input'>>;
  updateFunctionalityTimeline?: Resolver<Maybe<ResolversTypes['FunctionalityTimeline']>, ParentType, ContextType, RequireFields<MutationUpdateFunctionalityTimelineArgs, 'input'>>;
  updateImplementDesign?: Resolver<Maybe<ResolversTypes['ImplementDesign']>, ParentType, ContextType, RequireFields<MutationUpdateImplementDesignArgs, 'input'>>;
  updateImplementFunctionality?: Resolver<Maybe<ResolversTypes['ImplementFunctionality']>, ParentType, ContextType, RequireFields<MutationUpdateImplementFunctionalityArgs, 'input'>>;
  updateLayout?: Resolver<Maybe<ResolversTypes['Layout']>, ParentType, ContextType, RequireFields<MutationUpdateLayoutArgs, 'input'>>;
  updateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'input'>>;
  updateTesting?: Resolver<Maybe<ResolversTypes['Testing']>, ParentType, ContextType, RequireFields<MutationUpdateTestingArgs, 'input'>>;
  updateTools?: Resolver<Maybe<ResolversTypes['Tools']>, ParentType, ContextType, RequireFields<MutationUpdateToolsArgs, 'input'>>;
};

export type PhotoGalleryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PhotoGallery'] = ResolversParentTypes['PhotoGallery']> = {
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  photoGallery?: Resolver<Maybe<ResolversTypes['PhotoGallery']>, ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  websiteCategory?: Resolver<ResolversTypes['WebsiteCategory'], ParentType, ContextType>;
  websiteType?: Resolver<ResolversTypes['WebsiteType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  alterations?: Resolver<Maybe<ResolversTypes['Alterations']>, ParentType, ContextType, RequireFields<QueryAlterationsArgs, 'id'>>;
  clarify?: Resolver<Maybe<ResolversTypes['Clarify']>, ParentType, ContextType, RequireFields<QueryClarifyArgs, 'id'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  deploy?: Resolver<Maybe<ResolversTypes['Deploy']>, ParentType, ContextType, RequireFields<QueryDeployArgs, 'id'>>;
  functionality?: Resolver<Maybe<ResolversTypes['Functionality']>, ParentType, ContextType, RequireFields<QueryFunctionalityArgs, 'id'>>;
  functionalityTimeline?: Resolver<Maybe<ResolversTypes['FunctionalityTimeline']>, ParentType, ContextType, RequireFields<QueryFunctionalityTimelineArgs, 'id'>>;
  getAllCards?: Resolver<Array<ResolversTypes['Card']>, ParentType, ContextType>;
  getAllCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  getMaps?: Resolver<Array<ResolversTypes['Map']>, ParentType, ContextType>;
  getPhotoGalleries?: Resolver<Array<ResolversTypes['PhotoGallery']>, ParentType, ContextType>;
  getProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryGetProjectArgs, 'id'>>;
  implementDesign?: Resolver<Maybe<ResolversTypes['ImplementDesign']>, ParentType, ContextType, RequireFields<QueryImplementDesignArgs, 'id'>>;
  implementFunctionality?: Resolver<Maybe<ResolversTypes['ImplementFunctionality']>, ParentType, ContextType, RequireFields<QueryImplementFunctionalityArgs, 'id'>>;
  layout?: Resolver<Maybe<ResolversTypes['Layout']>, ParentType, ContextType, RequireFields<QueryLayoutArgs, 'id'>>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'id'>>;
  testing?: Resolver<Maybe<ResolversTypes['Testing']>, ParentType, ContextType, RequireFields<QueryTestingArgs, 'id'>>;
  timeline?: Resolver<Maybe<ResolversTypes['Timeline']>, ParentType, ContextType, RequireFields<QueryTimelineArgs, 'id'>>;
  tools?: Resolver<Maybe<ResolversTypes['Tools']>, ParentType, ContextType, RequireFields<QueryToolsArgs, 'id'>>;
};

export type ReviewResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestingResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Testing'] = ResolversParentTypes['Testing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimelineResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']> = {
  alterations?: Resolver<Maybe<ResolversTypes['Alterations']>, ParentType, ContextType>;
  clarify?: Resolver<Maybe<ResolversTypes['Clarify']>, ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deploy?: Resolver<Maybe<ResolversTypes['Deploy']>, ParentType, ContextType>;
  functionalityTimeline?: Resolver<Maybe<ResolversTypes['FunctionalityTimeline']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  implementDesign?: Resolver<Maybe<ResolversTypes['ImplementDesign']>, ParentType, ContextType>;
  implementFunctionality?: Resolver<Maybe<ResolversTypes['ImplementFunctionality']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['Layout']>, ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  testing?: Resolver<Maybe<ResolversTypes['Testing']>, ParentType, ContextType>;
  tools?: Resolver<Maybe<ResolversTypes['Tools']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ToolsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Tools'] = ResolversParentTypes['Tools']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  timelineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Alterations?: AlterationsResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  Clarify?: ClarifyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Deploy?: DeployResolvers<ContextType>;
  Functionality?: FunctionalityResolvers<ContextType>;
  FunctionalityTimeline?: FunctionalityTimelineResolvers<ContextType>;
  ImplementDesign?: ImplementDesignResolvers<ContextType>;
  ImplementFunctionality?: ImplementFunctionalityResolvers<ContextType>;
  Layout?: LayoutResolvers<ContextType>;
  Map?: MapResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PhotoGallery?: PhotoGalleryResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Testing?: TestingResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
  Tools?: ToolsResolvers<ContextType>;
};


export const CardFragmentDoc = gql`
    fragment Card on Card {
  projectName
  status
  image
  customerId
}
    `;
export const AddCustomerFragmentDoc = gql`
    fragment AddCustomer on Customer {
  id
  name
  email
  phone
}
    `;
export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  id
  name
  email
  phone
  timeline {
    id
    customerId
    clarify {
      id
      timelineId
      name
      status
    }
    functionalityTimeline {
      id
      timelineId
      name
      status
    }
    layout {
      id
      timelineId
      name
      status
    }
    tools {
      id
      timelineId
      name
      status
    }
    implementFunctionality {
      id
      timelineId
      name
      status
    }
    implementDesign {
      id
      timelineId
      name
      status
    }
    review {
      id
      timelineId
      name
      status
    }
    alterations {
      id
      timelineId
      name
      status
    }
    testing {
      id
      timelineId
      name
      status
    }
    deploy {
      id
      timelineId
      name
      status
    }
  }
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
      name
      required
      startDate
      endDate
      price
      notes
    }
    photoGallery {
      status
      name
      required
      startDate
      endDate
      price
      notes
    }
    blog {
      status
      name
      required
      startDate
      endDate
      price
      notes
      commentSection
      socialSharing
    }
  }
  functionality {
    customerIdRequire
    calenderRequire
    chatPopupRequire
    contactFormRequire
    emailMarketingRequire
    productCatalogRequire
    productSearchRequire
    videoGalleryRequire
    apiRequire
    otherRequire
    blogRequire
    blogCommentsRequire
    blogPostsRequire
    photoGalleryRequire
    mapRequire
  }
}
    `;
export const FunctionalityFragmentDoc = gql`
    fragment Functionality on Functionality {
  id
  customerIdRequire
  calenderRequire
  chatPopupRequire
  contactFormRequire
  emailMarketingRequire
  photoGalleryRequire
  photoGalleryRequire
  productCatalogRequire
  productSearchRequire
  videoGalleryRequire
  apiRequire
  otherRequire
  mapRequire
  blogRequire
  blogCommentsRequire
  blogPostsRequire
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
export const BlogFragmentDoc = gql`
    fragment Blog on Blog {
  id
  status
  startDate
  endDate
  notes
  required
  price
  commentSection
  socialSharing
}
    `;
export const MapFragmentDoc = gql`
    fragment Map on Map {
  status
  startDate
  endDate
  notes
  required
  price
}
    `;
export const PhotoGalleryFragmentDoc = gql`
    fragment PhotoGallery on PhotoGallery {
  status
  startDate
  endDate
  notes
  required
  price
}
    `;
export const TimelineFragmentDoc = gql`
    fragment Timeline on Timeline {
  id
  customerId
  clarify {
    id
    timelineId
    name
    status
  }
  functionalityTimeline {
    id
    timelineId
    name
    status
  }
  layout {
    id
    timelineId
    name
    status
  }
  tools {
    id
    timelineId
    name
    status
  }
  implementFunctionality {
    id
    timelineId
    name
    status
  }
  implementDesign {
    id
    timelineId
    name
    status
  }
  review {
    id
    timelineId
    name
    status
  }
  alterations {
    id
    timelineId
    name
    status
  }
  testing {
    id
    timelineId
    name
    status
  }
  deploy {
    id
    timelineId
    name
    status
  }
}
    `;
export const AlterationsFragmentDoc = gql`
    fragment Alterations on Alterations {
  id
  timelineId
  name
  status
}
    `;
export const ClarifyFragmentDoc = gql`
    fragment Clarify on Clarify {
  id
  timelineId
  name
  status
}
    `;
export const DeployFragmentDoc = gql`
    fragment Deploy on Deploy {
  id
  timelineId
  name
  status
}
    `;
export const FunctionalityTimelineFragmentDoc = gql`
    fragment FunctionalityTimeline on FunctionalityTimeline {
  id
  timelineId
  name
  status
}
    `;
export const ImplementDesignFragmentDoc = gql`
    fragment ImplementDesign on ImplementDesign {
  id
  timelineId
  name
  status
}
    `;
export const ImplementFunctionalityFragmentDoc = gql`
    fragment ImplementFunctionality on ImplementFunctionality {
  id
  timelineId
  name
  status
}
    `;
export const LayoutFragmentDoc = gql`
    fragment Layout on Layout {
  id
  timelineId
  name
  status
}
    `;
export const ReviewFragmentDoc = gql`
    fragment Review on Review {
  id
  timelineId
  name
  status
}
    `;
export const TestingFragmentDoc = gql`
    fragment Testing on Testing {
  id
  timelineId
  name
  status
}
    `;
export const ToolsFragmentDoc = gql`
    fragment Tools on Tools {
  id
  timelineId
  name
  status
}
    `;
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
export const AddFunctionalityDocument = gql`
    mutation AddFunctionality($input: FunctionalityInput!) {
  addFunctionality(input: $input) {
    id
    customerIdRequire
    calenderRequire
    chatPopupRequire
    contactFormRequire
    emailMarketingRequire
    photoGalleryRequire
    productCatalogRequire
    productSearchRequire
    videoGalleryRequire
    apiRequire
    otherRequire
    mapRequire
    blogRequire
    blogCommentsRequire
    blogPostsRequire
  }
}
    `;
export type AddFunctionalityMutationFn = Apollo.MutationFunction<AddFunctionalityMutation, AddFunctionalityMutationVariables>;

/**
 * __useAddFunctionalityMutation__
 *
 * To run a mutation, you first call `useAddFunctionalityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFunctionalityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFunctionalityMutation, { data, loading, error }] = useAddFunctionalityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddFunctionalityMutation(baseOptions?: Apollo.MutationHookOptions<AddFunctionalityMutation, AddFunctionalityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFunctionalityMutation, AddFunctionalityMutationVariables>(AddFunctionalityDocument, options);
      }
export type AddFunctionalityMutationHookResult = ReturnType<typeof useAddFunctionalityMutation>;
export type AddFunctionalityMutationResult = Apollo.MutationResult<AddFunctionalityMutation>;
export type AddFunctionalityMutationOptions = Apollo.BaseMutationOptions<AddFunctionalityMutation, AddFunctionalityMutationVariables>;
export const FunctionalityDocument = gql`
    query Functionality($id: ID!) {
  functionality(id: $id) {
    ...Functionality
  }
}
    ${FunctionalityFragmentDoc}`;

/**
 * __useFunctionalityQuery__
 *
 * To run a query within a React component, call `useFunctionalityQuery` and pass it any options that fit your needs.
 * When your component renders, `useFunctionalityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFunctionalityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFunctionalityQuery(baseOptions: Apollo.QueryHookOptions<FunctionalityQuery, FunctionalityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FunctionalityQuery, FunctionalityQueryVariables>(FunctionalityDocument, options);
      }
export function useFunctionalityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FunctionalityQuery, FunctionalityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FunctionalityQuery, FunctionalityQueryVariables>(FunctionalityDocument, options);
        }
export type FunctionalityQueryHookResult = ReturnType<typeof useFunctionalityQuery>;
export type FunctionalityLazyQueryHookResult = ReturnType<typeof useFunctionalityLazyQuery>;
export type FunctionalityQueryResult = Apollo.QueryResult<FunctionalityQuery, FunctionalityQueryVariables>;
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
export const AddBlogDocument = gql`
    mutation AddBlog($input: BlogInput!) {
  addBlog(input: $input) {
    ...Blog
  }
}
    ${BlogFragmentDoc}`;
export type AddBlogMutationFn = Apollo.MutationFunction<AddBlogMutation, AddBlogMutationVariables>;

/**
 * __useAddBlogMutation__
 *
 * To run a mutation, you first call `useAddBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlogMutation, { data, loading, error }] = useAddBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBlogMutation(baseOptions?: Apollo.MutationHookOptions<AddBlogMutation, AddBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlogMutation, AddBlogMutationVariables>(AddBlogDocument, options);
      }
export type AddBlogMutationHookResult = ReturnType<typeof useAddBlogMutation>;
export type AddBlogMutationResult = Apollo.MutationResult<AddBlogMutation>;
export type AddBlogMutationOptions = Apollo.BaseMutationOptions<AddBlogMutation, AddBlogMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation UpdateBlog($input: BlogInput!) {
  updateBlog(input: $input) {
    ...Blog
  }
}
    ${BlogFragmentDoc}`;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const AddMapDocument = gql`
    mutation AddMap($input: MapInput!) {
  addMap(input: $input) {
    ...Map
  }
}
    ${MapFragmentDoc}`;
export type AddMapMutationFn = Apollo.MutationFunction<AddMapMutation, AddMapMutationVariables>;

/**
 * __useAddMapMutation__
 *
 * To run a mutation, you first call `useAddMapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMapMutation, { data, loading, error }] = useAddMapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMapMutation(baseOptions?: Apollo.MutationHookOptions<AddMapMutation, AddMapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMapMutation, AddMapMutationVariables>(AddMapDocument, options);
      }
export type AddMapMutationHookResult = ReturnType<typeof useAddMapMutation>;
export type AddMapMutationResult = Apollo.MutationResult<AddMapMutation>;
export type AddMapMutationOptions = Apollo.BaseMutationOptions<AddMapMutation, AddMapMutationVariables>;
export const AddPhotoGalleryDocument = gql`
    mutation AddPhotoGallery($input: PhotoGalleryInput!) {
  addPhotoGallery(input: $input) {
    ...PhotoGallery
  }
}
    ${PhotoGalleryFragmentDoc}`;
export type AddPhotoGalleryMutationFn = Apollo.MutationFunction<AddPhotoGalleryMutation, AddPhotoGalleryMutationVariables>;

/**
 * __useAddPhotoGalleryMutation__
 *
 * To run a mutation, you first call `useAddPhotoGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPhotoGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPhotoGalleryMutation, { data, loading, error }] = useAddPhotoGalleryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPhotoGalleryMutation(baseOptions?: Apollo.MutationHookOptions<AddPhotoGalleryMutation, AddPhotoGalleryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPhotoGalleryMutation, AddPhotoGalleryMutationVariables>(AddPhotoGalleryDocument, options);
      }
export type AddPhotoGalleryMutationHookResult = ReturnType<typeof useAddPhotoGalleryMutation>;
export type AddPhotoGalleryMutationResult = Apollo.MutationResult<AddPhotoGalleryMutation>;
export type AddPhotoGalleryMutationOptions = Apollo.BaseMutationOptions<AddPhotoGalleryMutation, AddPhotoGalleryMutationVariables>;
export const AddTimelineDocument = gql`
    mutation AddTimeline($input: TimelineInput!) {
  addTimeline(input: $input) {
    ...Timeline
  }
}
    ${TimelineFragmentDoc}`;
export type AddTimelineMutationFn = Apollo.MutationFunction<AddTimelineMutation, AddTimelineMutationVariables>;

/**
 * __useAddTimelineMutation__
 *
 * To run a mutation, you first call `useAddTimelineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTimelineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTimelineMutation, { data, loading, error }] = useAddTimelineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTimelineMutation(baseOptions?: Apollo.MutationHookOptions<AddTimelineMutation, AddTimelineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTimelineMutation, AddTimelineMutationVariables>(AddTimelineDocument, options);
      }
export type AddTimelineMutationHookResult = ReturnType<typeof useAddTimelineMutation>;
export type AddTimelineMutationResult = Apollo.MutationResult<AddTimelineMutation>;
export type AddTimelineMutationOptions = Apollo.BaseMutationOptions<AddTimelineMutation, AddTimelineMutationVariables>;
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
export const AlterationsDocument = gql`
    query Alterations($id: ID!) {
  alterations(id: $id) {
    ...Alterations
  }
}
    ${AlterationsFragmentDoc}`;

/**
 * __useAlterationsQuery__
 *
 * To run a query within a React component, call `useAlterationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlterationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlterationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAlterationsQuery(baseOptions: Apollo.QueryHookOptions<AlterationsQuery, AlterationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlterationsQuery, AlterationsQueryVariables>(AlterationsDocument, options);
      }
export function useAlterationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlterationsQuery, AlterationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlterationsQuery, AlterationsQueryVariables>(AlterationsDocument, options);
        }
export type AlterationsQueryHookResult = ReturnType<typeof useAlterationsQuery>;
export type AlterationsLazyQueryHookResult = ReturnType<typeof useAlterationsLazyQuery>;
export type AlterationsQueryResult = Apollo.QueryResult<AlterationsQuery, AlterationsQueryVariables>;
export const UpdateAlterationsDocument = gql`
    mutation UpdateAlterations($input: AlterationsInput!) {
  updateAlterations(input: $input) {
    ...Alterations
  }
}
    ${AlterationsFragmentDoc}`;
export type UpdateAlterationsMutationFn = Apollo.MutationFunction<UpdateAlterationsMutation, UpdateAlterationsMutationVariables>;

/**
 * __useUpdateAlterationsMutation__
 *
 * To run a mutation, you first call `useUpdateAlterationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlterationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlterationsMutation, { data, loading, error }] = useUpdateAlterationsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAlterationsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlterationsMutation, UpdateAlterationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAlterationsMutation, UpdateAlterationsMutationVariables>(UpdateAlterationsDocument, options);
      }
export type UpdateAlterationsMutationHookResult = ReturnType<typeof useUpdateAlterationsMutation>;
export type UpdateAlterationsMutationResult = Apollo.MutationResult<UpdateAlterationsMutation>;
export type UpdateAlterationsMutationOptions = Apollo.BaseMutationOptions<UpdateAlterationsMutation, UpdateAlterationsMutationVariables>;
export const ClarifyDocument = gql`
    query Clarify($id: ID!) {
  clarify(id: $id) {
    ...Clarify
  }
}
    ${ClarifyFragmentDoc}`;

/**
 * __useClarifyQuery__
 *
 * To run a query within a React component, call `useClarifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useClarifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClarifyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClarifyQuery(baseOptions: Apollo.QueryHookOptions<ClarifyQuery, ClarifyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClarifyQuery, ClarifyQueryVariables>(ClarifyDocument, options);
      }
export function useClarifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClarifyQuery, ClarifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClarifyQuery, ClarifyQueryVariables>(ClarifyDocument, options);
        }
export type ClarifyQueryHookResult = ReturnType<typeof useClarifyQuery>;
export type ClarifyLazyQueryHookResult = ReturnType<typeof useClarifyLazyQuery>;
export type ClarifyQueryResult = Apollo.QueryResult<ClarifyQuery, ClarifyQueryVariables>;
export const UpdateClarifyDocument = gql`
    mutation UpdateClarify($input: ClarifyInput!) {
  updateClarify(input: $input) {
    ...Clarify
  }
}
    ${ClarifyFragmentDoc}`;
export type UpdateClarifyMutationFn = Apollo.MutationFunction<UpdateClarifyMutation, UpdateClarifyMutationVariables>;

/**
 * __useUpdateClarifyMutation__
 *
 * To run a mutation, you first call `useUpdateClarifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClarifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClarifyMutation, { data, loading, error }] = useUpdateClarifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClarifyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClarifyMutation, UpdateClarifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClarifyMutation, UpdateClarifyMutationVariables>(UpdateClarifyDocument, options);
      }
export type UpdateClarifyMutationHookResult = ReturnType<typeof useUpdateClarifyMutation>;
export type UpdateClarifyMutationResult = Apollo.MutationResult<UpdateClarifyMutation>;
export type UpdateClarifyMutationOptions = Apollo.BaseMutationOptions<UpdateClarifyMutation, UpdateClarifyMutationVariables>;
export const DeployDocument = gql`
    query Deploy($id: ID!) {
  deploy(id: $id) {
    ...Deploy
  }
}
    ${DeployFragmentDoc}`;

/**
 * __useDeployQuery__
 *
 * To run a query within a React component, call `useDeployQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeployQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeployQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeployQuery(baseOptions: Apollo.QueryHookOptions<DeployQuery, DeployQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeployQuery, DeployQueryVariables>(DeployDocument, options);
      }
export function useDeployLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeployQuery, DeployQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeployQuery, DeployQueryVariables>(DeployDocument, options);
        }
export type DeployQueryHookResult = ReturnType<typeof useDeployQuery>;
export type DeployLazyQueryHookResult = ReturnType<typeof useDeployLazyQuery>;
export type DeployQueryResult = Apollo.QueryResult<DeployQuery, DeployQueryVariables>;
export const UpdateDeployDocument = gql`
    mutation UpdateDeploy($input: DeployInput!) {
  updateDeploy(input: $input) {
    id
    name
    timelineId
    status
  }
}
    `;
export type UpdateDeployMutationFn = Apollo.MutationFunction<UpdateDeployMutation, UpdateDeployMutationVariables>;

/**
 * __useUpdateDeployMutation__
 *
 * To run a mutation, you first call `useUpdateDeployMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeployMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeployMutation, { data, loading, error }] = useUpdateDeployMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeployMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeployMutation, UpdateDeployMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeployMutation, UpdateDeployMutationVariables>(UpdateDeployDocument, options);
      }
export type UpdateDeployMutationHookResult = ReturnType<typeof useUpdateDeployMutation>;
export type UpdateDeployMutationResult = Apollo.MutationResult<UpdateDeployMutation>;
export type UpdateDeployMutationOptions = Apollo.BaseMutationOptions<UpdateDeployMutation, UpdateDeployMutationVariables>;
export const FunctionalityTimelineDocument = gql`
    query FunctionalityTimeline($id: ID!) {
  functionalityTimeline(id: $id) {
    ...FunctionalityTimeline
  }
}
    ${FunctionalityTimelineFragmentDoc}`;

/**
 * __useFunctionalityTimelineQuery__
 *
 * To run a query within a React component, call `useFunctionalityTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useFunctionalityTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFunctionalityTimelineQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFunctionalityTimelineQuery(baseOptions: Apollo.QueryHookOptions<FunctionalityTimelineQuery, FunctionalityTimelineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FunctionalityTimelineQuery, FunctionalityTimelineQueryVariables>(FunctionalityTimelineDocument, options);
      }
export function useFunctionalityTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FunctionalityTimelineQuery, FunctionalityTimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FunctionalityTimelineQuery, FunctionalityTimelineQueryVariables>(FunctionalityTimelineDocument, options);
        }
export type FunctionalityTimelineQueryHookResult = ReturnType<typeof useFunctionalityTimelineQuery>;
export type FunctionalityTimelineLazyQueryHookResult = ReturnType<typeof useFunctionalityTimelineLazyQuery>;
export type FunctionalityTimelineQueryResult = Apollo.QueryResult<FunctionalityTimelineQuery, FunctionalityTimelineQueryVariables>;
export const UpdateFunctionalityTimelineDocument = gql`
    mutation UpdateFunctionalityTimeline($input: FunctionalityTimelineInput!) {
  updateFunctionalityTimeline(input: $input) {
    ...FunctionalityTimeline
  }
}
    ${FunctionalityTimelineFragmentDoc}`;
export type UpdateFunctionalityTimelineMutationFn = Apollo.MutationFunction<UpdateFunctionalityTimelineMutation, UpdateFunctionalityTimelineMutationVariables>;

/**
 * __useUpdateFunctionalityTimelineMutation__
 *
 * To run a mutation, you first call `useUpdateFunctionalityTimelineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFunctionalityTimelineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFunctionalityTimelineMutation, { data, loading, error }] = useUpdateFunctionalityTimelineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFunctionalityTimelineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFunctionalityTimelineMutation, UpdateFunctionalityTimelineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFunctionalityTimelineMutation, UpdateFunctionalityTimelineMutationVariables>(UpdateFunctionalityTimelineDocument, options);
      }
export type UpdateFunctionalityTimelineMutationHookResult = ReturnType<typeof useUpdateFunctionalityTimelineMutation>;
export type UpdateFunctionalityTimelineMutationResult = Apollo.MutationResult<UpdateFunctionalityTimelineMutation>;
export type UpdateFunctionalityTimelineMutationOptions = Apollo.BaseMutationOptions<UpdateFunctionalityTimelineMutation, UpdateFunctionalityTimelineMutationVariables>;
export const ImplementDesignDocument = gql`
    query ImplementDesign($id: ID!) {
  implementDesign(id: $id) {
    ...ImplementDesign
  }
}
    ${ImplementDesignFragmentDoc}`;

/**
 * __useImplementDesignQuery__
 *
 * To run a query within a React component, call `useImplementDesignQuery` and pass it any options that fit your needs.
 * When your component renders, `useImplementDesignQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImplementDesignQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImplementDesignQuery(baseOptions: Apollo.QueryHookOptions<ImplementDesignQuery, ImplementDesignQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImplementDesignQuery, ImplementDesignQueryVariables>(ImplementDesignDocument, options);
      }
export function useImplementDesignLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImplementDesignQuery, ImplementDesignQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImplementDesignQuery, ImplementDesignQueryVariables>(ImplementDesignDocument, options);
        }
export type ImplementDesignQueryHookResult = ReturnType<typeof useImplementDesignQuery>;
export type ImplementDesignLazyQueryHookResult = ReturnType<typeof useImplementDesignLazyQuery>;
export type ImplementDesignQueryResult = Apollo.QueryResult<ImplementDesignQuery, ImplementDesignQueryVariables>;
export const UpdateImplementDesignDocument = gql`
    mutation UpdateImplementDesign($input: ImplementDesignInput!) {
  updateImplementDesign(input: $input) {
    ...ImplementDesign
  }
}
    ${ImplementDesignFragmentDoc}`;
export type UpdateImplementDesignMutationFn = Apollo.MutationFunction<UpdateImplementDesignMutation, UpdateImplementDesignMutationVariables>;

/**
 * __useUpdateImplementDesignMutation__
 *
 * To run a mutation, you first call `useUpdateImplementDesignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImplementDesignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImplementDesignMutation, { data, loading, error }] = useUpdateImplementDesignMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImplementDesignMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImplementDesignMutation, UpdateImplementDesignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImplementDesignMutation, UpdateImplementDesignMutationVariables>(UpdateImplementDesignDocument, options);
      }
export type UpdateImplementDesignMutationHookResult = ReturnType<typeof useUpdateImplementDesignMutation>;
export type UpdateImplementDesignMutationResult = Apollo.MutationResult<UpdateImplementDesignMutation>;
export type UpdateImplementDesignMutationOptions = Apollo.BaseMutationOptions<UpdateImplementDesignMutation, UpdateImplementDesignMutationVariables>;
export const ImplementFunctionalityDocument = gql`
    query ImplementFunctionality($id: ID!) {
  implementFunctionality(id: $id) {
    ...ImplementFunctionality
  }
}
    ${ImplementFunctionalityFragmentDoc}`;

/**
 * __useImplementFunctionalityQuery__
 *
 * To run a query within a React component, call `useImplementFunctionalityQuery` and pass it any options that fit your needs.
 * When your component renders, `useImplementFunctionalityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImplementFunctionalityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImplementFunctionalityQuery(baseOptions: Apollo.QueryHookOptions<ImplementFunctionalityQuery, ImplementFunctionalityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImplementFunctionalityQuery, ImplementFunctionalityQueryVariables>(ImplementFunctionalityDocument, options);
      }
export function useImplementFunctionalityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImplementFunctionalityQuery, ImplementFunctionalityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImplementFunctionalityQuery, ImplementFunctionalityQueryVariables>(ImplementFunctionalityDocument, options);
        }
export type ImplementFunctionalityQueryHookResult = ReturnType<typeof useImplementFunctionalityQuery>;
export type ImplementFunctionalityLazyQueryHookResult = ReturnType<typeof useImplementFunctionalityLazyQuery>;
export type ImplementFunctionalityQueryResult = Apollo.QueryResult<ImplementFunctionalityQuery, ImplementFunctionalityQueryVariables>;
export const UpdateImplementFunctionalityDocument = gql`
    mutation UpdateImplementFunctionality($input: ImplementFunctionalityInput!) {
  updateImplementFunctionality(input: $input) {
    ...ImplementFunctionality
  }
}
    ${ImplementFunctionalityFragmentDoc}`;
export type UpdateImplementFunctionalityMutationFn = Apollo.MutationFunction<UpdateImplementFunctionalityMutation, UpdateImplementFunctionalityMutationVariables>;

/**
 * __useUpdateImplementFunctionalityMutation__
 *
 * To run a mutation, you first call `useUpdateImplementFunctionalityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImplementFunctionalityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImplementFunctionalityMutation, { data, loading, error }] = useUpdateImplementFunctionalityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImplementFunctionalityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImplementFunctionalityMutation, UpdateImplementFunctionalityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImplementFunctionalityMutation, UpdateImplementFunctionalityMutationVariables>(UpdateImplementFunctionalityDocument, options);
      }
export type UpdateImplementFunctionalityMutationHookResult = ReturnType<typeof useUpdateImplementFunctionalityMutation>;
export type UpdateImplementFunctionalityMutationResult = Apollo.MutationResult<UpdateImplementFunctionalityMutation>;
export type UpdateImplementFunctionalityMutationOptions = Apollo.BaseMutationOptions<UpdateImplementFunctionalityMutation, UpdateImplementFunctionalityMutationVariables>;
export const LayoutDocument = gql`
    query Layout($id: ID!) {
  layout(id: $id) {
    ...Layout
  }
}
    ${LayoutFragmentDoc}`;

/**
 * __useLayoutQuery__
 *
 * To run a query within a React component, call `useLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLayoutQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLayoutQuery(baseOptions: Apollo.QueryHookOptions<LayoutQuery, LayoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LayoutQuery, LayoutQueryVariables>(LayoutDocument, options);
      }
export function useLayoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LayoutQuery, LayoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LayoutQuery, LayoutQueryVariables>(LayoutDocument, options);
        }
export type LayoutQueryHookResult = ReturnType<typeof useLayoutQuery>;
export type LayoutLazyQueryHookResult = ReturnType<typeof useLayoutLazyQuery>;
export type LayoutQueryResult = Apollo.QueryResult<LayoutQuery, LayoutQueryVariables>;
export const UpdateLayoutDocument = gql`
    mutation UpdateLayout($input: LayoutInput!) {
  updateLayout(input: $input) {
    ...Layout
  }
}
    ${LayoutFragmentDoc}`;
export type UpdateLayoutMutationFn = Apollo.MutationFunction<UpdateLayoutMutation, UpdateLayoutMutationVariables>;

/**
 * __useUpdateLayoutMutation__
 *
 * To run a mutation, you first call `useUpdateLayoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLayoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLayoutMutation, { data, loading, error }] = useUpdateLayoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLayoutMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLayoutMutation, UpdateLayoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLayoutMutation, UpdateLayoutMutationVariables>(UpdateLayoutDocument, options);
      }
export type UpdateLayoutMutationHookResult = ReturnType<typeof useUpdateLayoutMutation>;
export type UpdateLayoutMutationResult = Apollo.MutationResult<UpdateLayoutMutation>;
export type UpdateLayoutMutationOptions = Apollo.BaseMutationOptions<UpdateLayoutMutation, UpdateLayoutMutationVariables>;
export const ReviewDocument = gql`
    query Review($id: ID!) {
  review(id: $id) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewQuery(baseOptions: Apollo.QueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, options);
      }
export function useReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, options);
        }
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = Apollo.QueryResult<ReviewQuery, ReviewQueryVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($input: ReviewInput!) {
  updateReview(input: $input) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const TestingDocument = gql`
    query Testing($id: ID!) {
  testing(id: $id) {
    ...Testing
  }
}
    ${TestingFragmentDoc}`;

/**
 * __useTestingQuery__
 *
 * To run a query within a React component, call `useTestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTestingQuery(baseOptions: Apollo.QueryHookOptions<TestingQuery, TestingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestingQuery, TestingQueryVariables>(TestingDocument, options);
      }
export function useTestingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestingQuery, TestingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestingQuery, TestingQueryVariables>(TestingDocument, options);
        }
export type TestingQueryHookResult = ReturnType<typeof useTestingQuery>;
export type TestingLazyQueryHookResult = ReturnType<typeof useTestingLazyQuery>;
export type TestingQueryResult = Apollo.QueryResult<TestingQuery, TestingQueryVariables>;
export const UpdateTestingDocument = gql`
    mutation UpdateTesting($input: TestingInput!) {
  updateTesting(input: $input) {
    ...Testing
  }
}
    ${TestingFragmentDoc}`;
export type UpdateTestingMutationFn = Apollo.MutationFunction<UpdateTestingMutation, UpdateTestingMutationVariables>;

/**
 * __useUpdateTestingMutation__
 *
 * To run a mutation, you first call `useUpdateTestingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestingMutation, { data, loading, error }] = useUpdateTestingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTestingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTestingMutation, UpdateTestingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTestingMutation, UpdateTestingMutationVariables>(UpdateTestingDocument, options);
      }
export type UpdateTestingMutationHookResult = ReturnType<typeof useUpdateTestingMutation>;
export type UpdateTestingMutationResult = Apollo.MutationResult<UpdateTestingMutation>;
export type UpdateTestingMutationOptions = Apollo.BaseMutationOptions<UpdateTestingMutation, UpdateTestingMutationVariables>;
export const ToolsDocument = gql`
    query Tools($id: ID!) {
  tools(id: $id) {
    ...Tools
  }
}
    ${ToolsFragmentDoc}`;

/**
 * __useToolsQuery__
 *
 * To run a query within a React component, call `useToolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToolsQuery(baseOptions: Apollo.QueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
      }
export function useToolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
        }
export type ToolsQueryHookResult = ReturnType<typeof useToolsQuery>;
export type ToolsLazyQueryHookResult = ReturnType<typeof useToolsLazyQuery>;
export type ToolsQueryResult = Apollo.QueryResult<ToolsQuery, ToolsQueryVariables>;
export const UpdateToolsDocument = gql`
    mutation UpdateTools($input: ToolsInput!) {
  updateTools(input: $input) {
    ...Tools
  }
}
    ${ToolsFragmentDoc}`;
export type UpdateToolsMutationFn = Apollo.MutationFunction<UpdateToolsMutation, UpdateToolsMutationVariables>;

/**
 * __useUpdateToolsMutation__
 *
 * To run a mutation, you first call `useUpdateToolsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateToolsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateToolsMutation, { data, loading, error }] = useUpdateToolsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateToolsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateToolsMutation, UpdateToolsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateToolsMutation, UpdateToolsMutationVariables>(UpdateToolsDocument, options);
      }
export type UpdateToolsMutationHookResult = ReturnType<typeof useUpdateToolsMutation>;
export type UpdateToolsMutationResult = Apollo.MutationResult<UpdateToolsMutation>;
export type UpdateToolsMutationOptions = Apollo.BaseMutationOptions<UpdateToolsMutation, UpdateToolsMutationVariables>;
export type CardFragment = { __typename?: 'Card', projectName: string, status: string, image?: string | null, customerId?: string | null };

export type GetAllCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCardsQuery = { __typename?: 'Query', getAllCards: Array<{ __typename?: 'Card', projectName: string, status: string, image?: string | null, customerId?: string | null }> };

export type AddCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type AddCustomerMutation = { __typename?: 'Mutation', createCustomer?: { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null } | null };

export type AddCustomerFragment = { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null };

export type CustomerFragment = { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, timeline?: { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null } | null, project?: { __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null, map?: { __typename?: 'Map', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, blog?: { __typename?: 'Blog', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null } | null, functionality?: { __typename?: 'Functionality', customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean, photoGalleryRequire?: boolean | null, mapRequire: boolean } | null };

export type GetAllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCustomersQuery = { __typename?: 'Query', getAllCustomers: Array<{ __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, timeline?: { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null } | null, project?: { __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null, map?: { __typename?: 'Map', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, blog?: { __typename?: 'Blog', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null } | null, functionality?: { __typename?: 'Functionality', customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean, photoGalleryRequire?: boolean | null, mapRequire: boolean } | null }> };

export type CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, timeline?: { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null } | null, project?: { __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null, map?: { __typename?: 'Map', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, photoGallery?: { __typename?: 'PhotoGallery', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null } | null, blog?: { __typename?: 'Blog', status?: Status | null, name?: string | null, required: boolean, startDate?: string | null, endDate?: string | null, price?: number | null, notes?: string | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null } | null, functionality?: { __typename?: 'Functionality', customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean, photoGalleryRequire?: boolean | null, mapRequire: boolean } | null } | null };

export type AddFunctionalityMutationVariables = Exact<{
  input: FunctionalityInput;
}>;


export type AddFunctionalityMutation = { __typename?: 'Mutation', addFunctionality?: { __typename?: 'Functionality', id: string, customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, photoGalleryRequire?: boolean | null, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, mapRequire: boolean, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean } | null };

export type FunctionalityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FunctionalityQuery = { __typename?: 'Query', functionality?: { __typename?: 'Functionality', id: string, customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, photoGalleryRequire?: boolean | null, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, mapRequire: boolean, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean } | null };

export type FunctionalityFragment = { __typename?: 'Functionality', id: string, customerIdRequire: string, calenderRequire: boolean, chatPopupRequire: boolean, contactFormRequire: boolean, emailMarketingRequire: boolean, photoGalleryRequire?: boolean | null, productCatalogRequire: boolean, productSearchRequire: boolean, videoGalleryRequire: boolean, apiRequire: boolean, otherRequire?: string | null, mapRequire: boolean, blogRequire: boolean, blogCommentsRequire: boolean, blogPostsRequire: boolean };

export type AddProjectMutationVariables = Exact<{
  input: AddProjectInput;
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject?: { __typename?: 'Project', id: string, customerId: string, projectName: string, websiteCategory: WebsiteCategory, websiteType: WebsiteType } | null };

export type AddProjectFragment = { __typename?: 'Project', id: string, projectName: string, customerId: string, status: Status, websiteType: WebsiteType, websiteCategory: WebsiteCategory };

export type AddBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type AddBlogMutation = { __typename?: 'Mutation', addBlog?: { __typename?: 'Blog', id?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null };

export type BlogFragment = { __typename?: 'Blog', id?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null, commentSection?: boolean | null, socialSharing?: boolean | null };

export type UpdateBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog?: { __typename?: 'Blog', id?: string | null, status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null, commentSection?: boolean | null, socialSharing?: boolean | null } | null };

export type AddMapMutationVariables = Exact<{
  input: MapInput;
}>;


export type AddMapMutation = { __typename?: 'Mutation', addMap?: { __typename?: 'Map', status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null } | null };

export type MapFragment = { __typename?: 'Map', status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null };

export type AddPhotoGalleryMutationVariables = Exact<{
  input: PhotoGalleryInput;
}>;


export type AddPhotoGalleryMutation = { __typename?: 'Mutation', addPhotoGallery?: { __typename?: 'PhotoGallery', status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null } | null };

export type PhotoGalleryFragment = { __typename?: 'PhotoGallery', status?: Status | null, startDate?: string | null, endDate?: string | null, notes?: string | null, required: boolean, price?: number | null };

export type AddTimelineMutationVariables = Exact<{
  input: TimelineInput;
}>;


export type AddTimelineMutation = { __typename?: 'Mutation', addTimeline?: { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null } | null };

export type TimelineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TimelineQuery = { __typename?: 'Query', timeline?: { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null } | null };

export type TimelineFragment = { __typename?: 'Timeline', id: string, customerId: string, clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null, functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null, layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null, tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null, implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null, implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null, review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null, alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null, testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null, deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null };

export type AlterationsFragment = { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status };

export type AlterationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AlterationsQuery = { __typename?: 'Query', alterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null };

export type UpdateAlterationsMutationVariables = Exact<{
  input: AlterationsInput;
}>;


export type UpdateAlterationsMutation = { __typename?: 'Mutation', updateAlterations?: { __typename?: 'Alterations', id: string, timelineId: string, name: string, status: Status } | null };

export type ClarifyFragment = { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status };

export type ClarifyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ClarifyQuery = { __typename?: 'Query', clarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null };

export type UpdateClarifyMutationVariables = Exact<{
  input: ClarifyInput;
}>;


export type UpdateClarifyMutation = { __typename?: 'Mutation', updateClarify?: { __typename?: 'Clarify', id: string, timelineId: string, name: string, status: Status } | null };

export type DeployFragment = { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status };

export type DeployQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeployQuery = { __typename?: 'Query', deploy?: { __typename?: 'Deploy', id: string, timelineId: string, name: string, status: Status } | null };

export type UpdateDeployMutationVariables = Exact<{
  input: DeployInput;
}>;


export type UpdateDeployMutation = { __typename?: 'Mutation', updateDeploy?: { __typename?: 'Deploy', id: string, name: string, timelineId: string, status: Status } | null };

export type FunctionalityTimelineFragment = { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status };

export type FunctionalityTimelineQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FunctionalityTimelineQuery = { __typename?: 'Query', functionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null };

export type UpdateFunctionalityTimelineMutationVariables = Exact<{
  input: FunctionalityTimelineInput;
}>;


export type UpdateFunctionalityTimelineMutation = { __typename?: 'Mutation', updateFunctionalityTimeline?: { __typename?: 'FunctionalityTimeline', id: string, timelineId: string, name: string, status: Status } | null };

export type ImplementDesignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImplementDesignQuery = { __typename?: 'Query', implementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null };

export type ImplementDesignFragment = { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status };

export type UpdateImplementDesignMutationVariables = Exact<{
  input: ImplementDesignInput;
}>;


export type UpdateImplementDesignMutation = { __typename?: 'Mutation', updateImplementDesign?: { __typename?: 'ImplementDesign', id: string, timelineId: string, name: string, status: Status } | null };

export type ImplementFunctionalityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImplementFunctionalityQuery = { __typename?: 'Query', implementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null };

export type ImplementFunctionalityFragment = { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status };

export type UpdateImplementFunctionalityMutationVariables = Exact<{
  input: ImplementFunctionalityInput;
}>;


export type UpdateImplementFunctionalityMutation = { __typename?: 'Mutation', updateImplementFunctionality?: { __typename?: 'ImplementFunctionality', id: string, timelineId: string, name: string, status: Status } | null };

export type LayoutQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LayoutQuery = { __typename?: 'Query', layout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null };

export type LayoutFragment = { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status };

export type UpdateLayoutMutationVariables = Exact<{
  input: LayoutInput;
}>;


export type UpdateLayoutMutation = { __typename?: 'Mutation', updateLayout?: { __typename?: 'Layout', id: string, timelineId: string, name: string, status: Status } | null };

export type ReviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReviewQuery = { __typename?: 'Query', review?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null };

export type ReviewFragment = { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status };

export type UpdateReviewMutationVariables = Exact<{
  input: ReviewInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview?: { __typename?: 'Review', id: string, timelineId: string, name: string, status: Status } | null };

export type TestingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TestingQuery = { __typename?: 'Query', testing?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null };

export type TestingFragment = { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status };

export type UpdateTestingMutationVariables = Exact<{
  input: TestingInput;
}>;


export type UpdateTestingMutation = { __typename?: 'Mutation', updateTesting?: { __typename?: 'Testing', id: string, timelineId: string, name: string, status: Status } | null };

export type ToolsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToolsQuery = { __typename?: 'Query', tools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null };

export type ToolsFragment = { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status };

export type UpdateToolsMutationVariables = Exact<{
  input: ToolsInput;
}>;


export type UpdateToolsMutation = { __typename?: 'Mutation', updateTools?: { __typename?: 'Tools', id: string, timelineId: string, name: string, status: Status } | null };
