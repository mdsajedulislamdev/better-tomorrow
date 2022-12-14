import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ background: match ? "#2d3630" : "none", color: match ? "#ffffff" : "#000000" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
