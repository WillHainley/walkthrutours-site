# Media

All site video is local and committed — this repo IS the website, so its media travels
with it. Do not copy the `walkthru-tours` gitignore rules here.

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
