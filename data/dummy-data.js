import Topic from '../models/topic';


export const TOPICS = [
  new Topic(
    'Css',
    'CSS',
    [	
      {
        question: '1. What is CSS ?',
        answer: 'Ans:-The full form of CSS is Cascading Style Sheets.It is a styling language which is simple enough for HTML elements.It is popular in web designing, and its application is common in XHTML also.', 	  
      }, 
      {
        question: '2. What are the advantages of CSS ?',
        answer: 'Ans:-Advantages are: 1)Bandwidth 2)Site-wide consistency 3)Page reformatting 4)Accessibility 5)Content separated from presentation'
      },
      {
        question: '3. What are the limitations of CSS ?',
        answer: 'Ans:-Limitations are: 1)No expressions 2)No column declaration 3)Pseudo-class not controlled by dynamic behavior 4)Rules, styles, targeting specific text not possible'
      },
      {
        question: '4. Who maintains the CSS specifications ?',
        answer: 'Ans:-World Wide Web Consortium maintains the CSS specifications.'
      },
      {
        question: '5. In how many ways can a CSS be integrated as a web page ?',
        answer: 'Ans:-CSS can be integrated in three ways: 1)Inline: Style attribute can be used to have CSS applied HTML elements. 2)Embedded: The Head element can have a Style element within which the code can be placed.3)Linked/ Imported: CSS can be placed in an external file and linked via link element.'
      },
      {
        question: '6. What does CSS selector mean ?',
        answer: 'Ans:-A string equivalent of HTML elements by which declarations or a set of it, is declared and is a link that can be referred for linking HTML and Style sheet is CSS selector.'
      },
      {
        question: '7. Differentiate Class selector from ID selector ?',
        answer: 'Ans:-While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID.'
      },
      {
        question: '8. What is Pseudo-elements ?',
        answer: 'Ans:-Pseudo-elements are used to add special effects to some selectors.  CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document.'
      }
     

    
  ]
  ),
  new Topic(
    'Html',
    'Html',
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
    'ReactJs',
    [	
      {
        question: '1. What is React ?',
        answer: 'Ans:-React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.', 	  
      }, 
      {
        question: '2. What is JSX ?',
        answer: 'Ans:-JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. '
      },
      {
        question: '3. Why can’t browsers read JSX?',
        answer: 'Ans:-Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.'
      },
      {
        question: '4. Explain the purpose of render() in React.',
        answer: 'Ans:- Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.'
      }
      
    
  ]
  ),
  new Topic(
    'Javascript',
    'Javascript',
    [	
       {
        question: '1. What is JavaScript?',
        answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.'
      }, 
      {
        question: '2. Enumerate the differences between Java and JavaScript?',
        answer:'Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.'  }
  ]
  )
];
