
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## BitNote

This is a simple appliction that creates and manages notes simliar to Apple Notes or nvAlt.

![Alt Text](https://media.giphy.com/media/cPHVxt5ynNzSoexJ3T/giphy.gif)

## Main Features

* Shows a list of notes
* Saves app states as user enters information
* Search bar to filter through list of notes
* Ability to create a new note by hitting enter if no notes are found
* Support Markdown

## Tech Stack

The main technologies used to build this application are as follows

* React
* HTML/CSS/Javasript
* Semantic UI
* Firebase

## Functionality Specs

### `UI Components`

The application main components are comprised of three main react components
* NotesList.js - This is main view of the application and comprises of a list of notes handles filtering and displaying the list of notes and it's states
* AddNotesForm.js - Handles updating the list of notes for any new notes that occur and it's states
* EditNotesForm.js - Handles updating existing single notes within the list of notes and its' states

In addition the application leverages Semantic UI which has prebuilt components as to speed up some development time. More can be learned [here](https://react.semantic-ui.com/)


### `State Components`

The application is able to handle intermediate states as things change on the UI. It leverages the state objects already built in with react. Some of the common ways to 
update state are as follows. Bitnote leverages `this.setState` in multiple

    onFieldChange = (evt, key) => {
        this.setState({
        [key]: evt.target.value
        });
    }

More about this in the react documentation [here](https://reactjs.org/docs/state-and-lifecycle.html)

### `Persistance Components`

For persistance we are using `firebase` you will need to create a real time database. The basics is that it is wired up to the index.js in the context of the app. 
Refer to the index.js file for the actual config example.

    const config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    };

    // Initialize Firebase
    firebase.initializeApp(config);
    firebase.analytics();

It is then being injected into the application through various components but mainly the App.js is leveraging firebase to create, update, delete from the real time database.

    constructor() {
        super();
        this.db = firebase.database();
    }

You can learn more about how to use fire base [here](https://firebase.google.com/docs/storage/web/start)




