import React from "react";

import Style from "styled-components";

const CONTAINER = Style.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin: 50px;
`;

const FORMDIV = Style.div`
   border-radius: 6px;
   height: auto;
   width: auto;
   padding: 10px;
   box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.425),
      3px 4px 3px 0px rgba(88, 88, 88, 0.425);
   `;
const CUSTOMINPUT = Style.input`
    height: 35px;
    border: 1px solid #417dc1;
    border-radius: 8px;
`;
const ADDBUTTON = Style.button`
height: 35px;
width: 100%;
border: 1px solid #417dc1;
border-radius: 8px;
color: #417dc1
`;
const SELECT = Style.select`
height: 35px;
width: 100%;
border: 1px solid #417dc1;
border-radius: 8px;
color: #417dc1
`;
const CODECONTAINER = Style.div`
    display: flex;
    height: 25px;
    border: 1px solid #417dc1;
    border-Radius: 8px;
    margin: 20px;
    justify-content: center;
`;
const PARA = Style.p`
    color: #417dc1;
    margin: auto;
`;
const PARA1 = Style.p`
    color: #b22222;
    margin: auto;
`;
export {
  CONTAINER,
  FORMDIV,
  CUSTOMINPUT,
  ADDBUTTON,
  SELECT,
  CODECONTAINER,
  PARA,
  PARA1,
};
