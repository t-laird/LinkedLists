var enter = document.querySelector('.enterButton'); //Selector for enter button
var titleField = document.getElementById('title-input'); //selector for title field
var urlField = document.getElementById('website-input'); //selector for URL field
var submitErr = document.querySelector('.submit-error'); //selector for submit error
var articleContainer = document.querySelector('.output-container'); //Query selector for article container
var totalLinks = document.querySelector('.totalLinks'); //Selector for total links
var totalRead = document.querySelector('.readLinks'); //Selector for read links
var articleCount = 0; //Initializes article count
var readCount = 0; //Initializes read count


enter.addEventListener('click',checkURL);
titleField.addEventListener('keyup',enterEnable);
urlField.addEventListener('keyup',enterEnable);


function checkURL() {
//use built in regEx to build a regular expression
  var regEx = /^(ftp|http|https):\/\/[^ "]+$/
// test the url against the regular expression
	var fieldEntry = urlField.value;
// if match, run check if empty function
  if (regEx.test(fieldEntry)) {
    checkEmpties();
  }
  //if no match, reference error message
  else {
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
	totalLinks.innerText = articleCount;
	titleField.value = "";
	urlField.value = "";
	enter.disabled = true;
	titleField.focus();
}

  	$('.output-container').on('click', '.read-link', function () {
        $(this).closest('.website-info').toggleClass('read');
        $(this).parents('.website-info').find('.read-link').toggleClass('read');
        $(this).parents('.website-info').find('.website-text').toggleClass('read');
        totalRead.innerText = $('.read').length/3;
        enableClear();
    });

	$('.output-container').on('click', '.delete-link', function () {
        $(this).closest('.website-info').remove();
        $(this).parents('.website-info').find('.delete-link').remove();
        articleCount--;
        totalLinks.innerText = articleCount;
    	totalRead.innerText =  $('.read').length/3;
    	enableClear();
    });

$('.clearButton').on('click', function(){
$('.read').remove('.website-info')
totalRead.innerText =  $('.read').length/3;
totalLinks.innerText = $('.website-info').length;
articleCount = $('.website-info').length;
enableClear();
});


 var clearButton = document.getElementById('clear-read-button');


function enableClear () {
	if($('.read').length > 0) {
		clearButton.disabled = false;
	} else clearButton.disabled = true;
}


// function enterEnable(){
// 	if (titleField.value === "" || urlField.value === ""){
// 		enter.disabled = true;
// 	}else{
// 		enter.disabled = false;
// 	}
// }


// function enableClear () {
// 	if ($'.read').length > 0 {
// 	clearButton.setAttribute("disabled", "false")
// 	} else {
// 		clearButton.setAttribute("diabled", "true")
// 	}

// }







