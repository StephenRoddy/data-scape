## Project Overview: Data-scape
This project is to develop a react and bootstrap based framework for multimodal data analytics.
Essentially it will integrate graphs and maps from d3.js, audio from Tone.js and animations from p5.js (HTML5 Canvas & WebGL).
The framework will be usable as a front-end alternative to purely visual dashboards.
The framework will allow data to be represented with images, sound and visuals/animations.

In its current state, d3.js and tone.js are integrated.


Next steps:
1. Integrate Three.js models. Mapping data to behaviours of the models.
    https://threejs.org/
    This guy could be used to represnt whether things are going in a positive or negative direction with emotes and expressions:
    https://threejs.org/examples/#webgl_animation_skinning_morph

    Here's some more inspiration:
    https://digitalworlds.wordpress.com/2016/09/13/interlude-ginger-facial-rigging-model/
    demo: https://sv-ginger.appspot.com/

    tuts: https://tympanus.net/codrops/2019/10/14/how-to-create-an-interactive-3d-character-with-three-js/

    Babylon.js could be used here too:
    https://doc.babylonjs.com/examples/

    Just generally interesting:
    http://math.hws.edu/graphicsbook/demos/c5/vertex-and-color-animation.html


2. Use shaders for some of the more intensive p5.js implementations:
    links https://itp-xstory.github.io/p5js-shaders/#/./docs/what-are-shaders
          https://github.com/StephenRoddy/p5jsShaderExamples


Recent Steps:
0. [x]Fetch and Parse more useful data from GEO_Hive Api.
1. [x] Integrate p5.js.
2. [x]Create helper functions for managing API data.
3. [x]Create components to deal with a broader range of d3.js visualisations.
4. [x]Create components to deal with animations.
5. [x]Create components to deal with sonififcations.
6. [x]Clean up the App.js file.

Final Steps:
1. Create examples w/IoT data, COVID-19 data, Smart CIty Data etc.

Notes: Moved over to Apex Charts from D3.js. They are a lot more intuitive to implement in react.



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
