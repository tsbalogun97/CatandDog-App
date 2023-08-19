import React from "react";
function IndexDog(props) {
  const dog = props.dog;
  return (
    <div>
      <nav>
        <a href="/dog/new">Add Dog's Info</a>
      </nav>
      {dog.map((dog, i) => {
        return (
          <div key={i}>
            <a href={`/dog/${dog._id}`}>
              <h2>{dog.name}</h2>
            </a>
            {/* //-------------EDIT INFO */}
            <a href={`/dog/${dog._id}/edit`}>Edit Dog's Info</a>
            {/* //-------------DELETE INFO */}
            <form action={`/dog/${dog._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE DOG'S INFO" />
            </form>
          </div>
        );
      })}
    </div>
  );
}
export default IndexDog;