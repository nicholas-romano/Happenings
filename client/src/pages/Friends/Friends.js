// EXS 27th July
// Friends list page, without knowing the full scope of this
// this page will show our friends list and maynbe their recent feed?

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FriendsList from "../../components/FriendsList/FriendsList"
import "./friends.css";

const Friends = () => {
  return (
    <>
      <Header />
      <h1>Our friends stuff</h1>
      <FriendsList />
      <Footer />
    </>
  );
};

export default Friends;
