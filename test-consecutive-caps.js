// Test the improved consecutive capitals handling
function generatePerfectSelector(componentName, title) {
  // Convert PascalCase component name to kebab-case selector
  let selector = componentName
    // First, handle sequences of uppercase letters followed by lowercase letters
    // This handles cases like "CPlusPlus" -> "C-Plus-Plus"
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    // Then insert dash before uppercase letters that follow lowercase letters or numbers
    // This handles cases like "NodeJs" -> "Node-Js"
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Convert to lowercase
    .toLowerCase()
    // Clean up any invalid characters
    .replace(/[^a-z0-9-]/g, '')
    // Remove multiple dashes
    .replace(/-+/g, '-')
    // Remove leading/trailing dashes
    .replace(/^-|-$/g, '');

  // Handle special cases where the selector might be too short or unclear
  if (selector.length < 2) {
    selector = title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  // Ensure we have a valid selector
  if (!selector || selector.length === 0) {
    selector = 'icon';
  }

  return `si-${selector}-icon`;
}

const testCases = [
  // The problematic case
  { componentName: 'CPlusPlus', title: 'C++', expected: 'si-c-plus-plus-icon' },

  // Other edge cases with consecutive capitals
  { componentName: 'CSharp', title: 'C#', expected: 'si-c-sharp-icon' },
  { componentName: 'FSharp', title: 'F#', expected: 'si-f-sharp-icon' },
  { componentName: 'HTML', title: 'HTML', expected: 'si-html-icon' },
  {
    componentName: 'XMLParser',
    title: 'XML Parser',
    expected: 'si-xml-parser-icon',
  },
  {
    componentName: 'HTTPSProxy',
    title: 'HTTPS Proxy',
    expected: 'si-https-proxy-icon',
  },

  // Regular cases should still work
  { componentName: 'OneAndOne', title: '1&1', expected: 'si-one-and-one-icon' },
  {
    componentName: 'FiveHundredPx',
    title: '500px',
    expected: 'si-five-hundred-px-icon',
  },
  { componentName: 'NodeJs', title: 'Node.js', expected: 'si-node-js-icon' },
  { componentName: 'GraphQL', title: 'GraphQL', expected: 'si-graph-ql-icon' },
  {
    componentName: 'StackOverflow',
    title: 'Stack Overflow',
    expected: 'si-stack-overflow-icon',
  },

  // Acronyms
  { componentName: 'API', title: 'API', expected: 'si-api-icon' },
  { componentName: 'JSON', title: 'JSON', expected: 'si-json-icon' },
  { componentName: 'REST', title: 'REST', expected: 'si-rest-icon' },
];

console.log('🔧 Testing Improved Consecutive Capitals Handling\n');

testCases.forEach(({ componentName, title, expected }) => {
  const actual = generatePerfectSelector(componentName, title);
  const isCorrect = actual === expected;
  const status = isCorrect ? '✅' : '❌';

  console.log(`${status} Component: ${componentName}`);
  console.log(`   Expected: ${expected}`);
  console.log(`   Actual:   ${actual}`);
  if (!isCorrect) {
    console.log(`   ⚠️ MISMATCH!`);
  }
  console.log('');
});
