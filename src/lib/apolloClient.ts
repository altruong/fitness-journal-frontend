import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { useMemo } from 'react';

//  Normalized cache is the general cache used in Apollo
let apolloClient: ApolloClient<NormalizedCacheObject>;

/*
const createIsmorphicLink = () => {
  // Server side
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const { schema } = require('./schema');
    return new SchemaLink({ schema });
  } else {
    // Client side
    const { HttpLink } = require('@apollo/client/link/http');
    return new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL as string,
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    });
  }
};
*/

const createApolloClient = () => {
  // Return a new instance of the apollo client
  return new ApolloClient({
    // Check if we are running in SSR
    // We do that by checking if there is a window object avaliable
    ssrMode: typeof window === 'undefined',
    /*
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: 'include',
    */

    // Link tells apollo how to execute grahql request
    // e.g. httprequest or localSchema
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL as string, // Server URL (must be absolute)
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
    }),
    // cache will be an instance of InMemoryCache
    // i.e. where it stores the results of the queries
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(), // TODO: add query fields
          },
        },
      },
    }),
  });
};

export const initializeApollo = (initialState = null) => {
  // ?? is nullish coaleasing operator (returns RHS operand if LHS operand is null/undefined)
  // If we already have an instance in apolloClient, then initialise to apolloClient
  // Otherwise, go to the right side and create a new instance of the apolloClient
  // This is to determine if we are running on the client or server side rendering/generation
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  // So two people's server request's cache never conflict
  if (typeof window === 'undefined') {
    return _apolloClient;
  } else {
    // Create Apollo Client once in the client
    return apolloClient ?? _apolloClient;
  }
};

// Return a copy of the apollo client
export const useApollo = (initialState: any) => {
  // When the initial data has changed, call initializeApollo,
  // otherwise use a memozied state
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
