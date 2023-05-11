# Eazy Home - Frontend Readme

Welcome to the Eazy Home frontend repository! In this readme, we will provide an extensive description of the frontend side of the Eazy Home application, which is a web-based platform that allows users to rent out their homes or find accommodations for their travels. Our frontend is built using ReactJS, a popular JavaScript library for building user interfaces.

## Getting Started

To get started with the Eazy Home frontend, you will need to have Node.js installed on your machine. You can download and install Node.js from the official website: https://nodejs.org/en/. Once Node.js is installed, clone this repository to your local machine and run the following commands:

```
cd eazy-home-frontend
npm install
npm start
```

These commands will install all the required dependencies and start a development server on your local machine.

## Project Structure

The Eazy Home frontend is organized using the following directory structure:

```
|-- src/
    |-- components/
        |-- common/
        |-- features/
    |-- pages/
    |-- redux/
    |-- services/
    |-- styles/
```

- The `src/components` directory contains reusable UI components that are used throughout the application. It is further divided into `common` and `features` directories. The `common` directory contains generic components such as `Button` and `Input`, while the `features` directory contains feature-specific components such as `ListingCard` and `ReservationForm`.

- The `src/pages` directory contains the top-level pages of the application such as `HomePage`, `ListingPage`, and `ReservationPage`.

- The `src/redux` directory contains the Redux store configuration, actions, and reducers.

- The `src/services` directory contains the API services that communicate with the backend.

- The `src/styles` directory contains global styles that are applied throughout the application using the `styled-components` library.

## Features

The Eazy Home frontend includes the following features:

- **Authentication**: Users can sign up, log in, and log out of the application using their email and password.

- **Search**: Users can search for listings based on location, check-in and check-out dates, and number of guests.

- **Listings**: Users can view detailed information about each listing, including photos, amenities, and reviews.

- **Reservations**: Users can make reservations for listings by selecting the check-in and check-out dates and the number of guests.

- **User Profile**: Users can view and edit their personal information, including their name, email, and profile picture.

## Technologies Used

The Eazy Home frontend is built using the following technologies:

- **ReactJS**: A popular JavaScript library for building user interfaces.

- **Redux**: A predictable state container for JavaScript applications.

- **React Router**: A library for declaratively routing in React applications.

- **Axios**: A library for making HTTP requests.

- **Styled Components**: A library for styling React components.

## Contributing

We welcome contributions to the Eazy Home frontend! To get started, please fork this repository and create a new branch for your changes. Once you have made your changes, submit a pull request and we will review it as soon as possible.

## License

The Eazy Home frontend is licensed under the MIT License. See the `LICENSE` file for more information.