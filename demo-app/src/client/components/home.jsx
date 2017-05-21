import React from "react";
import { connect } from "react-redux";

import { YourAwesomeComponent, RenderFriend, GuestList } from "@walmart/wmreact-spinner";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <RenderFriend
          friend={
            {name: "John", img: "//goo.gl/dL5MXT"}
          }
        />
        <GuestList
          invitees={[
          {name: 'John Smith', invited: false},
          {name: 'Jane Smith', invited: false},
          {name: 'Dan Jones', invited: false}
          ]}
          toggleGuest={(invitee) => alert(invitee.name)}
        />
        </div>
    );
  }
}

export default connect((state) => state)(Home);
