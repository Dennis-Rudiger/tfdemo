const fs = require('fs');
const path = require('path');

// Path to tailwind config
const tailwindConfigPath = path.join(__dirname, '..', 'tailwind.config.js');

// Check if the file exists
if (fs.existsSync(tailwindConfigPath)) {
  let content = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  // Check if @tailwindcss/line-clamp is in the plugins array
  if (content.includes('@tailwindcss/line-clamp')) {
    // Remove the plugin from the plugins array
    content = content.replace(/plugins\s*:\s*\[\s*require\(['"]@tailwindcss\/line-clamp['"]\)\s*,?/g, 'plugins: [');
    content = content.replace(/plugins\s*:\s*\[\s*,/g, 'plugins: ['); // Clean up any trailing commas
    
    // Write the updated content back to the file
    fs.writeFileSync(tailwindConfigPath, content, 'utf8');
    console.log('Removed @tailwindcss/line-clamp from tailwind.config.js');
  }
} else {
  console.log('tailwind.config.js not found');
}
