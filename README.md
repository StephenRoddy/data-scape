## Project Overview: Data-scape
This project is to develop a react and bootstrap based framework for Online Datta Sonifications  using the current COVID-19 data.

The framework integrate graphs and maps from d3.js & Apex Charts, audio from Tone.js and animations from p5.js (HTML5 Canvas & WebGL) within React w/Bootstrap for CSS.

The framework is a front-end alternative to purely visual dashboards that allows for the integration of sonification and auditory display as well as new visual possibilities presented by p5.js.

In its current state, d3.js, p5.js, apex charts and tone.js are integrated.

I am currently using Apex Charts over d3.js.

Next steps:

1. There are currently 4 line graphs. 2 representing case and death data over a 7 day period and 2 representing the data across the entire pandemic.
Because we can zoom in on the line graphs the 7 day representation is redundant.
Replace this with a different kind of graph, and represent different data.
Bar charts representing the number of new cases per day (over the past 7) rather than the total cases to date on that given day would make more sense.

2. Add new sonification strategies. 



RESOURCES:
https://opendata-geohive.hub.arcgis.com/datasets/d8eb52d56273413b84b0187a4e9117be_0/geoservice?geometry=-7.921%2C53.252%2C-7.464%2C53.324

https://www.d3-graph-gallery.com/graph/line_basic.html

https://apexcharts.com/

## Package Info: create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
