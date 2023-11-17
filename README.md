## Hotels app

This project is a single-page application displaying a list of hotels.
It's not a production ready software, is made for code practice. 
Written in Typescript, using ReactJs for UI. Testing is done using jest and react-testing library.

### List features
The list is sorted by price in ascending order.
The list be filtered by hotel name and star ratings. 

### Data
The list of hotels is fetched from a json file.
Images are stored in a public folder. Each image has a full-size and a mobile version, for art-direction and reducing load size. 

### Descoped
Normally a react app would use a state management library like Redux-saga, 
but I descoped it for the purpose of this exercise.
Also I didn't do much performance optimization, assuming the maximum length of the hotels list won't be larger than 500.
Features like pagination or infinite scroll were descoped for this project.
I omitted the Logo in the header on purpose.

No AI was used for implementation.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.


