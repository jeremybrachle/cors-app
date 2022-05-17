# README

This is an educational project to demonstract CORS functionality with a simple full-stack app using React and Node/Express. I followed this guide here: https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

## Origins used:
* Client: `localhost:3000`
* Server: `localhost:8080`

## CORS setup

### Server-side
The standard convention/best practice for enabling CORS is to handle it from the server side. This is done in the `app.js` file in the backend directory of this project by running the following command before returning the json response (NOTE: This only allows request from the explicitly defined URL and not any domain, in which case '*' would be supplied instead):
```
res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
```

### Client-side

In the event that CORS is to be handled by the client, the following line of code can be placed in the `package.json` file of the React frontend directory in order to proxy the request to a given server
```
"proxy": "http://localhost:8080",
```