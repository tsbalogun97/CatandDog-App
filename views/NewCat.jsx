import React from "react";
function NewCat() {
  return (
    <>
      <div>
        <form action="/cat" method="POST">
          Name:
          <input type="text" name="name" />
          <br />
          Age:
          <input type="number" name="age" />
          <br />
          Had First Check Up: <input
            type="checkbox"
            name="hadFirstCheckUp"
          />{" "}
          <br />
          Description:
          <input type="text" name="description" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
export default NewCat;