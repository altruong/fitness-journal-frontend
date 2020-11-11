import React from 'react';
import NextLink from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/core';

// Allow this component to accept all properties of "a" tag
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ChakraLinkProps & {
    to: string;
    // we can add more properties we need from next/link in the future
  };

export const Link = React.forwardRef((props: LinkProps, ref: any) => {
  const { to, children, ...rest } = props;
  console.log(props);
  return (
    <div>
      <NextLink href={to}>
        <ChakraLink {...rest} ref={ref}>
          {children}
        </ChakraLink>
      </NextLink>
    </div>
  );
});
