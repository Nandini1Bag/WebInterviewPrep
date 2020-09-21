import Topic from '../models/topic';


export const TOPICS = [
  new Topic(
    'Css',
    'CSS Interview Questions',
    [	
	  '1. What is CSS ?',
    'Ans:-The full form of CSS is Cascading Style Sheets.It is a styling language which is simple enough for HTML elements.It is popular in web designing, and its application is common in XHTML also.', 	  
    '2. What are the different variations of CSS ?',
    'Ans:-The variations for CSS are:',
    'CSS 1',
    'CSS 2',
    'CSS 2.1',
    'CSS 3',
    'CSS 4',
    '3. What are the limitations of CSS ?',
    'Ans:-Limitations are:',
       'No expressions',
       'No column declaration',
       'Pseudo-class not controlled by dynamic behavior',
       'Rules, styles, targeting specific text not possible'
  ]
  ),
  new Topic(
    'Javascript',
    'Javascript Interview Questions',
    [	
	  '1. What is JavaScript ?',
    'Ans:-JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.', 	  
    '2.What are JavaScript Data Types?',
    'Ans:-Following are the JavaScript Data types:',
       'Number',
       'String',
       'Boolean',
       'Object'
  ]
  )
];
