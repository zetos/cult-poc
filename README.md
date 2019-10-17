# Cult Meetup POC

> **WARNING:** This is a joke application and no real cultist or mythos creature was harmed during the creation of this project.

![logo](mobile/src/assets/logo@3x.png "Logo Mobile")

## About

This is an full-stack application using websockets created to facilitate meetings between cultists.

With this app the master of an cultist order can share the location and date of your meetup, so other cultists can see it and apply to participate. The application is divided with two cliets:

* The **web** client is where cultists can promote events with the details about the meetup. And also is where they can accept/refuse requests to participate in the cult.
* The **mobile** client is where cultists can see the available events and send a request to participate.

## Running the project

This project is created with Express, React and React-Native.

To run it, you need to setup the backend with your MongoDB URI.  
Create an .env file on the backend file root with your connection string:

```
ATLAS_URI=<YOUR_CONNECTION_STRING>
```

Then run the scripts:
```sh
$ npm i
$ npm start
```

Leave the backend service up and run the other desired client(s) Web or Mobile.
> Make sure that the endpoint matches the uri of the backend.

The mobile client uses expo, if you want to run it on your smarthphone you can install the expo mobile app.

## Why

This project was created in order to learn react-native/expo and the react functional components. With the help of the *Rocketseat Omni Stack Week* and adapted to make a new version of an older [Cult Meetup App](https://github.com/zetos/outdated-cult-meetup-0) that was created with Vue and Firebase.

This implementation is a crude poc and have much room for improvement, the backend can be made stateless by using redis for caching the socket.io tokens, and more security check can be added.
