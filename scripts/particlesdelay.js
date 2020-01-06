$(document).ready(function() {
	function loadParticles(){
    $.getScript("./scripts/particles.js");
	}
	
	function animationsFinished(){
		//show scrollbar
		document.body.style.overflowY = 'auto';
		document.documentElement.style.overflowY = 'auto';
		document.body.style.position = 'absolute';
		//enable nav links
		$("#aboutmelink").attr("href", "#aboutme");
		$("#portfoliolink").attr("href", "#portfolio");
		
		//footer links
		$("#githublink").attr("href", "https://www.github.com/J4FZ/");
		$("#linkedinlink").attr("href", "https://www.linkedin.com/in/jayfrayz/");
		$("#cvlink").attr("href", "./files/JamesFrazerCV.pdf");
		
		//re-show correct cursor
		$("a").css("cursor", "pointer");
	}
	
	
	setTimeout(loadParticles, 2750)
	setTimeout(animationsFinished, 8000)
});