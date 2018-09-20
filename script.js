"use strict";

$(document).ready(() => {
    let allUnfinished = 0;
    let allFinished = 0;
    let allSuperFinished = 0;

    const converter = new showdown.Converter({
        "noHeaderId": true,
        "headerLevelStart": 3,
        "tasklists": true
    });

    const getData = (filePath, id, tab) => {
        $.get(filePath, (data, status) => {
            if (status !== "success") {
                alert("Cannot download data from " + filePath);
                return null;
            } else {
                $(id).children(".accordion").html(converter.makeHtml(data));
                countQuestions(tab);
                css();
                $("h6.text-success").parent().parent().parent().addClass("finish");
            }
        });
    };

    const countQuestions = tab => {
        const unfinished = $(".accordion > h4").length;
        const finished = $(".accordion > h5").length;
        const superFinished = $(".accordion > h6").length;
        $(tab).text("(" + superFinished + "/" + (finished + superFinished) + "/" + (unfinished + finished + superFinished) + ")");
        allUnfinished += unfinished;
        allFinished += finished;
        allSuperFinished += superFinished;
    };

    const css = () => {
        let link = $("<a class='btn btn-link btn-sm btn-block text-left' role='button' data-toggle='collapse' style='white-space: normal; text-decoration: none'/>");
        $("h3").addClass("m-3 text-center");
        $("h4").addClass("text-danger");
        $("h5").addClass("text-info");
        $("h6").addClass("text-success");

        $(".accordion > h4").wrap("<div class='card-header p-0'/>").wrap(link);
        $(".accordion > h5").wrap("<div class='card-header p-0'/>").wrap(link);
        $(".accordion > h6").wrap("<div class='card-header p-0'/>").wrap(link);

        $(".accordion").each((index, accordion) => {
            while ($(accordion).children(".card-header").length > 0) {
                let collapse = $("<div class='collapse'/>", {"data-parent": "#main-accordion-" + index});

                $(".accordion > .card-header").first().nextUntil(".card-header").wrapAll(collapse).wrapAll("<div class='card-body'/>");
                $(".accordion > .card-header").first().nextUntil(".card-header").addBack().wrapAll("<div class='card'/>")
            }
        });

        $(".accordion > .card").each((index, card) => {
            $(card).children(".card-header").children("a").attr("href", "#index-" + index);
            $(card).children(".collapse").attr("id", "index-" + index);
        });
    };

    getData("sources/math.md", "#math", "#math-tab > code");
    getData("sources/theory.md", "#theory", "#theory-tab > code");
    getData("sources/programming.md", "#programming", "#programming-tab > code");
    getData("sources/engineering.md", "#engineering", "#engineering-tab > code");

    $("#collapse-show").click(() => $(":not(.finish) > .collapse").collapse('show'));
    $("#collapse-hide").click(() => $(".collapse").collapse('hide'));
    $( document ).ajaxComplete(() => $("#all-results").text("(" + allSuperFinished + "/" + (allFinished + allSuperFinished) + "/" + (allUnfinished + allFinished + allSuperFinished) + ")"));
});
