$(document).ready(function () {
	$('.submit').click(function(event) {
		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.msg').val()
		var statusElm = $('.status')
		statusElm.empty();
		
		if (email.length > 5 && email.includes('@') && email.includes('.')) {
				statusElm.append("");
		} else {
				statusElm.append("<div>email is not valid</div>");
				event.preventDefault();
		}
		
		if (subject.length >= 2) {
			statusElm.append("");
		} else {
			statusElm.append("<div>Subject requires atleast 2 characters.</div>");
			event.preventDefault();
		}
		
		if (message.length >= 5) {
			statusElm.append("<div>Message has been sent!</div>");
		} else {
			statusElm.append("<div>Message requires 5 characters of content.</div>");
			event.preventDefault();
		}
	})
});