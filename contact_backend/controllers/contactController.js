const asyncHandler= require("express-async-handler");
const Contact= require("../models/contactModel");
const { response } = require("express");

//@desc get all contact
//@route GET /api/contacts
//@access private
const getAllContact = asyncHandler( async (req, res) => {
    // res.send("Get all contacts");
    const contacts= await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts);
});

//@desc create new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("Request body is: ",req.body);
    const {name, email, phone}=req.body;
    
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mendaory.");
    }
    const newContact= await Contact.create({
        name,email,phone,user_id:req.user.id
    });
    res.status(201).json(newContact);
}) ;

//@desc get a specific contact
//@route GET /api/contacts/:id
//@access private
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
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }

    if(contact.user_id.toString()!=req.user.id){
        res.status(403);
        throw new Error("This user do not have update permission.")
    }

    const contact2= await Contact.findByIdAndUpdate(req.params.id,req.body, {new: true});
    res.status(200).json(contact2);
}) ;

//@desc delete a specific contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }
    if(contact.user_id.toString()!=req.user.id){
        res.status(403);
        throw new Error("This user do not have delete permission.")
    }

    await Contact.findByIdAndDelete(req.params.id,req.body, {new: true});
    res.status(200).json(contact);
}) ;

module.exports = { getContact, createContact, getAllContact, updateContact, deleteContact };