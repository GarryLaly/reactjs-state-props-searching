import React from "react";

const NewsItem = ({ title, subtitle }) => {
  return (
    <div
      style={{
        backgroundColor: "#666",
        padding: 8,
        marginBottom: 10,
      }}
    >
      <div style={{ color: "white" }}>{title}</div>
      <div style={{ fontSize: 12, color: "white" }}>{subtitle}</div>
    </div>
  );
};

export default NewsItem;
