import model from "../models/userSchema.js";
class Allroutes {
  static homeroute = (req, res, next) => {
    res.render("index");
    next();
  };
  static contact = (req, res, next) => {
    res.render("contact");
    next();
  };
  static userdata = async (req, res) => {
    try {
      const data = new model({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
      });
      const result = await data.save();
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  };
}
export { Allroutes };
