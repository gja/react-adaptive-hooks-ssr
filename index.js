const express = require("express");
const fs = require("fs");
const ReactDOMServer = require("react-dom/server");
const { ReactAdaptiveHooksExample } = require("./src/ReactAdaptiveHooksExample");
const React = require("react");

const app = express();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
  <head><title>React Adaptive Hooks Example</title></head>
  <body>
    <div id="ssr-example">${ReactDOMServer.renderToString(React.createElement(ReactAdaptiveHooksExample))}</div>
    <div id="client-example"></div>
    <div id="debugging"></div>
    <script type="text/javascript">${fs.readFileSync("dist/main.js")}</script>
  </body>
`)
})

app.listen(3000, () => console.log("Listening on port 3000"));
