import React from 'react';

class Invite extends React.Component {
 componentDidMount(){
     window.location.href = "https://discord.com/api/oauth2/authorize?client_id=736915194772586598&permissions=8&scope=bot%20applications.commands";
  }

  render() {
    return null;
  }
}

export default Invite;
