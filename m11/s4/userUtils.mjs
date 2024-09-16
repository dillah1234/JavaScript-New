function getUsers(nama) {
    return "user : " + nama;
  }
  
  var userRole = "admin";
  
  function getUserRole() {
    return "user role : " + userRole;
  }
  
  export default getUsers;
  export { getUserRole };