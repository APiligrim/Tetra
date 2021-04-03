module.exports = (app) => {
  const userController = require("../controllers/user.js");

  app.post("/signIn", async (req, res) => {
    try {
      res.send({
        success: true,
        message: "Logged In Successfully",
        username: data.username,
        role: data.role,
      });
    } catch (error) {
      res.status(400).send({
        error: JSON.stringify(error),
      });
    }
  });

  app.get("/profile/:username", async (req, res) => {
    try {
      let data = await userController.getProfile(req.params.username);
      res.send({
        success: true,
        profileData: data.data,
      });
    } catch (error) {
      res.status(400).send({
        error: JSON.stringify(error),
      });
    }
  });
};
