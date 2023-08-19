import React from "react";
function EditDog(props) {
  const dog = props.dog;
  return (
    <div>
      <form action={`/dog/${dog._id}?_method=PUT`} method="POST">
        Name:
        <input type="text" name="name" defaultValue={dog.name} />
        <br />
        Age:
        <input type="Number" name="age" defaultValue={dog.age} /> <br />
        Description:
        <input type="text" name="description" defaultValue={dog.description} />
        <br />
        Breed:
        <input type="text" name="breed" defaultValue={dog.breed} />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}
export default EditDog;