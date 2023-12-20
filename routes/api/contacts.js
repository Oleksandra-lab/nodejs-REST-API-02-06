const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody, isValidId, isEmptyBody } = require("../../middewares");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addNewContact);

router.delete("/:contactId", isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateStatusSchema),
  ctrl.updateContactById
);

module.exports = router;
