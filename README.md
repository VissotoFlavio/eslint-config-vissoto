# Vissoto ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @vissoto/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@vissoto/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @vissoto/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@vissoto/eslint-config/node"
}
```