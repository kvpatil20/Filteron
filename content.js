
var comments, positive, negative;
var positive = ["good", "awesome", "great", "loved", "ingenious", "glad", "love", "amazing", "happy", "liked", "worth it", "nice", "like", "super", "decent", "better", "excellent", "admirable", "marvelous", "perfect", "wonderful", "fantastic", "best", "aces", "fab", "5", "five", "4", "four", "3", "three" ];
var negative = ["bad", "horrible", "worst", "disappointed", "sad", "sucks", "slow", "terrible", "waste", "poor", "one", "1", "two", "2", "meh", "junk"];

var pBool=1;
var nBool=1; 

var pos = 0;
var neg = 0;

setInterval(function () {
	comments = document.getElementsByClassName("a-size-base a-link-normal review-title a-color-base a-text-bold");
	var numCensored = 0;
	for(var i = 0; i < comments.length; i++) {
		
		if(pBool==1) {
			for(var j = 0; j < positive.length; j++) {
				if(comments[i].innerHTML.toLowerCase().includes(positive[j]) == true) {
					pos++;
					comments[i].style = "color: #006400; font-weight: bold; background-color: yellow";
				}
			}
		}
		if(nBool==1) {
			for(var j = 0; j < negative.length; j++) {
				if(comments[i].innerHTML.toLowerCase().includes(negative[j]) == true) {
					neg++;
					comments[i].style = "color: #CE0D00; font-weight: bold; background-color: cyan";
				}
			}
		}
		
	}
	if((pos!=0) && (neg!= 0)) {
		
			function myFunction() {
				if(pos>neg){
			    alert("Great Product!");
				}
				else
					{
					alert("Bad Reviews!");
					}
			}
		
	}
}, 250);
