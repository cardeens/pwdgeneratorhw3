# pwdgeneratorhw3

## Description 
The deliverable for this project was a password generator that can produce a random password, following five sets of criteria chosen by the user:

* How many characters in the password (between 8 and 128 characters)
* Should it include uppercase letters
* Should it include lowercase letters
* Should it include numbers
* Should it include special characters

Because the HTML and CSS was already in place, we already had a layout for the website that is mobile responsive and presents a good user experience. Therefore, we completed the application by building out the JavaScript logic that would work to collect the necessary criteria information from the user and build out the randomized password. 

The key to beginning the project was creating four separate arrays with all uppercase letters, lowercase letters, numbers, and special characters respectively. Next, we needed to create a prompt to ask how many characters the password would have, and four confirms to see what kind of characters the password should contain. From there, we could combine the arrays chosen by the user into one large array to pull from, and randomly select from that array the number of times specified by the user in the prompt. Then, those characters would be returned to the password tag in the HTML.

This is an important application so that people can generate secure passwords. With the amount of hackers, phishers, and scams, it is easy to have your password compromised if it isn’t strong enough or easily guessed. 

## Installation 
Now that you have access to the project repo, use the git clone command in your terminal to clone the resources onto your local device. Afterwards, open the directory in your code editor to access the index.html, style.css, and script.js files. You can also view the final product by clicking the website URL hosted by Git.

## Usage
In the directory, you will find four files:
* index.html: the skeleton of the password generator website
* style.css: the styling and formatting of the website
* script.js: contains all the new code added to create the necessary prompts and create a random password using the correct logic

## Tests
The expected outcome of the application is a randomized password that follows the users sets of criteria. To test, open any of the files in your browser. You will then see the password generator with an empty text box and a “generate” button. Start by pressing the generate button to start the prompts. You will then decide on the following sets of criteria for the password by entering the number of characters and clicking OK or Cancel for the type of characters to include:

* How many characters in the password (between 8 and 128 characters)
* Should it include uppercase letters
* Should it include lowercase letters
* Should it include numbers
* Should it include special characters

After choosing the criteria in the prompts, your randomized password should fill in the text box.

