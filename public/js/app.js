$(document).ready(function() {

    let count = 20;

    $("button").on("click", function () {

        console.log("clicked!");
        count --;

        if(count == 0){

            console.log("Out of Stock");
        }
        
    })

}); 