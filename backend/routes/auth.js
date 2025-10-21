// routes/auth.js
const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,   // front-end
    failureRedirect: "/auth/login/failed",
  })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({ error: false, message: "Successfully Logged In", user: req.user });
  }
  res.status(403).json({ error: true, message: "Not Authorized" });
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({ error: true, message: "Log in failure" });
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(process.env.CLIENT_URL);
  });
});

module.exports = router;
