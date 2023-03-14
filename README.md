# Angular Self Study
- [Angular Self Study](#angular-self-study)
- [Pre-Requisites:](#pre-requisites)
  - [MySQL](#mysql)
  - [Full update of Angular to the latest version](#full-update-of-angular-to-the-latest-version)
  - [Find and replace Offending code](#find-and-replace-offending-code)
  - [Remove all package-lock.json files](#remove-all-package-lockjson-files)
  - [Update all tsconfig.json to contain the following](#update-all-tsconfigjson-to-contain-the-following)
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

## Update all tsconfig.json to contain the following
```
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictNullChecks": true,
    "strictNullInputTypes": true,
  }
```

You can use this to automate the modification of tsconfig.json files:
`find . -name "tsconfig.json" -exec sh -c 'jq ". + { angularCompilerOptions: { strictTemplates: true, strictNullChecks: true, strictNullInputTypes: true } }" {} > temp && mv temp {}' \;`

But you need to install `jq` first

## NPM
- `npm install`
- `ng serve -o`