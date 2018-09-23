"use strict";

$(document).ready(() => {
    let allUnfinished = 0;
    let allFinished = 0;
    let allSuperFinished = 0;

    const converter = new showdown.Converter({
        "noHeaderId": true,
        "tasklists": true
        // "headerLevelStart": 3,
    });

    const getData = (filePath, id) => {
        $.get(filePath, (data, status) => {
            if (status !== "success") {
                alert("Cannot download data from " + filePath);
                return null;
            } else {

                let dataArray = data.split("\n# ");
                dataArray.shift();
                dataArray = dataArray.map(val => "# " + val);

                const ids = ["#math", "#theory", "#programming", "#engineering"];
                dataArray.forEach(((val, index) => $(ids[index]).html(converter.makeHtml(val))));
                css();

                const headers = ["#math-tab > code", "#theory-tab > code", "#programming-tab > code", "#engineering-tab > code"];

                $(".subject").each((index, tab) => countQuestions(tab, headers[index]));
                $(".text-success").parent().parent().parent().addClass("finish");
            }
        });
    };

    const countQuestions = (tab, header) => {
        const unfinished = $(tab).find("h2").length;
        const finished = $(tab).find("h3").length;
        const superFinished = $(tab).find("h4").length;
        $(header).text("(" + superFinished + "/" + (finished + superFinished) + "/" + (unfinished + finished + superFinished) + ")");
        allUnfinished += unfinished;
        allFinished += finished;
        allSuperFinished += superFinished;
    };

    const css = () => {
        let link = $("<a class='btn btn-link btn-sm btn-block text-left' role='button' data-toggle='collapse' style='white-space: normal; text-decoration: none'/>");
        $("h1").addClass("m-3 text-center");
        $("h2").addClass("text-danger");
        $("h3").addClass("text-info");
        $("h4").addClass("text-success");

        $(".tab-pane h1").addClass("subject-header");

        $(".subject-header").each((index, elem) => $(elem).nextUntil(".subject-header").addBack().wrapAll("<div class='subject accordion'/>"));

        $(".subject > h2").wrap("<div class='card-header p-0'/>").wrap(link);
        $(".subject > h3").wrap("<div class='card-header p-0'/>").wrap(link);
        $(".subject > h4").wrap("<div class='card-header p-0'/>").wrap(link);

        // $(".subject").each((index, accordion) => {
        //     while ($(accordion).children(".card-header").length > 0) {
        //         let collapse = $("<div class='collapse'/>", {"data-parent": "#main-accordion-" + index});
        //
        //         $(".subject > .card-header").first().nextUntil(".card-header").wrapAll(collapse).wrapAll("<div class='card-body'/>");
        //         $(".subject > .card-header").first().nextUntil(".card-header").addBack().wrapAll("<div class='card'/>")
        //     }
        // });

        $(".card-header").each((index, cardHeader) => {
            let collapse = $("<div class='collapse'/>", {"data-parent": "#main-accordion-" + index});
            $(cardHeader).first().nextUntil(".card-header").wrapAll(collapse).wrapAll("<div class='card-body'/>");
            $(cardHeader).first().nextUntil(".card-header").addBack().wrapAll("<div class='card'/>")
        });


        $(".subject > .card").each((index, card) => {
            $(card).children(".card-header").children("a").attr("href", "#index-" + index);
            $(card).children(".collapse").attr("id", "index-" + index);
        });
    };

    getData("sources/master.md");
    // getData("sources/theory.md", "#theory", "#theory-tab > code");
    // getData("sources/programming.md", "#programming", "#programming-tab > code");
    // getData("sources/engineering.md", "#engineering", "#engineering-tab > code");

    $("#collapse-show").click(() => $(":not(.finish) > .collapse").collapse('show'));
    $("#collapse-hide").click(() => $(".collapse").collapse('hide'));

    $( document ).ajaxComplete(() => $(".subject-header").click((event) => {

    }));

    const makeWide = target => {
        const isWide = $(target).hasClass("f-3");

        $(".tab-pane").removeClass("f-3");

        $(".subject .card-header").addClass("darker");

        $(".subject .text-success").addClass("text-success-dark");
        $(".subject .text-danger").addClass("text-danger-dark");
        $(".subject .text-info").addClass("text-info-dark");

        $(target).find(".card-header").removeClass("darker");

        if (isWide) {
            $(target).removeClass("f-3");
            $(".subject .card-header").removeClass("darker");

            $(".subject .text-success").removeClass("text-success-dark");
            $(".subject .text-danger").removeClass("text-danger-dark");
            $(".subject .text-info").removeClass("text-info-dark");
        } else {
            $(target).addClass("f-3");

            $(target).find(".text-success").removeClass("text-success-dark");
            $(target).find(".text-danger").removeClass("text-danger-dark");
            $(target).find(".text-info").removeClass("text-info-dark");
        }
    };

    $(".nav-item").click(event => {
        event.preventDefault();

        $(".nav-item").removeClass("active");
        $(event.currentTarget).addClass("active");

        makeWide($(event.currentTarget).attr("href"));
    });

    $( document ).ajaxComplete(() => $("#all-results").text("(" + allSuperFinished + "/" + (allFinished + allSuperFinished) + "/" + (allUnfinished + allFinished + allSuperFinished) + ")"));
});
