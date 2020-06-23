UPDATE: seems ok in `next@canary`

## Describe the bug

When using getStaticPaths with `fallback = true` then on every fallback render console throws `Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client`.

## To Reproduce

1. Clone https://github.com/svobik7/nextjs-playground/tree/bugs/ssg-fallback-headers-err
2. Run `yarn dev`
3. Navigate to `localhost:3001/slug-2`
4. See error in server console

## Expected behavior

There should not be any error in console during fallback

## Screenshots

<img width="1136" alt="ssg_err" src="https://user-images.githubusercontent.com/761766/85385920-3253a400-b543-11ea-9c2c-e1cd03ece75c.png">

## System information

- OS: macOS
- Version of Next.js: `9.4.4`
- Version of Node.js: 12.14.1

## Additional context

This error occurres only in `next@9.4.4`, in older release of `next@9.4.2` there is no such error.
