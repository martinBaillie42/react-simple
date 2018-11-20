# Create React App

[Source](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

## Install dependencies

```
$ npm init
$ npm install -DE @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm install -DE @webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
$ npm install -DE react reactdom
$ npm install -E react-hot-loader
```

## Webpack commands 

Serve files from memory

```
$ webpack-dev-server --mode development
```

Build files

```
$ webpack --mode development
```

Note: the `--mode development` flag is not required because we set that in Webpack config.

