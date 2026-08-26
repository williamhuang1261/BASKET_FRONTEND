import { defineConfig } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const KEY = "./config/SSL_perms/thebasket.test.key";
const CERT = "./config/SSL_perms/thebasket.test.crt";

/**
 * Local HTTPS is only there so OAuth redirects behave like production. The
 * certificates are developer-generated and untracked, so a fresh clone does not
 * have them and readFileSync would abort the dev server before it printed
 * anything useful. Fall back to HTTP and say why.
 */
const https = () => {
  if (fs.existsSync(KEY) && fs.existsSync(CERT)) {
    return { key: fs.readFileSync(KEY), cert: fs.readFileSync(CERT) };
  }
  console.warn(
    `[vite] No local certificate at ${KEY}, serving over HTTP.\n` +
      `       Social login redirects need HTTPS; see README.md to generate one.`,
  );
  return undefined;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    https: https(),
  },
});
