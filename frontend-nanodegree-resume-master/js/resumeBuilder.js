var bio = {
	"name" : "Gowrisankar Prasad",
	"role" : "Software/Web Developer",
	"contacts" : {
		"mobile" : "480-326-6021",
		"email" : "prasad.gowrisankar@gmail.com",
		"linkedin" : "prasadgsp",
		"github" : "prasadgsp",
		"location" : "Phoenix, Arizona"
	},
	"welcomeMessage" : "Hi, I am Gowrisankar Prasad, a Master's student at Arizona State University majoring in Computer Science",
	"skills" : ["Java","HTML5/CSS","C","JavaScript","MySQL","Python"],
	"bioPic" : "images/me.jpg"
};


 var work = {
 	"jobs" : [
 	{
	"title" : "Web Developer Intern",
	"employer" : "Innovadiv",
	"dates" : "May 2015 - Present",
	"location" : "Chicago, Illinois",
	"description" : "Develop web pages"
	}
	]
}


var education = {
	"schools" : [
	{ 
		"name" : "Arizona State University",
		"degree" : "Master of Science",
		"major" : "Computer Science",
		"location" : "Tempe, Arizona",
		"dates" : "2014-Present"
	},
	{ 
		"name" : "Anna Universty",
		"degree" : "Bachelor of Engineering",
		"major" : "Computer Science and Engineering",
		"location" : "Chennai, India",
		"dates" : "2010-2014"
	}
	],
	"onlineCourses" : [
		{ 
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : "May 2015-Present"
	},
	{ 
		"title" : "Programming for Everybody (Python)",
		"school" : "Coursera",
		"dates" : "March 2015-Present"
	}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Search Engine",
			"dates" : "Jan 2015 - April 2015",
			"description" : "Developed a Search Engine"
		},
		{
			"title" : "Secure Banking System",
			"dates" : "August 2014 - December 2014",
			"description" : "Developed a Security based Banking System"
		}
	]
}


// var formattedTitle=HTMLworkTitle.replace("%data%",work.title);
// var formattedEmployer=HTMLworkEmployer.replace("%data%",work.employer);
// var formattedDesc=HTMLworkDescription.replace("%data%",work.dates);
// var formattedwDates=HTMLworkDates.replace("%data%",work.description);
// var formattedwLocation=HTMLworkLocation.replace("%data%",work.location);


// var formattedschoolName=HTMLschoolName.replace("%data%",education.name);
// var formattedDegree=HTMLschoolDegree.replace("%data%",education.degree);
// var formattedMajor=HTMLschoolMajor.replace("%data%",education.major);
// var formattedDates=HTMLschoolDates.replace("%data%",education.dates);
// var formattedLocation=HTMLschoolLocation.replace("%data%",education.location);

// var formattedschoolName2=HTMLschoolName.replace("%data%",education2.name);
// var formattedDegree2=HTMLschoolDegree.replace("%data%",education2.degree);
// var formattedMajor2=HTMLschoolMajor.replace("%data%",education2.major);
// var formattedDates2=HTMLschoolDates.replace("%data%",education2.dates);
// var formattedLocation2=HTMLschoolLocation.replace("%data%",education2.location);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 var formattedbioPic=HTMLbioPic.replace("%data%",bio.bioPic);
 var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
 var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
 var formattedlinkedin=HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
 var formattedgithub=HTMLgithub.replace("%data%",bio.contacts.github);
 var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
 var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedlinkedin).append(formattedgithub).append(formattedLocation);
$("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedlinkedin).append(formattedgithub).append(formattedLocation);

$("#header").append(formattedbioPic).append(formattedwelcomeMsg);

if(bio.skills.length>0)
{
$("#header").append(HTMLskillsStart);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[4]);
$("#skills").append(formattedSkill);
var formattedSkill=HTMLskills.replace("%data%",bio.skills[5]);
$("#skills").append(formattedSkill);
}


function displayWork() {
for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description)
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();



$(document).click(function(loc) {
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});

function inname(name)
{
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}
//$('#main').append(internationalizeButton);

for(project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
}

      // Add education entry for each school
      for (school in education["schools"]){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school]["name"]);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school]["degree"]);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school]["dates"]);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school]["location"]);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school]["major"]);; 
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor +"<br/>");
};

$("#mapDiv").append(googleMap);

// $("#header").append(formattedwelcomeMsg);
// $("#header").append(formattedbioPic);
// $("#header").append(formattedEmail);
// $("#header").append(formattedMobile);
// $("#header").append(formattedlinkedin);
// $("#header").append(formattedgithub);
// $("#header").append(formattedLocation);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);


// $("#header").append(HTMLschoolStart);
// $("#education").append(formattedschoolName);
// $("#education").append(formattedDegree);
// $("#education").append(formattedMajor);
// $("#education").append(formattedDates);
// $("#education").append(formattedLocation);


// $("#education").append(formattedschoolName2);
// $("#education").append(formattedDegree2);
// $("#education").append(formattedMajor2);
// $("#education").append(formattedDates2);
// $("#education").append(formattedLocation2);

// $("#header").append(HTMLworkStart);
// $("#workExperience").append(formattedTitle);
// $("#workExperience").append(formattedEmployer);
// $("#workExperience").append(formattedDesc);
// $("#workExperience").append(formattedwDates);
// $("#workExperience").append(formattedwLocation);


//$("#main").append(bio);