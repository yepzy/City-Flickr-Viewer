$(document).ready(function () {
//    Récupere l'id de la commune 
//    https://api.flickr.com/services/rest/?&method=flickr.places.find&query=COMMUNE&api_key= &format=json&per_page=1

//récupération des url des photo https://www.flickr.com/services/api/misc.urls.html

//récupération info photo https://api.flickr.com/services/rest/?&method=flickr.photos.search&place_id=ujh96DNXU7nOPuo&api_key=9045f599f81c0769d9ecc62257b2a1c8&format=json&per_page=10
    var api_key = "9045f599f81c0769d9ecc62257b2a1c8"
//    $("#search").on('click', function () {
//        if ($('#commune').val() !== "") {
//            $.ajax({
//                url: 'https://api.flickr.com/services/rest/',
//                type: 'GET',
//                dataType: 'json',
//                jsoncallback: 'jsonp_callback',
//                data: 'method=flickr.places.find&query=' + $('#commune').val() + '&api_key=' + api_key + '&format=json',
//                success: function (codeHtmlSucces, statut) {
//                    console.log("key")
//                    if (codeHtmlSucces.length === 0) {
//                        $("#result").append("Aucun résultat trouvé")
//                    } else {
//                        
//                    }
//                },
//                error: function (resultat, statut) {
//                     console.log(statut)
//                    $('#result').text(resultat)
//                }
//            })
//        } else {
//            alert("Vous n'avez rien saisie")
//        }
//    })
    $("#search").on('click', function () {
        if ($('#commune').val() !== "") {
            $.getJSON('https://api.flickr.com/services/rest/?method=flickr.places.find&query=' + $('#commune').val() + '&api_key=' + api_key + '&format=json&jsoncallback=?', function (data) {
                $.each(data.places.place, function (key, val) {
                    $.each(val,function(k,v){
                        $("#result").append(v+"<br>")
                    })
                })
            })
        } else {
            alert("Vous n'avez rien saisie")
        }
    })
})