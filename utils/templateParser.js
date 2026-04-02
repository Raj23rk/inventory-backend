module.exports = (template, variables) => {
  let output = template;

  for (let key in variables) {
    const regex = new RegExp(`{{${key}}}`, "g");
    output = output.replace(regex, variables[key]);
  }

  return output;
};