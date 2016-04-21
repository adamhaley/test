(function(){
	var resultsTpl = $("#results-tpl").html()
	, $el = $("#results-container")
	, apiUrl = 'http://api.themoviedb.org/3/search/movie?api_key=51a0abce642402e7b8d43b2081302e77'
	;

	$("form").on("submit",function(e){
		e.preventDefault()
		var queryText = $("#search-query").val();
		console.log(queryText);

		$.ajax({
			type: 'GET',
			url: apiUrl + '?query=' + queryText,
			async: false,
			jsonpCallback: 'jsonpCallback',
			contentType: 'application/json',
			dataType: 'jsonp',
			success: function(data) {
				console.dir(data);
				console.log(data.results);
				var html = Mustache.to_html(resultsTpl,data);
				$el.html(html);
			},
			error: function(e) {
				console.log(e.message);
			}

		});

	});

	
})();