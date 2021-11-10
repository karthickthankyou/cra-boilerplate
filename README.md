# cra-boilerplate
CRA boilerplate has strict linting (Eslint) with a11y, security, etc on top of the Airbnb config. It has a strict type checking (Typescript) where no any is allowed. It has a pretty good formatting (Prettier) configuration too.

We combine the above three validations to run parallelly using npm-run-all. We also have husky and lint staged set up to expose the pre-commit hook. Running the validation command in pre-commit and CI/CD stops most of the bug-prone code from entering our codebase.

This boilerplate comes with Storybook and tailwind css setup.

```
npm start
npm validate
npm run storybook
```
