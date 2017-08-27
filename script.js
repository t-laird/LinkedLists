var enter = document.querySelector('.enterButton');
var titleField = document.getElementById('title-input');
var urlField = document.getElementById('website-input');
var submitErr = document.querySelector('.submit-error');
var articleContainer = document.querySelector('.output-container');

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

enter.addEventListener('click',checkEmpties);

function checkEmpties(){
	if (titleField.value === "" || urlField.value === ""){
		submitErr.innerText = "Please make sure you have entered both a title and a URL before hitting Enter."
 		submitErr.hidden = false;
	}else{
		submitErr.hidden = true;
		addArticle();
	}
}

function addArticle(){
	
	var articleCreation = document.createElement('article');
	articleCreation.setAttribute('class','website-info');

	var titleCreation = document.createElement('h2');
	titleCreation.setAttribute('id','website-title');

	var titleText = document.createTextNode(titleField.value);
	titleCreation.appendChild(titleText);

	articleCreation.appendChild(titleCreation);

	var hr = document.createElement('hr');
	hr.setAttribute('class','line');
	
	articleCreation.appendChild(hr);


	var urlCreation = document.createElement('p');
	urlCreation.setAttribute('id', 'website-url');

	var urlA = document.createElement('a');
	var urlText = document.createTextNode(urlField.value);
	urlA.setAttribute('class', 'website-text underline');
	urlA.setAttribute('href',urlField.value);
	urlA.appendChild(urlText);

	urlCreation.appendChild(urlA);

	articleCreation.appendChild(urlCreation);

	// articleCreation.appendChild(hr);

	var hr2 = document.createElement('hr');
	hr2.setAttribute('class','line');

	articleCreation.appendChild(hr2);



	var readLabel = document.createElement('label');
	readLabel.setAttribute('for','read-link');

	var readInput = document.createElement('input');
	readInput.setAttribute('id','read-link');
	readInput.setAttribute('class','left bottom-links');
	readInput.setAttribute('type','button');
	readInput.setAttribute('value','Read');

	readLabel.appendChild(readInput);

	articleCreation.appendChild(readLabel);

	var deleteLabel = document.createElement('label');
	deleteLabel.setAttribute('for','delete-link');

	var deleteInput = document.createElement('input');
	deleteInput.setAttribute('id','delete-link');
	deleteInput.setAttribute('class','right bottom-links');
	deleteInput.setAttribute('type','button');
	deleteInput.setAttribute('value','Delete');

	deleteLabel.appendChild(deleteInput);

	articleCreation.appendChild(deleteLabel);

	// <label for = "read-link">
	// 	<input id="read-link" class="left bottom-links" type="button" value ="Read">
	// </label>

	// <label for = "delete-link">
	// 	<input id="delete-link" class="right bottom-links" type="button" value ="Delete">
	// </label>

	articleContainer.appendChild(articleCreation);

}


// function addArticle(){
// 	if (urlField.value === "" || titleField.value === ""){
// 		submitErr.innerText = "Please make sure you have entered both a title and a URL before hitting Enter."
// 		submitErr.hidden = false;
// 	}
// 	else{
// 		arrayOfArts[articleCount].hidden = false;
// 		arrayOfTitles[articleCount].innerText = titleField.value;
// 		arrayOfLinks[articleCount].innerText = urlField.value;
// 		urlField.value = "";
// 		titleField.value = "";
// 		titleField.focus();
// 		articleCount++;
// 		submitErr.hidden = true;
// 	}
// }
