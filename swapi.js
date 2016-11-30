
function character_detail(searchInput){
    $.getJSON( "http://swapi.co/api/people/", function ( swapi ) {
    var name = ( "Name : " + swapi.results[searchInput].name);
    var height = ("Height : " + swapi.results[searchInput].height);
    var mass = ("Mass : " + swapi.results[searchInput].mass);
    var hair_color = ("Hair Color : " + swapi.results[searchInput].hair_color);
    var skin_color = ("Skin Color : " + swapi.results[searchInput].skin_color);
    var eye_color = ("Eye Color : " + swapi.results[searchInput].eye_color);
    var birth_year = ("Birth Year : " + swapi.results[searchInput].birth_year);
    var gender = ("Gender : " + swapi.results[searchInput].gender);
    var species = ("Species : " + swapi.results[searchInput].species)
    var homeworld = ("Homeworld : " + swapi.results[searchInput].homeworld)
    var movie_list = [];
    for(i = 1; i < swapi.results[searchInput].films.length; i++){
        movie_list[movie_list.length] = (swapi.results[searchInput].films[i] + '<br>')};
    var vehicle_list = [];
    for(i = 1; i < swapi.results[searchInput].vehicles.length; i++){
        vehicle_list[vehicle_list.length] = (swapi.results[searchInput].vehicles[i] + '<br>')};
    var starship_list = [];
    for(i = 1; i < swapi.results[searchInput].starships.length; i++){
        starship_list[starship_list.length] = (swapi.results[searchInput].starships[i] + '<br>')};
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

function film_list(){
    var film_list = []
    $.getJSON( "http://swapi.co/api/films/", function ( swapi ) {
        for(i = 0; i < 8; i++){
        film_list[film_list.length] = (swapi.results[i].title + '<br>');
    $('#list').html(film_list)
}})}
character_detail(0)
