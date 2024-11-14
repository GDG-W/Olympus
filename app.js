const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// Configure Handlebars
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".handlebars",
  // Create custom helper for active navigation
  helpers: {
    isActive: function (current, page) {
      return current === page ? "active" : "";
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Custom middleware to remove .html extension
app.use((req, res, next) => {
  if (req.path.endsWith(".html")) {
    const newPath = req.path.slice(0, -5);
    return res.redirect(301, newPath);
  }
  next();
});

// Routes
app.get("/", async (req, res) => {
  res.render("index", {
    title: "DevFest Lagos 2024 | Wakanda",
    currentPage: "index",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "DevFest Lagos 2024 | Wakanda",
    currentPage: "login",
    layout: "auth",
  });
});

app.get("/404", (req, res) => {
  res.status(404).render("404", {
    title: "404 - Page Not Found",
    currentPage: "404",
    layout: "auth",
  });
});

app.use((req, res) => {
  res.redirect("/404");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
