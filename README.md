# Angular Self Study
- [Angular Self Study](#angular-self-study)
- [Pre-Requisites:](#pre-requisites)
  - [MySQL](#mysql)
  - [Full update of Angular to the latest version](#full-update-of-angular-to-the-latest-version)
  - [NPM](#npm)


# Pre-Requisites:

## MySQL
- MySQL is configured to only allow connections from localhost by default
- To connect run:
    `mysql -u root`

## Full update of Angular to the latest version
- `clear; rm package-lock.json; npm i -g npm-check-updates; ncu -u; npm install --force; npm audit fix --force; ng serve -o`

## NPM
- `npm install`
- `ng serve -o`