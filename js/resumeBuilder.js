var bio = {
    "name": "Neil Allgood",
    "role": "Web Developer",
    "contacts": {
        "mobile": "07767 374488",
        "email": "neil_allgood@hotmail.com",
        "github": "allbad",
        "location": "London"
    },
    "welcomeMessage": "Hello",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "bioPic": "images/neil.jpg"
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);

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
            "location": "London",
            "dates": "1996-present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet arcu enim, eget accumsan libero lacinia ut. Ut mattis, augue eget bibendum blandit, sapien nibh auctor risus, eu aliquet quam sem in lorem. Vivamus eget leo mi. Nullam lorem tortor, finibus eget fermentum a, pellentesque ac nunc. In id maximus sem. Morbi in fringilla elit. Vivamus posuere magna id turpis sagittis, vel lobortis enim efficitur."
        },
        {
            "employer": "OC&C Strategy Consultants",
            "title": "Head of Graphics and IT",
            "location": "London",
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
			"name": "Howard",
			"years": "1980-1986",
			"city": "Rainham",
			"url": "http://www.thehowardschool.co.uk/sitev3/index.php"
		},
		{
			"name": "St Margarets",
			"years": "1974-1980",
			"city": "Rainham",
			"url": "http://www.stmargaretsonline.net/"
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

var projects = {
    "projects": [
        {
            "title": "El Recreo Website",
            "dates": 2014,
            "description": "Language website for a friend",
            "images": [
                "images/neil.jpg",
                "images/neil.jpg"
            ]
        },
        {
            "title": "allgood.technology Website",
            "dates": 2014,
            "description": "Starter website for me",
            "images": [
                "images/neil.jpg",
                "images/neil.jpg"
            ]
        }
    ]
}

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);