import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadHtml() {
  try {
    console.log('Fetching HTML from localhost:3000...');
    const response = await axios.get('http://localhost:3000', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const htmlContent = response.data;
    const filePath = path.join(__dirname, 'downloaded-index.html');
    
    fs.writeFileSync(filePath, htmlContent);
    console.log(`HTML saved to ${filePath}`);
    
    // Check for Vite references
    const viteReferences = [
      '/@vite/client',
      '/@react-refresh',
      '/vite.svg',
      '/runtime-config.js',
      '/src/index.tsx'
    ];
    
    console.log('\nChecking for Vite references:');
    for (const ref of viteReferences) {
      if (htmlContent.includes(ref)) {
        console.log(`✘ Found reference to: ${ref}`);
        
        // Extract surrounding context
        const index = htmlContent.indexOf(ref);
        const start = Math.max(0, index - 100);
        const end = Math.min(htmlContent.length, index + 100);
        const context = htmlContent.substring(start, end);
        
        console.log('Context:');
        console.log(context);
        console.log('-------------------');
      } else {
        console.log(`✓ No reference to: ${ref}`);
      }
    }
  } catch (error) {
    console.error('Error fetching HTML:', error.message);
  }
}

downloadHtml();
