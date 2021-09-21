import React from "react";

export default (props) =>
  Math.round(Math.random() * (props.max - props.min) + props.min);
