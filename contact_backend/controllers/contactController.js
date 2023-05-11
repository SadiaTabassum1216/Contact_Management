const asyncHandler= require("express-async-handler");
const Contact= require("../models/contactModel");
const { response } = require("express");

//@desc get all contact
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler( async (req, res) => {
    // res.send("Get all contacts");
    const contacts= await Contact.find()
    res.status(200).json(contacts);
});

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("Request body is: ",req.body);
    const {name, email, phone}=req.body;
    
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mendaory.");
    }
    const newContact= await Contact.create({
        name,email,phone,
    });
    res.status(201).json(newContact);
}) ;

//@desc get a specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }
    res.status(200).json(contact);
}) ;

//@desc update  a specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }
    const contact2= await Contact.findByIdAndUpdate(req.params.id,req.body, {new: true});
    res.status(200).json(contact2);
}) ;

//@desc delete a specific contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }
    await Contact.remove();
    res.status(200).json(contact);
}) ;

module.exports = { getContact, createContact, getAllContact, updateContact, deleteContact };