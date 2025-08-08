const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building esqueletao...');

try {
  // Clean lib directory
  if (fs.existsSync('lib')) {
    fs.rmSync('lib', { recursive: true, force: true });
  }

  // Compile TypeScript
  execSync('npx tsc', { stdio: 'inherit' });

  // Copy additional files
  const filesToCopy = ['README.md', 'LICENSE'];
  filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join('lib', file));
    }
  });

  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
