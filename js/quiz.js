// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
{ question: 'Is the Earth flat?', answer: 'No' },
{ question: 'How many fingers has a human?', answer: '20' },
{ question: 'What is the capital of Great Britain?', answer:  'London' },
{ question: 'Who is the president of USA?', answer:  'Donald Trump' },
{ question: "What is the name of Earth's satellitte?", answer:  'Moon'},
{ question: 'What is the best programming language?', answer: 'JavaScript'},
{ question: 'How old are you?', answer: '21'}
];

//console.log( quiz[4][0] );

// 2. Store the number of questions answered correctly and arrays with correct and wrong answers

let correctGuess = 0;
//create the variable (array) to store correct/wrong answers;
let cor = [];
let wr = [];


/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0; i < quiz.length; i++ ) {
  let question = quiz[i].question;
  let answer = quiz[i].answer;
  let responce = prompt(question);

  if ( responce.toUpperCase() === answer.toUpperCase() ) {
    correctGuess += 1;
    cor.push(question);
  } else {
    wr.push(question);
  }

}
//console.log(cor);
//console.log(wr);

function createListItems( arr ) {
  let items = '';
  const score = `<strong>None</strong>`;
  for ( let i = 0; i < arr.length; i++ ) {

    items += `<li>${ arr[i] }</li>`;
    }
  if (!items) {
  return score;
  } else {
  return items;
  }
}


//console.log(`You have ${correctGuess} correct answers!`);

// 4. Display the number of correct answers to the user and print the questions, answers on which were wrong or right
let html = `<h1>You have ${correctGuess} correct answers!</h1>
            <h2>You answered correct on:</h2>
            <ol>${createListItems(cor)}</ol>
            <h2>You answered wrong on:</h2>
            <ol>${createListItems(wr)}</ol>
            `;

document.querySelector('main').innerHTML = html;
