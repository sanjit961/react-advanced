import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import dataFile from "../data.json";

function getLen(arr) {
  console.log("I am calcalating...");
  let count = 0;
  for (let i = 0; i < arr.length; i++) count++;
  return count;
}

function Contact(props) {
  // const { phone, name } = useContext(AppContext);

  const totalEntries = useMemo(() => getLen(dataFile), []);

  const handleOnWindowLoad = useCallback(() => {
    console.log("loaded...");
  });

  useEffect(() => {
    window.addEventListener("load", handleOnWindowLoad);

    return () => {
      window.removeEventListener;
    };
  }, [handleOnWindowLoad]);

  // const totalEntries = getLen(dataFile);

  // useEffect(() => {
  //   console.log("dataFile", dataFile);
  // }, []);

  return (
    <div>
      {/* <h2>Contact - {props.count}</h2> */}
      <h1>Total - {totalEntries || 0}</h1>
      {dataFile.map((item, index) => {
        return (
          <div
            style={{ border: "1px solid red", padding: "4px", margin: "10px" }}
          >
            <h2>Id - {index + 1}</h2>
            <h2> Name - {item.name}</h2>
            <h2> Email - {item.email}</h2>
            <h2> Mobile - {item.mobile}</h2>
            <h2> Address - {item.addres}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
