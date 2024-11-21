# EMPOWERING-THE-NATION-XHAW-POE
# Project Overview:

The Empowering the Nation Mobile App is designed to provide students of Empowering the Nation with an easy and efficient way to access essential information about available courses, calculate fees, and contact the organization. The app offers two primary course categories: Six-Month Courses and Six-Week Courses, both designed to help domestic workers and gardeners acquire new skills and increase their earning potential.

# The app includes several features:

Course Listings: Displays information about the different courses offered.
Fee Calculation: Allows students to calculate fees based on the courses they choose.
Contact Information: Provides contact details and location information of Empowering the Nation’s campuses.
Responsive Design: The app is designed to be user-friendly with easy navigation and a modern, visually appealing interface.
This project is aimed at improving the accessibility and user experience for Empowering the Nation's students, providing them with the necessary tools to make informed decisions about their education.

# Technical Documentation:
# Code Structure:
The mobile app is built using React Native with Expo as the development environment. The project folder is organized as follows:
/App
  /assets
    - logo.png
    - first-aid.png
    - sewing.png
    - landscaping.png
    - life-skills.png
  /utils
  App.tsx
  package.json
  babel.config.js
  tsconfig.json
  
# Technologies Used:

React Native: For building the mobile application, allowing cross-platform development for Android and iOS.
Expo: Provides an easy setup and developer environment to run and build React Native apps.
JavaScript (ES6): For writing the app's logic.
TypeScript: To ensure type safety and reduce potential runtime errors.
React Navigation: Used for handling screen navigation within the app.
React Native Components: Such as Image, Text, TouchableOpacity, View, and TextInput to build the UI.

# Components Description:

CourseCard: A reusable component to display individual course cards (used in Six-Month Courses and Six-Week Courses screens).
CourseDetails: Displays detailed information about a specific course when selected from the course listing.
FeeCalculator: Allows users to calculate their total fees based on selected courses.
Header: A simple component used across multiple screens for displaying the app's title and navigation.

# Key Screens:

HomeScreen: The main screen that greets the user and provides links to the different sections of the app (courses, fee calculator, and contact info).
SixMonthCoursesScreen: Displays the list of courses in the Six-Month program.
SixWeekCoursesScreen: Displays the list of courses in the Six-Week program.
CourseDetailsScreen: Shows detailed information about a selected course, including fee and description.
CalculateFeesScreen: Allows users to select courses and calculate their total fees.
ContactScreen: Displays contact information, including phone number, email, and campus locations.

# Project Challenges and Solutions:
Challenges:
Navigation Setup:

Problem: The app required multiple screens with a seamless user experience, and setting up React Navigation initially caused some layout issues.
Solution: After thoroughly reviewing the React Navigation documentation, I correctly configured the navigation flow between the screens using React Navigation's Stack Navigator. This allowed for smooth transitions between the Home Screen, Course Listings, and Course Details.
Fee Calculation Logic:

Problem: Implementing the logic to calculate the total fee, considering different discounts based on the number of selected courses, was tricky.
Solution: I divided the logic into smaller helper functions and used conditional statements to handle the discount logic, ensuring that the app correctly applies the discount and VAT to the total fee.
UI Consistency:

Problem: Maintaining a consistent layout and responsive design across different screen sizes and devices was difficult.
Solution: I utilized Flexbox for responsive layout management and tested the app on different screen sizes using the Expo Client to ensure that the UI adapts well to both small and large screens.

# Solutions and Learnings:
Solution to Navigation: Configured Stack Navigator for handling transitions between screens. I learned the importance of organizing screen flows clearly and efficiently.
Solution to Fee Calculation: I used helper functions to modularize the fee calculation logic, ensuring that the code is maintainable and reusable.
UI Consistency: Through extensive testing, I ensured that components like buttons and course cards had consistent margins, padding, and text alignment for a polished look.
