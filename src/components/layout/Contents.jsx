import React from "react";

const Contents = ({ children }) => {
  return (
    <main id="main" role="main" style={{ backgroundColor: "#1c2033" }}>
      {children}
    </main>
  );
};

export default Contents;
