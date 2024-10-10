import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#001f",
        zIndex: "1000",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};
export default Loader;
