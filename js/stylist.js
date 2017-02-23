var style = {
    /*
    * @description Customize css of #main.
    */
    main: function() {
        $("#main").css("max-width","1200px");
        $("#main").css("margin-right","auto");
        $("#main").css("margin-left","auto");

        $("h2").css("width","100%");
    },
    /*
    * @description Add respnsive bootstrap class of .work-entry.
    */
    work: function() {
        $(".work-entry").addClass("col-md-6");
    },
    /*
    * @description Add responsive bootstrap class of #projects.
    */
    projects: function() {
        $("#projects").css("margin-bottom","2em");
        $(".project-entry").addClass("col-xs-12 col-md-4");
        $(".project-entry").children($("img")).addClass("img-responsive");
        $(".project-entry").children($("img")).addClass("center-block");

        $(".date-text").addClass("col-md-12")
    },
    /*
    * @description Add white color to sibling of #name.
    */
    bio: function() {
      $("#name").next().css("color","#fff");
    },
    /*
    * @description Change the css for responsivity.
    */
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
    /*
    * @description When the windows is resized check the size for responsivity .
    */
    checkDisplay: function() {
        if($(window).width() <= 450) {
            style.responsive.xSmall();
        }
        else {
            style.responsive.large();
        }
    }
}
