// array of topics for ID buttons, 
var arrayTopics = ["New Years", "ValentimesDay", "Saint Patricks Day", "Mothers Day", "Easter", "Cinco de Mayo", "Father Day", "4th of July", "Labor Day", "Birthday", "Halloween", "Thanksgiving", "Christmas"];
DispButtons();

// turn array into buttons
function DispButtons(){
    $("#buttons").empty()
    for (var i = 0; i < arrayTopics.length; i++) {
        var button = $("<button>");
        button.text(arrayTopics[i]);
        button.addClass('btn btn-default disp-giph');
        button.val(arrayTopics[i])
        $("#buttons").append(button);
    }
}
    
// create fuction to write new giphs to array
$("#submitNewGiph").on("click", function(){
    var topic = $("#newGiph").val().trim();
    $("#newGiph").val("")
    arrayTopics.push(topic);
    DispButtons();

})
// create an onclick fuction for submit
$(document).on("click", ".disp-giph", function(){
    var thisGiph = $(this).val();
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=ghmXmcCMutd5KXEiiowXnlwVMSL9U7MK&q="+thisGiph+"&limit=10&offset=0&rating=G&lang=en";
    
    $.get(queryUrl)
        .then(function(response){
            console.log(queryUrl);
            console.log(response);

    // $.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// }).done(function(response){
           
    results = response.data;
        
        for(var j=0; j<results.length; j++){
            giphsDiv = $("#giphs");
            $("#gifs").append(giphsDiv);

            rating = $("<div>Rating: " + results[j].rating + "</div>");
            // image element for giph
            gifShow = $("<img>");
            gifShow.attr({
                "data-still": results[j].images.fixed_height_still.url,
                "data-animate": results[j].images.fixed_height.url
                
            })

            // gifShow = $("<img data-state='still' src='" + results[j].images.fixed_height_still.url + "'>");
			// gifShow.attr
			// gifShow.attr(");
            gifShow.addClass("gif");
            
            giphsDiv.append(rating);
            giphsDiv.append(gifShow);
        }
        })
      });        





// Put Api address in ID Giphs
// create fuction to call giphs when button is clicked