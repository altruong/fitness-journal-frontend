import React from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/core';

// Allow this component to accept all properties of "a" tag
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  // we can add more properties we need from next/link in the future
}

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
