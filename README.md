# Welcome to your project

## Project info

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?


## Running with Docker

This project includes convenient Docker assets so you can run the app in production (nginx) or development (Vite) via docker-compose.

Production (build + serve with nginx):

```powershell
# build and run the 'web' service (nginx serving /dist)
# notes: docker compose v2 (recommended) will automatically load docker-compose.override.yml
# if present. Older `docker-compose` CLI also supports an override file but some systems
# may require you to pass `-f docker-compose.yml -f docker-compose.override.yml` explicitly.
docker compose up --build web
# open http://localhost:${WEB_HOST_PORT:-8080}
```

Development (Vite inside a container):

```powershell
# starts the 'dev' service which runs `npm run dev` inside a container.
# Use the default host port (configurable via .env) — .env.example is provided in the repo.
docker compose up dev
# open http://localhost:${DEV_HOST_PORT:-8081} (container's 8080 mapped to host variable DEV_HOST_PORT)
```

Run both at the same time (no port conflict):

```powershell
# 'web' -> host:8080 (nginx). 'dev' -> host:8081 (vite)
docker compose up --build web dev
```

Stop everything:

```powershell
docker compose down

### docker compose v2 vs docker-compose (legacy)

- docker compose (space) is the newer CLI shipped with Docker Desktop and Docker CLI v2 — it supports the same files and automatically composes `docker-compose.override.yml`.
- docker-compose (dash) is the older standalone tool; it still works in most environments but if you run into unexpected behavior, prefer `docker compose`.

If you need to explicitly load the override file or run both with older clients:

```powershell
# explicitly specify files (works with both docker compose and docker-compose)
docker-compose -f docker-compose.yml -f docker-compose.override.yml up
```

### Troubleshooting & tips

- Port already in use: if you get an address already in use error, change `DEV_HOST_PORT` or `WEB_HOST_PORT` in `.env` and restart the services.
- Using `.env.example`: copy it to `.env` and edit the ports / values before starting.
- Firewall / networking: containers expose ports to the host — ensure local firewall or corporate VPN doesn't block those ports.
- Debug logs: add `--build` to force a rebuild of images and `--remove-orphans` if you changed service names.

```

