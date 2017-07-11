// Defining words that are highly used in commenting by the customers.
var comments, positive, negative;
var positive = ["good", "awesome", "great", "loved", "ingenious", "beautiful", "glad", "love", "amazing", "happy", "liked", "worth it", "nice", "like", "super", "decent", "better", "excellent", "admirable", "marvelous", "perfect", "wonderful", "fantastic", "best", "aces", "fab", "5", "five", "4", "four", "3", "three" ];
var negative = ["bad", "horrible", "worst", "disappointed", "sad", "damaged", "sucks", "slow", "terrible", "waste", "poor", "one", "1", "two", "2", "meh", "junk"]; 

// Used to calculate the number of positive and negative words
var pos = 0;
var neg = 0;

setInterval(function () 
  {
	comments = document.getElementsByClassName("a-size-base a-link-normal review-title a-color-base a-text-bold");
	
	for(var i = 0; i < comments.length; i++) 
	{
		
		for(var j = 0; j < negative.length; j++) 
		{
			if(comments[i].innerHTML.toLowerCase().includes(negative[j]) == true) 
			{
				neg++;	// Calculate the number of negative words.
				comments[i].style = "color: #CE0D00; font-weight: bold; background-color: cyan";	// Negative words are highlighted by cyan color
			}
		}
		
			for(var j = 0; j < positive.length; j++) 
			{
				if(comments[i].innerHTML.toLowerCase().includes(positive[j]) == true) 
				{
					pos++;	// Calculate the number of positive words.
					comments[i].style = "color: #006400; font-weight: bold; background-color: yellow";	// Positive words are highlighted by yellow color
				}
			}		
		
	}
	if((pos!=0) && (neg!= 0)) 
	{
		// Compare the number of positive and negative comments to display appropriate Window Title for quick review.
				if(pos>neg)
				{
					document.title ="Great Product!";
				}
				else
				{
					document.title = "Bad Reviews!";
				}	
	}
}, 250);
