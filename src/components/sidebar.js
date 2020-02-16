import React from "react";

function Sidebar({ sources, fetchSource, source }) {
  if (!sources.length) return <p>Loading...</p>

  return (
    <>
      {sources.map((s, k) => {
        if (s.contentType!=="news") return null;
        return (
          <p
          key={k}
            className="mb-3"
style={{background: s.id===source ? "#ccc": "transparent"}}
            onClick={() => {
              fetchSource(s.id);
            }}
          >
            {s.name}
          </p>
        );      
      })}
    </>
  );
}

export default Sidebar;