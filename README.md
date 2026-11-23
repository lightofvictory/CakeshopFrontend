# MyPastry Cakeshop frontend

Run `npm install` and `npm run dev` to start the Vite app.

Environment settings are in `.env` for local development and `.env.production` for production builds and previews:

| Variable | Purpose |
| --- | --- |
| `VITE_PROJECT_NAME` | Browser tab title |
| `VITE_PORT` | Vite development or preview port |
| `VITE_API_BASE_URL` | Backend origin used for `/api/*` routes and `/images/*` files |

Local development uses `http://localhost:3000` for the backend. Production uses `http://35.222.204.172:8080`. Set `VITE_API_BASE_URL` to the backend origin before building if the deployment URL changes. The `/api/docs` path is documentation, so it is not part of the backend origin.

`src/service.js` holds the shared Axios client and image URL helper. API calls live beside their section: `src/pages/Home/service.js` (`GET /api/items`), `src/pages/Orders/service.js` (`POST /api/orders`), and `src/context/service.js` (`GET /api/settings`, shared across pages).

Run `npm run build` to create the production bundle and `npm run preview` to serve it locally on the production preview port.
