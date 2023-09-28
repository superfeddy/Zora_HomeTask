# Zora Collect - FE take home challenge

## Requirement

1. Should be able to fetch the images.
2. Search the images with the keywords.
3. Filter the images with the color channels.
4. Sort the images with some aspects.
5. View must be paginated.
6. Notify that there are no results.

## What I implemented

- Created a helper function and custom hook to fetch the information.
- Created individual components to build the page.
- Implemented debouncing for the keyword input to avoid rate limitation.
- Implemented pagination.
- Implemented responsive design.
- Implemented unit testing for the react components.

## Possibly can be updated

- Implement E2E & Integration testing for the project.
- Implement Error Pages(400 page, 404 page, 500 page...).

## Tech-Stack

- Next 13.4 project bootstraped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Tailwind CSS for styling.
- react-responsive-pagination for pagination component.
- Jest and React Testing Library for unit testing.

## Getting Started

- Configuring Env variables
  Copy the `.env` file to `.env.local` and add the below information.

```Javascript
NEXT_PUBLIC_API_BASE_URL="https://api.unsplash.com"
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY= //Your unsplash accesskey here.
```

- Run Dev Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Build the project

```bash
yarn build
```

- Run the Unit testing

```bash
yarn test:unit
```
