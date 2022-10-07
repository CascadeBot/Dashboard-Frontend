# Development Self-Hosting

## Requirements
To host this service, you will need to be running **NodeJS 18** or above.

External services required:
 - The backend service (another cascade repo)

this service can easily be hosting by running the docker compose file in `/docker/development`

## Configuration
No configuration is required for development if youre using the default ports.

A full schema of the configuration can be found in `/nuxt.config.ts`

## Running
- `npm i`
- `npm run dev`
- Profit

## extra notes
This service is a frontend of the dashboard, to be able to use it fully, make sure you are also running the dashboard backend (its in another repo).
