import React from "react";
import { Button } from "./Button";

export const Component = () => {
  return (
    <>
      <h1>Different Button</h1>
      <Button theme={"a"}>Primary Button</Button>
      <br />
      <Button theme={"b"}>Default Button</Button>
      <br />
      <Button theme={"c"}>Dashed Button</Button>
      <br />
      <Button theme={"d"}>Text Button</Button>
      <br />
      <Button theme={"e"}>Link Button</Button>
    </>
  );
};
