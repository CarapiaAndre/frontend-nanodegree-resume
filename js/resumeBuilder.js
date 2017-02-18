var bio = {
    "name": "André Carapiá",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(11) 97132-6276",
        "e-mail": "carapia.andre@gmail.com",
        "github": "CarapiaAndre",
        "location": "Vila Aurora, Itapevi, SP"
    },
    "skills": ["C#", "HTML", "CSS", "JavaScript", "SqlServer"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName, formattedRole);

        for (var contact in bio.contacts) {
            if (contact.length > 0) {
                console.log(bio.contacts[contact]);
                var formattedGeneric = HTMLcontactGeneric.replace("%contact%", contact);
                formattedGeneric = formattedGeneric.replace("%data%", bio.contacts[contact]);
                $("#topContacts").append(formattedGeneric);
            }
        }

        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var work = {
    "jobs": [{
            "employer": "Wappa",
            "title": "C# .Net BackEnd Developer",
            "location": "Vila Olímpia, São Paulo",
            "dates": " May 2015 - January 2016",
            "description": "Eight months working with .Net plataform."
        },
        {
            "employer": "OnTime",
            "title": "Web Developer",
            "location": "CLI - Itapevi, São Paulo",
            "dates": "October 2016 - Actual",
            "description": "My actual work, I'm FullStack Developer, working with SQL Server, C#, JavaScript, CSS and HTML"
        }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
            "title": "My first responsive blog.",
            "dates": 2017,
            "description": "Make a static blog with 3,5MB be come a responsive blog with 450kb's, amazing work with images :D",
            "images": ["images/blog.JPG"]
        },
        {
            "title": "Birghton-Times",
            "dates": 2017,
            "description": "Make a static news page in a responsive page.",
            "images": ["images/brighton-times.JPG"]
        },
        {
            "title": "animal-card",
            "dates": 2017,
            "description": "Just kidding with Css (:",
            "images": ["images/animal-card.JPG"]
        }
    ],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var imgLenght = projects.projects[i].images.length;

            if (imgLenght > 0) {
                for (var img = 0; img < imgLenght; img++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);

                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "FATEC",
        "location": "Carapicuíba, SP",
        "degree": "Bachelor",
        "majors": "CS",
        "dates": "2014 - 2017",
        "url": "http://www.fateccarapicuiba.edu.br/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/",
    }],
    "display": function() {
        for (var i = 0; i < education.schools.lenght; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var NameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(NameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedMajor);
        }

        for (var cont = 0; cont < education.onlineCourses.lenght; cont++) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[cont].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[cont].school);
            var titleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(titleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[cont].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[cont].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//
//   logClicks(x, y);
// });

// $("#main").append(internationalizeButton);
// function inName(name) {
//   name = name.trim().split(" ");
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() +
//     name[0].slice(1).toLowerCase();
//
//   return name.join(" ");
// }

$("#mapDiv").append(googleMap);



work.display();
education.display();
projects.display();
bio.display();
