## Holyday Locator - Interactive Frontend Development Milestone Project
 
 This is single page application which uses Google Maps API to allow users to search for their next holiday destination.
 The users can search for different cities all around the world and find
 information about a particular location. After clicking on the button, located at the bottom of the page,
 a map will pop up. Users can type a destination city in the search bar located at the top of the map then a location can be chosen
 between: **hotels**, **bars**, **restaurants**, **stores**, **ATM's**, **parks** and **museums**. The map will be populated with icons
 related to the chosen location. When an icon is clicked, information about that location will be displayed.


### UX

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

The wireframes for this website can be seen here.

### Features

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

### Technologies Used