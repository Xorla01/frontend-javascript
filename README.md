<h1>Task 0 - TypeScript + Webpack Project</h1>

<h2>Description</h2>
<p>
This project sets up a basic <strong>TypeScript + Webpack</strong> environment with ESLint.  
It demonstrates how to define a TypeScript interface, create objects, and render a table dynamically in the browser.
</p>

<h2>Setup</h2>
<ol>
  <li>Copy these configuration files into the <code>task_0</code> folder:
    <ul>
      <li>package.json</li>
      <li>.eslintrc.js</li>
      <li>tsconfig.json</li>
      <li>webpack.config.js</li>
    </ul>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>📝 Instructions</h2>
<ul>
  <li>Create an <strong>interface</strong> <code>Student</code> with:
    <ul>
      <li><code>firstName</code> (string)</li>
      <li><code>lastName</code> (string)</li>
      <li><code>age</code> (number)</li>
      <li><code>location</code> (string)</li>
    </ul>
  </li>
  <li>Create two students and store them in an array <code>studentsList</code>.</li>
  <li>Render a <strong>table</strong> in the browser that displays each student's <strong>first name</strong> and <strong>location</strong>.</li>
</ul>

<h2>Usage</h2>
<ul>
  <li>Start dev server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Build for production:
    <pre><code>npm run build</code></pre>
  </li>
  <li>Lint code:
    <pre><code>npm run lint</code></pre>
  </li>
</ul>

<h2>Requirements</h2>
<ul>
  <li>Webpack should show <strong>No type errors found</strong>.</li>
  <li>Use <strong>TypeScript types</strong> for all variables.</li>
</ul>
