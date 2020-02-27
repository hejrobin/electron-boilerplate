# Electron & Web Boilerplate

![Test Suite](https://github.com/hejrobin/electron-boilerplate/workflows/Test%20Suite/badge.svg)
![Dependencies Status](https://david-dm.org/hejrobin/electron-boilerplate/status.svg)
![Development Dependencies Status](https://david-dm.org/hejrobin/electron-boilerplate/dev-status.svg)

## Environment

- [Electron](https://electronjs.org/)
- [Create React App](create-react-app.dev/)
- [craco](https://github.com/gsoft-inc/craco) — _CRA config override_

## Development

- Do not change the "homepage" attribute in `package.json`
- Run `mkdir extensions` for React and Redux devtools in Electron env.

### Coding Style

- [SemVer](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version/) — _Automatic CHANGELOG_
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Tools & Libraries

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Immutable](https://immutable-js.github.io/immutable-js/)
- [Normalizr](https://github.com/paularmstrong/normalizr/)
- [js-toolkit](https://github.com/360player/js-toolkit/)
- 💅 [styled-components](https://styled-components.com/)

## Commands

- `start` — _Starts devserver and Electron_
- `start:web` — _Starts devserver_
- `build` — _Builds and packages Electron_
- `build:web` — _Builds for web_
- `release:patch` — _Creates a patch release, git tags and updates CHANGELOG.md_
- `release:minor` — _Creates a minor release, git tags and updates CHANGELOG.md_
- `release:major` — _Creates a major release, git tags and updates CHANGELOG.md_
