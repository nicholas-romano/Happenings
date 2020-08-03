import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Review from "../../components/Review";
import LocationSearch from "../../components/LocationSearch/locSearch";
import NewMap from "../../components/NewMap/newMap";
import QuickReview from "../../components/QuickReview/QuickReview";

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
  const [reviewState, setReviewState] = useState([]);
  return (
    <>
      <div>{/* <Nav /> */}</div>
      <div>
        <Header />
      </div>
      <div className="colums">
        <div className="column">
          <LocationSearch />
        </div>
      </div>

      <div className="columns is-dekstop">
        <div className="column is-two-thirds" style={styles.twothirds}>
          <NewMap reviewData={reviewState} />
        </div>
        <div className="column is-one-third" style={styles.onethird}>
          <Review setReviewState={setReviewState} />
          <QuickReview />
        </div>
      </div>
      <div className="columns is-desktop" style={styles.full}>
        <div className="column ">{/* <Review /> */}</div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
