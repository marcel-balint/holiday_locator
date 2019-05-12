## Holiday Locator - Interactive Frontend Development Milestone Project
 
 This is single page application which uses Google Maps API to allow users to search for their next holiday destination.
 The users can search for different cities all around the world and find
 information about a particular location. After clicking on the button, located at the bottom of the page,
 a map will pop up. Users can type a destination city in the search bar located at the top of the map then a location can be chosen
 between: **hotels**, **bars**, **restaurants**, **stores**, **ATM's**, **parks** and **museums**. The map will be populated with icons
 related to the chosen location. When an icon is clicked, information about that location will be displayed.


## UX

This website is intended for people who plan to go on vacation or for people whose job involve traveling,
for example flight attendant. This type of user will want to know where places to stay and places to eat are,
and also points of interest which they may like to visit.

With this single page application, a user will be able to do the following:

1 A traveler can find a city he/she is about to visit.

2 A traveler can find more information about a hotel where he/she wants to book a room by calling or checking the website; 

3 A traveler can check before if there are bars in town where he/she can relax and make some friends.

4 A traveler is be able to call up a restaurant in an area he/she is visiting next month, so that he/she can book a table.

5 A traveller can check if there are any shops and what type of shops are in that particular city, so he/she can decide which one to 
visit.

6 A traveler can check if there are ATM's in city so he/she can withdraw cash or check his/her bank account balance.

7 If a traveler wants to know more about the culture of the city, he/she can find information about all museums of that particular city by checking their website.

The wireframes for this website can be seen [here](https://github.com/marcel-balint/holiday_locator/tree/master/assets/wireframes).

## Features

- The **Contact** button, located on the top-right side of the page:
   -  on hover, the button slowly transitions into a lightgray color and the text becomes black;
   -  when clicked this button displys a modal which contains a contact form;
       - all input fields of the contact form contains the ```required``` attribute which specifies that an input field must be filled out before submitting the form;
       - at the bottom of the contact form there is a **Contact  me** button which have a hover effect of dark red color (```#b80000```), and the font becomes lightgray (```#d3d3d3```);
       
- Introduction text - This section introduces the user to the application, explains the main functionality of app and gives the user instructions on how to use it;
- A background image with a picture from a Miami pool - the aim of this picture is to give the user a good feeling of relaxation, vacation mood;  
- A button located at the bottom of the page which pulses every ```1.2s```, at each pulse has a shadow effect of ``50px``;
   - when hovered over, the button stops pulsing and the font becomes lightgray (```#d3d3d3```);
   - when clicked this button displys a modal which contains _the map_.
- A map :
   - On the top-left side of the map there is an input field which gives the user the ability to search any city;
   - On the top-right side of the map there is a drop-down list which helps the user to filter out their search between **hotels**, **bars**, **restaurants**, **stores**, **ATM's**, **parks** and **museums**;
   - Icons - will drop on the map according to the chosen location, when clicked, each icon will display an _info window_ - allowing user to view the name of the establishment, address and telephone number;
   - Under the search bar, is displayed a list with the results of the search (if the screen is under 1300px, this list will hidden).

## Technologies Used


* [HTML5](https://en.wikipedia.org/wiki/HTML) - used for rendering the website.
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - used to style the features of the website and to create responsiveness.
* [JavaScript](https://www.javascript.com/)  - to execute different parts of Google map API code and DOM manipilation.
* [Maps JavaScript API](https://cloud.google.com/maps-platform/) - allow users to search a city, auto complete their search queries, search for different location types and get establishment names, addresses, contact numbers and official websites.
* [Cloud9 IDE](https://aws.amazon.com/cloud9/) - used to build this project.
* [GitHub](https://github.com/) - the project uses GitHub to host website.


## Testing
This site was tested in google dev tools, responsiveness was tested to ensure that everything works well. 
Also all features of the page are scaling as intended in tablet and mobile devices.

I also tested mobile responsiveness on [this](https://varvy.com/mobile/) website. According to this, my website is 100/100 mobile friendly, [here](https://github.com/marcel-balint/holiday_locator/blob/master/assets/responsiveness/mobile_friendly.png) are the results.

If you try to submit the contact form with an invalid email address, there will be a warning saying that the field is missing the '@' character.
Furthermore, the ```required``` attribute is added to all fields of the contact form, so if those fields are not filled in,
the form will not submit. If all fields are valid, the form will be sent and the page will reload.

All the links from the *Info Window* will open in a new tab using ```target="_blank"``` attribute.

Site was tested on the following browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge

## Deployment

Created a new repository on GitHub then throughout the project commits were made (by using the terminal in Cloud9), after every important feature of the website.

The HTML and CSS code passes the oficial validator with no issues.

The JavaScript code passes trough [JSHint](https://jshint.com/) with no issues.

There is no difference between the deployed version and the development version.

The project has been deployed on GitHub Pages.

To run locally, you can clone this repository directly into the editor by pasting
```git clone https://github.com/marcel-balint/holiday_locator.git``` into your terminal.


## Credits
#### Content
Much of the ```main.js``` file  JavaScript code has been taken from the Google Maps JavaScript API Documentation,
then, I modified the code (added, removed), according to my plans.


#### Media

* The background image was taken from [Pexels.com](https://www.pexels.com/).
 
* The icons used on the map was taken from [Findicons.com](https://findicons.com/).
 

#### Acknowledgements

* Google Maps Platform Documentation
* Stack Overflow
* [Code Institute](https://codeinstitute.net/) tutors


