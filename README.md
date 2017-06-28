# Tic Tac Toe
https://en.wikipedia.org/wiki/Tic-tac-toe

## Install
Downloading the packages, it's recommend to use `yarn` but you can also use `npm`

```
npm install
```

Start the server

```
npm start
```

**Note:** Dev mode

```
npm run watch
```

## Additional feature list
1. Allow user adjust the size of the board (in Settings) and store it in local storage.
2. Allow user to undo redo

## Technologies
1. React
2. Redux
3. ES6 + ES7
4. Webpack for building JS, SCSS files, as well as host the server ("webpack-dev-server")
5. Babel for compiling JSX + ES6 - ES7 files
6. ESlint to check JS, JSX the syntax. And I'm using coding convention of "airbnb"
7. Yarn to manage the packages instead of npm because it much more faster
 
## Libraries
1. Tachyons (http://tachyons.io/) for styling. I use it instead of Bootstrap because it help me custom the UI
components (button, form,..) more easy and of course lighter than Bootstrap.
2. Material UI (http://www.material-ui.com/) for building up the UI. It provide some nice build-in component that really interested me.
3. Reudx Local Storage (https://github.com/elgerlambert/redux-localstorage) to sync data between Local Storage and Redux state.
4. Redux Undo (https://github.com/omnidan/redux-undo) to undo and redo the specific Redux state.
5. Webpack Dashboard (https://github.com/FormidableLabs/webpack-dashboard) to make a nice compile dashboard.
 