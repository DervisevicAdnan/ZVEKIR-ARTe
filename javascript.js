$(function(){
	//slideshow
	var a=1;
	var t=setInterval(function(){
		if(a!=5){
			$("#prikazS").animate({left:"-=960px"},1000);
			a++;
		}else{
			$("#prikazS").animate({left:"+=3840px"},1000);
			a=1;
		}
	},5000);
	$("#prikaz").mouseenter(function(){
		clearInterval(t);
	});
	$("#prikaz").mouseleave(function(){
		t=setInterval(function(){
			if(a!=5){
				$("#prikazS").animate({left:"-=960px"},1000);
				a++;
			}else{
				$("#prikazS").animate({left:"+=3840px"},1000);
				a=1;
			}
		},5000);
	});
})

function otvoriSliku(a){
	var slika=document.getElementsByClassName('myImg')[a];
	document.getElementById("myModal").style.display = "block";
	document.getElementById("img01").src = slika.src;
	document.getElementById("caption").innerHTML = slika.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  document.getElementById("myModal").style.display = "none";
}