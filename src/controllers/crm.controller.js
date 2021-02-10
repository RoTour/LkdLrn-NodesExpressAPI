import { getRepository } from "typeorm";
import Contact from "../models/crm.json";

export const addNewContact = async (req, res) => {
  let newContact = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  const query = await getRepository("Contact")
    .save(newContact)
    .catch((err) => res.send(err));
  res.json(query);
};

export const getContacts = async (req, res) => {
  res.json(
    await getRepository("Contact")
      .find()
      .catch((err) => res.send(err))
  );
};

export const getContact = async (req, res) => {
  res.json(
    await getRepository("Contact")
      .findOne(req.params.contactId)
      .catch((err) => res.send(err))
  );
};

export const editContact = async (req, res) => {
  const repo = getRepository("Contact");
  const dbContact = repo.findOne(req.params.contactId);
  dbContact.firstname = req.body.firstname;
  dbContact.lastname = req.body.lastname;
  res.json(await repo.save(dbContact).catch((err) => res.send(err)));
};

export const deleteContact = async (req, res) => {
  const repo = getRepository("Contact");
  const dbContact = await repo.findOne(req.params.contactId);
  await repo.delete(dbContact).catch(err => res.send(err))
  res.json(dbContact);
};
