import { addNewContact, deleteContact, editContact, getContact, getContacts } from "../controllers/crm.controller";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)
    .post(addNewContact);
  app
    .route("/contact/:contactId")
    .get(getContact)
    .put(editContact)
    .delete(deleteContact);
};

export default routes;
