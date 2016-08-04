window.onload = function()
{
	var scale = document.getElementsByClassName("scale")[0];
	var smartphone = document.getElementsByClassName("phone")[0];
	var bell = document.getElementsByClassName("bell")[0];
	var letter = document.getElementsByClassName("letter")[0];
	scale.onmouseover = function()
	{
		document.getElementById("scale").src = "image/scale2.png";
	}
	scale.onmouseout = function()
	{
		document.getElementById("scale").src = "image/scale.png";
	}
	smartphone.onmouseover = function()
	{
		document.getElementById("smartphone").src = "image/smartphone2.png";
	}
	smartphone.onmouseout = function()
	{
		document.getElementById("smartphone").src = "image/smartphone.png";
	}
	bell.onmouseover = function()
	{
		document.getElementById("bell").src = "image/bell2.png";
	}
	bell.onmouseout = function()
	{
		document.getElementById("bell").src = "image/bell.png";
	}
	letter.onmouseover = function()
	{
		document.getElementById("letter").src = "image/letter2.png";
	}
	letter.onmouseout = function()
	{
		document.getElementById("letter").src = "image/letter.png";
	}
}