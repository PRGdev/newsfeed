import React from "react";

function Articles({ articles }) {
  if (!articles.length) return <p>Loading...</p>

  return (
    <>
      {articles.map((a, k) => {
        return (
          <p className="mb-4" key={k}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
          </p>
        );
      })}
    </>
  );
}

export default Articles;