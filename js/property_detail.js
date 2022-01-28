window.addEventListener("load", function(){
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const property_id = params.get('property_id');

    var is_interested_image = document.getElementsByClassName("is-interested-image")[0];
    is_interested_image.addEventListener("click", function (event){
        var XHR = new XMLHttpRequest();

        //on success
        XHR.addEventListener("load", toggle_interested_success);

        //on error
        XHR.addEventListener("error", on_error);

        //set up request
        XHR.addEventListener("GET", "api/toggle_interested.php?property_id=" + property_id);

        //initiate the request
        XHR.send();

        document.getElementById("loading").addEventListener.style.display = 'block';
        event.preventDefault();
    });
});

var toggle_interested_success = function(event){
    
}