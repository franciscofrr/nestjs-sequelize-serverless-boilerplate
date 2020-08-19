### NestJS + Sequelize + Serverless boilerplate

### Installation

```
$ npm install @nestjs/cli serverless -g
$ git clone https://github.com/franciscofrr/nestjs-sequelize-serverless-boilerplate.git
$ cd nestjs-sequelize-serverless-boilerplate
$ npm install
```

### Running

This example requires a local MySQL installation.  If using a local MySQL database, see `conf/config.dev.ts` for credentials, and make sure there are matching credentials in the database and the source code.

## NestJS

`$ npm run start`

Then go to http://localhost:3000

## Serverless (offline)

```
$ npm run build
$ sls offline
```

The Serverless instance will run any routes you defined on your controllers starting from http://localhost:3000/dev (for example, if you have a '**users**' route, run **localhost:3000/dev/users**)

### Docker

TBD
