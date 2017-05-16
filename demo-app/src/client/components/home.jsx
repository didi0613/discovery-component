import React from "react";
import { connect } from "react-redux";

import { Spinner } from "@walmart/wmreact-spinner";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Some content in same parent div as Spinner...</p>
        <Spinner overlay="CONTAINER" children={<div>I'm loading...</div>} />
      </div>
    );
  }
}

export default connect((state) => state)(Home);
