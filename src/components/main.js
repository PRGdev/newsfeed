import React, { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Articles from "./articles";
import { SOURCES_URL, FEEDS_URL } from "../config";

import axios from "axios";

function Main() {
  const [sources, setSources] = useState([]);
  const [articles, setArticles] = useState([]);
  const [source, setSource] = useState([]);


  const fetchSource = id => {
    setSource(id);
    setArticles([]);
    axios.get(`${FEEDS_URL}?source=${id}`).then(res => {
      setArticles(res.data);
    });
  };
  useEffect(() => {
    axios.get(SOURCES_URL).then(res => {
      setSources(res.data);
    });
    fetchSource("5718e53e7a84fb1901e05928");
  }, []);
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-500 p-3">
        <Sidebar source={source} sources={sources} fetchSource={fetchSource} />
      </div>
      <div className="w-3/4 bg-gray-400 p-3">
        <Articles articles={articles} />
      </div>
    </div>
  );
}

export default Main;