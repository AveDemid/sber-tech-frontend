import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainTemplateProps {
  header?: JSX.Element;
  children?: ReactNode;
}

export const MainTemplate = ({ header, children }: MainTemplateProps) => (
  <Layout>
    {header && <Header>{header}</Header>}
    {children && <Content>{children}</Content>}
  </Layout>
);

const Layout = styled("div")``;
const Header = styled("div")``;
const Content = styled("div")`
  margin: 3.2rem 0;
`;
