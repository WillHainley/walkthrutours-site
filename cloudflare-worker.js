// WalkThru Tours - serve the GitHub Pages site at walkthrutours.com.
//
// Paste this into Cloudflare > Workers & Pages > lucky-union-daa5 > Edit code,
// replacing everything there, then Deploy. No DNS records change, so email keeps
// working and the domain keeps pointing where it already points.
//
// To update the site after this: edit index.html in the walkthrutours-site repo
// and push. GitHub Pages rebuilds and this Worker serves the new version. You
// never have to touch Cloudflare again.

const UPSTREAM = "https://willhainley.github.io/walkthrutours-site";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = UPSTREAM + url.pathname + url.search;

    const resp = await fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" || request.method === "HEAD" ? null : request.body,
      redirect: "follow",
    });

    // Copy the response so headers stay editable, and let video seek properly.
    const out = new Response(resp.body, resp);
    out.headers.set("Accept-Ranges", "bytes");
    out.headers.delete("X-Frame-Options");
    return out;
  },
};
