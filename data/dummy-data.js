import Topic from "../models/topic";

export const TOPICS = [
  new Topic("Css", "CSS", [
    {
      question: "1. What is CSS ?",
      answer:
        "Ans:-The full form of CSS is Cascading Style Sheets.It is a styling language which is simple enough for HTML elements.It is popular in web designing, and its application is common in XHTML also.",
    },
    {
      question: "2. What are the advantages of CSS ?",
      answer:
        "Ans:-Advantages are: 1)Bandwidth 2)Site-wide consistency 3)Page reformatting 4)Accessibility 5)Content separated from presentation",
    },
    {
      question: "3. What are the limitations of CSS ?",
      answer:
        "Ans:-Limitations are: 1)No expressions 2)No column declaration 3)Pseudo-class not controlled by dynamic behavior 4)Rules, styles, targeting specific text not possible",
    },
    {
      question: "4. Who maintains the CSS specifications ?",
      answer:
        "Ans:-World Wide Web Consortium maintains the CSS specifications.",
    },
    {
      question: "5. In how many ways can a CSS be integrated as a web page ?",
      answer:
        "Ans:-CSS can be integrated in three ways: 1)Inline: Style attribute can be used to have CSS applied HTML elements. 2)Embedded: The Head element can have a Style element within which the code can be placed.3)Linked/ Imported: CSS can be placed in an external file and linked via link element.",
    },
    {
      question: "6. What does CSS selector mean ?",
      answer:
        "Ans:-A string equivalent of HTML elements by which declarations or a set of it, is declared and is a link that can be referred for linking HTML and Style sheet is CSS selector.",
    },
    {
      question: "7. Differentiate Class selector from ID selector ?",
      answer:
        "Ans:-While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID.",
    },
    {
      question: "8. What is Pseudo-elements ?",
      answer:
        "Ans:-Pseudo-elements are used to add special effects to some selectors.  CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document.",
    },
    {
      question:
        "9. What happens if 100% width is used along with floats all across the page ?",
      answer:
        "Ans:-While making the float declaration, 1 pixel is added every time it is used in the form of the border, and   even more float is allowed thereafter.",
    },
    {
      question:
        "10. Can default property value be restored through CSS? If yes, how ?",
      answer:
        "Ans:-In CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property.",
    },
    {
      question: "11. What is CSS Box Model and what are its elements ?",
      answer:
        "Ans:-This box defines design and layout of elements of CSS. The elements are:1)Margin: the top most layer, the overall structure is shown 2)Border: the padding and content option with a border around it is shown.  Background color affects the border.3)Padding: Space is shown. Background colour affects the border.4)Content: Actual content is shown.",
    },
    {
      question: "12. What is contextual selector ?",
      answer:
        "Ans:-Selector used to select special occurrences of an element is called contextual selector. A space separates the individual selectors. Only the last element of the pattern is addressed in this kind of selector. For e.g.: TD P TEXT {color: blue}",
    },
    {
      question: "13. Compare Grouping and Nesting in CSS ?",
      answer:
        "Ans:-1)Grouping: Selectors can be grouped having the same values of property and the code be reduced.2)Nesting: Specifying a selector within a selector is called nesting.",
    },
    {
      question: "14. How can the dimension be defined of an element ?",
      answer:
        "Ans:-Dimension properties can be defined by:Height,Max-height,Max-width,Min-height,Min-width,Width. ",
    },
    {
      question: "15. Define float property of CSS ?",
      answer:
        "Ans:-By float property, the image can be moved to the right or the left along with the text to be wrapped around it. Elements before this property is applied do not change their properties.",
    },
    {
      question: "16. How does Z index function ?",
      answer:
        "Ans:-Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value being zero.",
    },
    {
      question: "17. What is graceful degradation ?",
      answer:
        "Ans:-In case the component fails, it will continue to work properly in the presence of a graceful degradation. The latest browser application is used when a webpage is designed. As it is not available to everyone, there is a basic functionality, which enables its use to a wider audience. In case the image is unavailable for viewing, text is shown with the alt tag.",
    },
    {
      question: "18. What is progressive enhancement ?",
      answer:
        "Ans:-It’s an alternative to graceful degradation, which concentrates on the matter of the web. The functionality is same, but it provides an extra edge to users having the latest bandwidth. It has been into prominent use recently with mobile internet connections expanding their base.",
    },
    {
      question: "19. How can backward compatibility be designed in CSS ?",
      answer:
        "Ans:-HTML sheet methods is collaborated with CSS and used accordingly.",
    },
    {
      question: "20. Are quotes mandatory in URL’s ?",
      answer:
        "Ans:-Quotes are optional in URL’s, and it can be single or double.",
    },
  ]),
  new Topic("Html", "Html", [
    {
      question: "1. What is Html ?",
      answer:
        "Ans:-HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.",
    },
    {
      question: "2. What are Tags ?",
      answer:
        "Ans:-HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.",
    },
    {
      question: "3. Do all HTML tags have an end tag ?",
      answer:
        "Ans:-No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag.",
    },
    {
      question: "4. How to create a hyperlink in HTML ?",
      answer:
        "Ans:-The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways: 1)Unvisited link - It is displayed, underlined and blue. 2)Visited link - It is displayed, underlined and purple. 3)Active link - It is displayed, underlined and red.",
    },
    {
      question:
        "5. What are some common lists that are used when designing a page ?",
      answer:
        "Ans:-There are many common lists which are used to design a page. You can choose any or a combination of the following list types: 1)Ordered list - The ordered list displays elements in numbered format. It is represented by <ol> tag.2)Unordered list - The unordered list displays elements in bulleted format. It is represented by <ul> tag.3)Definition list - The definition list displays elements in definition form like in dictionary. The <dl>, <dt> and <dd> tags are used to define description list.",
    },
    {
      question: "6. What is semantic HTML ?",
      answer:
        "Ans:-Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.",
    },
    {
      question: "7. Does a hyperlink only apply to text ?",
      answer:
        "Ans:-No, hyperlinks can be used both on texts and images. The HTML anchor tag defines a hyperlink that links one page to another page. The “href” attribute is the most important attribute of the HTML anchor tag.",
    },
    {
      question: "8. How to insert a copyright symbol on a browser page ?",
      answer:
        "Ans:-You can insert a copyright symbol by using &copy; or &#169; in an HTML file.",
    },
    {
      question: "9. What is an image map ?",
      answer:
        "Ans:-Image map facilitates you to link many different web pages using a single image. It is represented by <map> tag. You can define shapes in images that you want to make part of an image mapping.",
    },
    {
      question: "10. How do you keep list elements straight in an HTML file ?",
      answer: "Ans:-You can keep the list elements straight by using indents.",
    },
    {
      question:
        "11. What are inline elements and block-level elements in HTML ?",
      answer:
        "Ans:-1)Block elements are the blocks that take the full available width and always start from a new line. It will stretch itself to the full available width of the available container width. Block-level elements are <div>, <p>, <img>, <section> and many more.  2)Inline elements are the elements that will only take the width that is required to fit into the container.For Example, take the flow of text on the page. When the line of the text takes the full width of the container it wraps itself into a new line and again goes in the same way.Whereas, the inline element will take only that much space or width that it is needed for them. Inline elements are <span>, <label>, <a>, <b> and many more.",
    },
    {
      question: "12. Can we change inline elements into block-level elements ?",
      answer:
        "Ans:-Yes, we can change inline elements into block-level elements by adding display equal to block in its CSS tag. Writing it will change the inline elements into block elements and then inline elements will also take the full width of the container.For example:display: block;",
    },
    {
      question: "13. What are <br> tags in HTML ?",
      answer:
        "Ans:-<br> tags are used to enter a new line into the HTML contents. These tags are generally used to separate two different lines of text between each other.",
    },
    {
      question: "14. Why Meta tags are used in HTML ?",
      answer:
        "Ans:-Meta tags in HTML are used by the developer to tell the browser about the page description, author of the template, character set, keywords and many more.Meta tags are used for search engine optimization to tell the search engine about the page contents.",
    },
    {
      question: "15. Define iframe in HTML.",
      answer:
        "Ans:-Iframe tag is written as <iframe>.An iframe is used to display different document content inside the different document content in a rectangular region in the browser. When different document content is embedded into a current HTML content, then it is known as an inline iframe.",
    },
    {
      question: "16. Why do we use the required attribute in HTML ?",
      answer:
        "Ans:-The required attribute is used in HTML to make the field mandatory. It forces the user to fill that particular field to submit the form.",
    },
    {
      question: "17. What is the SVG element ?",
      answer:
        "Ans:-SVG is a followed XML format; it stands for Scalable Vector Graphics which is used to create vector graphics with the support for interactivity and animation.SVG is resolution independent as it does not lose its quality when they are resized or zoomed.",
    },
    {
      question: "18. Explain about Canvas.",
      answer:
        "Ans:-Canvas is a pixel-based graphics and it is one of the new features of HTML5.It provides a space in the document where we can draw graphics by using JavaScript and it is resolution dependent, hence the quality will be affected when it’s zoomed or resized.",
    },
    {
      question: "19. Explain new form elements in HTML5.",
      answer:
        "Ans:- The new form elements that were added into HTML5 are:1)Datalist – It’s used as a list of options for input control.2)Keygen – This tag defines a key-pair generator (Private/Public) field.3)Output – It’s used to show the result of a calculation.",
    },
    {
      question: "20. What is Quirks mode in HTML5 ?",
      answer:
        "Ans:-If we do not include the <!DOCTYPE> element in our HTML page or Document, it will go to Quirks Mode. In this mode, the HTML element depends on the browser. Hence the content will be displayed according to the browser.",
    },
  ]),
  new Topic("ReactJs", "ReactJs", [
    {
      question: "1. What is React ?",
      answer:
        "Ans:-React is a front-end JavaScript library developed by Facebook in 2011.It follows the component based approach which helps in building reusable UI components.It is used for developing complex and interactive web and mobile UI.Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.",
    },
    {
      question: "2. What is JSX ?",
      answer:
        "Ans:-JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. ",
    },
    {
      question: "3. Why can’t browsers read JSX?",
      answer:
        "Ans:-Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
    },
    {
      question: "4. Explain the purpose of render() in React.",
      answer:
        "Ans:- Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.",
    },
    {
      question: "5. What do you understand by Virtual DOM ?",
      answer:
        "Ans:- Virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.",
    },
    {
      question: "6. What is Props ?",
      answer:
        "Ans:- Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.",
    },
    {
      question: "7. What is a state in React and how is it used ?",
      answer:
        "Ans:- States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().",
    },
    {
      question:
        "8. What are the different phases of React component’s lifecycle ?",
      answer:
        "Ans:- There are three different phases of React component’s lifecycle:1)Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.2)Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.3)Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.",
    },
    {
      question: "9. What are synthetic events in React ?",
      answer:
        "Ans:- Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.",
    },
    {
      question: "10. What do you understand by refs in React ?",
      answer:
        "Ans:- Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.",
    },
    {
      question: "11. What is arrow function in React ?",
      answer:
        "Ans:- Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.",
    },
    {
      question: "12. List some of the cases when you should use Refs.",
      answer:
        "Ans:- Following are the cases when refs should be used: 1)When you need to manage focus, select text or media playback 2)To trigger imperative animations 3)Integrate with third-party DOM libraries ",
    },
    {
      question: "13. What are Higher Order Components(HOC) ?",
      answer:
        "Ans:- Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components. ",
    },
    {
      question: "14. What are Pure Components ?",
      answer:
        "Ans:- Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application. ",
    },
    {
      question: "15. What is the significance of keys in React ?",
      answer:
        "Ans:- Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance. ",
    },
    {
      question: "16. How are forms created in React ?",
      answer:
        "Ans:- React forms are similar to HTML forms. But in React, the state is contained in the state property of the component and is only updated via setState(). Thus the elements can’t directly update their state and their submission is handled by a JavaScript function. This function has full access to the data that is entered by the user into a form. ",
    },
    {
      question: "17. What are React Hooks ?",
      answer:
        "Ans:- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. ",
    },
    {
      question: "18. What are advantages of using React Hooks ?",
      answer:
        "Ans:- Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.Hooks don’t work inside classes (because they let you use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect . ",
    },
    {
      question: "19. What is prop drilling and how can you avoid it ?",
      answer:
        "Ans:- When building a React application, there is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called prop drilling.        The primary disadvantage of prop drilling is that components that should not otherwise be aware of the data become unnecessarily complicated and are harder to maintain.To avoid prop drilling, a common approach is to use React context. This allows a Provider component that supplies data to be defined, and allows nested components to consume context data via either a Consumer component or a useContext hook. ",
    },
    {
      question: "20. Why should not we update the state directly ?",
      answer:
        "Ans:- If you try to update state directly then it won’t re-render the component.Instead use setState() method. It schedules an update to a component’s state object. When state changes, the component responds by re-rendering.Note: The only place you can assign the state is constructor. ",
    },
  ]),
  new Topic("Javascript", "Javascript", [
    {
      question: "1. What is JavaScript ?",
      answer:
        "Ans:-JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.",
    },
    {
      question: "2. Enumerate the differences between Java and JavaScript ?",
      answer:
        "Ans:-Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.",
    },
    {
      question: "3. What are JavaScript Data Types ?",
      answer:
        "Ans:-Following are the JavaScript Data types:1)Number2)String3)Boolean4)Object5)Undefined ",
    },
    {
      question: "4. What is the use of isNaN function ?",
      answer:
        "Ans:-isNan function returns true if the argument is not a number otherwise it is false.",
    },
    {
      question: "5. What are undeclared and undefined variables ?",
      answer:
        "Ans:-1)Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.2)Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.",
    },
    {
      question:
        "6. What are global variables? How are these variable declared and what are the problems associated with using them ?",
      answer:
        'Ans:-Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared. Example: // Declare a global globalVariable = "Test"; The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.',
    },
    {
      question: "7. What is a prompt box ?",
      answer:
        "Ans:-A prompt box is a box which allows the user to enter input by providing a text box. Label and box will be provided to enter the text or number.",
    },
    {
      question: "8. What is 'this' keyword in JavaScript ?",
      answer:
        "Ans:-'This' keyword refers to the object from where it was called.",
    },
    {
      question:
        "9. What is the difference between ViewState and SessionState ?",
      answer:
        "Ans:-'ViewState' is specific to a page in a session.'SessionState' is specific to user specific data that can be accessed across all pages in the web application. ",
    },
    {
      question: "10. Does JavaScript support automatic type conversion ?",
      answer:
        "Ans:-Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers. ",
    },
    {
      question:
        "11. Can you assign an anonymous function to a variable and pass it as an argument to another function ?",
      answer:
        "Ans:-Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function. ",
    },
    {
      question: "12. What are the scopes of a variable in JavaScript ?",
      answer:
        "Ans:-The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes. 1)Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code. 2)Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function. ",
    },
    {
      question: "13. What is Closure? Give an example.",
      answer:
        "Ans:-Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it. ",
    },
    {
      question: "14. How does TypeOf Operator work ?",
      answer:
        "Ans:- The typeof operator is used to get the data type of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. It is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand. ",
    },
    {
      question:
        "15. What is the difference between the operators ‘==‘ & ‘===‘ ?",
      answer:
        "Ans:- The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true. ",
    },
    {
      question: "16. What is the difference between null & undefined ?",
      answer:
        "Ans:- Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object. ",
    },
    {
      question: "17. What is the difference between innerHTML & innerText ?",
      answer:
        "Ans:- 1)innerHTML – It will process an HTML tag if found in a string  2)innerText – It will not process an HTML tag if found in a string ",
    },
    {
      question: "18. What is an event bubbling in JavaScript ?",
      answer:
        "Ans:- Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element. ",
    },
    {
      question:
        "19. What is the ‘Strict’ mode in JavaScript and how can it be enabled ?",
      answer:
        "Ans:- Strict mode is a way to introduce better error-checking into your code. When you use strict mode, you cannot use implicitly declared variables, or assign a value to a read-only property, or add a property to an object that is not extensible. You can enable strict mode by adding “use strict” at the beginning of a file, a program, or a function. ",
    },
    {
      question: "20. What are escape characters in JavaScript ?",
      answer:
        "Ans:- JavaScript escape characters enable you to write special characters without breaking your application. Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands. Place backslash before the characters to make it display. ",
    },
  ]),
];
