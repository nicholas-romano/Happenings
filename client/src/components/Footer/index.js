import React from "react";

const styles = {
  foot: {
    backgroundColor: "rgba(220, 171, 107, 1)",
  },
};

const Footer = () => {
  return (
    <footer className="footer p-3" style={styles.foot}>
      <div className="content has-text-centered">
        <p>
          <strong>Happenings App</strong> by: Nicholas Romano, Eddie Saunders, Jason Vernot, Richard Kessler, and Tevin Ward.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
