import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Review from "../../components/Review";
import LocationSearch from "../../components/LocationSearch/locSearch";
import NewMap from "../../components/NewMap/newMap";

const styles = {
  twothirds: {
    paddingBottom: 10,
    backgroundColor: "rgba(183, 209, 218, 1)",
  },
  onethird: {
    backgroundColor: "rgba(183, 209, 218, 1)",
  },
  full: {
    backgroundColor: "rgba(42, 45, 52, 1)",
  },
};

function Dashboard(props) {
  
  const [reviewsData, setReviewsData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
  });

  return (
    <>
    <Header />
    <div className="container-fluid">
        <div className="colums">
          <div className="column">
            <LocationSearch />
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-two-thirds" style={styles.twothirds} friends={friends}>
            <NewMap reviewsData={reviewsData}  user={user} setUser={setUser} setReviewsData={setReviewsData} friends={friends} />
          </div>
          <div className="column is-one-third" style={styles.onethird}>
            <Review reviewsData={reviewsData} setReviewsData={setReviewsData} user={user} setUser={setUser} friends={friends} setFriends={setFriends}  />
          </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Dashboard;
