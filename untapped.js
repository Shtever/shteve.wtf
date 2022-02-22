// UNTAPPED API Functions
var clientID = "client_id=FC8119633681CAC495EBE7A545DFE9E44106539F&client_secret=191A6A679166A61D170CBF54E8F5D7CA3CAF0F42";


// $(document).ready(userInfo())

document.onload = userInfo();


function submit() {
    console.clear()
    var beerName = document.getElementById('beerName').value;
    console.log(beerName);
    beerSearch();
}


function beerSearch() {
    // BEER BY ID //
    // var queryURL = "https://api.untappd.com/v4/beer/info/16630?" + "&" + clientID //

    // BEER BY SEARCH TERM //
    var queryURL = "https://api.untappd.com/v4/search/beer?q=" + beerName.value + "&limit=50&sort=beer_name&" + clientID

    // Ajax call to Untappd
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.response)
    })
}

// USER INFO //
function userInfo() {
    //Usernames//
    var userName = ["Mr_JFlow", "Quille","Shtevetm"]
    for (let i = 0; i<userName.length; i++){
    var queryURL = "https://api.untappd.com/v4/user/info/" + userName[i] + "?" + clientID

    // Ajax call to Untappd //
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var userNameResult = response.response.user.user_name
        var beerNameResult = response.response.user.recent_brews.items[0].beer.beer_name
        console.log(userNameResult);
        console.log(beerNameResult);
    });
    }



}