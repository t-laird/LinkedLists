var enter = document.querySelector('.enterButton');
var titleField = document.getElementById('title-input');
var urlField = document.getElementById('website-input');
var submitErr = document.querySelector('.submit-error');
var articleContainer = document.querySelector('.output-container');
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

function createTitle(){
	var titleCreation = document.createElement('h2');
	titleCreation.setAttribute('id','website-title');

	var titleText = document.createTextNode(titleField.value);
	titleCreation.appendChild(titleText);

	return titleCreation;
}


function addArticle(){
	
	var articleCreation = document.createElement('article');
	articleCreation.setAttribute('class','website-info');

	articleCreation.appendChild(createTitle());

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

	articleContainer.appendChild(articleCreation);
	articleCount++;
	titleField.value = "";
	urlField.value = "";
	titleField.focus();
}