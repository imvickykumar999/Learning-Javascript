
function fun() {
    var dict = {
        geek: 1,
        for: "2",
        geeks: 3.5,
    };

    dict.new_geeks = "new_value";
    dict["another_new_geeks"] =
    "another_value";

    var to_show = "var dict = { <br>";

    for (var key in dict) {
        to_show += '"' + key + '" : '
        + dict[key] + "<br>";
    }

    to_show += " }; <br>";

    document.getElementById("demo")
    .innerHTML = to_show;
}