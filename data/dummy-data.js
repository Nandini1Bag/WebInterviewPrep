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
    'Html',
    'Html Interview Questions',
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
    'ReactJs',
    'ReactJs Interview Questions',
    [	
      {
        question: 'What is React ?',
        answer: 'Ans:-React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.', 	  
      }, 
      {
        question: 'What is JSX ?',
        answer: 'Ans:-JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. '
      },
      {
        question: 'Why can’t browsers read JSX?',
        answer: 'Ans:-Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.'
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
        question: 'Enumerate the differences between Java and JavaScript?',
        answer:'Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.'  }
  ]
  )
];
