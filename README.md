# A Step-by-Step Tutorial on Using Google Gemini Vision API with Node.js

### Introduction:
In this tutorial, we will guide you through using the Google Gemini Vision API in your Node.js project by utilizing the provided `runner.js`, `gemini-core.js`, `porsche-prompts.js` and package dependencies. The goal is to demonstrate the power of Google's generative AI models using the simplicity of `Node`.

### Prerequisites:

* Familiarity with JavaScript and Node.js programming concepts
* Installed Node.js (>= v14 LTS recommended)
* Text editor or IDE for coding

### Steps:

**Clone the project:**

The easiest way is to clone the project, and create your `.env` file on its root folder.

`.env` contains the Gemini API key: `API_KEY=<your_google_api_key>`

**Main and Necessary Files:**
These are the main files named as follows:

* `runner.js`
* `gemini-core.js`
* `porsche-prompts.js`
* `.env`

Copy the code snippets below into their respective files.

`runner.js` It contains the main logic for invoking the Google Gemini Pro Vision API and handling its results.

`gemini-core.js` includes functions responsible for interacting with the API itself. We import necessary modules, define helper methods, and implement the core functionality within this module.

**.env** file stores sensitive information like API keys. Create the file in the root of your project '/', and add the following line to the .env file:

```
API_KEY=<your_google_api_key>
```
Replace `<your_google_api_key>` with your actual Google Cloud Platform API key. If you don't have one yet, follow these instructions to obtain one: <https://developers.google.com/maps/documentation/javascript/get-api-key>. Make sure to enable the 'Vertex AI Workbench API' under APIs & Services > Dashboard > Library after creating the API Key.

**4. Implement Prompt Functionality:**
For demonstration purposes, we are using predefined prompts stored inside `./prompts/porsche-prompts.js`. Feel free to modify them according to your needs. In real-world scenarios, you might want to replace this part with dynamic user input instead.

**5. Execute the Application:**
Run the `runner.js` script by typing `node runner.js` in the terminal or command prompt. Upon execution, the system fetches the image located at `images/2023_porsche_taycan.jpeg` and queries the Google Gemini Pro Vision API to retrieve showroom details associated with the picture. Results will then be displayed in the console output along with saved textual responses in separate files.

### Conclusion:
This tutorial demonstrated how to utilize the Google Gemini Vision API within a Node.js environment. 

By implementing custom prompts and integrating other features, developers can extend this foundation to build powerful applications capable of processing images and generating human-like texts based on visual inputs.