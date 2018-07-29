01) To install download latest node version (8.11.3): "npx create-react-app redux-tutorial"
02) Install yarn: "npm install -g yarn"
03) CD into redux-tutorial: "yarn add redux react-redux"
04) Start app: "yarn start"
05) Install Redux DevTools Chrome extension
06) Add line "window.devToolsExtension && window.devToolsExtension()" to createStore function to talk to Redux DevTools
07) To make API requests: "yarn add redux-thunk jquery"
08) For performance add Reselect: "yarn add reselect"
09) Consider Store > Component > Sub-component pattern (Smart vs dumb components). Keeps things cleaner with fewer components connected to store
    State flows down to dumb components. E.g., Store > productsPage > addProduct or productsList (dumb)