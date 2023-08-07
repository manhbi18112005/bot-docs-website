import React from 'react';

class Invite extends React.Component {
 componentDidMount(){
     window.location.href = "https://discord.com/oauth2/authorize?client_id=736915194772586598&scope=bot+applications.commands+applications.commands.permissions.update&permissions=2080374975";
  }

  render() {
    return null;
  }
}

export default Invite;