// Kai Ying Chan
// This is a quiz game that I found tutorial on youtube
// link: https://www.youtube.com/watch?v=riDzcEQbX6k

// only made a few changes with jquery
// not my own work

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// The functions of button start game and next question
$('#start-btn').click(startGame)
$( "#next-btn" ).click(function() {
  currentQuestionIndex++
  setNextQuestion()
  });


function startGame() {
    // when click 'start button' hide start button
    $('#start-btn').addClass('hide')
  // give random array questions
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  // when click 'start button' show questions
  $('#question-container').removeClass('hide')
  // set first question
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  $('#question').html(question.question) 
  // loop through questions
  question.answers.forEach(answer => {
    // create element button
    const button = document.createElement('button')
    // give answer text and class
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      // add data attribute on button element
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    // add the answer buttons
    answerButtonsElement.appendChild(button)
  })
}

// hide the previous buttons however leaving the answer buttons
function resetState() {
  clearStatusClass(document.body)
  $('#next-btn').addClass('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  // selected button
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  // check if it is correct or wrong
  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  // check if there are any more questions
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    // show next question
    startButton.classList.remove('hide')
  }
}

// check whether answer is correct
function setStatusClass(element, correct) {
  // give the answer a status if correct or wrong
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// remove classes
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// create objects for multiple questions

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What does COVID-19 stand for?',
    answers: [
      { text: 'China output virus in December, 2019', correct: true },
      { text: 'Coronavirus disease 2019', correct: true },
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'Choose an action that can keep you from diseases',
    answers: [
      { text: 'Wear a mask', correct: true },
      { text: 'Go to a party', correct: false },
      { text: 'Wash hands frequently', correct: true },
      { text: 'Stay at home', correct: true }
    ]
  }
]

