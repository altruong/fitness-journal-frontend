import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  useApolloClient,
} from '@apollo/client';
import { useMemo } from 'react';
//  Normalized cache is the general cache used in Apollo
let apolloClient: ApolloClient<NormalizedCacheObject>;

const createIsmorphicLink = () => {
  // Server side
  if (typeof window === 'undefined') {
  } else {
    // Client side
    const { HttpLink } = require('@apollo/client/link/http');
    return new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL as string });
  }
};

const createApolloClient = () => {
  // Return a new instance of the apollo client
  return new ApolloClient({
    // Check if we are running in SSR
    // We do that by checking if there is a window object avaliable
    ssrMode: typeof window === 'undefined',
    // Link tells apollo how to execute grahql request
    // e.g. httpreuest or localSchema

    link: createIsmorphicLink(), //Isomorphic meaning it will be running on both the client & server
    // cache will be an instance of InMemoryCache
    // i.e. where it stores the results of the queries
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null) => {
  // ?? is nullish coaleasing operator (returns RHS operand if LHS operand is null/undefined)
  // If we already have an instance in apolloClient, then initialise to apolloClient
  // Otherwise, go to the right side and create a new instance of the apolloClient
  // This is to determine if we are running on the client or server side rendering/generation
  const _apolloClient = apolloClient ?? createApolloClient();
};

// Return a copy of the apollo client
export const useApollo = (initialState) => {
  // When the initial data has changed, call initializeApollo,
  // otherwise use a memozied state
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
