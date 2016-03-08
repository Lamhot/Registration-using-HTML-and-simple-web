$(document).ready(function() {
	$(".reg-input, .sel-input").focus(function() {
		var theinput = $(this).attr("id");
		var thenote  = "#note-"+theinput;
		
		$(thenote).fadeIn("fast");
	});
	
	$(".reg-input").blur(function(){
		var theinput = $(this).attr("id");
		var thenote  = "#note-"+theinput;
		var currval  = $(this).val();
		
		if(currval == "" || currval == " ") {
			$(thenote).fadeOut("fast");
		} else {
			// tidak ada aksi'
		}
	});
});