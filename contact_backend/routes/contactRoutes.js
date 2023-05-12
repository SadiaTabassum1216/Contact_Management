const express = require("express");

const router = express.Router();
const { getContact, createContact, getAllContact, updateContact, deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/tokenHandler");

// router.route("/").get((req,res)=>{
//     res.status(200).json({message: "Get all contacts"});
// });

router.use(validateToken);
router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;