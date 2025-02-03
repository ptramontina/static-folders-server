    const express = require('express');
    const app = express();
    const cors = require('cors');

    app.use(cors());

    const port = 3500;

    const paths = process.argv
        .slice(2)
        .map((path) => {
            // Removes last forward slash
            if (path.charAt(path.length - 1) === '/') {
                path = path.slice(0, path.length - 1);
            }

            const splittedPath = path.split('/');

            const urlPath = '/' + splittedPath[splittedPath.length - 1];

            return { urlPath, path };
        });

    paths.forEach(path => {
        try {
            app.use(path.urlPath, express.static(path.path));

            console.log(`Path ${path.path} available at localhost:${port}${path.urlPath}`);
        } catch (e) {
            console.error(`Error while making static path ${path.path}`, e);
        }
    });

    app.listen(port, () => {
        console.log(`Static server listening on port ${port}`);
    });