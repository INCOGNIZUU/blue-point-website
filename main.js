$(document).ready(function () {
    $("#slide1").click(function () {
        $("#slide1 p").slideToggle("slow");
        if ($("#slide1 i").hasClass("fa-caret-right")) {
            $("#slide1 i").removeClass("fa-caret-right");
            $("#slide1 i").addClass("fa-caret-down");
        } else if ($("#slide1 i").hasClass("fa-caret-down")) {
            $("#slide1 i").removeClass("fa-caret-down");
            $("#slide1 i").addClass("fa-caret-right");
        }
    });
    $("#slide2").click(function () {
        $("#slide2 p").slideToggle("slow");
        if ($("#slide2 i").hasClass("fa-caret-right")) {
            $("#slide2 i").removeClass("fa-caret-right");
            $("#slide2 i").addClass("fa-caret-down");
        } else if ($("#slide2 i").hasClass("fa-caret-down")) {
            $("#slide2 i").removeClass("fa-caret-down");
            $("#slide2 i").addClass("fa-caret-right");
        }
    });
    $("#slide3").click(function () {
        $("#slide3 p").slideToggle("slow");
        if ($("#slide3 i").hasClass("fa-caret-right")) {
            $("#slide3 i").removeClass("fa-caret-right");
            $("#slide3 i").addClass("fa-caret-down");
        } else if ($("#slide3 i").hasClass("fa-caret-down")) {
            $("#slide3 i").removeClass("fa-caret-down");
            $("#slide3 i").addClass("fa-caret-right");
        }
    });
    $("#slide4").click(function () {
        $("#slide4 p").slideToggle("slow");
        if ($("#slide4 i").hasClass("fa-caret-right")) {
            $("#slide4 i").removeClass("fa-caret-right");
            $("#slide4 i").addClass("fa-caret-down");
        } else if ($("#slide4 i").hasClass("fa-caret-down")) {
            $("#slide4 i").removeClass("fa-caret-down");
            $("#slide4 i").addClass("fa-caret-right");
        }
    });
});
