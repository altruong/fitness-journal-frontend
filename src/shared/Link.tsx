import React from 'react';
import NextLink from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

// Allow this component to accept all properties of "a" tag
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ChakraLinkProps & {
    to: string | { href: string; as: string };
    // we can add more properties we need from next/link in the future
  };

export const Link = React.forwardRef((props: LinkProps, ref: any) => {
  const { to, children, ...rest } = props;

  let hrefArgs = null;
  if (typeof to === 'string') {
    // Normal link
    hrefArgs = { href: to };
  } else {
    // Dynamic next link
    // Requires href and as (defined in utils/path)
    hrefArgs = { href: to.href, as: to.as };
  }

  return (
    <div>
      <NextLink {...hrefArgs}>
        <ChakraLink {...rest} ref={ref}>
          {children}
        </ChakraLink>
      </NextLink>
    </div>
  );

  // Dynamic next link
  // return (
  //   <NextLink href={to.href} as={to.as}>
  //     <ChakraLink {...rest} ref={ref}>
  //       {children}
  //     </ChakraLink>
  //   </NextLink>
  // );
});
