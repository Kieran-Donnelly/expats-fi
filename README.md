# Expats.fi

The first release of Expats.fi: a searchable directory of expat-owned businesses and a practical resource library for life in Finland.

## Local development

```sh
npm install
npm run dev
```

## Content

- Businesses: `src/data/businesses.ts`
- Articles: `src/data/articles.json`
- One-time WordPress import: `npm run import:legacy`

## Verification

```sh
npm run check
npm run build
npm start
```

The production health endpoint is `/api/health`.
