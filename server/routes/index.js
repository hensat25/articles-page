const route = require("express").Router();
const adminRoutes = require("./admin");
const userRoutes = require("./user");
const itemRoutes = require("./item");

route.get("/api", (req, res) => {
  res.json({
    message: "Articles App Home Page",
  });
});

route.use("/api/admins", adminRoutes);
route.use("/api/users", userRoutes);
route.use("/api/items", itemRoutes);

module.exports = route;
