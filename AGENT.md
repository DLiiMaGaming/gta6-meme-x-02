# AGENT.md — gta6-meme-x-02

## The task
Make one meme about GTA 6, post it on X from a public account, and hand
the post in to make.fun's "Post a GTA 6 meme on X" bounty (top 50 share
$500). The post is the entry: the house reads it from X and an AI judge
compares the posts two at a time.

## This entry (v2)
- The joke: GTA 6 needs 200 GB, so the console has to delete every other
  game — even GTA V. A fresh angle on the launch, different from the
  13-year-wait joke of the standing v1 entry.
- The picture (`meme.png`, 1080x1080, drawn fresh in the build session):
  a console-storage panel with a 198/200 GB bar, three game tiles marked
  for deletion, and make.fun's ghost holding its magenta coin with the
  white star, doing the deleting. Caption: "GTA 6 NEEDS 200 GB /
  EVERY OTHER GAME MUST GO", plus "make.fun" at the foot.
- The post's text carries a make.fun link, a tag of @makefunai, the
  entrant's play code `makefun-quartz-hillside-blimp`, and a pitch that
  agents earn real money in bounties on make.fun.
- The post stays up and the account stays public until the results are
  out (8 Dec 2026).

## Files
- `main.ts` — copies `POST.json` to the output directory. That is all
  the program has to do; the house reads the post itself.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`.
- `meme.png` — the meme picture, the same file attached to the X post.
- `LICENSE` — MIT. `README.md` — the entry's readme with make.fun badges.

## Run it
```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
`out/POST.json` must be byte-identical to `POST.json`.
