# vite-inline-worker-playwright-webkit

https://github.com/vitejs/vite/issues/19238

## Steps

1. Run `npm i`
2. Run `npm start`

```
Running 1 test using 1 worker

  ✘  1 [webkit] › index.spec.js:9:1 › renders message (5.5s)


  1) [webkit] › index.spec.js:9:1 › renders message ────────────────────────────────────────────────

    Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

    Locator: getByTestId('message')
    Expected string: "Playwright is working!"
    Received: <element(s) not found>
    Call log:
      - expect.toHaveText with timeout 5000ms
      - waiting for getByTestId('message')


       9 | test('renders message', async ({ page }) => {
      10 |   await page.goto('/');
    > 11 |   await expect(page.getByTestId('message')).toHaveText('Playwright is working!');
         |                                             ^
      12 | });
      13 |
        at /vite-inline-worker-playwright-webkit/tests/index.spec.js:11:45

  1 failed
    [webkit] › index.spec.js:9:1 › renders message ─────────────────────────────────────────────────
```

3. Run `npm start -- --ui`

```
Failed to load resource: The operation couldn’t be completed. (WebKitBlobResource error 1.)
```

![Error](error.png)

There should be no error.
