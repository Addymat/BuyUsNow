# React Project Readme

## Overview
This is a React project consisting of three main components - `Body.js`, `Recommendedevents.js`, and `Upcomingevents.js`. Each component serves a specific purpose in creating a user interface for an event-based application.

## Components

### 1. Body.js
- `Body.js` serves as the main layout component of the application, containing the header and navigation bar.
- It provides the overall structure and styling for the application's user interface.
- The header and navigation bar allow users to navigate through the application's various sections.

### 2. Recommendedevents.js
- `Recommendedevents.js` is responsible for displaying recommended events with a horizontal scroll.
- It utilizes infinite scroll functionality, loading more events as the user scrolls horizontally.
- The events are fetched from an external API and displayed with their respective images, names, locations, and dates.
- Due to limitations in accessing images directly from the API, an array of locally stored images is used for event thumbnails.

### 3. Upcomingevents.js
- `Upcomingevents.js` displays upcoming events with a vertical scroll.
- Similar to `Recommendedevents.js`, it implements infinite scroll to load more events as the user scrolls.
- Events are fetched from the same external API, providing details such as event names, locations, and dates.
- The layout and styling are consistent with the rest of the application, providing a cohesive user experience.

## Implementation Details
- Infinite scroll functionality in both `Recommendedevents.js` and `Upcomingevents.js` is achieved using state variables and conditional rendering.
- The `

useEffect` hook is utilized to fetch events from the API when the components mount, ensuring that the data is up-to-date.
- Bootstrap is used for layout and styling to create a visually appealing and responsive user interface.
- To improve website performance, efforts were made to optimize the code and minimize the number of imports. However, due to the necessity of locally stored images for event thumbnails, the application's loading speed may be affected.

## Running the Project
To run the project locally:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open the application in your web browser at the specified localhost address.

## Conclusion
This React project provides a user-friendly interface for browsing and discovering events. With components like `Recommendedevents.js` and `Upcomingevents.js`, users can easily navigate through recommended and upcoming events, while infinite scroll functionality ensures a seamless browsing experience. The use of Bootstrap for styling and layout, along with careful consideration of performance optimizations, contributes to the overall usability and efficiency of the application.
