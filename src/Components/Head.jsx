import React from "react";
import { useEffect } from "react";

const Head = ({ title, descripiton }) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", descripiton);
  }, [title, descripiton]);
  return <></>;
};

export default Head;
