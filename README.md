# Ludus Prime — Static Website (GitHub Pages)

This ZIP contains a ready-to-upload static website tailored for GitHub Pages.
Folder structure:
- index.html
- posts/kenya-phygital-cup.html
- assets/
  - css/main.css
  - js/main_scene.js
  - images/logo_lp.png
  - images/post_phygital_thumb.jpg

## What I included
- A 3D "control room" landing page driven by Three.js (loaded from CDN) and a HUD that links to your first article.
- A clean, responsive blog template (`assets/css/main.css`) and a sample post.
- Your provided logo and a thumbnail (if attached).

## How to deploy (step-by-step for GitHub Pages — no terminal required)
1. Create a GitHub repository named `ludus-prime-website` (or any name).
2. On your computer, extract the ZIP contents into a folder.
3. In the GitHub web UI:
   - Go to your repository -> Add file -> Upload files.
   - Upload all files and folders from the extracted folder (drag-and-drop works).
   - Commit changes (e.g., "Initial site upload").
4. Enable GitHub Pages:
   - Go to repository Settings -> Pages (or "Pages" in the left sidebar).
   - Under "Build and deployment", choose "Deploy from a branch".
   - Select the branch (usually `main` or `master`) and root `/` as the folder, then Save.
   - GitHub will provide the site URL (usually `https://<your-username>.github.io/<repo-name>/`).
5. Wait a few minutes, then open your site URL. If the 3D scene doesn't appear immediately, refresh once — the Three.js CDN will load.

## Notes & Next steps (product perspective)
- The Three.js library is loaded via CDN to keep the ZIP small. If you prefer a fully offline copy, download `three.min.js` from https://threejs.org/ and place it into `assets/js/three.min.js`, then update `index.html` to use that local file.
- Add more posts by creating files inside `/posts` and linking them from `index.html`.
- To make headlines dynamic later, we can wire a tiny JSON feed and a client-side loader that reads `/feed.json` and builds the HUD automatically.
- We can also add SEO metadata, social share images (OG tags), and integrate simple analytics later.

## Contact
If you want changes — colors, fonts, animation intensity, or automatic feed generation — tell me which direction you prefer and I'll update the package.
