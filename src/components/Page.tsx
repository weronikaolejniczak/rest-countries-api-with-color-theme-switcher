import { ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from './Header';

const Content = styled.main`
  padding: 6rem;
`;

type PagePropsType = {
  children: ReactNode;
};

export const Page = ({ children }: PagePropsType) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);
