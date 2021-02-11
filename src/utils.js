const getELement = function (selection) {
  console.log("selection", selection);
  const element = document.querySelector(selection);
  console.log("element", element);
  if (element) return element;
  throw new Error(`no element selected${selection}`);
};

export default getELement;
