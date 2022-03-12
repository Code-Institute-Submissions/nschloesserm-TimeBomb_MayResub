# Time Bomb

The idea behind the project Time bomb, was to create a game that had three aspects.  The aspect being a puzzle, in which the user clicks on each button generating a random color until none of the button's colors match the named color in the box.  The second aspect was the named color text itself.  The text names one color while its own text color is that of another.  The idea behind this was to create a brain teaser, that would throw off the user and potentially make the game more fun.  The final aspect was the timer, which added urgency for the user to complete the game.  I felt like this is what brought the game together, creating both a frustrating and better experience for the user.

This game was designed with the intention of continuous user interaction.  The goal was to make it difficult enough to challenge the user, but also easy enough to keep the user engaged. Time Bomb is a fully interactive JavaScript puzzle game built with the intent to inspire continuous play!


![Mockup](assets/images/TimeBombFormat.png)

## Features 

### Existing Features

- __The Time Bomb Heading__

  - Featured at the top left corner of the page, the Time Bomb heading is easy to see for the user. This title implies both the purpose of the game and the drawn font adds to the playfulness of the experience.

![Logo](assets/images/TimeBombHeading.png)

- __The Game Area__

  - This section will allow the user to play the TimeBomb Game.  It is clear that the Time Bomb can be activated through the start button and the instructions on the uper right hand corner clear up everything else that is not infered. 
  - The user will be able to change the color of each button by clicking them and when they click enter the program checks to see that they had changed the proper colors in the alotted time. 

![Game](assets/images/TimeBombGameArea.png)

- __The Named Color, Timer, and Instructions sections__

  - These sections provide the context and purpose of the game.
  - The user will have five seconds to complete the chalenge before the bomb "explodes"

![game sections](assets/images/timeBombFunctions.png)

- __The Score Area__

  - This section will allow the user to see exactly how many defusions and explosions they have gotten durring the gameplay. 

![score](assets/images/timebombscoring.png)


### Features Left to Implement

- I would like to create a countdown section for the defusion points that changes the dynamics of the game for every ten defusions.
- I would also like to make the game more mobile friendly

## Testing 

- LightHouse
    - The only major issue was that of accessibility in the naming of buttons, but I am not sure how to resolve that in a game where sight is necessary.

![score](assets/images/lighthousetesting.png)

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator#css)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 30 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 25 statements in it, while the median is 1.
      - The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### Unfixed Bugs

I did have some issues with the JShint validator, because I had to use a jquery library in order to create the set random color function for the buttons.  I am going to do more research on if there is a better way to do this, because I feel as if I overthought and over worked this section.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site
