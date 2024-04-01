

## Project Skeleton

```
Appointment-App/
│
├── public/                             # Directory for static assets
│   ├── img/                            # Images used throughout the app
│   └── index.html                      # The main HTML document for the app
│
├── src/                                # Directory containing the source code
│   ├── components/                     # Sub-directory for React components
│   │   ├── AddModal/                   # Directory for the AddModal component
│   │   │   ├── AddModal.jsx            # JSX for the AddModal component
│   │   │   └── AddModal.module.css     # CSS module for styling AddModal
│   │   │
│   │   └── AppointmentList/            # Directory for the AppointmentList component
│   │       ├── AppointmentList.jsx     # JSX for the AppointmentList component
│   │       └── AppointmentList.module.css  # CSS module for styling AppointmentList
│   │
│   ├── helpers/                        # Directory for helper scripts
│   │   └── data.js                     # JavaScript file with data or utility functions
│   │
│   ├── pages/                          # Directory for page components or layouts
│   │   ├── Home.jsx                    # JSX for the Home page component
│   │   └── Home.module.css             # CSS module for styling the Home page
│   │
│   ├── App.js                          # The main React component that wraps the entire app
│   ├── App.scss                        # SCSS for global styles applied across the app
│   └── index.js                        # Entry point for the React application
│
├── .gitignore                          # File listing patterns to ignore in version control
├── package.json                        # File defining the project dependencies and scripts
├── README.md                           # Markdown file with project documentation and setup instructions
└── yarn.lock                           # Yarn lockfile to lock dependency versions


```


## Description

In the project directory, you can run:
### `yarn install`
Before running the app, install the necessary dependencies with this command. It should be executed only once before you start the application for the first time or after updating the dependencies.

### `yarn start`
Runs the app in the development mode. Open http://localhost:3000 in your browser to view it. The page will reload if you make edits. 

### `yarn build`
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.






