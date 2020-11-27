import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  // Passing some initial apollo state to our user function
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    // ApolloProvider requires an instnace of the Provider
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
