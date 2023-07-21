import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton() {
  return (
      <button>
        This is the button of a component nested.
      </button>
  );
}

function AddingCSSReact () {
  return (
    <>
      <h4> Example of adding CSS into react : </h4>
      <h5>{user.name}</h5>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
    </>
  )
}


export default function App() {
  return (
    <div>
      <h1>Welcome to a React Application based on React Documentation </h1>
      <a href="https://react.dev/learn"> Link to React Documentation </a>

      <div>
        <h2>Creating and nesting components : </h2>
        <h5>React apps are made out of components.</h5>
        <h5>Component is a piece of UI (user interface) , it is a JavaScript function that return a Markup.</h5>
        <h5>After declaring a component, it is possible to nest it into another one.</h5>
        <h5>The name of the component starts with a capital letter; That’s how you know it’s a React component.</h5>
        <h5> This a example of the button MyButton Nested : </h5>
        <MyButton />
        <h5>The "export default" keywords specify the main component in the file. (Learn about more about it in JavaScript)</h5>
      </div>

      <div>
        <h2>Writing markup with JSX : </h2>
        <h4>Application of JSX : </h4>
        <h5>JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like elements and components in your JavaScript code.</h5>
        <h5>If you have a lot of HTML to port to JSX, you can use an <a href="https://transform.tools/html-to-jsx">online converter</a>.</h5>
      </div>

      <div>
        <h2>Adding styles : </h2>
        <h5>In react, it is possible to specify a CSS class with className; it works the same as the HTML class attribute.</h5>
        <h5>We write the CSS rules for it in a separate CSS file</h5>
        <h5>React does not prescribe how you add CSS files. If you use a build tool or a framework, like : [Create React App (CRA), Webpack, Parcel, Next.js, Gatsby], consult its documentation to learn how to add a CSS file to your project.</h5>
        <AddingCSSReact />
      </div>

      <div>
        <h2>Displaying data : </h2>
        <h5>JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.</h5>
        <h4> Must review ////  string concatenation ??? meaning</h4>
      </div>

      <div>
        <h2>Conditional rendering : </h2>
        <h5>In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code.</h5>
        <h5>For example, you can use an if statement to conditionally include JSX.</h5>
        <h4> Must review ////</h4>
      </div>

      <div>
        <h2>Rendering lists : </h2>
        <h4> Must review ////</h4>
      </div>

      <div>
        <h2>Responding to events : </h2>
        <h4> Must review ////</h4>
      </div>

      <div>
        <h2>Updating the screen : </h2>
        <h4> Must review ////</h4>
      </div>

      <div>
        <h2>Using Hooks : </h2>
        <h4> Must review ////</h4>
      </div>

      <div>
        <h2>Sharing data between components : </h2>
        <h4> Must review ////</h4>
      </div>

    </div>
    
  );
}

