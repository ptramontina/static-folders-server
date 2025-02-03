# Static Folders Server

Serve static folders by simply starting this app with the path you want.

`npm i`

`npm run start /path/to/one/folder1 /path/to/another/folder2`

With this, you can find your static files at `http://localhost:3500/folder1` and `http://localhost:3500/folder2`

Folder name will be the same in the url.

So, where you need, you can point to those files, for example:

`npm run start /home/dist /home/dist2`

```
<script type="module" src="http://localhost:3500/dist/index.js"></script>
<link rel="stylesheet" href="http://localhost:3500/dist2/main.css" />
```
