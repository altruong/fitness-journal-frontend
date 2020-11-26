import { Drawer } from 'components/Drawer/Drawer';
import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';

interface programProps {}

const program: React.FC<programProps> = ({}) => {
  return (
    <>
      <Drawer />
      <Navbar />
    </>
  );
};

export default program;
