import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Adjust the path to point to the games directory at the root level
    const gamesDir = path.resolve('..', 'games'); // Go one level up to reach the root, then into 'games'

    fs.readdir(gamesDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const folders = files.filter(file => file.isDirectory()).map(file => file.name);
        res.status(200).json(folders);
    });
}
