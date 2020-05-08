import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function CVPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CV</title>
      </Helmet>
      <p>CV</p>
    </Layout>
  );
}

export default CVPage;
