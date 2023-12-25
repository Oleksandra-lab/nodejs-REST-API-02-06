const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const {
  validateBody,
  isValidId,
  isEmptyBody,
  authenticate,
} = require("../../middewares");

const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addNewContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  isEmptyBody,
  validateBody(schemas.updateStatusSchema),
  ctrl.updateContactById
);

module.exports = router;
