import React from "react";
import { FormattedMessage } from "react-intl";
import Layout from "../../components/Layout";
import ComingSoon from "../../components/comingsoon";
import messages from "./messages";

export default function ComingSoonPage() {
  return <ComingSoon title={<FormattedMessage {...messages.header} />} />;
}
