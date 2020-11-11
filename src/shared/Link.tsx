import React from 'react';
import NextLink from 'next/link';
import { Link, ResponsiveValue } from '@chakra-ui/core';

// Allow this component to accept all properties of "a" tag
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ResponsiveValue<any> & {
    to: string;
    // we can add more properties we need from next/link in the future
  };

export default React.forwardRef((props: LinkProps, ref: any) => {
  const { to, children, ...rest } = props;
  console.log(props);
  return (
    <div>
      <NextLink href={to}>
        <Link {...rest} ref={ref}>
          {children}
        </Link>
      </NextLink>
    </div>
  );
});
