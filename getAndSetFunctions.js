export function setFirstName(value) {
  sessionStorage.setItem("firstname", JSON.stringify(value));
}

export function getFirstName() {
  return JSON.parse(sessionStorage.getItem("firstname")) || "";
}

export function setStepCounter(value) {
  sessionStorage.setItem("stepCounter", JSON.stringify(value));
}

export function getStepCounter() {
  return JSON.parse(sessionStorage.getItem("stepCounter")) || 1;
}

export function setLastName(value) {
  sessionStorage.setItem("lastname", JSON.stringify(value));
}

export function getLastName() {
  return JSON.parse(sessionStorage.getItem("lastname")) || "";
}

export function setDate(value) {
  sessionStorage.setItem("date", JSON.stringify(value));
}

export function getDate() {
  return JSON.parse(sessionStorage.getItem("date")) || "";
}

export function setGender(value) {
  sessionStorage.setItem("gender", JSON.stringify(value));
}

export function getGender() {
  return JSON.parse(sessionStorage.getItem("gender")) || "";
}

export function setNationality(value) {
  sessionStorage.setItem("nationality", JSON.stringify(value));
}

export function getNationality() {
  return JSON.parse(sessionStorage.getItem("nationality")) || "";
}

export function setEmail(value) {
  sessionStorage.setItem("email", JSON.stringify(value));
}

export function getEmail() {
  return JSON.parse(sessionStorage.getItem("email")) || "";
}

export function setPhone(value) {
  sessionStorage.setItem("phone", JSON.stringify(value));
}

export function getPhone() {
  return JSON.parse(sessionStorage.getItem("phone")) || "";
}

export function setAlternatePhone(value) {
  sessionStorage.setItem("alternatephone", JSON.stringify(value));
}

export function getAlternatePhone() {
  return JSON.parse(sessionStorage.getItem("alternatephone")) || "";
}

export function setAddress(value) {
  sessionStorage.setItem("address", JSON.stringify(value));
}

export function getAddress() {
  return JSON.parse(sessionStorage.getItem("address")) || "";
}

export function setCity(value) {
  sessionStorage.setItem("city", JSON.stringify(value));
}

export function getCity() {
  return JSON.parse(sessionStorage.getItem("city")) || "";
}

export function setZip(value) {
  sessionStorage.setItem("zip", JSON.stringify(value));
}

export function getZip() {
  return JSON.parse(sessionStorage.getItem("zip")) || "";
}

export function setCountry(value) {
  sessionStorage.setItem("country", JSON.stringify(value));
}

export function getCounrty() {
  return JSON.parse(sessionStorage.getItem("country")) || "";
}

export function setInterests(value) {
  sessionStorage.setItem("interests", JSON.stringify(value));
}

export function getInterests() {
  return JSON.parse(sessionStorage.getItem("interests")) || [];
}

export function setExperience(value) {
  sessionStorage.setItem("experience", JSON.stringify(value));
}

export function getExperience() {
  return JSON.parse(sessionStorage.getItem("experience")) || "";
}

export function setContact(value) {
  sessionStorage.setItem("contact", JSON.stringify(value));
}

export function getContact() {
  return JSON.parse(sessionStorage.getItem("contact")) || "email";
}

export function setComment(value) {
  sessionStorage.setItem("comment", JSON.stringify(value));
}

export function getComment() {
  return JSON.parse(sessionStorage.getItem("comment")) || "";
}

export function setNews(value) {
  sessionStorage.setItem("news", JSON.stringify(value));
}

export function getNews() {
  return JSON.parse(sessionStorage.getItem("news")) || JSON.parse("false");
}

export function setTerms(value) {
  sessionStorage.setItem("terms", JSON.stringify(value));
}

export function getTerms() {
  return JSON.parse(sessionStorage.getItem("terms")) || JSON.parse("false");
}
