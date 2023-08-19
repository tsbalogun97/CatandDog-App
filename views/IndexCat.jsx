import React from "react";
function IndexCat(props) {
  const cat = props.cat;
  return (
    <>
      <div>
        <nav>
          <a href="/cat/new">Add Cat's Information </a>
        </nav>
        {cat.map((cat, i) => {
          return (
            <div key={i}>
              <a href={`/cat/${cat._id}`}>
                <h2>{cat.name}</h2>
              </a>
              <a href={`/cat/${cat._id}/edit`}>Edit Cat's Info</a>
              <form action={`/cat/${cat._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default IndexCat;