import React from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/core';

// Allow this component to accept all properties of "a" tag
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  // we can add more properties we need from next/link in the future
}

// Forward Refs, is useful
export default React.forwardRef(
  ({ to, children, ...props }: LinkProps, ref: any) => {
    console.log({ ...props });
    return (
      <div>
        <NextLink href={to}>
          <Link {...props} ref={ref}>
            {children}
          </Link>
        </NextLink>
      </div>
    );
  }
);
