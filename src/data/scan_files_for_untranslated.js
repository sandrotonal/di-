import fs from 'fs';
import path from 'path';

const srcDir = 'c:/Users/ACER NİTRO/OneDrive/Desktop/diş/src';
const outputFilePath = 'C:/Users/ACER NİTRO/.gemini/antigravity-ide/brain/4e54d8ab-3556-411f-8e52-8852e59c4b70/scratch/scan_results.txt';

let output = '';

function log(msg) {
  output += msg + '\n';
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'ui' && file !== 'data') {
        scanDir(fullPath);
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      if (file !== 'translations.js' && file !== 'images.js' && file !== 'compare_translations.js' && file !== 'scan_files_for_untranslated.js') {
        scanFile(fullPath);
      }
    }
  }
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let hasHardcoded = false;
  
  lines.forEach((line, idx) => {
    // Regex for Turkish characters
    if (/[çğıöşüÇĞİÖŞÜ]/.test(line)) {
      // Check if it's a comment
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        return; // Ignore comments
      }
      
      if (!hasHardcoded) {
        log(`\nFile: ${filePath.replace(srcDir, '')}`);
        hasHardcoded = true;
      }
      log(`  Line ${idx + 1}: ${trimmed}`);
    }
  });
}

scanDir(srcDir);
fs.writeFileSync(outputFilePath, output, 'utf-8');
console.log('Scan complete. Results written to', outputFilePath);
