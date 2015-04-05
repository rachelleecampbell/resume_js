

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

bio["city"] = "New Orleans";
bio.email = "rachelleecampbell@gmail.com";

$("#main").append(bio.city);

// $("#main").append(bio.name);


var edu = {};
edu["name"] = "West Virginia University",
edu["year"] = "2011",
edu["city"] = "Morgantown",

$("#main").append(edu.name);


var work = {};
work.employer = "Tresor Gallery",
work.position = "Director",
work.years = 1.5,

$("#main").append(work["position"]);




