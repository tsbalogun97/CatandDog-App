import React from "react";
function ShowDog(props) {
  const dog = props.dog;
  return (
    <>
      <div>
        <h1> Dog's Information</h1>
        <h3>
          {dog.name} is a {dog.age}-year-old {dog.breed}. {dog.description}.
        </h3>
      </div>
    </>
  );
}
export default ShowDog;