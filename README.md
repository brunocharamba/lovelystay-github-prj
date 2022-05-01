# Code Challenge - Bruno Charamba

As asked, this .md contains the information about the challenge. All the instructions and further explanations about the architecture and decisions can seen below.

# Language and Framework

Following the rules, Javascript was selected as the main language. And for the Framework, React.

# Environment and Code Editor

The project was created in React using the _Create-React-App_ command, which facilitates the initial setup with the automatic install of some dependencies like _eslint_, _jest_ and others.
The coding was done in Visual Studio Code with some extensions, as _prettier_, _eslint_ and other visual packages.

# Architecture and Complexity

Despite the project's scope being restrict, the project contains some packages to enable an easy development and scalability.
This projects uses the _styled-components_ package to provide a better management of the component's styles, _react-icons_ to integrate visual icons, and the _react-router-dom_ to manage the page's routing.

**Project Tree**

The simplified version of the project tree can be described as follow:

- **components**: reusable bits of the project
- **pages**: the pages that can be displayed by an URL
- **hooks**: custom hooks for the application
- **utils**: paramenters and global functions
- **routes**: routing for the pages

**Structure**

The project contains 2 pages, the first one _"Search"_ is a basic page with an _input_, a _button_ and a _div_ to inform the user about the state of the input. This _input_ gets its content and pass the search result to the next page using the _path management_ of the _react-router-dom_.

The second page is the _"User"_ page, that is more complex than the first one. this page gets the username from the path parameter (i.e. "../user/brunocharamba") and uses it to call the _useFetch_ hook to load the github's user information and populate the page with some information. At the top it's possible to see the user's avatar, as well as the name, login, location, repositories and more.

The last part of the page is filled with the _RepositoriesList_ component, that renders all the _public repositories_ listed for the user. This components renders cards for each of the repositories, that can be accessed on github by clicking on the title. the list of repositories is passed by props to the _RepositoriesList_ component.

_It's possible to enhance this project?_
Yes, it is. Given time, I could use _Redux_ to store the user and repositories data in a global state to avoid passing data betweeen components. I could also enhance the custom _useFecth_ hook to cache the information, or using memoization the reduce the load of the application. As well improve the responsiveness for mobile devices, as this project was developed to the use on desktops.

# Configuration

To run this application you'll need to have all the React prerequisites installed.
To download the project on github, you'll need to have Git installed on your OS.

The project can be cloned through this repo:

- [https://github.com/brunocharamba/lovelystay-github-prj](https://github.com/brunocharamba/lovelystay-github-prj)

Or you can clone it using this command line:

```bash
git clone https://github.com/brunocharamba/lovelystay-github-prj.git
```

After downloading it, you'll need to install the project's dependencies. On the root of the project, where you can find the file _package.json_:

```bash
# with Yarn:
yarn install
# or with npm:
npm install
```

# Running the project

To run the project, on the project's root path, run the following command:

```bash
# with Yarn:
yarn start
# or with npm:
npm start
```
