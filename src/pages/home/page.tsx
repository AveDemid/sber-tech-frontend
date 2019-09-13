import React, { useEffect } from "react";
import { request } from "@lib/request";

export const HomePage = () => {
  useEffect(() => {
    request("GET", "https://api.github.com", "/repos/facebook/react").then(
      response => console.log(response)
    );
  }, []);

  return <h1>Hello from Home page!</h1>;
};
