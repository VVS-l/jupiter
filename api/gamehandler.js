import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Adjust the path to point to the games directory within the public folder
    const gamesDir = path.resolve('public', 'games'); // Access the public/games directory

    fs.readdir(gamesDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const folders = files.filter(file => file.isDirectory()).map(file => file.name);
        res.status(200).json(folders);
    });
}
