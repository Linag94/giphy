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
            console.log(response)
        })
})


// Put Api address in ID Giphs
// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/random?api_key=ghmXmcCMutd5KXEiiowXnlwVMSL9U7MK&tag=&rating=G",
//     dataType: 'jsonp',
//     success: function(results){
//         console.log(results);
//     }
// });
// create fuction to call giphs when button is clicked