import { GraphQLResolveInfo } from 'graphql';
import { Customer as CustomerModel, Project as ProjectModel, Functionality as FunctionalityModel } from '@prisma/client';
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
  status: Status;
  websiteCategory: WebsiteCategory;
  websiteType: WebsiteType;
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
  functionality?: Maybe<Array<Maybe<Functionality>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<Project>>>;
};

export type Functionality = {
  __typename?: 'Functionality';
  api: Scalars['Boolean'];
  blog: Scalars['Boolean'];
  blogComments: Scalars['Boolean'];
  blogPosts: Scalars['Boolean'];
  calender: Scalars['Boolean'];
  chatPopup: Scalars['Boolean'];
  contactForm: Scalars['Boolean'];
  customerId: Scalars['ID'];
  emailMarketing: Scalars['Boolean'];
  id: Scalars['ID'];
  map: Scalars['Boolean'];
  other?: Maybe<Scalars['String']>;
  photoGallery: Scalars['Boolean'];
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
  map: Scalars['Boolean'];
  other?: InputMaybe<Scalars['String']>;
  photoGallery: Scalars['Boolean'];
  productCatalog: Scalars['Boolean'];
  productSearch: Scalars['Boolean'];
  videoGallery: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFunctionality?: Maybe<Customer>;
  addProject?: Maybe<Customer>;
  createCustomer?: Maybe<Customer>;
  deleteCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
};


export type MutationAddFunctionalityArgs = {
  input: FunctionalityInput;
};


export type MutationAddProjectArgs = {
  input: AddProjectInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};

export type Project = {
  __typename?: 'Project';
  customerId: Scalars['ID'];
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  projectName: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Status;
  websiteCategory: WebsiteCategory;
  websiteType: WebsiteType;
};

export type Query = {
  __typename?: 'Query';
  getAllCustomers: Array<Customer>;
  getCustomer?: Maybe<Customer>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['ID'];
};

export enum Status {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateCustomerInput: CreateCustomerInput;
  Customer: ResolverTypeWrapper<CustomerModel>;
  Functionality: ResolverTypeWrapper<FunctionalityModel>;
  FunctionalityInput: FunctionalityInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<ProjectModel>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCustomerInput: UpdateCustomerInput;
  WebsiteCategory: WebsiteCategory;
  WebsiteType: WebsiteType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddProjectInput: AddProjectInput;
  Boolean: Scalars['Boolean'];
  CreateCustomerInput: CreateCustomerInput;
  Customer: CustomerModel;
  Functionality: FunctionalityModel;
  FunctionalityInput: FunctionalityInput;
  ID: Scalars['ID'];
  Mutation: {};
  Project: ProjectModel;
  Query: {};
  String: Scalars['String'];
  UpdateCustomerInput: UpdateCustomerInput;
};

export type CustomerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  functionality?: Resolver<Maybe<Array<Maybe<ResolversTypes['Functionality']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionalityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Functionality'] = ResolversParentTypes['Functionality']> = {
  api?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blogComments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blogPosts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  calender?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chatPopup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contactForm?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  emailMarketing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  map?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  other?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoGallery?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productCatalog?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productSearch?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  videoGallery?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addFunctionality?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationAddFunctionalityArgs, 'input'>>;
  addProject?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'input'>>;
  createCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'id'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
};

export type ProjectResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  websiteCategory?: Resolver<ResolversTypes['WebsiteCategory'], ParentType, ContextType>;
  websiteType?: Resolver<ResolversTypes['WebsiteType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  getCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryGetCustomerArgs, 'id'>>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Customer?: CustomerResolvers<ContextType>;
  Functionality?: FunctionalityResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


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
  }
  functionality {
    customerId
    calender
    chatPopup
    contactForm
    emailMarketing
    map
    photoGallery
    productCatalog
    productSearch
    videoGallery
    api
    blog
    blogComments
    blogPosts
    other
  }
}
    `;
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
export const GetCustomerDocument = gql`
    query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export type CustomerFragment = { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: Array<{ __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null } | null> | null, functionality?: Array<{ __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, map: boolean, photoGallery: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, blog: boolean, blogComments: boolean, blogPosts: boolean, other?: string | null } | null> | null };

export type GetAllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCustomersQuery = { __typename?: 'Query', getAllCustomers: Array<{ __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: Array<{ __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null } | null> | null, functionality?: Array<{ __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, map: boolean, photoGallery: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, blog: boolean, blogComments: boolean, blogPosts: boolean, other?: string | null } | null> | null }> };

export type GetCustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCustomerQuery = { __typename?: 'Query', getCustomer?: { __typename?: 'Customer', id: string, name?: string | null, email?: string | null, phone?: string | null, project?: Array<{ __typename?: 'Project', projectName: string, status: Status, startDate?: string | null, endDate?: string | null, websiteType: WebsiteType, websiteCategory: WebsiteCategory, image?: string | null } | null> | null, functionality?: Array<{ __typename?: 'Functionality', customerId: string, calender: boolean, chatPopup: boolean, contactForm: boolean, emailMarketing: boolean, map: boolean, photoGallery: boolean, productCatalog: boolean, productSearch: boolean, videoGallery: boolean, api: boolean, blog: boolean, blogComments: boolean, blogPosts: boolean, other?: string | null } | null> | null } | null };