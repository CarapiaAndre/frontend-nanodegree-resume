var style = {
    main: function() {
        $("#main").css("max-width","1200px");
        $("#main").css("margin-right","auto");
        $("#main").css("margin-left","auto");

        $("h2").css("width","100%");
    },
    work: function() {
        $("#workExperience").css("margin-bottom", "2em");
        $("#workExperience").css("display", "flex");
        $("#workExperience").css("flex-wrap", "wrap");
        $("#workExperience").css("max-width", "100%");
    },
    projects: function() {
        $("#projects").css("flex-wrap","wrap");
        $("#projects").css("max-width","100%");
        $("#projects").css("display", "flex");
        $("#projects").css("box-sizing","border-box");
        $("#projects").css("margin-bottom","2em");

        $(".project-entry").css("padding","0");
        $(".project-entry").css("margin","0 1em");
        $(".project-entry").css("max-width","400px");
        $(".project-entry").css("text-align","center");
        $(".project-entry").css("box-shadow","1px 1px 5px #000");

        $(".date-text").css("width","100%");
    },
    responsive: {
        small: function() {
            console.log("small");
            $(".project-entry").css("width","100%");
        },
        large: function() {
            console.log("large");
            $(".project-entry").css("max-width","33.3%");
        }
    },
    checkDisplay: function() {
        if($(window).width() <= 1120) {
            style.responsive.small();
        }
        else {
            style.responsive.large();
        }
    }
}
