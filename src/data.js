export const GITHUB_USER = 'Purvaxx';

export const profile = {
  name: 'Purva A',
  role: 'Data Operations Analyst · NielsenIQ',
  email: 'purvaa0130@gmail.com',
  phone: '+91 95660 20082',
  github: 'https://github.com/Purvaxx',
  linkedin: 'https://linkedin.com/in/purva-a-0130x',
  intro:
    'Hello, World. Jack of all stacks, master of none, and happily curious about everything. Give me a new tool, and I’ll poke at it until it makes something real.',
  stats: [
    ['99.8%', 'pipeline accuracy'],
    ['100%', 'SLA compliance'],
    ['92%+', 'model accuracy'],
  ],
  locations: ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai'],
};

export const manual = [
  ['Default setting', 'Curious'],
  ['Favorite command', '“What if?”'],
  ['Learns', 'By building'],
  ['Debugs', 'By breaking things first'],
  ['Collects', 'Ideas that become projects'],
  ['Ships', 'More than excuses'],
];

export const whatIDo = [
  ['pipelines', 'Data Pipelines & ETL', 'Python/SQL pipelines processing 10,000+ product records at 99.8% accuracy for enterprise FMCG clients.'],
  ['ml/nlp', 'ML & NLP Modeling', 'Fine-tuned DistilBERT on 10K+ employee comments for sentiment classification at 92%+ accuracy.'],
  ['devops', 'CI/CD & DevOps', 'Automated Docker builds, Trivy scans, and releases end-to-end with GitHub Actions.'],
  ['systems', 'Systems & Concurrency', 'Multithreaded Java chat server load-tested at 50 concurrent connections; fixed a real race condition.'],
  ['ai ops', 'AI-Assisted Operations', 'LLM tooling, prompt engineering and RAG to speed up incident resolution under ITIL practice.'],
  ['people', 'Product & People', 'Led a 100+ member college tech club; translate technical detail for non-technical stakeholders daily.'],
];

export const experience = [
  {
    role: 'Data Operations Analyst',
    org: 'NielsenIQ',
    when: 'Jul 2025 — Present · Chennai',
    points: [
      'Own end-to-end pipeline operations for enterprise FMCG clients including Mars, Mondelez and Bush Brothers, with 100% SLA compliance.',
      'Built and optimized Python/SQL ETL pipelines, raising data accuracy to 99.8% across 10,000+ product records.',
      'Primary contact for US-based clients, resolving issues and change requests with ITIL practice and AI-assisted tools.',
    ],
    tags: ['Python', 'SQL', 'ITIL', 'CI/CD'],
    color: 'var(--yellow)',
  },
  {
    role: 'Web Developer Intern',
    org: 'GSR Business Services',
    when: 'Apr 2024 — May 2024 · Chennai',
    points: [
      'Built a full-stack Notes Management app in 4 weeks with React, Node.js, Express and MongoDB, with JWT auth and full CRUD.',
      'Cut page load time by 30% through React optimization; built RESTful APIs with Git-based version control.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    color: 'var(--purple)',
  },
];

// Hand-written details for known projects. Matched against GitHub repo names
// (loosely), so the live GitHub list gets nicer copy where we have it.
export const curatedProjects = [
  {
    match: ['task-manager', 'ci-cd', 'cicd'],
    name: 'Task Manager — CI/CD Pipeline',
    kicker: 'DevOps · CI/CD',
    description:
      'Production-grade CI/CD for a Node.js & Express REST API: unit tests, Docker builds, Trivy vulnerability scans and Docker Hub publishing — 100% automated on every push.',
    tags: ['Node.js', 'Express', 'Docker', 'GitHub Actions'],
    url: 'https://github.com/Purvaxx/task-manager-ci-cd',
  },
  {
    match: ['sentiment', 'feedback', 'employee'],
    name: 'Employee Feedback Analysis',
    kicker: 'ML · NLP',
    description:
      'Fine-tuned DistilBERT on 10,000+ employee comments for 92%+ sentiment accuracy, with a full Hugging Face + PyTorch pipeline.',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'Flask'],
  },
  {
    match: ['chat'],
    name: 'Java Multithreaded Chat App',
    kicker: 'Concurrent systems',
    description:
      'Multithreaded TCP chat server load-tested at 50 concurrent connections. Found and fixed a real race condition; console and Swing clients share one protocol.',
    tags: ['Java', 'Sockets', 'Swing', 'Concurrency'],
  },
  {
    match: ['library'],
    name: 'Library Management System',
    kicker: 'Systems · Benchmarking',
    description:
      'Benchmarked at 1,000+ records with sub-ms writes and 19ms full-catalog search. Console and Swing GUIs share one business layer with CSV persistence.',
    tags: ['Java', 'OOP', 'Swing', 'Streams'],
  },
];

// Stack shown in the scrolling marquee. `icon` is a simple-icons key.
export const stackRows = [
  [
    ['Java', 'siOpenjdk', '#f89820'],
    ['Python', 'siPython', '#3776AB'],
    ['SQL', 'siMysql', '#4479A1'],
    ['JavaScript', 'siJavascript', '#F7DF1E'],
    ['Spring Boot', 'siSpringboot', '#6DB33F'],
    ['Hibernate', 'siHibernate', '#BCAE79'],
    ['React', 'siReact', '#61DAFB'],
    ['Node.js', 'siNodedotjs', '#5FA04E'],
    ['Express', 'siExpress', '#ffffff'],
    ['Flutter', 'siFlutter', '#02569B'],
    ['Dart', 'siDart', '#0175C2'],
    ['PyTorch', 'siPytorch', '#EE4C2C'],
    ['Hugging Face', 'siHuggingface', '#FFD21E'],
  ],
  [
    ['AWS', 'siAmazonwebservices', '#FF9900'],
    ['Docker', 'siDocker', '#2496ED'],
    ['GitHub Actions', 'siGithubactions', '#2088FF'],
    ['Git', 'siGit', '#F05032'],
    ['Linux', 'siLinux', '#FCC624'],
    ['Kafka', 'siApachekafka', '#ffffff'],
    ['MySQL', 'siMysql', '#4479A1'],
    ['PostgreSQL', 'siPostgresql', '#4169E1'],
    ['MongoDB', 'siMongodb', '#47A248'],
    ['Pandas', 'siPandas', '#E70488'],
    ['scikit-learn', 'siScikitlearn', '#F7931E'],
    ['Canva', 'siCanva', '#00C4CC'],
    ['Notion', 'siNotion', '#ffffff'],
    ['Photoshop', 'siAdobephotoshop', '#31A8FF'],
  ],
];

export const education = [
  ['Master of Computer Applications — AI/ML', 'VIT Chennai', 'Aug 2025 — Jul 2027 (expected) · CGPA 7.8'],
  ['Bachelor of Computer Applications', 'M.O.P. Vaishnav College for Women', 'Aug 2022 — Apr 2025 · CGPA 8.56 / 10'],
];

export const awards = [
  ['2025', '1st Place, Hackathon — M.O.P. Vaishnav College'],
  ['2024–25', 'Best Project Award — Shri Suryanarayanan Endowment Prize'],
  ['2024–25', 'Rotaractor of the Year'],
  ['2024', 'Best Article — “Generative AI in Entertainment”'],
  ['—', 'Star of Rotaract — Rotary International District 3234'],
  ['Patent', 'Aqua Shield – Arena Mate: IoT rain defense for sports venues (Mar 2024)'],
  ['Journal', 'Identifying fake news using big data — IJDCT Vol. 10, 2024'],
];

export const certifications = ['Java · Udemy', 'React · Udemy', 'Flutter & Dart · Udemy', 'JavaScript · Udemy', 'MongoDB · MongoDB', 'AWS Fundamentals · Coursera'];
