export function addSpaces(str: string): string {
  return str.replace(/([a-zA-Z])(\d)/g, '$1 $2');
}

export function titleToComponentName(text: string): string {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Map of specific text patterns to their desired standardized form.
  // These replacements happen FIRST to ensure specific terms are handled correctly
  // before general character processing or PascalCase conversion.
  const TEXT_STANDARDIZATION_MAP: Readonly<Record<string, string>> = {
    // Existing mappings
    iFixit: 'IFixIt',
    GitHub: 'Github',

    // Version/Protocol specific
    'OAuth 2.0': 'Oauth2Point0',
    'HTTP/2': 'Http2',
    'HTTP/3': 'Http3',
    IPv4: 'Ipv4',
    IPv6: 'Ipv6',
    'UTF-8': 'Utf8',
    'UTF-16': 'Utf16',
    Base64: 'Base64',
    'COVID-19': 'Covid19',
    'SARS-CoV-2': 'SarsCoV2',
    'Wi-Fi': 'WiFi',

    // Tech abbreviations and frameworks
    'JSON Web Token': 'JsonWebToken',
    WebRTC: 'WebRtc',
    GraphQL: 'GraphQl',
    MongoDB: 'MongoDb',
    PostgreSQL: 'PostgreSql',
    MySQL: 'MySql',
    SQLite: 'SqlLite',
    'Node.js': 'NodeJs',
    'Vue.js': 'VueJs',
    'React.js': 'ReactJs',
    'Angular.js': 'AngularJs',
    'D3.js': 'D3Js',
    'Three.js': 'ThreeJs',
    'Chart.js': 'ChartJs',
    'Ember.js': 'EmberJs',
    'Next.js': 'NextJs',
    'Nuxt.js': 'NuxtJs',

    // Common abbreviations
    i18n: 'I18n',
    l10n: 'L10n',
    a11y: 'A11y',
    '2FA': 'TwoFa',
    MFA: 'Mfa',
    '2-Factor Authentication': 'TwoFactorAuth',
    B2B: 'B2b',
    B2C: 'B2c',
    C2C: 'C2c',
    P2P: 'P2p',
    SaaS: 'Saas',
    PaaS: 'Paas',
    IaaS: 'Iaas',

    // Companies and brands with special naming
    '1&1': 'OneAndOne',
    '1.1.1.1': 'OneDotOneDotOneDotOne',
    '500px': 'FiveHundredPx',
    '4chan': 'FourChan',
    'AT&T': 'AtAndT',
    '.NET': 'DotNet',
    'C++': 'CPlusPlus',
    'C#': 'CSharp',
    'F#': 'FSharp',
    'F-Secure': 'FSecure',

    // Specific numeric cases
    '3D Systems': 'ThreeDSystems',
    '2K Games': 'TwoKGames',
    '3M': 'ThreeM',
    '7-Eleven': 'SevenEleven',
    '99designs': 'NinetyNineDesigns',
    '1Password': 'OnePassword',
    '42': 'FortyTwo',
    '365': 'ThreeHundredSixtyFive',
    '2K': 'TwoK',
    '3D': 'ThreeD',
    '4D': 'FourD',
    '7zip': 'SevenZip',
    '9GAG': 'NineGag',
  };

  // Enhanced character mapping for better coverage
  const CHAR_TO_WORD_MAP: Readonly<Record<string, string>> = {
    '.': 'Dot',
    '@': 'At',
    '#': 'Hash',
    '%': 'Percent',
    '&': 'And',
    '*': 'Star',
    '+': 'Plus',
    '=': 'Equals',
    '?': 'Question',
    '!': 'Exclamation',
    '<': 'Less',
    '>': 'Greater',
    '|': 'Pipe',
    '~': 'Tilde',
    '^': 'Caret',
    '(': 'OpenParen',
    ')': 'CloseParen',
    '[': 'OpenBracket',
    ']': 'CloseBracket',
    '{': 'OpenBrace',
    '}': 'CloseBrace',
    ':': 'Colon',
    ';': 'Semicolon',
    ',': 'Comma',
    '/': 'Slash',
    '\\': 'Backslash',
    '-': 'Dash',
    _: 'Underscore',
    $: 'Dollar',
    '€': 'Euro',
    '£': 'Pound',
    '¥': 'Yen',
    '©': 'Copyright',
    '®': 'Registered',
    '™': 'Trademark',
  };

  let processedText = text;

  // 1. Apply specific text standardizations first (exact matches)
  for (const original in TEXT_STANDARDIZATION_MAP) {
    if (processedText === original) {
      return TEXT_STANDARDIZATION_MAP[original];
    }
  }

  // 2. Handle partial matches for complex cases
  for (const original in TEXT_STANDARDIZATION_MAP) {
    processedText = processedText.replace(
      new RegExp(escapeRegExp(original), 'gi'),
      TEXT_STANDARDIZATION_MAP[original],
    );
  }

  // 3. Replace defined special characters with their word equivalents
  const specialCharRegex = new RegExp(
    `[${Object.keys(CHAR_TO_WORD_MAP)
      .map((char) => `\\${char}`)
      .join('')}]`,
    'g',
  );

  processedText = processedText.replace(
    specialCharRegex,
    (char) => ` ${CHAR_TO_WORD_MAP[char]} `,
  );

  // 4. Handle version numbers and technical identifiers
  // Match patterns like "2.0", "v3.1", "HTTP/2", etc.
  processedText = processedText.replace(/(\w+)[\/](\d+(?:\.\d+)*)/g, '$1$2');
  processedText = processedText.replace(/v(\d+(?:\.\d+)*)/gi, 'V$1');
  processedText = processedText.replace(
    /(\d+)\.(\d+)\.(\d+)\.(\d+)/g,
    '$1Dot$2Dot$3Dot$4',
  );
  processedText = processedText.replace(/(\d+)\.(\d+)\.(\d+)/g, '$1Dot$2Dot$3');
  processedText = processedText.replace(/(\d+)\.(\d+)/g, '$1Dot$2');

  // 5. Insert space before sequences of uppercase letters that are followed by a lowercase letter
  processedText = processedText.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

  // 6. Remove any remaining characters that are not alphanumeric or spaces
  processedText = processedText.replace(/[^a-zA-Z0-9\s]/g, ' ');

  // 7. Handle letter-number combinations by adding a space between them
  processedText = processedText.replace(/([a-zA-Z])(\d)/g, '$1 $2');
  processedText = processedText.replace(/(\d)([a-zA-Z])/g, '$1 $2');

  // 8. Normalize multiple spaces to a single space and trim
  processedText = processedText.replace(/\s+/g, ' ').trim();

  // 9. Final PascalCase conversion
  const words = processedText
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => {
      // Handle all-uppercase words (keep them as-is for acronyms)
      if (
        word.length > 1 &&
        word === word.toUpperCase() &&
        /^[A-Z]+$/.test(word)
      ) {
        return word;
      }
      // Convert other words to PascalCase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

  let result = words.join('');

  // 10. Post-processing fixes for common issues
  result = result.replace(/^(\d)/, 'Num$1'); // Prefix numbers at start with 'Num'
  result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1$2'); // Fix double capitals

  // Ensure result is not empty and has valid structure
  if (!result || result.length === 0) {
    result = 'Icon'; // Fallback
  }

  return result;
}

export function generatePerfectSelector(
  componentName: string,
  title: string,
): string {
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

export function generatePerfectClassName(componentName: string): string {
  // Ensure the class name starts with 'Si' and ends with 'Icon'
  let className = componentName;

  // Remove any existing 'Icon' suffix to avoid duplication
  if (className.endsWith('Icon')) {
    className = className.slice(0, -4);
  }

  // Ensure it starts with uppercase
  className = className.charAt(0).toUpperCase() + className.slice(1);

  // Ensure we have a valid class name
  if (!className || className.length === 0) {
    className = 'Base';
  }

  return `Si${className}Icon`;
}

// Utility function to escape special regex characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
