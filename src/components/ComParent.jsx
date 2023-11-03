// import React from "react";
import ComChildren from "./ComChildren";
// outside fn component
// {} syntax react
let count=1200;

export default function ComParent() {
  function a(name){
    alert(name)
}
  // inside fn component
  return (
    <>
      
      <div>ComParent {count}</div>
      <ComChildren count={1500} test={[1,2,3]} e={a}/>
      
    </>
  );
}
