// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CarInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  editCar?: Maybe<Scalars['String']['output']>;
  editUser?: Maybe<Scalars['String']['output']>;
  helloMutation?: Maybe<Scalars['String']['output']>;
};


export type MutationEditCarArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationEditUserArgs = {
  user?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  getHelloQuery?: Maybe<Scalars['String']['output']>;
  helloCar?: Maybe<Scalars['String']['output']>;
  helloUser?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetHelloQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQueryQuery = { __typename?: 'Query', getHelloQuery?: string | null };


export const GetHelloQueryDocument = gql`
    query GetHelloQuery {
  getHelloQuery
}
    `;
export type GetHelloQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetHelloQueryQuery, GetHelloQueryQueryVariables>
    } & TChildProps;
export function withGetHelloQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetHelloQueryQuery,
  GetHelloQueryQueryVariables,
  GetHelloQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetHelloQueryQuery, GetHelloQueryQueryVariables, GetHelloQueryProps<TChildProps, TDataName>>(GetHelloQueryDocument, {
      alias: 'getHelloQuery',
      ...operationOptions
    });
};

/**
 * __useGetHelloQueryQuery__
 *
 * To run a query within a React component, call `useGetHelloQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHelloQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHelloQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHelloQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetHelloQueryQuery, GetHelloQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHelloQueryQuery, GetHelloQueryQueryVariables>(GetHelloQueryDocument, options);
      }
export function useGetHelloQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHelloQueryQuery, GetHelloQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHelloQueryQuery, GetHelloQueryQueryVariables>(GetHelloQueryDocument, options);
        }
export function useGetHelloQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetHelloQueryQuery, GetHelloQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHelloQueryQuery, GetHelloQueryQueryVariables>(GetHelloQueryDocument, options);
        }
export type GetHelloQueryQueryHookResult = ReturnType<typeof useGetHelloQueryQuery>;
export type GetHelloQueryLazyQueryHookResult = ReturnType<typeof useGetHelloQueryLazyQuery>;
export type GetHelloQuerySuspenseQueryHookResult = ReturnType<typeof useGetHelloQuerySuspenseQuery>;
export type GetHelloQueryQueryResult = Apollo.QueryResult<GetHelloQueryQuery, GetHelloQueryQueryVariables>;