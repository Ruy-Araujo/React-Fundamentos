import React, { cloneElement, Children } from "react";
import Membro from "./FamiliaMembro";

export default (props) => {
  return (
    props.children.map( child => {
      return cloneElement(child, props)
    })
  );
};
