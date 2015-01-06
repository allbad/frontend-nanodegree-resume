var name = "Neil Allgood";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

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

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

var work = {
    "jobs": [
        {
            "employer": "Barclays",
            "title": "Head of Collaboration Eng and Dev",
            "location": "London",
            "dates": "1996-2014",
            "description": "Managing 3 teams"
        },
        {
            "employer": "OC&C Strategy Consultants",
            "title": "Head of Graphics and IT",
            "location": "London",
            "dates": "1993-1996",
            "description": "Managing a team producing all company documentation"
        }
    ]
}

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
$("#workExperience").append(formattedEmployer);

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.title);
$("#workExperience").append(formattedWorkPosition);

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
