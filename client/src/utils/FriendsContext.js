import React from "react";

const FriendsContext = React.createContext({
    thisUser: "",
    actionButton: "",
    addButtonDisabled: false,
    handleActionButton: () => {}
  });
  
export default FriendsContext;