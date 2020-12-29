const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "Primer Sitio Web" });
});

router.get("/contacto", (req, res) => {
  res.render("contacto.html", { title: "Contacto" });
});

router.get("/sobre", (req, res) => {
  res.render("sobre.html", { title: "Sobre Mi" });
});

module.exports = router;
