var work = {
  "jobs": [
    {
      "employer": "Wappa",
      "title": "C# .Net BackEnd Developer",
      "dates": 2015,
      "description": "Eight months working with .Net plataform."
    },
    {
      "employer": "OnTime",
      "title": "Web Developer",
      "dates": 2016,
      "description": "My actual work, I'm FullStack Developer, working with SQL Server, C#, JavaScript, CSS and HTML"
    }
  ]
};

var projects = {
  "projects": [
    {
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
  ]
};

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

projects.display();

var bio = {
  "name": "André Carapiá",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(11) 97132-6276",
    "e-mail": "carapia.andre@gmail.com",
    "github": "CarapiaAndre",
    "location": "Itapevi, SP"
  },
  "skills": ["C#", "HTML", "CSS", "JavaScript", "SqlServer"],
  "biopic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "FATEC",
      "location": "Carapicuíba, SP",
      "degree": "Bachelor",
      "dates": 2015,
      "url": "http://www.fateccarapicuiba.edu.br/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/"
    }
  ]
};



//topContacts

for(contact in bio.contacts) {
  console.log(bio.contacts[contact]);
  var formattedGeneric = HTMLcontactGeneric.replace("%contact%", contact);
  formattedGeneric = formattedGeneric.replace("%data%", bio.contacts[contact]);
  $("#topContacts").append(formattedGeneric);
}

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

if(bio.skills.length > 0 ){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}

for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
}

work.displayWork = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedName, formattedRole);
}

work.displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name.join(" ");
}

$("#mapDiv").append(googleMap);
