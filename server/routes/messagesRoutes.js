const { addMessage, getAllMessage } = require("../controllers/messagesController");
const { } = require("../controllers/userController");

const router = require("express").Router();

router.post("/addmsg",addMessage);
router.post("/getmsg",getAllMessage);



module.exports = router;