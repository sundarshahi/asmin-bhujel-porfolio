import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItem } from 'Atoms/MenuItem';

import { FcHome, FcAbout, FcBusinessContact } from 'react-icons/fc';

const variants = {
  open: {
    pointerEvents: 'auto',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    pointerEvents: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: () => void }) => (
  <Menu variants={variants}>
    {itemIds.map((item) => (
      <MenuItem item={item} key={item.id} toggle={toggle} />
    ))}
  </Menu>
);

const itemIds = [
  {
    id: 0,
    title: 'Home',
    icon: <FcHome />,
    url: '/',
  },
  {
    id: 1,
    title: 'About',
    icon: <FcAbout />,
    url: '/about',
  },
  {
    id: 2,
    title: 'Contact',
    icon: <FcBusinessContact />,
    url: '/contact',
  },
];

const Menu = styled(motion.ul).attrs(() => ({
  initial: 'closed',
  variants,
}))`
  margin: 0;
  padding: 0;
  padding: 30px;
  position: absolute;
  top: 100px;
  width: 60px;
`;
