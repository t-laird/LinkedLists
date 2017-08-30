var enter = document.querySelector('.enterButton'); 
var titleField = document.getElementById('title-input'); 
var urlField = document.getElementById('website-input'); 
var submitErr = document.querySelector('.submit-error'); 
var articleContainer = document.querySelector('.output-container'); 
var totalLinks = document.querySelector('.totalLinks'); 
var totalRead = document.querySelector('.readLinks'); 
var clearButton = document.getElementById('clear-read-button');
var articleCount = 0; 
var readCount = 0; 


enter.addEventListener('click',checkURL);
titleField.addEventListener('keyup',enterEnable);
urlField.addEventListener('keyup',enterEnable);


function checkURL() {
var regEx = /^(ftp|http|https):\/\/[^ "]+$/
var regEx2 = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|io|COM|ORG|NET|MIL|EDU|IO)$/
var fieldEntry = urlField.value;
if (regEx.test(fieldEntry)) {
	addClearCountFocus();
	 submitErr.hidden = true;
}else if (regEx2.test(fieldEntry)){
	urlField.value = 'http://' + urlField.value;
	addClearCountFocus()
	 submitErr.hidden = true;
}else {
  submitErr.innerText = "Please enter a valid URL";
  submitErr.hidden = false;
}
}

function enterEnable(){
	if (titleField.value === "" || urlField.value === ""){
		enter.disabled = true;
	}else{
		enter.disabled = false;
	}
}

function createTitle(){
	var titleCreation = document.createElement('h2');
	titleCreation.setAttribute('id','website-title');

	var titleText = document.createTextNode(titleField.value);
	titleCreation.appendChild(titleText);

	return titleCreation;
}

function createHR(){
	var hr = document.createElement('hr');
	hr.setAttribute('class','line');

	return hr;
}

function createURL(){
	var urlCreation = document.createElement('p');
	urlCreation.setAttribute('id', 'website-url');

	var urlA = document.createElement('a');
	var urlText = document.createTextNode(urlField.value);
	urlA.setAttribute('class', 'website-text underline');
	urlA.setAttribute('href',urlField.value);
	urlA.appendChild(urlText);
	urlCreation.appendChild(urlA);

	return urlCreation;
}


function createRead(){
	var readLabel = document.createElement('label');
	readLabel.setAttribute('for','read-link');

	var readInput = document.createElement('input');
	readInput.setAttribute('class','left bottom-links read-link');
	readInput.setAttribute('type','button');
	readInput.setAttribute('value','Read');

	readLabel.appendChild(readInput);

	return readLabel;
}


function createDelete(){
	var deleteLabel = document.createElement('label');
	deleteLabel.setAttribute('for','delete-link');

	var deleteInput = document.createElement('input');
	deleteInput.setAttribute('class','right bottom-links delete-link');
	deleteInput.setAttribute('type','button');
	deleteInput.setAttribute('value','Delete');

	deleteLabel.appendChild(deleteInput);

	return deleteLabel;
}

function createArticle(){
	var createArticle = document.createElement('article');
	createArticle.setAttribute('class','website-info');

	return createArticle;
}


function addArticle(){
	
	var articleCreation = createArticle();

	articleCreation.appendChild(createTitle());
	
	articleCreation.appendChild(createHR());

	articleCreation.appendChild(createURL());

	articleCreation.appendChild(createHR());

	articleCreation.appendChild(createRead());

	articleCreation.appendChild(createDelete());

	articleContainer.appendChild(articleCreation);
}

function addClearCountFocus(){
	addArticle();
	titleField.value = "";
	urlField.value = "";

	articleCount++;
	totalLinks.innerText = articleCount;

	titleField.focus();
	
	enter.disabled = true;
}

function enableClear () {
	if($('.read').length > 0) {
		clearButton.disabled = false;
	} else clearButton.disabled = true;
}

function countReadButton () {
	totalRead.innerText = $('.read').length/3;
}


$('.output-container').on('click', '.read-link', function () {
	$(this).closest('.website-info').toggleClass('read');
	$(this).parents('.website-info').find('.read-link').toggleClass('read');
	$(this).parents('.website-info').find('.website-text').toggleClass('read');
	countReadButton();
	enableClear();
});

$('.output-container').on('click', '.delete-link', function () {
	$(this).closest('.website-info').remove();
	$(this).parents('.website-info').find('.delete-link').remove();
	articleCount--;
	totalLinks.innerText = articleCount;
	countReadButton();
	enableClear();
});

$('.clearButton').on('click', function(){
	$('.read').remove('.website-info')
	countReadButton();
	totalLinks.innerText = $('.website-info').length;
	articleCount = $('.website-info').length;
	enableClear();
});















