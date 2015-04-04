

var name = "Rachel Trantham";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 var skills = 
 ["graphic design", "programming", "sales"]

 // $("#main").append(skills);

var bio = {
  "name" : "Rachel Trantham",
  "role" : role,
  "contact info" : "rachelleecampbell@gmail.com",
  "welcome message" : "Welcome to my dynamic resume",
  "skills" : skills
};

$("#main").append(bio.name);