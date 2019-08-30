$(document).ready(function() {

    let count = 20;
    let quantity = $("#quanity1").val().trim();

    $("button").on("click", function () {

        console.log("clicked!");
        count --;

        $("#purchasedItems").append("<p>Test</p>")

        if(count == 0){

            console.log("Out of Stock");
        }
        
    })

}); 