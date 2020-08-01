import React from "react";

const UserLocationContext = React.createContext({
  coords: {
    lat: 0,
    long: 0,
  },
});

export default UserLocationContext;
