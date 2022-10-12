var urlToGetAllOpenBugs = "https://api.github.com/repos/jquery/jquery/issues?state=open&labels=bug";

$(document).ready(function () {
    $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
        $("div").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function (i, issue) {
            $("div")
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
                .append("created at: " + issue.created_at + "</br>")
                .append(issue.body + "</br></br></br>");
        });
    });
});
