export const GITHUB_USER = 'Purvaxx';

export const profile = {
  name: 'Purva A',
  title: 'Data & ML Engineer',
  role: 'Data Operations Analyst at NielsenIQ',
  email: 'purvaa0130@gmail.com',
  phone: '+91 95660 20082',
  github: 'https://github.com/Purvaxx',
  linkedin: 'https://linkedin.com/in/purva-a-0130x',
  location: 'Chennai, India',
  summary:
    'I build data pipelines, machine-learning models and full-stack applications. At NielsenIQ I run production ETL for global FMCG brands; outside work I build forecasting, fraud-analytics and decisioning systems.',
  about: [
    'I am a Data Operations Analyst at NielsenIQ, where I own end-to-end pipeline operations for enterprise clients such as Mars, Mondelez and Bush Brothers. I am also completing an MCA in AI/ML at VIT Chennai.',
    'My work sits where data engineering meets applied machine learning: reliable ETL, model development, and the tooling that puts both in front of users.',
  ],
  stats: [
    ['99.8%', 'Data accuracy across 10,000+ records'],
    ['100%', 'SLA compliance for enterprise clients'],
    ['92%+', 'Accuracy on NLP sentiment model'],
  ],
  openTo: 'Open to SDE, Data and Product roles · Chennai, Bengaluru, Hyderabad, Mumbai',
};

// Card styling for projects, in display order.
export const cardThemes = [
  { from: '#7b61ff', to: '#4b2fd6' },
  { from: '#ff6b6b', to: '#e0364a' },
  { from: '#4cc9f0', to: '#1d8fe0' },
  { from: '#2ed3a8', to: '#109277' },
  { from: '#5b7cfa', to: '#3046d6' },
  { from: '#ffb547', to: '#f07b12' },
  { from: '#ff7eb6', to: '#d6407f' },
  { from: '#8f9bb3', to: '#4f5b75' },
];

// Professional write-ups for repos on github.com/Purvaxx, keyed by repo name
// (lower-case). Repos not listed here still appear, using their GitHub description.
export const projectDetails = {
  recoverchain: {
    title: 'RecoverChain',
    kicker: 'Decisioning · ML',
    description:
      'Revenue-recovery decisioning system. Turns failed payments, overdue invoices and abandoned checkouts into cases, predicts recovery and selects the next-best action behind a deterministic policy gate, with a full audit trail.',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
    icon: 'siStreamlit',
  },
  aethercast: {
    title: 'AetherCast',
    kicker: 'Time-series forecasting',
    description: 'Universal time-series forecasting application: upload any series and get model-driven forecasts with diagnostics.',
    tags: ['Python', 'Forecasting', 'Streamlit'],
    icon: 'siPlotly',
  },
  picore: {
    title: 'PiCore',
    kicker: 'Maths engine',
    description:
      'Offline maths environment with a custom recursive-descent parser and AST, domain-aware equivalence checks, verified results, and a step checker that explains where a solution went wrong.',
    tags: ['Python', 'SymPy', 'Pygame'],
    icon: 'siSympy',
  },
  'mule-account-detection': {
    title: 'Mule Account Detection',
    kicker: 'Graph analytics · Fraud',
    description:
      'Detects mule accounts and circular transactions using directed multigraph features and risk scoring, with an investigation dashboard.',
    tags: ['Python', 'Graph analytics', 'Dashboard'],
    icon: 'siPython',
  },
  'employee-feedback-analysis---distilbert-main': {
    title: 'Employee Feedback Analysis',
    kicker: 'NLP · Sentiment',
    description:
      'Fine-tuned DistilBERT that classifies employee feedback as positive, negative or neutral at 92%+ accuracy, with NLP preprocessing and CSV reporting.',
    tags: ['Python', 'PyTorch', 'Hugging Face'],
    icon: 'siHuggingface',
  },
  'notes-webapp': {
    title: 'Notes Web App',
    kicker: 'Full-stack',
    description: 'Notes application with authentication, built on Node.js, Express and MongoDB with Passport, EJS and Bootstrap.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    icon: 'siNodedotjs',
  },
  'hand-gesture-pc-volume-control': {
    title: 'Hand Gesture Volume Control',
    kicker: 'Computer vision',
    description: 'Controls system volume from webcam hand gestures using real-time hand-landmark tracking.',
    tags: ['Python', 'OpenCV', 'Computer vision'],
    icon: 'siOpencv',
  },
  'flappy-bird': {
    title: 'Flappy Bird',
    kicker: 'Game',
    description: 'Flappy Bird clone with animated sprites, procedurally generated pipes, score tracking and a restart screen.',
    tags: ['Python', 'Pygame'],
    icon: 'siPython',
  },
};

// Snapshot of public repos (Oct 2026). Used only if the live GitHub API
// and the deploy-time repos.json are both unavailable.
export const repoSnapshot = [
  { name: 'recoverchain', html_url: 'https://github.com/Purvaxx/recoverchain', homepage: 'https://recoverchain-9svgznft7dgeggn7jbeupy.streamlit.app/', language: 'Python', pushed_at: '2026-10-24T20:51:29Z' },
  { name: 'aethercast', html_url: 'https://github.com/Purvaxx/aethercast', homepage: 'https://aethercast-ai.streamlit.app', language: 'Python', pushed_at: '2026-10-24T20:57:58Z' },
  { name: 'picore', html_url: 'https://github.com/Purvaxx/picore', homepage: null, language: 'Python', pushed_at: '2026-10-25T16:59:36Z' },
  { name: 'mule-account-detection', html_url: 'https://github.com/Purvaxx/mule-account-detection', homepage: 'https://mule-account-detection-sable.vercel.app', language: 'Python', pushed_at: '2026-10-25T17:16:54Z' },
  { name: 'Employee-FeedBack-Analysis---DistilBERT-main', html_url: 'https://github.com/Purvaxx/Employee-FeedBack-Analysis---DistilBERT-main', homepage: null, language: 'Python', pushed_at: '2026-03-31T20:40:43Z' },
  { name: 'Notes-WebApp', html_url: 'https://github.com/Purvaxx/Notes-WebApp', homepage: null, language: 'JavaScript', pushed_at: '2024-04-28T15:12:26Z' },
  { name: 'Hand-Gesture-PC-Volume-Control', html_url: 'https://github.com/Purvaxx/Hand-Gesture-PC-Volume-Control', homepage: null, language: 'Python', pushed_at: '2024-04-25T11:27:33Z' },
  { name: 'Flappy-Bird', html_url: 'https://github.com/Purvaxx/Flappy-Bird', homepage: null, language: 'Python', pushed_at: '2024-04-22T17:40:59Z' },
];

// Featured order for the hero fan and project grid (others follow by last push).
export const featuredOrder = ['recoverchain', 'mule-account-detection', 'aethercast', 'picore', 'employee-feedback-analysis---distilbert-main'];

export const stackRows = [
  [
    ['Python', 'siPython', '#3776AB'],
    ['Java', 'siOpenjdk', '#f89820'],
    ['SQL', 'siMysql', '#4479A1'],
    ['JavaScript', 'siJavascript', '#F7DF1E'],
    ['React', 'siReact', '#61DAFB'],
    ['Node.js', 'siNodedotjs', '#5FA04E'],
    ['Spring Boot', 'siSpringboot', '#6DB33F'],
    ['PyTorch', 'siPytorch', '#EE4C2C'],
    ['Hugging Face', 'siHuggingface', '#FFD21E'],
    ['scikit-learn', 'siScikitlearn', '#F7931E'],
    ['Pandas', 'siPandas', '#E70488'],
    ['Streamlit', 'siStreamlit', '#FF4B4B'],
  ],
  [
    ['AWS', 'siAmazonwebservices', '#FF9900'],
    ['Docker', 'siDocker', '#2496ED'],
    ['GitHub Actions', 'siGithubactions', '#2088FF'],
    ['Git', 'siGit', '#F05032'],
    ['Linux', 'siLinux', '#FCC624'],
    ['Apache Kafka', 'siApachekafka', '#ffffff'],
    ['PostgreSQL', 'siPostgresql', '#4169E1'],
    ['MongoDB', 'siMongodb', '#47A248'],
    ['MySQL', 'siMysql', '#4479A1'],
    ['Flutter', 'siFlutter', '#02569B'],
    ['Express', 'siExpress', '#ffffff'],
    ['Hibernate', 'siHibernate', '#BCAE79'],
  ],
];

export const skillGroups = [
  ['Languages', 'Python, Java, SQL, JavaScript, Dart'],
  ['Data & ML', 'ETL pipelines, Pandas, scikit-learn, PyTorch, Hugging Face, NLP, forecasting'],
  ['Backend', 'Spring Boot, Hibernate (JPA), Node.js, Express, REST APIs, multithreading'],
  ['Cloud & DevOps', 'AWS, Docker, GitHub Actions CI/CD, Linux, Apache Kafka'],
  ['Databases', 'PostgreSQL, MySQL, MongoDB'],
  ['Frontend & Mobile', 'React, Flutter'],
];

export const experience = [
  {
    role: 'Data Operations Analyst',
    org: 'NielsenIQ',
    when: 'Jul 2025 — Present',
    where: 'Chennai',
    points: [
      'Own end-to-end data pipeline operations for enterprise FMCG clients including Mars, Mondelez and Bush Brothers, with 100% SLA compliance.',
      'Developed and optimised Python/SQL ETL pipelines, improving data accuracy to 99.8% across 10,000+ product records.',
      'Primary point of contact for US-based clients, resolving technical issues and change requests under ITIL practice with AI-assisted tooling.',
    ],
    tags: ['Python', 'SQL', 'ETL', 'ITIL'],
  },
  {
    role: 'Web Developer Intern',
    org: 'GSR Business Services',
    when: 'Apr 2024 — May 2024',
    where: 'Chennai',
    points: [
      'Built a full-stack notes management application in four weeks using React, Node.js, Express and MongoDB, with JWT authentication and full CRUD.',
      'Improved page load time by 30% through React optimisation and built RESTful APIs under Git-based version control.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
  },
];

export const education = [
  ['Master of Computer Applications (AI/ML)', 'Vellore Institute of Technology, Chennai', 'Aug 2025 — Jul 2027 (expected)', 'CGPA 7.8'],
  ['Bachelor of Computer Applications', 'M.O.P. Vaishnav College for Women, Chennai', 'Aug 2022 — Apr 2025', 'CGPA 8.56 / 10'],
];

export const achievements = [
  ['Patent', 'Aqua Shield – Arena Mate: IoT system for rapid rain protection at sports venues', '2024'],
  ['Publication', 'Identifying fake news using big data — International Journal of Distributed Computing and Technology, Vol. 10', '2024'],
  ['Award', '1st Place, Hackathon — M.O.P. Vaishnav College for Women', '2025'],
  ['Award', 'Best Project Award — Shri Suryanarayanan Endowment Prize', '2024–25'],
  ['Award', 'Best Article — “Generative AI in the Field of Entertainment”', '2024'],
  ['Leadership', 'President, HASH Club (100+ members); Rotaractor of the Year; Star of Rotaract, RI District 3234', '2024–25'],
];

export const certifications = ['Java — Udemy', 'React — Udemy', 'Flutter & Dart — Udemy', 'JavaScript — Udemy', 'MongoDB — MongoDB University', 'AWS Fundamentals — Coursera'];
