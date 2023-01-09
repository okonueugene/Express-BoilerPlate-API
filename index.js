const Joi = require("joi");

const express = require("express");

const app = express();

const fs = require("fs");

app.use(express.json());

let data = fs.readFileSync("data.json");
let courses = JSON.parse(data);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  !course
    ? res.status(404).send("The course with the given ID was not found.")
    : res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);

  fs.writeFileSync("data.json", JSON.stringify(courses));

  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");

  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;

  fs.writeFileSync("data.json", JSON.stringify(courses));

  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  fs.writeFileSync("data.json", JSON.stringify(courses));

  res.send(course);
});

app.get("/api/course/:name", (req, res, next) => {
  const filters = req.params.name;

  if(filters.length === 0) return res.status(400).send("Bad Request");

  const filteredCourses = courses.filter((course) => {
    return course.name.toLowerCase().includes(filters.toLowerCase());
  });

 (filteredCourses.length === 0)
    ? res.status(404).send("The course with the given name was not found.")
    : res.send(filteredCourses);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
