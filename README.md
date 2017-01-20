# Sails Hook Migrate

Uses [DB Migrate](https://github.com/db-migrate/node-db-migrate) to handle database migrations.

Supported Databases:
 - MySQL
 - PostgreSQL
 - sqlite3
 - MongoDB

## Dependencies (optional)

**Highly recommended** to use with `sails-generate-migrate` to create migration scripts from the command line.

```sh
npm i -S sails-generate-migrate
```

## Installation

```sh
npm i -S sails-generate-migrate sails-hook-migrate
```

## Usage

Create a migrations folder and run sails lift!

 - Create a `migrations` folder
 - `sails lift`

Migrate will detect the connection specified by your sails config. You can also override the connection settings
in the configuration.

## Configuration

