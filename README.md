# Angular Self Study
- [Angular Self Study](#angular-self-study)
- [Pre-Requisites:](#pre-requisites)
  - [MySQL](#mysql)
  - [Full update of Angular to the latest version](#full-update-of-angular-to-the-latest-version)
  - [Find and replace Offending code](#find-and-replace-offending-code)
  - [Remove all package-lock.json files](#remove-all-package-lockjson-files)
  - [Remove all node\_modules folders](#remove-all-node_modules-folders)
  - [Update all tsconfig.json to contain the following](#update-all-tsconfigjson-to-contain-the-following)
  - [Install correct typescript version](#install-correct-typescript-version)
  - [NPM](#npm)


# Pre-Requisites:

## MySQL
- MySQL is configured to only allow connections from localhost by default
- To connect run:
    `mysql -u root`

## Full update of Angular to the latest version
- `clear; rm package-lock.json; npm i -g npm-check-updates; ncu -u; npm install --force; npm audit fix --force; ng serve -o`

## Find and replace Offending code
- `find . -type f -name '*.ts' -exec sed -i '' 's/imports: \[RouterModule\.forRoot(routes, { relativeLinkResolution: '\''legacy'\'' })\]/imports: \[RouterModule.forRoot(routes)\]/g' {} +`

## Remove all package-lock.json files
- `find . -name "package-lock.json" -exec rm -f {} \; 2>/dev/null`

## Remove all node_modules folders
- `find /path/to/your/directory -name "node_modules" -type d -prune -exec rm -rf {} +`

## Update all tsconfig.json to contain the following
```
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictNullChecks": true,
    "strictNullInputTypes": true,
  }
```

## Install correct typescript version
- `npm install typescript@4.9.5`
## NPM
- `npm install`
- `ng serve -o`