import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div
        style={{ height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "center" }}
        className="container"
      >
        {children}
      </div>
    </div>
  );
}

export default Jumbotron;
