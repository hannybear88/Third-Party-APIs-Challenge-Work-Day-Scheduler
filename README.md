# Third-Party-APIs-Challenge-Work-Day-Scheduler
Homework Challenge #5




## Project Description

For this assignment we had to create a work day scheduler. We had to make sure that there are timeblocks for the day and that the time, day, and date shows at the top. We had to make sure that the time blocks show the past, present, and future. The past shows as gray, present as red, and future shows as green. When the user clicks on the time slot it wold turn white then they would write their schedule for the timeslot(s). When they click out of it it would go back to gray then the user would have to save. When the user clicks refresh then their schedule for the timeslot(s) would persist. They can also click on clear day to completely clear out their schedule for the day. I had also added extra hours to the day just in case the user has meetings and other work related schedules before 9AM. I had also added a delete button to make it easier for the user just in case they had accidentally added the schedule for the wrong time or if there was a cancellation or change in time for the original schedule time. My live page can be seen in the <a href="#Table of Contents">Table of Contents</a> section.JS Code was created by me. The HTML and CSS codes were all already provided by UCSD Coding Bootcamp. They had already added a media query to make it user friendly for those who choose to use the "replace with correct deployed application" on either a mobile and/or tablet. You can <a href=hhttps://github.com/hannybear88/Third-Party-APIs-Challenge-Work-Day-Scheduler/>Click here</a> to see my code for this project. 

## Table of Contents
<nav>
    <ol>
        <li><a href="#Installation">How to Use this Project</a></li>
         <li><a href="#How to Use this Project">How to Use this Project</a></li>
          <li><a href="#Features">How to Use this Project</a></li>
        <li><a href="#Support">Support</a></li>
        <li><a href="#Credits">Credits</a></li>
        <li><a href="#Contributors">Contributors</a></li>
    </ol>
</nav>

## Installation

Installation is not required, unless you plan on refactoring the code. Please <a href="mailto:hannahkchung88@gmail.com">email me</a> to make sure this is okay. 

## How to Use the Project

<!--replace with workday schedule deployed application -->
to be directed straight to the deployed application



AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
<img src="./assets/images/Work-Day-Current-Day.png" />

WHEN I scroll down
THEN I am presented with time blocks for standard business hours



WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
<img src="./assets/images/Color-Coded-Past-Present-Future.png" />

Past = GRAY
<img src="./assets/images/Work-Day-Schedule-Past.png" />

present = RED
<img src="./assets/images/Work-Day-Schedule-Present.png" />

Future = GREEN
<img src="./assets/images/Work-Day-Schedule-Future.png" />

WHEN I click into a time block
<img src="./assets/images/User-Clicks-on-Timeblock.png" />

THEN I can enter an event
<img src="./assets/images/User-Enters-Schedule-in-Timeblock.png" />
<img src="./assets/images/User-Entered-Schedule-in-Timeblock.png" />

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
<img src="./assets/images/User-Clicks-Save-to-Save-Their-Schedule-of-the-Day.png" />

WHEN I refresh the page
THEN the saved events persist
<img src="./assets/images/User-Saves-Their-Schedule-of-Their-Day.png" />






<!--repace with screenshot of workday schedule-->
<img src="./assets/images/HW4_main_page_screenshot.png" />


## Features

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JQuery</li>
    <li>Moment.js</li>
    <li>Bootstrap</li>
</ul>

## Support

If you need extra support feel free to <a href="mailto:hannahkchung88@gmail.com">email me</a>



## Credits

<ul>
    <li>Code refactored by Hannah Chung</li>
    <li>index.html and style.css, starter codes provided by UCSD Coding Bootcamp</li>
</ul>

## Contributors

<ul>
    <li>Code refactored by Hannah Chung</li>
    <li>index.html and style.css, and starter codes provided by UCSD Coding Bootcamp</li>
</ul>