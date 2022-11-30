import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ id, slug, title, subtitle }) => {
  return (
    // navigate by id
    // <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>

    // navigate by slug
    <Link to={`/detail/${slug}`} style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default NewsItem;
