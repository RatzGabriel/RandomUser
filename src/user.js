const user = async function () {
  const getData = await fetch("https://randomuser.me/api/?gender=female");
  const dataJson = await getData.json();
  const person = dataJson.results[0];
  const name = person.name.first + " " + person.name.last;
  const mail = person.email;
  const age = person.dob.age;
  const adress =
    person.location.city +
    " " +
    person.location.country +
    " " +
    person.location.street.name +
    " " +
    person.location.street.number;
  const phone = person.cell;
  const pic = person.picture.medium;
  return { person, name, age, adress, phone, pic, mail };
};

export default user;
