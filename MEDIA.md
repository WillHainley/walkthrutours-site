# Media

All site video is local and committed — this repo IS the website, so its media travels
with it. Do not copy the `walkthru-tours` gitignore rules here.

## 2026-09 quality rebuild (supersedes the table + re-encode rule below)

Will's verdict: the crushed encodes read as low quality, hero especially. The old
weight rules assumed everything loaded on arrival; the current page only loads the
HERO on arrival — grid cards are hover-loaded (`preload="none"`), feature films are
click-to-play. So:

- **Hero = ONE continuous reel** (`hero-reel.mp4`, 1080p CRF 23, ~21s, baked
  crossfades, fade-to-black loop point) + `hero-reel-720.mp4` (CRF 25) that JS picks
  on small screens / save-data. The seven-file rotation is gone.
- **Everything else encodes at CRF 24–25, 1920px, from the TRUE masters**
  (Downloads\*-WalkThru-Tour.mp4, FLOW-v8, Sundowner). Cut points come from
  OneDrive\WalkThru-Tours\Scene-Catalog. Rebuild everything with
  scratchpad build_site_media.py (also in git history of this note).
- Posters: `-q:v 3` from the new files.
- The old `hero-01..06.mp4` files are unused; kept only so old cached HTML keeps
  working, delete after a few weeks.

Masters live in the `videos-v1` release on `walkthru-tours` (they are 12–205MB, over
GitHub's 100MB file cap, so they are never committed):

```
gh release download videos-v1 -R WillHainley/walkthru-tours -D videos/
```

## What is on the site

| file | role | plays |
|---|---|---|
| `hero-loop.mp4` (4.4MB) | hero background, first in rotation | autoplay |
| `scene-01..03.mp4` (~5MB each) | rest of the hero rotation | autoplay, lazily |
| `photo-comes-alive.mp4` (3.5MB) | "a photo becomes the tour" card | autoplay loop |
| `showreel.mp4` (16MB) | the feature walkthrough | click to play |
| `venue-tour.mp4` (15MB) | venue sample | click to play |
| `sizzle-30s.mp4` (10MB) | the socials cut | click to play |

Only the autoplaying files load on arrival (~8MB). Everything else is
`preload="metadata"`, so it costs a few KB until someone presses play.

## Re-encoding rule
Masters are 12–28 Mbps, far too heavy for web. Always re-encode before committing:

```
ffmpeg -i master.mp4 -vf scale=1600:-2 -c:v libx264 -crf 28 -preset slow \
       -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k out.mp4
```

- `-movflags +faststart` is required, or the video will not start until fully downloaded.
- Autoplaying clips: add `-an` (no audio) and push CRF to 30–31. They must stay under ~5MB.
- Click-to-play clips: CRF 27–28, keep audio, under ~16MB.
- Posters: `ffmpeg -ss 3 -i master.mp4 -frames:v 1 -vf scale=1600:-2 -q:v 4 out-poster.jpg`
  Take the frame a few seconds in; frame 0 is often black.

## Naming
Never name a client property on the site. Describe by type and region only
("five bedroom pool home, gulf coast"). Keep master filenames out of user-visible text.
