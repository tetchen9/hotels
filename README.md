## Hotels app

This project is a single-page application displaying a list of hotels.
Written in Typescript, using ReactJs for UI and SCSS for styling. Testing is done using jest and react-testing library.

### List features
The list is sorted by price in ascending order.
The list can be filtered by hotel name and star ratings. 

### Data
The dataset with hotels is fetched from a json file.
Images are stored in a public folder. Each image has a full-size and a mobile version, for art-direction and reducing load size. 

### Descoped
For the purpose of this exercise I descoped the several things that I would normally do:
1. Using a state management library like Redux-saga.
2. Performance optimization. Assuming the maximum length of the hotels list won't be larger than 500.
3. Features like pagination or infinite scroll.
4. Full unit test coverage.
5. The Logo in the header was omited on purpose.

No AI was used for implementation.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.


