# Pokemon Dashboard Application

This repository contains two main components:

1. **React Application** (`pokemon-app`): A front-end application for displaying Pokemon data.
2. **.NET Web API** (`WEBAPI`): A back-end API for serving Pokemon data.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Build and Deployment](#build-and-deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x.x)
- npm (>= 6.x.x) or Yarn (>= 1.x.x)
- .NET SDK (>= 8.0)

## Installation

### React Application (`pokemon-app`)

1. Navigate to the `pokemon-app` directory:

   ```sh
   cd pokemon-app
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```
   or if you prefer Yarn:
   ```sh
   yarn install
   ```

### .NET Web API (`WEBAPI`)

1. Navigate to the `WEBAPI` directory:

   ```sh
   cd WebApi/WebApi
   ```

2. Restore the .NET dependencies:
   ```sh
   dotnet restore
   ```

## Running the Application

### Running the React Application

1. Start the React development server:

   ```sh
   npm start
   ```

   or if you prefer Yarn:

   ```sh
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Running the .NET Web API

1. Navigate to the `WEBAPI` directory if you're not already there:

   ```sh
   cd WebApi/WebApi
   ```

2. Run the API:

   ```sh
   dotnet run --launch-profile https
   ```

3. The API will be available at `https://localhost:7186` or `http://localhost:5177`.
## Build and Deployment

### Building the React Application

1. Navigate to the `pokemon-app` directory:
    ```sh
    cd pokemon-app
    ```

2. Build the application:
    ```sh
    npm run build
    ```
   or if you prefer Yarn:
    ```sh
    yarn build
    ```

3. The build output will be located in the `build` directory.

### Building the .NET Web API

1. Navigate to the `WEBAPI` directory:
    ```sh
   cd WebApi/WebApi
    ```

2. Publish the API:
    ```sh
    dotnet publish -c Release -o ./publish
    ```

3. The build output will be located in the `publish` directory.

### Running the Applications in Production

1. Serve the React application using a static server or integrate it with a back-end framework.
2. Deploy the .NET Web API to your preferred hosting environment (e.g., Azure, AWS, etc.).
