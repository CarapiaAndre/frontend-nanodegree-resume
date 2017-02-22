var style = {
    main: function() {
        $("#main").css("max-width","1200px");
        $("#main").css("margin-right","auto");
        $("#main").css("margin-left","auto");

        $("h2").css("width","100%");
    },
    work: function() {
        $(".work-entry").addClass("col-md-6");
    },
    projects: function() {
        $("#projects").css("margin-bottom","2em");
        $(".project-entry").addClass("col-xs-12 col-md-4");
        $(".project-entry").children($("img")).addClass("img-responsive");
        $(".project-entry").children($("img")).addClass("center-block");

        $(".date-text").addClass("col-md-12")
    },
    bio: function() {
      $("#name").next().css("color","#fff");
    },
    responsive: {
        xSmall: function() {
            console.log("small");
            $("#name").next().css("display","block");
            $("#mapDiv").css("display","none");
        },
        large: function() {
            console.log("large");
            $("#name").next().css("display","inline");
            $("#mapDiv").css("display","block");
        }
    },
    checkDisplay: function() {
        if($(window).width() <= 450) {
            style.responsive.xSmall();
        }
        else {
            style.responsive.large();
        }
    }
}
