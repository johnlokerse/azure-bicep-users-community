export type PostCategory =
  | 'BicepTip'
  | 'BicepDidYouKnow'
  | 'BicepPoll'
  | 'ExperimentalSpotlight'
  | 'CommunitySpotlight';

export type Post = {
  title: string;
  category: PostCategory;
  year: 2024 | 2025 | 2026;
  date: string;
  author: 'John' | 'Dan';
  source: string;
  linkedinUrl?: string;
  engagement?: { reactions: number; comments: number; reposts: number };
};

// LinkedIn engagement checked on 2026-10-06; omitted comment/repost counts are zero.
export const posts: Post[] = [
  // 2026
  { year: 2026, date: '2026-10-06', author: 'Dan', category: 'BicepDidYouKnow', title: 'nullIfNotFound', source: 'Bicep DidYouKnow/null-if-not-found/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7513132414794403842', engagement: { reactions: 14, comments: 0, reposts: 0 } },
  { year: 2026, date: '2026-09-29', author: 'John', category: 'BicepTip', title: 'Experimental Visualiser', source: 'Bicep Tips and Tricks/experimental-visualiser/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7510596271544430592', engagement: { reactions: 21, comments: 0, reposts: 3 } },
  { year: 2026, date: '2026-09-22', author: 'Dan', category: 'BicepDidYouKnow', title: 'validate decorator', source: 'Bicep DidYouKnow/validate-decorator/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7508062188339777538', engagement: { reactions: 27, comments: 1, reposts: 2 } },
  { year: 2026, date: '2026-09-15', author: 'John', category: 'BicepTip', title: 'Bicep MCP Server', source: 'Bicep Tips and Tricks/bicep-mcp-server/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7505520983307575296?utm_source=share', engagement: { reactions: 18, comments: 0, reposts: 3 } },

  // 2025
  { year: 2025, date: '2025-09-23', author: 'John', category: 'BicepDidYouKnow', title: 'bicep-config-file', source: 'bicep-config-file/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7376144581782052864', engagement: { reactions: 27, comments: 1, reposts: 1 } },
  { year: 2025, date: '2025-09-16', author: 'Dan', category: 'BicepDidYouKnow', title: 'Deployment Stack Outputs', source: 'existing-stacks-output/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373619191100379138', engagement: { reactions: 32, comments: 6, reposts: 2 } },
  { year: 2025, date: '2025-09-09', author: 'Dan', category: 'BicepTip', title: 'Bicep CLI Pattern', source: 'bicep-pattern/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7371082512594530304', engagement: { reactions: 17, comments: 0, reposts: 0 } },
  { year: 2025, date: '2025-09-02', author: 'John', category: 'BicepDidYouKnow', title: 'Using in Bicepparam link to ACR', source: 'ReferParamFileDirectToACR/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7368534445324128256', engagement: { reactions: 53, comments: 6, reposts: 1 } },
  { year: 2025, date: '2025-08-26', author: 'Dan', category: 'BicepDidYouKnow', title: 'Optional module names', source: 'optional-module-names/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7366009060808192003', engagement: { reactions: 18, comments: 3, reposts: 0 } },
  { year: 2025, date: '2025-08-19', author: 'John', category: 'BicepDidYouKnow', title: 'fail', source: 'fail/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7363460992950771712', engagement: { reactions: 32, comments: 2, reposts: 6 } },
  { year: 2025, date: '2025-08-12', author: 'Dan', category: 'BicepDidYouKnow', title: 'Resource derived type', source: 'resource-devired-type/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7360935609323958272', engagement: { reactions: 51, comments: 7, reposts: 6 } },
  { year: 2025, date: '2025-08-05', author: 'John', category: 'BicepTip', title: 'Bicep lint', source: 'bicep-lint/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7358387584286236673', engagement: { reactions: 23, comments: 6, reposts: 1 } },
  { year: 2025, date: '2025-07-29', author: 'Dan', category: 'BicepDidYouKnow', title: 'Secure outputs', source: 'secure-outputs/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7355862156279508997', engagement: { reactions: 38, comments: 4, reposts: 5 } },
  { year: 2025, date: '2025-07-22', author: 'John', category: 'BicepTip', title: 'azure-copilot', source: 'azure-copilot/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7353314145200414720', engagement: { reactions: 61, comments: 6, reposts: 3 } },
  { year: 2025, date: '2025-07-15', author: 'Dan', category: 'BicepDidYouKnow', title: 'Import and Export', source: 'export-import/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7350788758465564673', engagement: { reactions: 18, comments: 0, reposts: 1 } },
  { year: 2025, date: '2025-07-08', author: 'John', category: 'BicepTip', title: 'f12inspect', source: 'f12inspect/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7348240718122958848', engagement: { reactions: 72, comments: 2, reposts: 3 } },
  { year: 2025, date: '2025-07-01', author: 'Dan', category: 'BicepDidYouKnow', title: 'Deployer', source: 'deployer/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7345715301575008256', engagement: { reactions: 40, comments: 1, reposts: 1 } },
  { year: 2025, date: '2025-06-24', author: 'John', category: 'BicepDidYouKnow', title: 'User-Defined Functions', source: 'User-Defined-Functions/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7343167256744325120', engagement: { reactions: 37, comments: 2, reposts: 3 } },
  { year: 2025, date: '2025-06-17', author: 'Dan', category: 'BicepTip', title: 'Stacks hidden title', source: 'stacks-hidden-title/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7340641906055389184', engagement: { reactions: 62, comments: 6, reposts: 1 } },
  { year: 2025, date: '2025-06-10', author: 'John', category: 'BicepTip', title: 'Announcement', source: 'Announcement/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7338090525138321408', engagement: { reactions: 53, comments: 1, reposts: 2 } },

  // 2024
  { year: 2024, date: '2024-12-17', author: 'Dan', category: 'CommunitySpotlight', title: 'Latest module', source: 'Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7274694868092829697', engagement: { reactions: 90, comments: 5, reposts: 13 } },
  { year: 2024, date: '2024-12-10', author: 'John', category: 'BicepDidYouKnow', title: 'UDT', source: 'UserDefinedTypes/post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7272158242409955328', engagement: { reactions: 50, comments: 4, reposts: 2 } },
  { year: 2024, date: '2024-12-03', author: 'Dan', category: 'BicepDidYouKnow', title: 'Latest module', source: 'ModuleUpdates/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7269621419058053120', engagement: { reactions: 96, comments: 5, reposts: 4 } },
  { year: 2024, date: '2024-11-26', author: 'John', category: 'BicepTip', title: 'Map function', source: 'Map/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:groupPost:13004126-7265309499844915200', engagement: { reactions: 58, comments: 1, reposts: 2 } },
  { year: 2024, date: '2024-11-19', author: 'Dan', category: 'BicepPoll', title: 'How Do You Use Azure Bicep Modules?', source: 'Modules/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7264548009386897409', engagement: { reactions: 5, comments: 5, reposts: 0 } },
  { year: 2024, date: '2024-11-12', author: 'John', category: 'BicepDidYouKnow', title: 'Null check in Azure Bicep', source: 'WaysToNullCheck/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7262011239885586435', engagement: { reactions: 69, comments: 3, reposts: 1 } },
  { year: 2024, date: '2024-11-05', author: 'Dan', category: 'ExperimentalSpotlight', title: 'Extendable / Shared Params', source: 'SharedParams/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7259474544803930112', engagement: { reactions: 57, comments: 3, reposts: 7 } },
  { year: 2024, date: '2024-10-29', author: 'Dan', category: 'BicepTip', title: 'Conditions', source: 'Conditions/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7256937854612733952', engagement: { reactions: 53, comments: 0, reposts: 1 } },
  { year: 2024, date: '2024-10-22', author: 'Dan', category: 'BicepDidYouKnow', title: 'Teams AVM', source: 'AVMTeamsUpdates/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7254386093251350528', engagement: { reactions: 92, comments: 5, reposts: 11 } },
  { year: 2024, date: '2024-10-15', author: 'Dan', category: 'BicepTip', title: 'Shared var pattern', source: 'SharedVarPattern/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7251849305215389697', engagement: { reactions: 58, comments: 18, reposts: 6 } },
  { year: 2024, date: '2024-10-08', author: 'John', category: 'BicepTip', title: 'Environment Variables', source: 'EnvironmentVariables/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7249312667985678336', engagement: { reactions: 115, comments: 7, reposts: 5 } },
  { year: 2024, date: '2024-10-01', author: 'Dan', category: 'BicepTip', title: 'UniqueStringName', source: 'uniqueStringName/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7246775884609716224', engagement: { reactions: 34, comments: 2, reposts: 2 } },
  { year: 2024, date: '2024-09-24', author: 'John', category: 'BicepTip', title: 'Enhanced Tracing', source: 'BicepTracing/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7244239218443436032', engagement: { reactions: 99, comments: 6, reposts: 9 } },
  { year: 2024, date: '2024-09-17', author: 'Dan', category: 'BicepTip', title: 'Description', source: 'DescriptionDecorator/DescriptionDecorator.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7241702439475691521', engagement: { reactions: 24, comments: 11, reposts: 1 } },
  { year: 2024, date: '2024-09-10', author: 'John', category: 'BicepDidYouKnow', title: 'Paste as Bicep', source: 'PasteAsBicep/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7239165759921221632', engagement: { reactions: 125, comments: 5, reposts: 10 } },
  { year: 2024, date: '2024-09-03', author: 'Dan', category: 'BicepDidYouKnow', title: 'Bicep Config old API version', source: 'OldAPIVersionsWarning/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7236629057373638656', engagement: { reactions: 88, comments: 6, reposts: 7 } },
  { year: 2024, date: '2024-08-27', author: 'John', category: 'BicepDidYouKnow', title: 'AVM', source: 'AzureVerifiedModulesBuiltIn/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7234092329047904256', engagement: { reactions: 144, comments: 2, reposts: 8 } },
  { year: 2024, date: '2024-08-20', author: 'Dan', category: 'BicepTip', title: 'PSRule', source: 'PSRule/Post.md', linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7231555586331406336', engagement: { reactions: 115, comments: 7, reposts: 7 } },
];

export const categoryMeta: Record<PostCategory, { label: string; slug: string }> = {
  BicepTip: { label: 'Bicep Tip', slug: 'tip' },
  BicepDidYouKnow: { label: 'Did You Know', slug: 'dyk' },
  BicepPoll: { label: 'Poll', slug: 'poll' },
  ExperimentalSpotlight: { label: 'Experimental Spotlight', slug: 'experimental' },
  CommunitySpotlight: { label: 'Community Spotlight', slug: 'community' },
};

export const authorNames: Record<Post['author'], string> = {
  John: 'John Lokerse',
  Dan: 'Dan Rios',
};

export const yearGroups = ([2026, 2025, 2024] as const).map((year) => ({
  year,
  posts: posts
    .filter((post) => post.year === year)
    .sort((a, b) => b.date.localeCompare(a.date)),
}));
