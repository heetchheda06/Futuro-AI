const fs = require('fs');
const { execSync } = require('child_process');

const possiblePaths = [
  'C:\\Program Files\\Git\\cmd\\git.exe',
  'C:\\Program Files\\Git\\bin\\git.exe',
  'C:\\Program Files (x86)\\Git\\cmd\\git.exe',
  'C:\\Users\\Heet\\AppData\\Local\\Programs\\Git\\cmd\\git.exe'
];

let gitPath = 'git';
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    gitPath = `"${p}"`;
    break;
  }
}

try {
  const branch = execSync(`${gitPath} branch --show-current`, { encoding: 'utf-8' }).trim();
  
  // Soft reset last commit so we amend without secrets
  execSync(`${gitPath} reset HEAD~1`, { stdio: 'inherit' });

  // Stage changes
  execSync(`${gitPath} add .`, { stdio: 'inherit' });

  // Commit
  const commitMsg = 'feat: connect MongoDB Atlas database, fix resume ATS upload and PDF export, add Render and Firebase deployment configs';
  execSync(`${gitPath} commit -m "${commitMsg}"`, { stdio: 'inherit' });

  // Push
  console.log('\n--- Pushing to GitHub ---');
  execSync(`${gitPath} push origin ${branch || 'main'}`, { stdio: 'inherit' });
  console.log('Push completed successfully!');
} catch (err) {
  console.error('Git error:', err.message);
}
