import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Fix for ES module scope (__dirname replacement)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixOpenSourceFile() {
  // 1. Define input and output file paths relative to project root
  const inputFilePath = path.join(__dirname, '..', 'src', 'constants', 'openSource.ts');
  const outputFilePath = path.join(__dirname, '..', 'src', 'constants', 'output.ts');

  console.log('🔄 Reading openSource.ts...');

  if (!fs.existsSync(inputFilePath)) {
    console.error(`❌ Error: File not found at ${inputFilePath}`);
    return;
  }

  // 2. Read raw file contents as text
  let fileContent = fs.readFileSync(inputFilePath, 'utf-8');

  // 3. Regex to match object repo and link entries
  const objectRegex = /repo:\s*["']([^"']+)["']([\s\S]*?)link:\s*["'](https?:\/\/github\.com\/[^\/]+\/([^\/]+)\/[^"']+)["']/g;

  let fixedCount = 0;

  // 4. Replace incorrect repo names with the actual repo extracted from the commit URL
  const updatedContent = fileContent.replace(
    objectRegex,
    (match, oldRepo, middleCode, fullUrl, actualRepo) => {
      if (oldRepo !== actualRepo) {
        fixedCount++;
        return `repo: "${actualRepo}"${middleCode}link: "${fullUrl}"`;
      }
      return match;
    }
  );

  // 5. Save corrected array directly to src/constants/output.ts
  fs.writeFileSync(outputFilePath, updatedContent, 'utf-8');

  console.log(`✅ Fixed ${fixedCount} repository names across your items!`);
  console.log(`📄 Saved updated file to: ${outputFilePath}`);
}

// Execute
fixOpenSourceFile();