import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const StyledDiv = styled.div`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledDiv>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </StyledDiv>
  </Layout>
);

export default NotFoundPage;
