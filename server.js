const mongoose = require("mongoose");


const Dog = require("./models/dog.js");

const Cat = require("./models/cat.js")

const express = require("express");

require("dotenv").config();

const methodOverride = require("method-override");





const app = express();



// /----------------------------------{Middleware}
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});


app.use(methodOverride("_method"));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/",(req, res)=>{
  res.send("<h1>Welcome to The Dog's house</h1>")
});
// ============================== Read Route
app.get("/dog", function (req, res) {
  Dog.find({}).then((allDog) => {
    res.render("IndexDog", {
      dog: allDog,
    });
  });
});

app.get("/cat", function (req, res) {
  Cat.find({}).then((allCat) => {
    res.render("IndexCat", {
      cat: allCat,
    });
  });
});


// ============================== Post Route
app.post("/dog", async (req, res) => {
  const newDog = await Dog.create(req.body);
  //await res.send(newDog);
  res.redirect("/dog");
});

app.post("/cat", async (req, res) => {
  if (req.body.hadFirstCheckUp === "on") {
    req.body.hadFirstCheckUp = true;
  } else {
    req.body.hadFirstCheckUp = false;
  }
  const newCat = await Cat.create(req.body);
  res.redirect("/cat");
});

// ============================== Post Route
app.get("/cat/new", (req, res) => {
  res.render("NewCat");
});
app.get("/dog/new", function (req, res) {
  res.render("NewDog");
});


// ================================= Edit Route
app.put("/dog/:id", async (req, res) => {
  try {
    const updatedInfo = await Dog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/dog/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error: Update Route");
  }
});
app.get("/dog/:id/edit", async (req, res) => {
  const foundDogInfo = await Dog.findById(req.params.id);
  //console.log("foundDogInfo", foundDogInfo);
  res.render("EditDog", {
    dog: foundDogInfo,
  });
});

app.put("/cat/:id", async (req, res) => {
  try {
    if (req.body.hadFirstCheckUp === "on") {
      req.body.hadFirstCheckUp = true;
    } else {
      req.body.hadFirstCheckUp = false;
    }
    const updatedInfo = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect(`/cat/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error: Update Route");
  }
});
app.get("/cat/:id/edit", async (req, res) => {
  const foundCatInfo = await Cat.findById(req.params.id);
  res.render("EditCat", {
    cat: foundCatInfo,
  });
});

// ========================== Delete Route
app.delete("/dog/:id", async (req, res) => {
  await Dog.findByIdAndDelete(req.params.id);
  res.redirect("/dog");
});

app.delete("/cat/:id", async (req, res) => {
  await Cat.findByIdAndDelete(req.params.id);
  res.redirect("/cat");
});

// =========================== Show Route
app.get("/dog/:id", async (req, res) => {
  const eachDog = await Dog.findById(req.params.id);
  await res.render("ShowDog", {
    dog: eachDog,
  });
});

app.get("/cat/:id", async (req, res) => {
  const eachCat = await Cat.findById(req.params.id);
  await res.render("ShowCat", {
    cat: eachCat,
  });
});




const PORT = 3006;





app.listen(PORT,(req, res)=>{
  console.log(`listening on ${PORT}`)
});

