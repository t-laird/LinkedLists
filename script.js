var enter = document.querySelector('.enterButton');
var titleField = document.getElementById('title-input');
var urlField = document.getElementById('website-input');
var submitErr = document.querySelector('.submit-error');

var art0 = document.querySelector('.art0');
var art1 = document.querySelector('.art1');
var art2 = document.querySelector('.art2');
var art3 = document.querySelector('.art3');
var art4 = document.querySelector('.art4');
var art5 = document.querySelector('.art5');
var art6 = document.querySelector('.art6');
var art7 = document.querySelector('.art7');
var art8 = document.querySelector('.art8');
var art9 = document.querySelector('.art9');
var art10 = document.querySelector('.art10');
var art11 = document.querySelector('.art11');

var title0 = document.querySelector('.title0');
var title1 = document.querySelector('.title1');
var title2 = document.querySelector('.title2');
var title3 = document.querySelector('.title3');
var title4 = document.querySelector('.title4');
var title5 = document.querySelector('.title5');
var title6 = document.querySelector('.title6');
var title7 = document.querySelector('.title7');
var title8 = document.querySelector('.title8');
var title9 = document.querySelector('.title9');
var title10 = document.querySelector('.title10');
var title11 = document.querySelector('.title11');

var link0 = document.querySelector('.link0');
var link1 = document.querySelector('.link1');
var link2 = document.querySelector('.link2');
var link3 = document.querySelector('.link3');
var link4 = document.querySelector('.link4');
var link5 = document.querySelector('.link5');
var link6 = document.querySelector('.link6');
var link6 = document.querySelector('.link6');
var link7 = document.querySelector('.link7');
var link8 = document.querySelector('.link8');
var link9 = document.querySelector('.link9');
var link10 = document.querySelector('.link10');
var link11 = document.querySelector('.link11');

var arrayOfArts = [art0,art1,art2,art3,art4,art5,art6,art7,art8,art9,art10,art11];
var arrayOfTitles = [title0,title1,title2,title3,title4,title5,title6,title7,title8,title9,title10,title11];
var arrayOfLinks = [link0,link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,link11];

var articleCount = 0;

enter.addEventListener('click',addArticle);


function addArticle(){
	if (urlField.value === "" || titleField.value === ""){
		submitErr.innerText = "Please make sure you have entered both a title and a URL before hitting Enter."
		submitErr.hidden = false;
	}
	else{
		arrayOfArts[articleCount].hidden = false;
		arrayOfTitles[articleCount].innerText = titleField.value;
		arrayOfLinks[articleCount].innerText = urlField.value;
		urlField.value = "";
		titleField.value = "";
		titleField.focus();
		articleCount++;
		submitErr.hidden = true;
	}
}
