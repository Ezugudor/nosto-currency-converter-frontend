# Currency Converter Frontend (VueJS)

This is the Currency Converter Frontend. A simple UI that interacts with the backend service (api) built using the Vuejs framework.

## Features

- **Currency Conversion**: Convert amounts between different currencies using the `/api/v1/convert` endpoint.

- **List all supported currencies** : Note, the free plan of Swop api only support `EUR` as base currency, hence, why the `from` dropdown has only one option -- `EUR`. Backend already has a validation for this.
-

## Prerequisites

- Nodejs - ensure you have nodejs installed.

## Getting Started

### Clone the Repository

```bash

git clone https://github.com/Ezugudor/nosto-currency-converter-frontend

cd nosto-currency-converter-frontend

```

## Project Setup

```sh

npm install

```

### Run - (Development)

Run the following command to get the app started on http://localhost:3006

```sh

npm run dev

```

### Compile and Minify for Production

```sh

npm run build

```
