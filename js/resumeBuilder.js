//JSON for biographical details
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
    "welcomeMessage": "Technical manager with experience of running infrastructure and development teams",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript/jQuery"
    ],
    "bioPic": "images/neil.jpg"
};

//encapsulated function on the bio object to display details
bio.display = function(){
    // replace placeholder name and role data with json details
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    // add detail into header on html page
    $('#header').prepend(formattedRole);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);

    // replace placeholder contact data with json details
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    // add detail into contacts sections on html page
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);

    // replace placeholder bio pic and welcome msg data with json details
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    // add detail into header on html page
    $('#header').append(formattedBioPic);
    var formattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcome);

    //check for skills and add each one
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
        $('#skills').append(formattedSkill);
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
        $('#skills').append(formattedSkill);
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
        $('#skills').append(formattedSkill);
    }
};

//call display function on bio object
bio.display();

//JSON for work details
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
};

//encapsulated function on the work object to display details
work.display = function(){
    for (var job in work.jobs){
        // create new div for work experience
        $('#workExperience').append(HTMLworkStart);
        // replace placeholder employer and title data with json details
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        // add detail at end of work-entry on html page
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
};

//call display function on work object
work.display();


//JSON for education details
var education = {
    "schools": [
        {
            "name": "Howard Grammar",
            "dates": "1980-1986",
            "location": "Derwent Way, Rainham",
            "major": "Economics, Maths, Geography"
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
            "dates": 2014-15,
            "url": "https://www.udacity.com/course/ud804-nd"
        }
    ]
};

//encapsulated function on the education object to display details
education.display = function(){
    for (var school in education.schools){
        // create new div for schools
        $('#education').append(HTMLschoolStart);
        // replace placeholder schoolname data with json details
        var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name + ' - ' + education.schools[school].location);
        // add detail at end of education-entry on html page
        $('.education-entry:last').append(formattedName);
        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        $('.education-entry:last').append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        $('.education-entry:last').append(formattedMajor);
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var onlineCourse in education.onlineCourses){
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(TitleandSchool);
            var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
            $('.education-entry:last').append(formattedDates);
            var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
            $('.education-entry:last').append(formattedURL);
        }
    }
};

//call display function on education object
education.display();

//JSON for projects details
var projects = {
    "projects": [
        {
            "title": "El Recreo Website",
            "dates": 2014,
            "description": "Created a website for a friend setting up a new Spanish tuition class for local children",
            "images": [
                "images/elrecreo1.png",
                "images/elrecreo2.png"
            ]
        },
        {
            "title": "allgood.technology Website",
            "dates": 2014,
            "description": "Created a new website based on Skeleton grid as a site to experiment on",
            "images": [
                "images/at1.png"
            ]
        }
    ]
};

//encapsulated function on the projects object to display details
projects.display = function(){
    for (var project in projects.projects){
        // create new div for projects
        $('#projects').append(HTMLprojectStart);
        // replace placeholder data with json details
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        // add projects detail into html page
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $('.project-entry:last').append(formattedDescription);
        //check for images and add each one
        if (projects.projects[project].images.length >0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

//call display function on projects object
projects.display();

// function to internationalise surname (make it uppercase)
function inName(name){
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
}

/* add button to run inName function
$('#main').append(internationalizeButton); */

// see a map
$('#mapDiv').append(googleMap);
