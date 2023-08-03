const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");

const schemas = require("../../schemas/contacts");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getListContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
