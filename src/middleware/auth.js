const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!");
  let token = "abc";
  let isAuthorized = token === "abc";
  if (!isAuthorized) {
    res.status(401).send("User not authorized");
  }
  next();
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked!");
  let token = "abc";
  let isAuthorized = token === "abc";
  if (!isAuthorized) {
    res.status(401).send("User not authorized");
  }
  next();
};

module.exports = { adminAuth, userAuth };
