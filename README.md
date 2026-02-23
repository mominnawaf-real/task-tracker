# Task Tracker

A task tracking API built with NestJS, GraphQL, and PostgreSQL.

## Prerequisites

- Node.js 22+
- PostgreSQL 16+ (or Docker)

## Setup

```bash
cp .env.example .env
npm install
```

## Running with Docker

```bash
# development (live reload)
npm run docker:dev

# production
npm run docker:prod

# stop containers
npm run docker:down
```

## Running locally

```bash
# development
npm run start:dev

# production
npm run build
npm run start:prod
```

## Tests

```bash
npm run test
npm run test:e2e
npm run test:cov
```
