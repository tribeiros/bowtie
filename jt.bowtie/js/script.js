var oldPlayState = 0;
function $(id) { return document.getElementById(id); }

function trackUpdate(track) 
{
	
	$('title').innerHTML = track.property('title');
	$('artist').innerHTML = track.property('artist');
	
	var totalLength = $('title').innerHTML.length + $('artist').innerHTML.length
	
	if(totalLength >= 90)
	{
		$('title').style.maxWidth = "230px";
		$('artist').style.maxWidth = "230px";		
	}
	else
	{
		$('title').style.maxWidth = "none";
		$('artist').style.maxWidth = "none";
	}
}