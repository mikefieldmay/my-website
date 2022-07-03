# React App From Scratch

React App from scratch is a simple react app built from the ground up in order to practice installation and setup of features that mostly come for free with [Create React App](https://github.com/facebook/create-react-app).

## Installation

```bash
git clone https://github.com/mikefieldmay/react-from-scratch
npm install
npm start
```

## To Do list

The base app will live in the master branch, but I intend to add new features in different branches. The features that will be added are:

- [x] Upgrade to Webpack 4 and add vendor chunking (merged to master to avoid dependency risks). Webpack is prevalent in a lot of web apps and as such I thought it'd be a good idea to practice upgrading it as well as getting a better idea of how it works under the hood
- [x] Add Typescript. Having used Typescript for both Angular and React applications I beleive it's an excellent enhancement to javascript and vastly improves code clarity.
- [x] Add prettier to run in pre-commit hook. Prettier is a very popular formatting tool and it avoids arguments about code style on PRs
- [x] Add ESlint. Similar to above and can be a good way of catching errors before code is commited.
- [x] Add Jest Testing library - unit testing and snapshot testing using Jest are important elements of a React app
- [ ] Add Todo list with Redux - Redux is a popular state management system and used across
- [ ] Add Cypress to support ui tests - Cypress is a very popular BDD and screenshot testing tool
- [ ] Add SSR Rendering for application. SSR in React can improve user experience by sending a html template back to the app much faster.
- [ ] Add Storybook to document components

## Notes

- 28/6/19 Added [brottli compression](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html) in order to reduce vendor bundle size, but haven't worked out how to serve it with http-server. Will investigate further at a later date.

## Acknowledgements

The basis for this app comes from the excellent Udemy course: [React The Complete Guide](https://www.udemy.com/react-the-complete-guide-incl-redux/).
