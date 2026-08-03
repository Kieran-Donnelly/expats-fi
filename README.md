# Expats.fi

Expats.fi is a practical resource library and directory of expat-owned businesses in Finland. The application combines a Next.js frontend with an embedded Payload CMS admin.

## Stack

- Next.js and React
- Payload CMS
- PostgreSQL
- S3-compatible object storage for uploaded media
- Railway deployment from the `main` branch

## Local development

Copy the required environment values into `.env.local`:

```dotenv
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=replace-with-a-long-random-value
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

For S3-compatible media storage, also provide `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_BUCKET`, `S3_ENDPOINT`, `S3_REGION`, and `S3_FORCE_PATH_STYLE`.

Then run:

```sh
npm install
npm run dev
```

The site is available at `http://localhost:3000` and Payload at `http://localhost:3000/admin`.

## Content and migrations

Articles, businesses, media, and users are managed through Payload. Database migrations live in `src/migrations`; the seed migration preserves the initial 11 articles and 3 business listings from the previous site.

Useful commands:

```sh
npm run payload -- migrate:create
npm run generate:types
npm run generate:importmap
```

## Verification

```sh
npm run lint
npm run build
npm start
```

The production health endpoint is `/api/health`.
