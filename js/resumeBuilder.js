//Global Variable for replace "%data%"
var data = "%data%";

var bio = {
    name: "André Carapiá",
    role: "Web Developer",
    contacts: {
        mobile: "(11) 97132-6276",
        email: "carapia.andre@gmail.com",
        github: "CarapiaAndre",
        location: "Vila Aurora, Itapevi, SP"
    },
    skills: ["HTML", "CSS", "JavaScript", "C#", "SqlServer"],
    biopic: "images/fry.jpg",

    /*
    * @description Display Bio infos replacing the %data% for values and appending in DOM.
    */
    display: function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedName, formattedRole);

        for (var contact in bio.contacts) {
            if (contact.length > 0) {
                console.log(bio.contacts[contact]);
                var formattedGeneric = HTMLcontactGeneric.replace("%contact%", contact);
                formattedGeneric = formattedGeneric.replace(data, bio.contacts[contact]);
                $("#topContacts").append(formattedGeneric);
            }
        }

        var formattedPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(data, skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    jobs: [{
            employer: "Wappa",
            title: "Desenvolvedor BackEnd C#",
            location: "Vila Olímpia, São Paulo",
            dates: " Maio 2015 - Janeiro 2016",
            description: "Lorem: Leverage agile frameworks to provide a robust synopsis for high level overviews. "+
            "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. "+
            "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.."
        },
        {
            employer: "OnTime",
            title: "Web Developer",
            location: "CLI - Itapevi, São Paulo",
            dates: "Outubro 2016 - Atual",
            description: "Lorem: Bring to the table win-win survival strategies to ensure proactive domination. "+
            "At the end of the day, going forward, a new normal that has evolved from generation X is on the runway "+
            "heading towards a streamlined cloud solution. User generated content in real-time will have multiple "+
            "touchpoints for offshoring."
        }
    ],

    /*
    * @description Display Jobs infos replacing the %data% for values and appending in DOM.
    */
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedTitle = HTMLworkTitle.replace(data, job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedDates = HTMLworkDates.replace(data, job.dates);
            var formattedDescription = HTMLworkDescription.replace(data, job.description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
        });
    }
};

var projects = {
    projects: [{
            title: "My first responsive blog.",
            dates: 2017,
            description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. "+
            "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the "+
            "information highway will close the loop on focusing solely on the bottom line.",
            images: ["images/blog-300x400.jpg"]
        },
        {
            title: "Birghton-Times",
            dates: 2017,
            description: "Podcasting operational change management inside of workflows to establish a framework. "+
            "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball "+
            "while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
            images: ["images/brighton-times-300x400.jpg"]
        },
        {
            title: "animal-card",
            dates: 2017,
            description: "Collaboratively administrate empowered markets via plug-and-play networks. "+
            "Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer "+
            "directed convergence without revolutionary ROI.",
            images: ["images/animal-card-300x400.jpg"]
        }
    ],

    /*
    * @description Display Projects infos replacing the %data% for values and appending in DOM.
    */
    display: function() {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            var imgLenght = project.images.length;

            if (imgLenght > 0) {
                for (var img = 0; img < imgLenght; img++) {
                    var formattedImage = HTMLprojectImage.replace(data, project.images[img]);

                    $(".project-entry:last").append(formattedImage);
                }
            }
        });
    }
};

var education = {
    schools: [{
        name: "FATEC",
        location: "Carapicuíba, SP",
        degree: "Bachelor",
        majors: "CS",
        dates: "2014 - 2017",
        url: "http://www.fateccarapicuiba.edu.br/"
    }],
    onlineCourses: [{
        title: "Front-End Web Developer",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com/",
    }],

    /*
    * @description Display Schools and OnlineCourses infos replacing the %data% for values and appending in DOM.
    */
    display: function() {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace(data, school.name);
            var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
            var NameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(NameDegree);

            var formattedDates = HTMLschoolDates.replace(data, school.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace(data, school.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
            $(".education-entry:last").append(formattedMajor);
        });

        education.onlineCourses.forEach(function (course) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedTitle = HTMLonlineTitle.replace(data, course.title);
            var formattedSchool = HTMLonlineSchool.replace(data, course.school);
            var titleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(titleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace(data, course.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedURL = HTMLonlineURL.replace(data, course.url);
            $(".education-entry:last").append(formattedURL);
        });
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

$(document).ready(function() {
    style.checkDisplay();
})

$(window).resize(function() {
    style.checkDisplay();
})
