const validation = (fieldName, fieldValue) => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (fieldValue.trim() === "") {
    return "This field is required.";
  }
  if (fieldName === "email") {
    if (!re.test(fieldValue)) return "Please enter a valid email address.";
  }
  return null;
};

const validator = {
  name: (name) => validation("name", name),
  email: (email) => validation("email", email),
};

export default validator;
