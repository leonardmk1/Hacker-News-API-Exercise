import React, { useState } from "react";
import "./Search.css";
import { queryResults } from "../../API/queriedAction";
import { connect, useDispatch } from "react-redux";
import { rememberSearch } from "../../redux/actions/searchAction";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    queryResults(searchTerm).then((response) => {
      setResults(response.data.hits);
      dispatch(rememberSearch(searchTerm));
      console.log(results);
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="search_box">
        <form onSubmit={handleSubmit}>
          <input
            className="search_text"
            type="search"
            placeholder="Search..."
            onChange={handleChange}
          ></input>
          <input className="search_button" type="submit" value="Search"></input>
        </form>
      </div>
      <div>
        <h3>Search Results:</h3>
        {results.map((article) => {
          return (
            <div className="search_results">
              <a href={article.url} target="blank">
                <ul className="search_results_item">
                  <li>{article.title}</li>
                  <li>by:</li>
                  <li>{article.author}</li>
                </ul>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(null, { rememberSearch })(Search);
