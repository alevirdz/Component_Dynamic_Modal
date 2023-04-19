# Dynamic Modal Component

## What is a web component?
Web components are blocks of code that encapsulate the internal structure of HTML elements, including CSS and JavaScript, thus allowing the code to be reused as desired in other websites and applications.
Code reuse takes advantage of previous work, saves time, and reduces redundancy.


## Development

In this development I used the Bootstrap 5 framework in which I solved a redundant problem in the modals, saved it in a file so that it can be imported and called from any part of the code just by using ModalMessage and passing the required parameters.

In the middle of the process I ran into a problem: We don't just use modals to display messages to the user; but sometimes we use events.

The solution was adding an ID to the accept button, call it from the click event and now we can proceed with our logic.

<strong>There is no need to recreate the wheel if we already have it up and running.<strong>


## Technology 

- HTML 5
- Bootstrapp 5
- Jquery v3.6.4
- Javascript ECMAScript 6

## Use
````
  ModalMessage({
    title: String,
    body: String,
    options: {
        displayAcept: Boolean,
        textAcept: String,
        textCancel: String
        }
    });
````    

Launch event

````
   let actions = document.getElementById("accept").addEventListener('click', () => {
    //Actions
    })
````

## Reference

<img src="https://user-images.githubusercontent.com/80425451/233206478-5e670abf-c671-4906-8928-740289d3f670.png" alt="Reference image" style="max-width: 100%;">

<img src="https://user-images.githubusercontent.com/80425451/233206656-a4f4d8d4-3107-4cce-9726-b805560a4921.png" alt="Reference image modal" style="max-width: 100%;">

<img src="https://user-images.githubusercontent.com/80425451/233206884-62ad3c22-bb32-4541-a54d-7ea4f0d20ae6.png" alt="Reference image modal 2" style="max-width: 100%;">

