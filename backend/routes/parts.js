const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Part = require("../models/Parts");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Parts using: GET "/api/parts/fetchallparts". Login required
router.get("/fetchallparts", fetchuser, async (req, res) => {
  try {
    const parts = await Part.find({ user: req.user.id });
    res.json(parts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Part using: POST "/api/parts/fetchpart". Login required
router.post(
  "/addpart",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 1 }),
    body("location", "location must be atleast 1 character").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    try {
      const { title, location } = req.body;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const part = new Part({
        title,
        location,
        user: req.user.id,
      });
      const savedPart = await part.save();

      res.json(savedPart);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Search an existing Part using: POST "/api/parts/search". Login required
router.post(
  "/search",
  fetchuser,
  body("title", "Enter a valid title").isLength({ min: 1 }),
  async (req, res) => {
    try {
      const { title } = req.body;
      const parts = await Part.find({ title: title });
      res.json(parts.map((part) => part.location));
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 4: Delete an existing Part using: DELETE "/api/parts/deletepart". Login required
router.delete("/deletepart/:id", fetchuser, async (req, res) => {
  try {
    // Find the part to be delete and delete it
    let part = await Part.findById(req.params.id);
    if (!part) {
      return res.status(404).send("Not Found");
    }

    part = await Part.findByIdAndDelete(req.params.id);
    res.json({ Success: "Part has been deleted", part: part });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
