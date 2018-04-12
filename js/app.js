$(document).ready(function(){

	// The magic goes here
	var main = $('#main');
	var pokemon;

	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/5/',
		type: 'GET',
		dataType: 'JSON',
		success: handleResponse
	})

function handleResponse(response){

	pokemon = response;
		var listItem = 
		'<div class="pokemon-card">' +
			'<div class="row">' +
				'<div class="col-md-3">' +
					'<img src="' + pokemon.sprites.front_default + '" class="pokemon-img">' +
				'</div>' +
				'<div class="col-md-8">' +
					'<div class="pokemon-details">' +
					'<h2 class="name">' + pokemon.name + '</h2>' +
					'<p class="name"><strong>Tipo:</strong>' + pokemon.types[0].type.name + '</p>' +
				//	'<p class="name"><strong>Descripción:</strong>' + pokemon. + '</p>' +
					'</div>' + 
				'</div>' +
			'</div>' +
		'</div>';
		main.append(listItem);
		showPokemon(pokemon)
	
}

function showPokemon(pokemon){
	console.log(pokemon.name)
}

	// if(response.success){
	// 	var pokemon = response.forms;

	// 	var listItem = 
	// 	'<div class="pokemon-card">' +
	// 		'<div class="row">' +
	// 			'<div class="col-md-3">' +
	// 				'<h2 class="name">' + pokemon.name + '</h2>'
	// 			'</div>' +
	// 		'</div>' +
	// 	'</div>';
	// 	main.append(listItem);
	// } else {
	// 	console.log('An error was ocurred when remote Datas were coming.');
	// }
});




