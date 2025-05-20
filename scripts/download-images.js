const fs = require('fs');
const path = require('path');
const https = require('https');

// 游戏数据
const games = [
  {
    id: 'escape-road-2',
    title: 'Escape Road 2',
    thumbnail: 'https://1games.io/images/games/escape-road-2.jpg'
  },
  {
    id: 'twisty-roads',
    title: 'Twisty Roads!',
    thumbnail: 'https://1games.io/images/games/twisty-roads.jpg'
  },
  {
    id: 'snow-road-3d',
    title: 'Snow Road 3D',
    thumbnail: 'https://1games.io/images/games/snow-road-3d.jpg'
  },
  {
    id: 'tap-road',
    title: 'Tap Road',
    thumbnail: 'https://1games.io/images/games/tap-road.jpg'
  },
  {
    id: 'escape-road-city-2',
    title: 'Escape Road City 2',
    thumbnail: 'https://1games.io/images/games/escape-road-city-2.jpg'
  },
  {
    id: 'wave-road',
    title: 'Wave Road',
    thumbnail: 'https://1games.io/images/games/wave-road.jpg'
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    thumbnail: 'https://1games.io/images/games/crossy-road.jpg'
  },
  {
    id: 'escape-road-winter',
    title: 'Escape Road Winter',
    thumbnail: 'https://1games.io/images/games/escape-road-winter.jpg'
  },
  {
    id: 'drift-road',
    title: 'Drift Road',
    thumbnail: 'https://1games.io/images/games/drift-road.jpg'
  }
];

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images/games');

// 确保目录存在
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// 下载单个图片
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(IMAGES_DIR, filename);
    
    // 如果文件已存在，跳过下载
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${filename} - already exists`);
      resolve();
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 下载所有图片
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const game of games) {
    if (game.thumbnail) {
      const filename = `${game.id}.jpg`;
      try {
        await downloadImage(game.thumbnail, filename);
      } catch (error) {
        console.error(`Error downloading ${game.title}:`, error.message);
      }
    }
  }
  
  console.log('All downloads completed!');
}

downloadAllImages().catch(console.error); 