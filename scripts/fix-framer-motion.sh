#!/bin/bash

# This script updates framer-motion imports to use the modern syntax from motion.dev
# Based exactly on https://motion.dev/docs/react

echo "🔍 Scanning project for framer-motion imports and components..."

# First, install the motion package if it doesn't exist
echo "📦 Installing motion package..."
yarn add -W motion

# Create a temporary directory for our scripts
mkdir -p ./temp_motion_fix

# Create utility files for motion in both apps
echo "📝 Creating motion utility files..."

# 1. Website app utility files
mkdir -p ./apps/website/lib/utils

# 1.1 Client components utility file for website
cat > ./apps/website/lib/utils/motion-client.tsx << 'EOL'
'use client';

// React client components - based on https://motion.dev/docs/react
import { motion } from "motion/react";

export { motion };
EOL

# 1.2 Server components utility file for website
cat > ./apps/website/lib/utils/motion-server.tsx << 'EOL'
// React Server Components - based on https://motion.dev/docs/react
import * as motion from "motion/react-client";

export { motion };
EOL

# 1.3 Main motion file that exports based on environment
cat > ./apps/website/lib/utils/motion.tsx << 'EOL'
// This file is a convenient re-export based on environment
// In most cases, you should import directly from motion-client or motion-server
// based on your component type (client vs server)

'use client';

import { motion } from "motion/react";

export { motion };
EOL

# 2. Admin app utility files
mkdir -p ./apps/admin/lib/utils

# 2.1 Client components utility file for admin
cat > ./apps/admin/lib/utils/motion-client.tsx << 'EOL'
'use client';

// React client components - based on https://motion.dev/docs/react
import { motion } from "motion/react";

export { motion };
EOL

# 2.2 Server components utility file for admin
cat > ./apps/admin/lib/utils/motion-server.tsx << 'EOL'
// React Server Components - based on https://motion.dev/docs/react
import * as motion from "motion/react-client";

export { motion };
EOL

# 2.3 Main motion file for admin
cat > ./apps/admin/lib/utils/motion.tsx << 'EOL'
// This file is a convenient re-export based on environment
// In most cases, you should import directly from motion-client or motion-server
// based on your component type (client vs server)

'use client';

import { motion } from "motion/react";

export { motion };
EOL

# 3. Create a script to find and replace framer-motion imports
cat > ./temp_motion_fix/update_imports.js << 'EOL'
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with framer-motion imports
console.log('Finding files with framer-motion imports...');
const grep = execSync("grep -r \"from ['\\\"]\s*framer-motion\s*['\\\"]\s*\" --include=\"*.tsx\" --include=\"*.jsx\" ./apps || true").toString();
const files = [...new Set(grep.split('\n').filter(line => line && line.length > 0)
  .map(line => line.split(':')[0]))];

console.log(`Found ${files.length} files with framer-motion imports`);

// Process each file
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  // Read file content
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Determine if this is a client or server component
  const isClientComponent = content.includes("'use client'") || content.includes('"use client"');
  
  // Replace framer-motion import with motion import
  if (isClientComponent) {
    // For client components
    content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]framer-motion['"][;]?/g, 
      (match, imports) => {
        // If the import includes motion, replace it
        if (imports.includes('motion')) {
          return "import { motion } from \"motion/react\";";
        }
        return match; // Leave other framer-motion imports unchanged
      });
  } else {
    // For server components
    content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]framer-motion['"][;]?/g, 
      (match, imports) => {
        // If the import includes motion, replace it
        if (imports.includes('motion')) {
          return "import * as motion from \"motion/react-client\";";
        }
        return match; // Leave other framer-motion imports unchanged
      });
  }
  
  // Fix any className props according to motion.dev docs
  // In React 19 + motion, we need to use className instead of class
  content = content.replace(/(motion\.\w+[^>]*)(class=)(["'][^"']*["'])/g, '$1className=$3');
  
  // Check for <motion.div> style elements and other variants - no need to replace these
  // as they're already supported by motion/react
  
  // Only write if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    return true;
  }
  
  return false;
}

// Process all files
let updatedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} files out of ${files.length} files checked`);
EOL

# 4. Execute the script
echo "🛠️ Running the fix script..."
node ./temp_motion_fix/update_imports.js

# 5. Clean up
echo "🧹 Cleaning up temporary files..."
rm -rf ./temp_motion_fix

echo "✅ Done! Motion components have been updated to use the modern syntax."
echo "📝 Note: You may need to manually fix any remaining type errors if they persist."
echo "🔍 Important reminders:"
echo "  - Client components should use: import { motion } from 'motion/react'"
echo "  - Server components should use: import * as motion from 'motion/react-client'"
echo "  - Always use className instead of class with motion components"
