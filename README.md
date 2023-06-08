## Protocol Berg

This is a website on the world-wide web utilizing hyper-links to assist you navigating the website of the Protocol Berg conference in Berlin.

- <https://protocol.berlin>

## Install

Minimum required Node.js version is 18.

```
npm install
```

## Develop

```
npx gatsby develop
```

## Build

A Pretalx token is required to pull the speakers from [speak.ticketh.xyz](https://speak.ticketh.xyz/protocol-berg/).

Go to you Account Settings and grab the token from the bottom of the page.

Create a `.env.production` file with the following content:

```
PRETALX_TOKEN=your-token-here
```

Then run:

```
npx gatsby build
```
