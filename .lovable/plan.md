## Add Google Search Console verification file

Google gave you a verification file. The simplest, most reliable option is to serve it at the exact URL Google expects.

### What I'll do

1. Create `public/google8a2652386648bd2c.html` containing exactly:
   ```
   google-site-verification: google8a2652386648bd2c.html
   ```
   Files in `public/` are served at the site root, so it will be reachable at `/google8a2652386648bd2c.html`.

That's the only code change needed.

### What you'll do after

1. **Publish** the project (so the new file is live on `pro-web-promise.lovable.app`).
2. Once `corelinkdev.com` is pointed at Lovable (DNS + connected in Domains settings), the file will also be served at `https://corelinkdev.com/google8a2652386648bd2c.html`.
3. In Google Search Console, click **Verify**. Google fetches that URL — if it sees the expected content, you're verified.

### Important notes

- **Verification only succeeds once `corelinkdev.com` actually points to the Lovable site.** Right now it points to the old "HTTP Server Test Page" host, so Google would fetch the file from that server and fail. Get the domain connected first, then click Verify.
- **Don't delete the file later** — removing it un-verifies the site.
- You can verify the Lovable subdomain (`pro-web-promise.lovable.app`) as a separate property in Search Console immediately after publishing, if you want to test the flow before DNS is done.
