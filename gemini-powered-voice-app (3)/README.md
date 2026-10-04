# Sahaya

Sahaya is a low-barrier women's safety interface with voice support, trusted people, emergency links, and local device storage.

## Testing

Run the automated test suite, production build, and TypeScript check with:

```bash
npm test
npm run build
npx tsc --noEmit
```

The Vitest suite covers map URL safety, Indian phone validation, multilingual copy completeness, emergency message construction, assistant action validation, trusted-contact requirements, main-screen actions, and language switching.