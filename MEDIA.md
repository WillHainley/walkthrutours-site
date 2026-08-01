# Media

Video files are gitignored in the `walkthru-tours` repo (100MB limits), so the sample
clips built on the other laptop did NOT travel with the ported design. This site
therefore runs on media that exists everywhere:

- `media/scene-01..03.mp4` + posters — Villa Manatee production segments, committed here
  (~5MB each). These drive the rotating hero and the third sample card.
- The two CloudFront URLs in `index.html` — the Manatee showreel and the
  photo-becomes-the-tour clip. Hosted, so they work from any machine with no files.

## To upgrade the hero with the fuller reel
The ported design originally rotated five clips: `laguna-dusk`, `manatee-living`,
`laguna-living`, `laguna-kitchen`, `laguna-ocean`. To use them:

1. Copy those `.mp4` files (and their `.jpg` posters) from the other laptop into `media/`.
2. Keep each under ~8MB — re-encode if needed:
   `ffmpeg -i in.mp4 -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -an out.mp4`
3. Add them to the `scenes` array in `index.html` (the hero script) and point the
   poster at the matching image.
4. Commit and push. Pages redeploys automatically.

Files here are committed deliberately — this repo is the website, so its media must
travel with it. Do not copy the walkthru-tours gitignore rules into this repo.
