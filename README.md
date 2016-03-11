# Relax And Color

## Contributors:
  - Max Jacobsen: Linkedin (https://www.linkedin.com/in/maxjacobsen33) GitHub (https://github.com/max33nau)
  - Whitney Harvey: Linkedin (https://www.linkedin.com/in/wmharvey)  GitHub (https://github.com/wmharvey)

## Purpose:
Sometimes people need to just relax and unwind. One way to do this that is all the rage right now
are adult coloring books. Coloring in complicated designs, that allow you to turn your brain off to
the outside world and simply let your creative mind flow, can act as soothing form of meditation.
It gives you the feeling of being able to act like a kid again and come up with an artistic, eye pleasing,
colorful piece that only you yourself thought of. It doesn't require much of a effort but in a world where
time is money, some people might just might not be able to find the time in their day to sit down a slowly
fill in a page.

This app is designed to make that time available for people who still want that relaxing feeling that people
get from working on coloring books for adults. It is meant to bring the coloring book to your screen so you can color
anytime or anywhere in quick fashion but still get the satisfaction of creating a colorful picture from a blank canvas.
Instead of having to color in every dot and worry about going outside the lines (which I hate) you will be able to simply
click on a certain color and then click the area of the image where you want that color to be filled in.

## User Stories:
#### Authentication
  1. As a user I want to be able to sign in with a third party authentication system or create my own personal account
  2. As a developer I want my user's personal account information whether it be created through a email or a username to be encrypted
  in the database along with my password so I can know my account security is safe.
  3. As a developer I want to have ensured authentication passed through all requests to my database to verify the request is allowed.
  I want to do this through either a token or cookie system using something like satellizer.

#### Layout
  1. As a developer I want to the site to look well put together and be able to be explored easily by the user.
  2. As a developer I want to use SMACSS principles in organizing my CSS/SCSS
  3. As a developer I want to add some subtle animations that make transitions more visually pleasing for the user.
  4. As a user I want the site to be uplifting and colorful with a mellow layout.
  5. As a developer I want to use flex box to organize the images so they are easy to choose from for a user.
  6. I want to use AngularJS to control the content of my app and how its functionality is controlled.

#### Database
  1. As a developer I want to use mongolabs database where I can store information regarding my user's personal information and the
  svg images that we will be allowing the user to choose from when it comes to the next picture they want to use.
  2. As a developer I want to use the mongoose module to be able to communicate with my mongo database and possibly use a restify api in order to make the app a RESTful about with CRUD capabilities

#### Content
  1. Home Page
    - As a user I want to be able to sign in on the home page and be able to search the whole site through the main navigation bar.
    - As a developer I want the user to be redirected to the home page if they try to go somewhere that requires authentication and they don't have a token.
  2. Gallery Page
    - As a user I want to be able to see all the images I have the options to choose from.
    - As a user I want to be able to sort the images based on 'most recently added', 'a-z', 'most popular', 'most clicked'.
    - As a user I want to be able to filter the images out based on categories such as 'animals', 'zodiac signs', 'swear words', 'intricate designs', 'sports', etc...
    - As a user I want to be able to click on the image I want to color and have it take me to a page with that image blown up and ready to be colored.
  3. Coloring Page
    - As a user I want to be able to choose colors from a color-palette simply by clicking on it and it display the current color I have chosen.
    - As a user I want to be able to click on a part of a image and have that image but filled in with the color I specified.
    - As a user I want to be able to save my current work and come back to it so I don't have to start over everytime.
    - As a user I want to be able to go back to my last saved point of my image and begin again.
    - As a user I want to be able to wipe the image completely and start over from scratch.
    - As a user I want to be able to have a finish button where I can post in my own personal gallery that I can view and come back later to edit if I so choose.
  4. Personal gallery
    - As a user I want to be able to see all the images I am currently working on and choose which ones I want to work on next.
    - As a user I want to be able to say if I liked coloring in this particular image or if I found it was not very enjoyable.
    - As a user I want to be able to delete a image completely from my gallery if I don't want people to look at it.
    - As a user I want other people to be able to view my images and say if they liked my finished work or not.

#### Developer Tools
  1. As a developer I want my project to be well organized and easy to follow. No random files in the wrong place
  2. As a developer I want to use webpack to bundle all my files so they will work in the browser
  3. As a developer I want to write tests to check the functionality of my components within my angular app

## Stretch Goals
 1. Allow the user to be able to share their image on a third party social media site such as facebook or twitter.
 2. Allow the user to be able to purchase their finished photo if they wanted to get it framed or want it on a poster.
 3. Allow the users to comment on people's work and offer suggestions on their final piece.
 4. Allow the user to do different coloring styles such as different shadings or css animations of the colors which will spice of their
 artwork and user experience.
 5. Allow the user to upload their own photos that are in svg format so that they can choose their own photo too color.
