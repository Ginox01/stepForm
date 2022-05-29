import App from "./conf.js";
import moveTheForm from "./move.js";
import validator from "./validator.js";

export default () => {
  App.dom.btnNext.addEventListener("click", (e) => validator(e, App));
  App.dom.btnPrev.addEventListener("click", (e) => moveTheForm(e, App));
  App.dom.btnNext.addEventListener("click", (e) => moveTheForm(e, App));
};
