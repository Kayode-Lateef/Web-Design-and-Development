// Create a Quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Create a question Class

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// Display Question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    


    // Show options
    let choices = quiz.getQuestionIndex().choices;
    choices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }


    showProgress();
  }
}

// Guess Function
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Show Quiz Progress
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show Score
function showScores() {
  let quizEndHTML = `
        <h1>Quiz Results</h1>
        <h2 class="score">You Scored:</h2>
        <h2 id="score">${quiz.score}/${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html"> <i class="fa fa-refresh" aria-hidden="true"></i> Take Quiz Again</a>
        </div>
    `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [
  new Question(
    "Which of the following is the foundational language for creating the structure of a web page?",
    ["CSS", "HTML", "JavaScript", "PHP"],
    "HTML"
  ),
  new Question(
    "Which CSS feature allows you to design a web page to look good on different screen sizes?",
    ["Flexbox", "Grid", "Media Queries", "Bootstrap"],
    "Media Queries"
  ),
  new Question(
    "Which PHP concept is used to protect against SQL injection?",
    ["Sessions", "Cookies", "Prepared Statements", "File Handling"],
    "Prepared Statements"
  ),
  new Question(
    "What does DOM stand for in JavaScript?",
    ["Document Object Model", "Data Object Management", "Dynamic Object Model", "Document Operational Module"],
    "Document Object Model"
  ),
  new Question(
    "Which HTML tag is used to create a hyperlink?",
    ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;hyperlink&gt;"],
    "&lt;a&gt;"
  ),
  new Question(
    "What is the purpose of the `&lt;head&gt;` element in HTML?",
    ["To contain the main content of the page", "To include metadata and links to stylesheets or scripts", "To define the title of the document", "To define the navigation menu"],
    "To include metadata and links to stylesheets or scripts"
  ),
  new Question(
    "Which CSS property is used to change the background color of an element?",
    ["color", "background", "background-color", "fill"],
    "background-color"
  ),
  new Question(
    "Which JavaScript function is used to select an element by its ID?",
    ["getElementById", "querySelector", "getElementByClass", "selectById"],
    "getElementById"
  ),
  new Question(
    "Which operator is used for strict equality in JavaScript?",
    ["==", "===", "!=", "="],
    "==="
  ),
  new Question(
    "Which attribute is required in an HTML form tag to specify the URL for form submission?",
    ["method", "action", "name", "url"],
    "action"
  ),
  new Question(
    "Which PHP function is used to establish a connection to a MySQL database?",
    ["mysql_connect", "mysqli_connect", "connect_db", "db_connect"],
    "mysqli_connect"
  ),
  new Question(
    "What is the default method for sending data from an HTML form?",
    ["GET", "POST", "PUT", "DELETE"],
    "GET"
  ),
  new Question(
    "Which CSS layout system uses rows and columns to organize content?",
    ["Flexbox", "Grid", "Media Queries", "Float"],
    "Grid"
  ),
  new Question(
    "What does CRUD stand for in PHP and MySQL operations?",
    ["Create, Read, Update, Delete", "Connect, Remove, Upload, Download", "Create, Reset, Undo, Delete", "Create, Read, Undo, Delete"],
    "Create, Read, Update, Delete"
  ),
  new Question(
    "Which JavaScript method is used to add an event listener to an element?",
    ["addEvent", "addEventListener", "onEvent", "attachEvent"],
    "addEventListener"
  ),
  new Question(
    "Which PHP superglobal is used to retrieve form data submitted via POST?",
    ["$_GET", "$_REQUEST", "$_FORM", "$_POST"],
    "$_POST"
  ),
  new Question(
    "Which HTML attribute is used to specify an image file in the `&lt;img&gt;` tag?",
    ["src", "href", "alt", "file"],
    "src"
  ),
  new Question(
    "What is the main purpose of a media query in CSS?",
    ["To query external APIs", "To style elements based on screen size", "To create responsive images", "To adjust text styles"],
    "To style elements based on screen size"
  ),
  new Question(
    "Which of the following is an example of a self-closing HTML tag?",
    ["&lt;div&gt;", "&lt;img&gt;", "&lt;a&gt;", "&lt;span&gt;"],
    "&lt;img&gt;"
  ),
  new Question(
    "What is the purpose of the `&lt;title&gt;` tag in HTML?",
    ["To define the document's title in the browser tab", "To add a heading to the page", "To include a description of the document", "To link to external scripts"],
    "To define the document's title in the browser tab"
  ),
  new Question(
    "Which JavaScript keyword is used to declare a variable with block scope?",
    ["var", "let", "const", "scope"],
    "let"
  ),
  new Question(
    "Which HTTP method is typically used to send form data securely?",
    ["GET", "POST", "PUT", "PATCH"],
    "POST"
  ),
  new Question(
    "Which CSS property controls the spacing inside an element?",
    ["margin", "padding", "border", "spacing"],
    "padding"
  ),
  new Question(
    "What is the purpose of the `&lt;ul&gt;` tag in HTML?",
    ["To define a table", "To create an unordered list", "To include a URL", "To add multimedia content"],
    "To create an unordered list"
  ),
  new Question(
    "Which PHP function is used to start a session?",
    ["session_create", "session_start", "start_session", "begin_session"],
    "session_start"
  ),
  new Question(
    "Which CSS property is used to change the font of text?",
    ["font-size", "font-family", "text-style", "font-weight"],
    "font-family"
  ),
  new Question(
    "What is the main purpose of the `&lt;form&gt;` tag in HTML?",
    ["To create a hyperlink", "To submit user input to a server", "To add a table", "To format text"],
    "To submit user input to a server"
  ),
  new Question(
    "Which PHP function is used to handle file uploads?",
    ["move_uploaded_file", "upload_file", "file_upload", "file_move"],
    "move_uploaded_file"
  ),
  new Question(
    "Which JavaScript method is used to parse a JSON string?",
    ["JSON.stringify", "JSON.parse", "parseJSON", "stringifyJSON"],
    "JSON.parse"
  ),
  new Question(
    "Which database query is used to retrieve all records from a table?",
    ["INSERT", "SELECT", "UPDATE", "DELETE"],
    "SELECT"
  ),
  new Question(
    "Which keyword is used to define a constant in JavaScript?",
    ["const", "let", "var", "static"],
    "const"
  ),
  new Question(
    "Which method is used to add one or more elements to the end of an array in JavaScript?",
    ["push()", "append()", "add()", "concat()"],
    "push()"
  ),
  new Question(
    "Which function is used to execute a block of code after a specified time in JavaScript?",
    ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "setTimeout()"
  ),
  new Question(
    "Which property is used to get the number of elements in an array?",
    ["size", "length", "count", "elements"],
    "length"
  ),
  new Question(
    "Which statement is used to terminate a loop or switch in JavaScript?",
    ["break", "continue", "return", "exit"],
    "break"
  ),
  new Question(
    "Which HTML element is used to embed JavaScript code in a webpage?",
    ["&lt;javascript&gt;", "&lt;script&gt;", "&lt;js&gt;", "&lt;code&gt;"],
    "&lt;script&gt;"
  ),
  new Question(
    "Which method in JavaScript is used to fetch data from a server?",
    ["fetch()", "getData()", "serverRequest()", "dataFetch()"],
    "fetch()"
  ),
  new Question(
    "Which PHP function is used to include the contents of one PHP file into another?",
    ["include()", "require()", "loadFile()", "fetch()"],
    "include()"
  ),
  new Question(
    "What does SQL stand for?",
    ["Structured Query Language", "Sequential Query Logic", "Standard Query List", "System Query Language"],
    "Structured Query Language"
  ),
  new Question(
    "Which CSS property is used to make an element completely transparent?",
    ["visibility", "opacity", "display", "transparent"],
    "opacity"
  )


];

questions.sort(() => Math.random() - 0.5);
let quiz = new Quiz(questions);


// Display Questions
displayQuestion();



// Add a count down
let time = 25;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountDown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}
startCountDown();
