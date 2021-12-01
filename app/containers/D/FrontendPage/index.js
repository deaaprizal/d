import React from "react";
import Frontend from "../../../components/Drive-D/Frontend";
import Layout from "../../../components/Layout";
import ComingSoon from "../../ComingSoonPage/Loadable"
export default function FrontendPage() {
  return (
    <Layout>
      {/* untuk test redux by redux-saga uncomment <Frontend /> */}
      {/* <Frontend /> */}
      <ComingSoon />
    </Layout>
  );
}
