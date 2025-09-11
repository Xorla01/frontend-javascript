<h1>Task 1 - Teacher Interface</h1>

<h2>Setup</h2>
<p>Create a directory named <code>task_1</code> and copy these configuration files into that folder:</p>
<ul>
  <li><code>package.json</code></li>
  <li><code>tsconfig.json</code></li>
  <li><code>webpack.config.js</code></li>
</ul>

<h2>Requirements</h2>
<ul>
  <li><strong>firstName</strong> (<code>string</code>) and <strong>lastName</strong> (<code>string</code>) — these two attributes should only be modifiable at Teacher initialization (i.e. readonly after creation).</li>
  <li><strong>fullTimeEmployee</strong> (<code>boolean</code>) — this attribute must always be defined.</li>
  <li><strong>yearsOfExperience</strong> (<code>number</code>) — this attribute is optional.</li>
  <li><strong>location</strong> (<code>string</code>) — this attribute must always be defined.</li>
  <li>Add the possibility to attach any additional attribute to the object (for example <code>contract</code> (<code>boolean</code>)) without having to predefine the property name in the interface.</li>
</ul>

<h2>Sample TypeScript Interface</h2>
<pre><code>interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  
  /* Allow additional properties like "contract", "subject", etc.
     Here we permit strings, numbers or booleans for extra fields — adjust as needed. */
  [key: string]: string | number | boolean;
}</code></pre>

<h2>Notes</h2>
<ul>
  <li>Marking <code>firstName</code> and <code>lastName</code> as <code>readonly</code> enforces that they can be set at object creation but cannot be changed later.</li>
  <li>The index signature (<code>[key: string]: ...</code>) lets you add properties such as <code>contract</code> without adding them explicitly to the interface first.</li>
  <li>If you prefer more permissive typing for additional properties, you can replace the union type with <code>unknown</code> or <code>any</code>, but using a union keeps stronger type safety.</li>
</ul>

