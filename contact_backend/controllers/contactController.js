const asyncHandler= require("express-async-handler");

//@desc get all contact
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler( async ((req, res) => {
    // res.send("Get all contacts");
    res.status(200).json({ message: "Get all contacts" });
}));

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async ((req, res) => {
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mendaory.");
    }
    res.status(201).json({ message: "Create contact" });
})) ;

//@desc get a specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async ((req, res) => {
    res.status(200).json({ message: "Get contact of " + req.params.id });
})) ;

//@desc update  a specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async ((req, res) => {
    res.status(200).json({ message: "Update contact of " + req.params.id });
})) ;

//@desc delete a specific contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async ((req, res) => {
    res.status(200).json({ message: "Delete contact of " + req.params.id });
})) ;

module.exports = { getContact, createContact, getAllContact, updateContact, deleteContact };