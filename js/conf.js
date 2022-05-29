const dom = {
  steps: document.querySelectorAll("#wrap-step > div"),
  form: document.forms["forma"],
  fields: document.querySelectorAll("#wrap-fields > div"),
  errorMessage: document.getElementById("error-message"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnSubmit: document.getElementById("btn-submit"),
};

const App = {
  dom,
  totalFieldsLength: 3,
  isValid: false,
  currentPage: 0,
  gap: 10,
};

export default App;
