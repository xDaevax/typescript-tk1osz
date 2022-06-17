// Import stylesheets
import './style.css';

// Write TypeScript code!
let _linerDOM = document.getElementsByClassName('liner')[0];

let dimensions = {
  availableHeight: window.screen.availHeight,
  contentHeight: _linerDOM.scrollHeight,
};
let pageCount = Math.ceil(
  dimensions.contentHeight / dimensions.availableHeight
);

