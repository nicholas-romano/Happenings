import React from "react";

const styles = {
  foot: {
    backgroundColor: "rgba(220, 171, 107, 1)",
  },
};

const Footer = () => {
  return (
    <footer className="stickyFooter footer p-3" style={styles.foot}>
      <div className="content has-text-centered">
        <p>
          <strong>Happenings</strong> by Eddie, Jason, Nick, Richard, and Tevin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
