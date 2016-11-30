function full_character_JSON(){
    for(i = 1; i < 10; i++){
        $.getJSON( "http://swapi.co/api/people/?page=" + i, function( swapi ){}
)}}


function character_detail(searchInput){
    swapi = full_character_JSON()
    console.log(swapi)
    var name = ( "Name : " + swapi.results[searchInput].name);
    var height = ("Height : " + swapi.results[searchInput].height);
    var mass = ("Mass : " + swapi.results[searchInput].mass);
    var hair_color = ("Hair Color : " + swapi.results[searchInput].hair_color);
    var skin_color = ("Skin Color : " + swapi.results[searchInput].skin_color);
    var eye_color = ("Eye Color : " + swapi.results[searchInput].eye_color);
    var birth_year = ("Birth Year : " + swapi.results[searchInput].birth_year);
    var gender = ("Gender : " + swapi.results[searchInput].gender);
    $('header').html("Your character's stats are: ") + $('#p1').html(name) + $('#p2').html(height) + $('#p3').html(mass) +
    $('#p4').html(hair_color) + $('#p5').html(skin_color) + $('#p6').html(eye_color) +
    $('#p7').html(birth_year) + $('#p8').html(gender);
}


function character_list(){
    var character_list = []
    for(i = 1; i < 10; i++){
        $.getJSON( "http://swapi.co/api/people/?page=" + i, function( swapi ){
            for(i = 0; i < 90 ; i++){
                character_list[character_list.length] = (swapi.results[i].name + '<br>');
    $('#list').html(character_list);
}})}}

// function character_detail(searchInput){
//     $.getJSON( "http://swapi.co/api/vehicle/", function ( swapi ) {
//     var name = ( "Name : " + swapi.results[searchInput].name);
//     var height = ("Height : " + swapi.results[searchInput].height);
//     var mass = ("Mass : " + swapi.results[searchInput].mass);
//     var hair_color = ("Hair Color : " + swapi.results[searchInput].hair_color);
//     var skin_color = ("Skin Color : " + swapi.results[searchInput].skin_color);
//     var eye_color = ("Eye Color : " + swapi.results[searchInput].eye_color);
//     var birth_year = ("Birth Year : " + swapi.results[searchInput].birth_year);
//     var gender = ("Gender : " + swapi.results[searchInput].gender);
//     $('header').html("Your character's stats are: ") + $('#p1').html(name) + $('#p2').html(height) + $('#p3').html(mass) +
//     $('#p4').html(hair_color) + $('#p5').html(skin_color) + $('#p6').html(eye_color) +
//     $('#p7').html(birth_year) + $('#p8').html(gender);
// })}


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
    $('#list').html(film_list);
}})}

character_detail(60)
