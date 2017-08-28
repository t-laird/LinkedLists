var enter = document.querySelector('.enterButton');
var titleField = document.getElementById('title-input');
var urlField = document.getElementById('website-input');
var submitErr = document.querySelector('.submit-error');
var articleContainer = document.querySelector('.output-container');
var totalLinks = document.querySelector('.totalLinks');
var totalRead = document.querySelector('.readLinks');
var articleCount = 0;
var readCount = 0;


enter.addEventListener('click',checkEmpties);
titleField.addEventListener('keyup',enterEnable);
urlField.addEventListener('keyup',enterEnable);

// enter.addEventListener('click',validURL);

// function validURL(){
// 	if ((urlField.value).isValid()){
// 		enter.disabled=false;
// 	}
// 	else{
// 		enter.disabled=true;
// 	}
// }


function enterEnable(){
	if (titleField.value === "" || urlField.value === ""){
		enter.disabled = true;
	}else{
		enter.disabled = false;
	}
}

function checkEmpties(){
	if (titleField.value === "" || urlField.value === ""){
		submitErr.innerText = "Please make sure you have entered both a title and a URL before hitting Enter."
 		submitErr.hidden = false;
	}else{
		submitErr.hidden = true;
		addClearCountFocus();
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
	// deleteInput.setAttribute('id','delete-link');
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

	articleCount++;
	totalLinks.innerText = "Total number of links on the page: " + articleCount;
	titleField.value = "";
	urlField.value = "";
	enter.disabled = true;
	titleField.focus();
}


  $('.output-container').on('click', '.read-link', function () {
        $(this).closest('.website-info').toggleClass('read');
        $(this).parents('.website-info').find('.read-link').toggleClass('read');
        $(this).parents('.website-info').find('.website-text').toggleClass('read');
        totalRead.innerText = "Total number of read links on the page: "+ $('.read').length/3;
    });

$('.output-container').on('click', '.delete-link', function () {
        $(this).closest('.website-info').remove();
        $(this).parents('.website-info').find('.delete-link').remove();
        articleCount--;
        totalLinks.innerText = "Total number of links on the page: " + articleCount;
    	totalRead.innerText = "Total number of read links on the page: "+ $('.read').length/3;
    });

$('.clearButton').on('click', function(){
$('.read').remove('.website-info')
});








