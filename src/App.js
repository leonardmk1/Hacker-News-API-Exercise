import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="row">
        <div className="col-8">
          <Search />
        </div>
        <div className="col-4">
          <SearchHistory />
        </div>
      </div>
    </div>
  );
}

export default App;
