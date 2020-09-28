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
      },
      {
        question: '9. What happens if 100% width is used along with floats all across the page ?',
        answer: 'Ans:-While making the float declaration, 1 pixel is added every time it is used in the form of the border, and   even more float is allowed thereafter.'
      },
      {
        question: '10. Can default property value be restored through CSS? If yes, how ?',
        answer: 'Ans:-In CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property.'
      }
        
  ]
  ),
  new Topic(
    'Html',
    'Html',
    [	
      {
        question: '1. What is Html ?',
        answer: 'Ans:-HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.', 	  
      }, 
      {
        question: '2. What are Tags ?',
        answer: 'Ans:-HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.'
      },
      {
        question: '3. Do all HTML tags have an end tag ?',
        answer: "Ans:-No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag."
      },
      {
        question: '4. How to create a hyperlink in HTML ?',
        answer: "Ans:-The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways: 1)Unvisited link - It is displayed, underlined and blue. 2)Visited link - It is displayed, underlined and purple. 3)Active link - It is displayed, underlined and red."
      },
      {
        question: '5. What are some common lists that are used when designing a page ?',
        answer: "Ans:-There are many common lists which are used to design a page. You can choose any or a combination of the following list types: 1)Ordered list - The ordered list displays elements in numbered format. It is represented by <ol> tag.2)Unordered list - The unordered list displays elements in bulleted format. It is represented by <ul> tag.3)Definition list - The definition list displays elements in definition form like in dictionary. The <dl>, <dt> and <dd> tags are used to define description list."
      },
      {
        question: '6. What is semantic HTML ?',
        answer: "Ans:-Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags."
      },
      {
        question: '7. Does a hyperlink only apply to text ?',
        answer: "Ans:-No, hyperlinks can be used both on texts and images. The HTML anchor tag defines a hyperlink that links one page to another page. The “href” attribute is the most important attribute of the HTML anchor tag."
      },
      {
        question: '8. How to insert a copyright symbol on a browser page ?',
        answer: "Ans:-You can insert a copyright symbol by using &copy; or &#169; in an HTML file."
      },
      {
        question: '9. What is an image map ?',
        answer: "Ans:-Image map facilitates you to link many different web pages using a single image. It is represented by <map> tag. You can define shapes in images that you want to make part of an image mapping."
      },
      {
        question: '10. How do you keep list elements straight in an HTML file ?',
        answer: "Ans:-You can keep the list elements straight by using indents."
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
      },
      {
        question: '5. What do you understand by Virtual DOM ?',
        answer: 'Ans:- Virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.'
      },
      {
        question: '6. What is Props ?',
        answer: 'Ans:- Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.'
      },
      {
        question: '7. What is a state in React and how is it used ?',
        answer: "Ans:- States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."
      },
      {
        question: '8. What are the different phases of React component’s lifecycle ?',
        answer: "Ans:- There are three different phases of React component’s lifecycle:1)Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.2)Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.3)Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM."
      },
      {
        question: '9. What are synthetic events in React ?',
        answer: "Ans:- Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers."
      },
      {
        question: '10. What do you understand by refs in React ?',
        answer: "Ans:- Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components."
      }
      
    
  ]
  ),
  new Topic(
    'Javascript',
    'Javascript',
    [	
       {
        question: '1. What is JavaScript ?',
        answer: 'Ans:-JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.'
      }, 
      {
        question: '2. Enumerate the differences between Java and JavaScript ?',
        answer:'Ans:-Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.' 
      }, 
      {
       question: '3. What are JavaScript Data Types ?',
       answer:'Ans:-Following are the JavaScript Data types:1)Number2)String3)Boolean4)Object5)Undefined ' 
     }, 
     {
      question: '4. What is the use of isNaN function ?',
      answer:'Ans:-isNan function returns true if the argument is not a number otherwise it is false.' 
     }, 
     {
    question: '5. What are undeclared and undefined variables ?',
    answer:'Ans:-1)Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.2)Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.' 
    }, 
    {
    question: '6. What are global variables? How are these variable declared and what are the problems associated with using them ?',
    answer:'Ans:-Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared. Example: // Declare a global globalVariable = "Test"; The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.' 
    }, 
    {
    question: '7. What is a prompt box ?',
    answer:'Ans:-A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.' 
    }, 
    {
    question: "8. What is 'this' keyword in JavaScript ?",
    answer:"Ans:-'This' keyword refers to the object from where it was called." 
    }, 
    {
    question: "9. What is the difference between ViewState and SessionState ?",
    answer:"Ans:-'ViewState' is specific to a page in a session.'SessionState' is specific to user specific data that can be accessed across all pages in the web application. " 
    }, 
    {
    question: "10. Does JavaScript support automatic type conversion ?",
    answer:"Ans:-Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers. " 
    }   

  ]
  )
];
