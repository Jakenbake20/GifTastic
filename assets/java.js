$(document).ready(function() {

    var displayedButtons=["Iron Man", "Batman", "Doctor Strange"]

    function displayImg(){

        $("#display-images").empty();
        var input = $(this).attr("data-name")
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=WoDJUo0zEM9N7wCo82yN8hVD3bpIHZXK";

        $.ajax({
            url: queryURL,
            method: "Get"
        }).done(function(response) {

            for (var j = 0; j<limit; j++){

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[j].images.original_still.url);
                image.attr("data-still", response.data[j].images.original_still.url);
                image.attr("data-animate", response.data[j].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = response.data[j].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating)

                $("#display-images").append(displayDiv);
            }
        });

    }

    function renderButtons(){

        $("display-buttons").empty();

        for (var i=0; i < displayedButtons.length; i++){

            var newButton = $("<button>")
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input")
            newButton.att("data-name", displayedButtons[i]);
            newButton.text(displayedButtons[i]);
            $("#display-buttons").append(newButton);
        }
    }