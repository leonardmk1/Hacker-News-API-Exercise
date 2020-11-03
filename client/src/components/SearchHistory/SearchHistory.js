import React from "react";
import "./SearchHistory.css";
import { useSelector } from "react-redux";

export default function SearchHistory() {
  // allows to grab the part of the state I want to use
  const queries = useSelector((state) => state.queries);

  return (
    <div className="search_history">
      <h3 className="search_history_title">Recent Searches:</h3>
      <div className="searched_item">
        {queries.map((term) => (
          <div>{term}</div>
        ))}
      </div>
    </div>
  );
}
