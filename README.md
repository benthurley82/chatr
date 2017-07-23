# chatr
A chat application using angular and socket.io

## Prerequisites
* Node v8.2.0
* NPM v3.10.8
* Angular CLI v1.2.1

Both Node and NPM can be installed by downloading from the node.js website. The angular CLI can then be installed using the following command.

```
npm install -g @angular/cli
```

## Installation
The repository contains two separate projects for the frontend and backend. Both of these are node projects that need their dependencies downloading separately.

1. Open a shell at the project root
2. `cd chatr-server/`
3. `npm install`
4. `cd ../chatr-web`
5. `npm install`

## Usage
To run the project you will need two separate shell windows to run the frontend and backend.

First to run the backend websocket server.
1. Open a new shell at the project root
2. `cd chatr-server/`
3. `npm start`

This is a shortcut to start the server using nodemon to monitor for code changes and auto-reload.

To run the frontend angular project.
1. Open a new shell at the project root
2. `cd chatr-web/`
3. `npm start`

The angular CLI uses the command `ng serve` to run a build and start a webpack server that monitors for code changes. The build step is required to transpile the TypeScript into JavaScript. To avoid cross-domain issues in the browser the frontend project also acts as a proxy to the socket server. Using `npm start` calls `ng serve` but passes in the configuration to setup the proxy.
