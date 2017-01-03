
function character_detail(searchInput){
    var searchInput = document.getElementById("searchInputchar").value
    console.log(searchInput)
    $.getJSON( "http://swapi.co/api/people/" + searchInput + '/', function ( swapi ) {
    console.log(swapi.name)
    var name = ( "Name : " + swapi.name);
    var height = ("Height : " + swapi.height);
    var mass = ("Mass : " + swapi.mass);
    var hair_color = ("Hair Color : " + swapi.hair_color);
    var skin_color = ("Skin Color : " + swapi.skin_color);
    var eye_color = ("Eye Color : " + swapi.eye_color);
    var birth_year = ("Birth Year : " + swapi.birth_year);
    var gender = ("Gender : " + swapi.gender);
    var species = ("Species : " + swapi.species)
    var homeworld = ("Homeworld : " + swapi.homeworld)
    var movie_list = [];
    for(i = 0; i < swapi.films.length; i++){
        movie_list[movie_list.length] = (swapi.films[i] + '<br>')};
    var vehicle_list = [];
    for(i = 0; i < swapi.vehicles.length; i++){
        vehicle_list[vehicle_list.length] = (swapi.vehicles[i] + '<br>')};
    var starship_list = [];
    for(i = 0; i < swapi.starships.length; i++){
        starship_list[starship_list.length] = (swapi.starships[i] + '<br>')};
    $('#header').html("This character's stats are: ") + $('#p1').html(name) + $('#p2').html(height) + $('#p3').html(mass) +
    $('#p4').html(hair_color) + $('#p5').html(skin_color) + $('#p6').html(eye_color) +
    $('#p7').html(birth_year) + $('#p8').html(gender) + $('#p9').html(species) +
    $('#p10').html(homeworld)
    $('#list').html(movie_list) + $('#listheader').html("This character was in these movies: ");
    $('#list2').html(vehicle_list) + $('#list2header').html("This character has driven these vehicles: ");
    $('#list3').html(starship_list) + $('#list3header').html("This character has flown these starships: ");
})}

function character_list(){
    var character_list = []
    for(i = 1; i < 10; i++){
        $.getJSON( "http://swapi.co/api/people/?page=" + i, function( swapi ){
            for(i = 0; i < 90 ; i++){
                character_list[character_list.length] = (swapi.results[i].name + '<br>');
    $('#list').html(character_list);
}})}}

function vehicle_list(){
    var vehicle_list = []
    for(i = 1; i < 5; i++){
        $.getJSON( "http://swapi.co/api/vehicles/?page=" + i, function( swapi ){
            for(i = 0; i < 40; i++){
                vehicle_list[vehicle_list.length] = (swapi.results[i].name + '<br>');
    $('#list').html(vehicle_list);
}})}}

function vehicle_detail(){
    var searchInput = document.getElementById("searchInputveh").value
    $.getJSON( "http://swapi.co/api/vehicles/" + searchInput + '/', function ( swapi ) {
        var name = ( "Name : " + swapi.name);
        var model = ("Model : " + swapi.model);
        var manufacturer = ("Manufacturer : " + swapi.manufacturer);
        var vehicle_class = ("Vehicle Class : " + swapi.vehicle_class);
        var cost = ("Cost In Credits : " + swapi.cost_in_credits);
        $('#header').html("This vehicle's stats are: ") + $('#p1').html(name) + $('#p2').html(model) + $('#p3').html(manufacturer) +
        $('#p4').html(vehicle_class) + $('#p5').html(cost) + $('#p6').html('') + $('#p7').html('') + $('#p8').html('') + $('#p9').html('') +
        $('#p10').html('')
        $('#list').html('') + $('#listheader').html('')
        $('#list2').html('') + $('#list2header').html('')
        $('#list3').html('') + $('#list3header').html('')
})}

function film_list(){
    var film_list = []
    $.getJSON( "http://swapi.co/api/films/", function ( swapi ) {
        for(i = 0; i < 8; i++){
        film_list[film_list.length] = (swapi.results[i].title + '<br>');
    $('#list').html(film_list)
}})}

function film_detail(){
    var searchInput = document.getElementById("searchInputfilm").value
    $.getJSON( "http://swapi.co/api/films/" + searchInput + '/', function ( swapi ) {
        var title = ( "Title : " + swapi.title);
        var director = ("Director : " + swapi.director);
        var producer = ("Producer : " + swapi.producer);
        var release_date = ("Release Date : " + swapi.release_date);
        var opening = ("Opening Crawl : " + swapi.opening_crawl);
        $('#header').html("This films stat's are: ") + $('#p1').html(title) + $('#p2').html(director) + $('#p3').html(producer) +
        $('#p4').html(release_date) + $('#p5').html(opening) + $('#p6').html('') + $('#p7').html('') + $('#p8').html('') + $('#p9').html('') +
        $('#p10').html('')
        $('#list').html('') + $('#listheader').html('')
        $('#list2').html('') + $('#list2header').html('')
        $('#list3').html('') + $('#list3header').html('')
})}

function filmsbyId(list_urls){
    var list_films = list_urls
    for(var i=0; i<list_films.length; i++){
    $.ajax(list_films[i]).done(function(results){
        $('#films').html($('#films').html() + '<br>' + results['title'] )
})}}

$("#allVehicles").click(vehicle_list)
$("#allCharacters").click(character_list)
$("#allFilms").click(film_list)
$("#submitchar").click(character_detail)
$("#submitveh").click(vehicle_detail)
$("#submitfilm").click(film_detail)
