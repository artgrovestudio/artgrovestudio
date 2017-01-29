$(document).ready(function() {
	$('#content a.contact').click(function(){
		$.ajax({  
			url: "contact.html",  
			cache: false,  
			success: function(html){  
				$("#content").html(html);  
				history.pushState({}, 'title', '/contact.html');
			}
		});
	});
});