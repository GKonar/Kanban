var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2949',
  'X-Auth-Token': 'bad99bb4c2476702b90bbe39b252e090'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({						//funkcja odpytuje serwer o zasób tablicy
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);		//po odebraniu odpowiedzi przechodzimy do tworzenia kolumn z tą ta funkcja
    }										//tutaj
});

//Funkcja poniżej musi stworzyć tyle kolumn ile dostaliśmy w odpowiedzi z serwera
//następnie każdą z tych kolumn musi przypiąć do tablicy(tej na stronie) (ale jak??)
function setupColumns(columns) {			
    columns.forEach(function (column) {		//dla każdego elementu(kolumny) ma się wykonać pewna funkcja.
    	var col = new Column(column.id, column.name); // Ta funkcja musi stworzyć kolumnę i dodać ją do tablicy
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}
