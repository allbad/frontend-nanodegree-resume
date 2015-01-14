var bio = {
    "name": "Neil Allgood",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "07767 374488",
        "email": "neil_allgood@hotmail.com",
        "twitter": "http://twitter.com/neilallgood",
        "github": "https://github.com/allbad",

        "location": "Hackney, London"
    },
    "welcomeMessage": "Technical manager with experience of running infrastructure and development teams in agile environments.  Working towards a Front-end Web Developer nanoDegree qualification with Udacity",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript/jQuery"
    ],
    "bioPic": "images/neil.jpg"
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}


var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

 
var work = {
    "jobs": [
        {
            "employer": "Barclays",
            "title": "Head of Collaboration Eng and Dev",
            "location": "Canary Wharf, London",
            "dates": "1996-present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet arcu enim, eget accumsan libero lacinia ut. Ut mattis, augue eget bibendum blandit, sapien nibh auctor risus, eu aliquet quam sem in lorem. Vivamus eget leo mi. Nullam lorem tortor, finibus eget fermentum a, pellentesque ac nunc. In id maximus sem. Morbi in fringilla elit. Vivamus posuere magna id turpis sagittis, vel lobortis enim efficitur."
        },
        {
            "employer": "OC&C Strategy Consultants",
            "title": "Head of Graphics and IT",
            "location": "Kingsway, London",
            "dates": "1993-1996",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet arcu enim, eget accumsan libero lacinia ut. Ut mattis, augue eget bibendum blandit, sapien nibh auctor risus, eu aliquet quam sem in lorem. Vivamus eget leo mi. Nullam lorem tortor, finibus eget fermentum a, pellentesque ac nunc. In id maximus sem. Morbi in fringilla elit. Vivamus posuere magna id turpis sagittis, vel lobortis enim efficitur."
        }
    ]
}

function displayWork() {
    for (job in work.jobs){
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);   
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var education = {
	"schools": [
		{
			"name": "Howard Grammar",
			"dates": "1980-1986",
			"location": "Rainham, Gillingham, Kent",
		},
		{
			"name": "St Margarets",
			"dates": "1974-1980",
			"location": "Rainham, Gillingham, Kent",
		}
	],	
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud304-nd"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud804-nd"
		}
	]
}

education.display = function(){
    for (school in education.schools){
        // create new div for schools
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);      
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);  
        $(".education-entry:last").append(formattedLocation);
    }
}

education.display();

var projects = {
    "projects": [
        {
            "title": "El Recreo Website",
            "dates": 2014,
            "description": "Language website for a friend",
            "images": [
                "images/elrecreo.png"
            ]
        },
        {
            "title": "allgood.technology Website",
            "dates": 2014,
            "description": "Starter website for me",
            "images": [
                "images/at1.png",
                "images/at2.png"
            ]
        }
    ]
}

projects.display = function(){
    for (project in projects.projects){
        // create new div for projects
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);      
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);  
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length >0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();



function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// see a map
$("#mapDiv").append(googleMap);
