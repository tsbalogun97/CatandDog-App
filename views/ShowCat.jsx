import React from "react";
function ShowCat(props) {
  const cat = props.cat;
  return (
    <>
      <div>
        <h1> Cat's Information</h1>
        <h3>
          {cat.name} is a {cat.age} years old Cat.{" "}
          {cat.hadFirstCheckUp
            ? "The cat has had a first check up."
            : "The cat is yet to have its first check up."}
            {cat.description}
        </h3>
      </div>
    </>
  );
}
export default ShowCat;




