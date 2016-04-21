(function(){
	var resultsTpl = $("#results-tpl").html()
	, $el = $("#results-container")
	;


	$.get("data/movies.json",function(data){
		console.log(data.results);
		var html = Mustache.to_html(resultsTpl,data);
		$el.html(html);

	});

})();