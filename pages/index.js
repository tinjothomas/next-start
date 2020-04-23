import React, { useEffect } from "react";
import axios from "axios";

export default function index() {
  return (
    <div className="container">
      <h1>Wlecome to Next</h1>
      <style jsx>
        {`
          .container {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
