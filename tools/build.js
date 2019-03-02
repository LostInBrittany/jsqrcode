const fs = require('fs');
const path = require('path');

/* Files should be added with an order...

  <script type="text/javascript" src="grid.js"></script>
  <script type="text/javascript" src="version.js"></script>
  <script type="text/javascript" src="detector.js"></script>
  <script type="text/javascript" src="formatinf.js"></script>
  <script type="text/javascript" src="errorlevel.js"></script>
  <script type="text/javascript" src="bitmat.js"></script>
  <script type="text/javascript" src="datablock.js"></script>
  <script type="text/javascript" src="bmparser.js"></script>
  <script type="text/javascript" src="datamask.js"></script>
  <script type="text/javascript" src="rsdecoder.js"></script>
  <script type="text/javascript" src="gf256poly.js"></script>
  <script type="text/javascript" src="gf256.js"></script>
  <script type="text/javascript" src="decoder.js"></script>
  <script type="text/javascript" src="qrcode.js"></script>
  <script type="text/javascript" src="findpat.js"></script>
  <script type="text/javascript" src="alignpat.js"></script>
  <script type="text/javascript" src="databr.js"></script>
*/

const files = [
  'grid.js',
  'version.js',
  'detector.js',
  'formatinf.js',
  'errorlevel.js',
  'bitmat.js',
  'datablock.js',
  'bmparser.js',
  'datamask.js',
  'rsdecoder.js',
  'gf256poly.js',
  'gf256.js',
  'decoder.js',
  'qrcode.js',
  'findpat.js',
  'alignpat.js',
  'databr.js',
];


let header = `
/*
  Ported to ES modules and added Shadow DOM support by Horacio Gonzalez 2016-2019 
  
  horacio.gonzalez@gmail.com - https://lostinbrittany.dev
*/
`;

let footer = `
  export default qrcode;
  export { qrcode };
`;

let srcDir = path.join(__dirname, '../src');
let distDir = path.join(__dirname, '../dist');
let moduleDir = path.join(__dirname, '../module');

if (!fs.existsSync(moduleDir)) {
  console.log(`Creating module folder ${moduleDir}`);
  fs.mkdirSync(moduleDir);
}
let moduleFile = path.join(moduleDir, 'jsqrcode.js');
if (fs.existsSync(moduleFile)) {
  console.log(`Deleting module file`);
  fs.unlinkSync(moduleFile);
}

if (!fs.existsSync(distDir)) {
  console.log(`Creating dist folder ${distDir}`);
  fs.mkdirSync(distDir);
}
let distFile = path.join(distDir, 'jsqrcode.js');
if (fs.existsSync(distFile)) {
  console.log(`Deleting dist file`);
  fs.unlinkSync(distFile);
}

fs.appendFileSync(moduleFile, header);
fs.appendFileSync(distFile, header);

files.forEach((file) => {
  let filename = path.join(srcDir, file);
  let data = fs.readFileSync(filename);
  console.log(`Reading file ${filename}`);
  fs.appendFileSync(moduleFile, data); 
  fs.appendFileSync(distFile, data);
});

fs.appendFileSync(moduleFile, footer);
