import React from "react";
import { FormattedMessage } from "react-intl";
import Layout from "../../components/Layout";
import Notfound from "../../components/Notfound";
import messages from "./messages";

export default function NotFoundPage() {
  return (
    <Layout>
      <Notfound title={<FormattedMessage {...messages.header} />} />
    </Layout>
  );
}
