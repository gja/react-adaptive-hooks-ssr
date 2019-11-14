import React from 'react';
import { render, hydrate } from 'react-dom';
import { ReactAdaptiveHooksExample } from './ReactAdaptiveHooksExample';

hydrate(React.createElement(ReactAdaptiveHooksExample), document.getElementById('ssr-example'));
render(React.createElement(ReactAdaptiveHooksExample), document.getElementById('client-example'));

setTimeout(() => {
  document.getElementById("debugging").innerHTML = `
<textarea cols="200">
${document.getElementById("ssr-example").outerHTML}
${document.getElementById("client-example").outerHTML}
</textarea>
`
}, 250);

