// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (v2).
//
// The post itself is the entry: the house reads the meme from X, so this
// program does nothing clever. It only carries POST.json -- the address
// of the posted meme -- from this repository into the output directory
// the grader reads.
//
// Run it from the repository root:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// The post file must parse, so a typo fails loudly here, not on the server.
const post = JSON.parse(readFileSync(join(repoDir, "POST.json"), "utf8"));
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must hold a post url, {\"url\": \"https://...\"}");
}
// The url must be an X post's address: x.com/<handle>/status/<digits>.
if (!/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+/.test(post.url)) {
  throw new Error("POST.json url is not an X post address: " + post.url);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
console.log("post file copied:", post.url);
