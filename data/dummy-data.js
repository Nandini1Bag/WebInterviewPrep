import Topic from '../models/topic';


export const TOPICS = [
  new Topic(
    'Css',
    'CSS Interview Questions',
    [	
      {
        question: 'What is CSS ?',
        answer: 'Ans:-The full form of CSS is Cascading Style Sheets.It is a styling language which is simple enough for HTML elements.It is popular in web designing, and its application is common in XHTML also.', 	  
      }, 
      {
        question: ' What are the different variations of CSS ?',
        answer: 'Ans:-The variations for CSS are: CSS 1 , CSS 2 , CSS 2.1 ,CSS 3 and CSS 4'
      },
      {
        question: 'What are the limitations of CSS ?',
        answer: 'Ans:-Limitations are: No expressions,No column declaration,Pseudo-class not controlled by dynamic behavior,Rules, styles, targeting specific text not possible'
      }
    
  ]
  ),
  new Topic(
    'Javascript',
    'Javascript Interview Questions',
    [	
       {
        question: 'What is JavaScript?',
        answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.'
      }, 
      {
        question: 'What is JavaScript?',
        answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.'
      }
  ]
  )
];
