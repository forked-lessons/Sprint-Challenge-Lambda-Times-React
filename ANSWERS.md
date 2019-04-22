- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

      Proptypes are used to make sure the data we are using is what we expect it to be. This could be checking to see if what we expect to be an string or number ir actually being passed as that. It can help us identify bugs and prevent errors.

* [ ] Describe a life-cycle event in React?

      A react lifecycle event is birth/mounting phase. This is where you define the data you will have access to as well as where your render method and componentDidMount gets called.

- [ ] Explain the details of a Higher Order Component?
      HOC's allow you to reuse component logic. They allow you to pass a function through another function.

  THis can be useful for creating something like a login page which will only display under certian conditions. The HOC can check if these conditions are met and then render the correct page.

* [ ] What are three different ways to style components in React? Explain some of the benefits of each.

To style components in react you can use

styled-components:
This allows you to write CSS in JS and style your component in the same JSX file that you built that component in. If gives you access to HOF and other Preprocessor methods.

Css:
You can use a traditional CSS stylesheet. This is simple and perhaps the easiest method to use.

Preprocessors:
You can use a preprocessor like Less/Sass to style your components. You can create a new file for every component and then import them to that component. This keeps things organized and you know where to look for each style.
