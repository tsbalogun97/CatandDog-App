import React from "react";
function EditCat(props) {
  const cat = props.cat;
  return (
    <div>
      <form action={`/cat/${cat._id}?_method=PUT`} method="POST">
        Name:
        <input type="text" name="name" defaultValue={cat.name} />
        <br />
        Age:
        <input type="Number" name="age" defaultValue={cat.age} /> <br />
        Had First Check Up:{" "}
        <input
          type="checkbox"
          name="hadFirstCheckUp"
          defaultChecked={cat.hadFirstCheckUp}
        />{" "}
        <br />
        Description:
        <input type="text" name="description" defaultValue={cat.description} />
        <input type="submit" value="Submit Changes" />
        <br />
      </form>
    </div>
  );
}
export default EditCat;