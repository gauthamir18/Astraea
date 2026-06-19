export const roadmapData = {
  "software-engineer-frontend": {
    "title": "Frontend Software Engineer",
    "description": "Build responsive, high-performance, and accessible user interfaces for web applications using HTML, CSS, and JavaScript, extending into modern frameworks.",
    "skillsToMaster": [
      { "id": "html5", "name": "Semantic HTML5 & Accessibility (a11y)", "category": "Foundations" },
      { "id": "css3", "name": "CSS3 (Flexbox, Grid, Custom Properties, Transitions)", "category": "Foundations" },
      { "id": "js-core", "name": "ES6+ JavaScript Fundamentals & DOM Manipulation", "category": "Foundations" },
      { "id": "git", "name": "Git & GitHub Version Control", "category": "Tools" },
      { "id": "framework", "name": "Component Frameworks (React, Vue, or Angular)", "category": "Advanced" },
      { "id": "state-mgmt", "name": "State Management & API Integration (Fetch, REST, GraphQL)", "category": "Advanced" },
      { "id": "perf", "name": "Web Performance & Core Web Vitals (LCP, INP, CLS)", "category": "Advanced" },
      { "id": "testing", "name": "Testing (Jest, Playwright, or Cypress)", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: Web Foundations",
        "duration": "Weeks 1 - 6",
        "description": "Learn how the web works, build structural markup, and style responsive layouts using modern CSS techniques.",
        "topics": [
          "HTTP basics, browsers, and client-server communication",
          "Semantic HTML elements, document outline, and accessibility landmarks",
          "CSS layout systems: Flexbox and Grid",
          "Responsive design: Media queries, fluid typography, and CSS custom properties",
          "Web design systems and CSS methodologies (BEM, CSS Modules)"
        ],
        "projects": [
          { "name": "Responsive Landing Page", "description": "Create a stunning glassmorphic product showcase page using raw HTML/CSS, optimized for all screen sizes." },
          { "name": "Accessible Profile Card Grid", "description": "Build an accessible card system with custom keyboard focus styles and semantic tags." }
        ],
        "resources": [
          { "name": "MDN Web Docs: Learn Web Development", "url": "https://developer.mozilla.org/en-US/docs/Learn", "type": "Documentation" },
          { "name": "freeCodeCamp: Responsive Web Design", "url": "https://www.freecodecamp.org/learn/2022/responsive-web-design/", "type": "Interactive Course" }
        ]
      },
      {
        "phaseTitle": "Phase 2: Programming & Interactivity",
        "duration": "Weeks 7 - 12",
        "description": "Bring your websites to life by learning JavaScript programming, DOM events, and fetching data from third-party APIs.",
        "topics": [
          "JavaScript syntax: Variables, functions, scope, arrays, objects, and ES6+ features",
          "DOM APIs: Selecting elements, handling user events, and dynamic style modifications",
          "Asynchronous JS: Promises, async/await, and fetching data via `fetch`",
          "JSON data parsing and form validation state handling",
          "Command line interfaces, npm package ecosystem, and version control using Git"
        ],
        "projects": [
          { "name": "Interactive Dashboard Widget", "description": "Build a weather or task tracker dashboard that fetches live data and displays it using CSS animations." },
          { "name": "Custom Dynamic Form Wizard", "description": "Create an interactive multi-step form with dynamic client-side validation and local storage persistence." }
        ],
        "resources": [
          { "name": "JavaScript.info: The Modern JavaScript Tutorial", "url": "https://javascript.info/", "type": "Interactive Tutorial" },
          { "name": "Git & GitHub Crash Course (freeCodeCamp)", "url": "https://www.youtube.com/watch?v=RGOj5yH7evk", "type": "Video Guide" }
        ]
      },
      {
        "phaseTitle": "Phase 3: Modern UI Frameworks",
        "duration": "Weeks 13 - 18",
        "description": "Scale up your applications by adopting component-driven frameworks, routing, and robust state management.",
        "topics": [
          "Component architectures, properties (props), and local state management",
          "Lifecycle methods, hook effects, and memoization optimizations",
          "Routing in Single Page Apps (SPAs)",
          "Building reusable components and form controls",
          "Integrating bundlers (Vite) and configuring linting tools (ESLint)"
        ],
        "projects": [
          { "name": "Fully Featured SaaS Dashboard Mockup", "description": "Develop a complex single-page application using React/Vue, containing charts, modal dialogs, and route transitions." },
          { "name": "Resource Bookmark Manager", "description": "Build a bookmark manager supporting categorizations, filters, search functionality, and persistent cloud synchronization." }
        ],
        "resources": [
          { "name": "React Official Documentation (Quick Start)", "url": "https://react.dev/", "type": "Documentation" },
          { "name": "Vite Official Guide", "url": "https://vite.dev/", "type": "Documentation" }
        ]
      },
      {
        "phaseTitle": "Phase 4: Optimization & Professional Engineering",
        "duration": "Weeks 19 - 24+",
        "description": "Prepare for industry standards by optimizing page speed, writing automated tests, and deploying layouts.",
        "topics": [
          "Core Web Vitals auditing and optimizations (LCP, INP, CLS)",
          "Performance strategies: Lazy loading, resource prefetching, and asset minification",
          "Unit testing and integration testing of components",
          "CI/CD configurations, Netlify/Vercel deployments, and production bundling"
        ],
        "projects": [
          { "name": "Production-grade Portfolio Hub", "description": "Optimize and host your code history, demonstrating excellent lighthouse performance scores, zero layout shifts, and semantic markup." }
        ],
        "resources": [
          { "name": "web.dev: Core Web Vitals Guides", "url": "https://web.dev/explore/vitals", "type": "Best Practices" },
          { "name": "Testing JavaScript (Kent C. Dodds)", "url": "https://testingjavascript.com/", "type": "Reference" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "The average entry-level Frontend Developer salary ranges between $70,000 and $95,000 in the US, with senior engineers earning between $130,000 and $180,000+. Focusing on strong core JavaScript and responsive CSS makes you highly competitive.",
      "portfolio": "Your frontend portfolio should contain 3 high-quality projects. Avoid generic clone apps. Instead, build a real tool: 1. A highly polished dashboard that handles complex states and charts. 2. A custom accessibility-first web tool (e.g., using Web Audio or Canvas). 3. An open-source package or library. Make sure code is clean and has unit tests.",
      "interview": "Frontend interviews typically consist of: 1. CSS layouts (Flexbox/Grid, centering, specificity). 2. Core JavaScript concepts (closures, prototypical inheritance, event loops, promises). 3. Hand-coding UI components (like a modal, carousel, or search filter) from scratch. 4. Basic system design for web applications (caching, state management, security)."
    }
  },
  "software-engineer-backend": {
    "title": "Backend Software Engineer",
    "description": "Design, build, and maintain server-side application logic, database schemas, API routes, and cloud deployment pipelines.",
    "skillsToMaster": [
      { "id": "lang", "name": "Server-side Language (Python, Node.js, Go, or Java)", "category": "Foundations" },
      { "id": "db", "name": "Databases (SQL/PostgreSQL, NoSQL/MongoDB)", "category": "Foundations" },
      { "id": "api-design", "name": "RESTful API Design & HTTP Protocols", "category": "Tools" },
      { "id": "orm", "name": "ORMs & Query Optimizations", "category": "Tools" },
      { "id": "auth", "name": "Authentication & Security (JWT, OAuth, CORS)", "category": "Advanced" },
      { "id": "sys-design", "name": "System Architecture (Caching, Queues, Microservices)", "category": "Advanced" },
      { "id": "docker", "name": "Docker Containerization", "category": "Advanced" },
      { "id": "testing", "name": "Integration & Load Testing", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: Language & Server Basics",
        "duration": "Weeks 1 - 6",
        "description": "Learn your primary backend programming language (Node.js/Python/Go) and build basic HTTP servers.",
        "topics": [
          "Data structures, object-oriented vs functional programming paradigms",
          "File system operations, process handling, and packages management",
          "HTTP specification: Request/Response lifecycles, headers, and status codes",
          "Building lightweight routes and handling query parameters/post body payloads"
        ],
        "projects": [
          { "name": "CLI Task Manager", "description": "Write a node/python command-line application that saves, edits, and reads tasks from structured JSON files." },
          { "name": "Basic HTTP File Server", "description": "Implement a raw file-serving server that returns HTML, CSS, and media templates without external frameworks." }
        ],
        "resources": [
          { "name": "Node.js Learning Path", "url": "https://nodejs.org/en/learn", "type": "Documentation" },
          { "name": "Python for Everybody Specialization", "url": "https://www.coursera.org/specializations/python", "type": "Course" }
        ]
      },
      {
        "phaseTitle": "Phase 2: Database Management",
        "duration": "Weeks 7 - 12",
        "description": "Understand structured and unstructured data, design robust schemas, and write optimal database queries.",
        "topics": [
          "Relational Database Management Systems (RDBMS) like PostgreSQL",
          "SQL fundamentals: Joins, indexes, aggregations, and subqueries",
          "NoSQL database principles (MongoDB/Redis)",
          "Data migration scripts and database schema design best practices",
          "Using Object-Relational Mappers (ORMs) safely (avoiding N+1 query problems)"
        ],
        "projects": [
          { "name": "E-Commerce Database Schema", "description": "Design a relational database schema complete with users, products, categories, orders, and payment records." },
          { "name": "Blogging Platform REST API", "description": "Create a fully functional CRUD backend connected to a SQL database, featuring post tags and category filters." }
        ],
        "resources": [
          { "name": "PostgreSQL Tutorial", "url": "https://www.postgresqltutorial.com/", "type": "Tutorial" },
          { "name": "MongoDB University", "url": "https://university.mongodb.com/", "type": "Interactive Courses" }
        ]
      },
      {
        "phaseTitle": "Phase 3: Authentication, Security & Deployment",
        "duration": "Weeks 13 - 18",
        "description": "Secure your web endpoints with authentication, protect user data, and host your service in the cloud.",
        "topics": [
          "Authentication protocols: Sessions, JSON Web Tokens (JWT), and OAuth2.0",
          "Password hashing (bcrypt) and protecting against common vulnerabilities (OWASP Top 10)",
          "CORS configurations, rate limiting, and request sanitization",
          "Docker: Containerizing server runtimes and matching dev/production environments",
          "Cloud deployment (Render, AWS, GCP) and environment variables configurations"
        ],
        "projects": [
          { "name": "Secure Auth Gateway Service", "description": "Build an authentication service that issues tokens, validates user registrations, resets passwords, and handles OAuth logins." },
          { "name": "Containerized Server Hub", "description": "Deploy a multi-container app using Docker Compose linking your API server and database." }
        ],
        "resources": [
          { "name": "OWASP Top Ten Security Risks", "url": "https://owasp.org/www-project-top-ten/", "type": "Security Reference" },
          { "name": "Docker Official Orientation Guide", "url": "https://docs.docker.com/get-started/", "type": "Documentation" }
        ]
      },
      {
        "phaseTitle": "Phase 4: Advanced Systems & Scaling",
        "duration": "Weeks 19 - 24+",
        "description": "Improve performance under high load by introducing caching, background jobs, and microservices.",
        "topics": [
          "Caching strategies (in-memory databases like Redis)",
          "Asynchronous queues and worker processes (BullMQ, Celery)",
          "Real-time communication using WebSockets",
          "Performance profiling, load testing, and database indexing optimizations"
        ],
        "projects": [
          { "name": "Real-time Messaging System", "description": "Build a chat infrastructure supporting instant messaging, user presence notifications, and message history caching." }
        ],
        "resources": [
          { "name": "System Design Primer", "url": "https://github.com/donnemartin/system-design-primer", "type": "GitHub Repository" },
          { "name": "Redis University", "url": "https://university.redis.io/", "type": "Interactive Course" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "Junior Backend Developers earn between $75,000 and $100,000. Mid-level and senior positions often earn $135,000 to $190,000+ depending on expertise in scalability, security, and cloud architectures.",
      "portfolio": "Your backend portfolio should clearly demonstrate data modeling and reliability. 1. A complex API with granular role-based access control (RBAC), rate-limiting, and comprehensive Swagger documentation. 2. A system that processes heavy background tasks asynchronously using queues. 3. A project showing performance optimizations (e.g. database indexing, caching layer, optimized SQL queries) validated with load-testing graphs.",
      "interview": "Backend interviews focus on: 1. Data structures and algorithms. 2. Database design and normalization (SQL vs NoSQL). 3. System Design (scaling, horizontal vs vertical scaling, load balancers, caching, CDN, messages queues). 4. HTTP protocols, security fundamentals (preventing SQL injections, XSS, CSRF), and API versioning."
    }
  },
  "data-scientist": {
    "title": "Data Scientist / AI Engineer",
    "description": "Extract insights from complex datasets and build machine learning / AI models to solve predictive and analytical problems.",
    "skillsToMaster": [
      { "id": "python-ds", "name": "Python (Pandas, NumPy, Scikit-learn)", "category": "Foundations" },
      { "id": "stats", "name": "Probability & Applied Statistics", "category": "Foundations" },
      { "id": "sql-ds", "name": "SQL & Data Querying", "category": "Tools" },
      { "id": "viz", "name": "Data Visualization (Matplotlib, Seaborn, Tableau)", "category": "Tools" },
      { "id": "ml", "name": "Supervised & Unsupervised Machine Learning", "category": "Advanced" },
      { "id": "dl", "name": "Deep Learning & Neural Networks (TensorFlow or PyTorch)", "category": "Advanced" },
      { "id": "nlp-llm", "name": "Natural Language Processing & LLM Prompting/Fine-Tuning", "category": "Advanced" },
      { "id": "deploy-ml", "name": "MLOps & Model Deployment (Streamlit, FastAPI)", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: Math & Data Exploration",
        "duration": "Weeks 1 - 6",
        "description": "Strengthen your statistical foundations and master Python libraries for data manipulation and analysis.",
        "topics": [
          "Linear algebra, calculus, descriptive statistics, and probability distributions",
          "Python data structures, Jupyter notebooks, and Pandas/NumPy usage",
          "Data cleaning: Handling missing values, outliers, and data formatting",
          "Exploratory Data Analysis (EDA) and data visualization principles"
        ],
        "projects": [
          { "name": "Exploratory Analytics Report", "description": "Clean and analyze a real-world dataset (e.g. housing prices or census statistics) to extract statistically significant insights." },
          { "name": "Weather Trend Tracker", "description": "Write scripts to parse multi-year climate logs, plot variations, and run linear regression predictions." }
        ],
        "resources": [
          { "name": "Python for Data Analysis (Book)", "url": "https://wesmckinney.com/book/", "type": "Book" },
          { "name": "Khan Academy: College Statistics", "url": "https://www.khanacademy.org/math/statistics-probability", "type": "Course" }
        ]
      },
      {
        "phaseTitle": "Phase 2: Machine Learning Core",
        "duration": "Weeks 7 - 12",
        "description": "Learn classification, regression, and clustering algorithms, and understand how to train, evaluate, and tune models.",
        "topics": [
          "Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests, and Gradient Boosting",
          "Unsupervised learning: K-Means clustering and Principal Component Analysis (PCA)",
          "Model evaluation metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC, and Mean Squared Error",
          "Data preprocessing, feature engineering, and cross-validation pipelines"
        ],
        "projects": [
          { "name": "Customer Churn Prediction Model", "description": "Train and optimize a classification model to predict which customers are likely to cancel a subscription service." },
          { "name": "Housing Market Valuation Engine", "description": "Build a regression pipeline that predicts housing valuations based on location characteristics and historical records." }
        ],
        "resources": [
          { "name": "Kaggle Learn Tutorials", "url": "https://www.kaggle.com/learn", "type": "Interactive Practice" },
          { "name": "Machine Learning by Andrew Ng (Coursera)", "url": "https://www.coursera.org/specializations/machine-learning-introduction", "type": "Specialization" }
        ]
      },
      {
        "phaseTitle": "Phase 3: AI, Deep Learning & LLMs",
        "duration": "Weeks 13 - 18",
        "description": "Step into advanced neural network design, computer vision, natural language processing, and integrating Large Language Models.",
        "topics": [
          "Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), and Recurrent Networks",
          "Deep learning frameworks: PyTorch or TensorFlow fundamentals",
          "NLP techniques: Tokenization, embeddings, sentiment analysis",
          "API integration of modern LLMs, prompt engineering, and RAG (Retrieval-Augmented Generation)"
        ],
        "projects": [
          { "name": "Medical Image Classifier", "description": "Implement a Convolutional Neural Network in PyTorch to classify medical scan images with high confidence." },
          { "name": "Custom QA Bot with RAG", "description": "Build a document-based questioning system using a vector store (e.g. ChromaDB) and a Gemini/OpenAI endpoint." }
        ],
        "resources": [
          { "name": "Deep Learning Specialization (DeepLearning.AI)", "url": "https://www.deeplearning.ai/courses/deep-learning-specialization/", "type": "Specialization" },
          { "name": "Hugging Face Course", "url": "https://huggingface.co/learn", "type": "Tutorials" }
        ]
      },
      {
        "phaseTitle": "Phase 4: MLOps & Deployment",
        "duration": "Weeks 19 - 24+",
        "description": "Transition models from research notebooks into production environments served as web APIs.",
        "topics": [
          "Building web UI demos for models using Streamlit or Gradio",
          "Packaging models into REST APIs using FastAPI or Flask",
          "Docker for ML environments and deployment to cloud infrastructure",
          "Model tracking, monitoring, and database management for analytics data"
        ],
        "projects": [
          { "name": "Machine Learning Prediction API", "description": "Package an optimized model inside Docker, expose predict endpoints via FastAPI, and deploy to a cloud container runtime." }
        ],
        "resources": [
          { "name": "Made With ML (MLOps Roadmap)", "url": "https://madewithml.com/", "type": "Curriculum" },
          { "name": "FastAPI Official Documentation", "url": "https://fastapi.tiangolo.com/", "type": "Documentation" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "Data Scientists earn between $85,000 and $115,000 for junior roles, and senior AI/Machine Learning engineers easily make $150,000 to $220,000+. Skill in deep learning, LLM fine-tuning, and MLOps commands a premium.",
      "portfolio": "Your portfolio must show clean, reproducible code. 1. A complete dataset analysis explaining the business context, methodology, cleaning steps, and key findings. 2. A machine learning model pipeline on GitHub, showing grid search logs, cross-validation graphs, and feature importance analyses. 3. A live interactive ML demo (e.g. hosted on Hugging Face Spaces or Streamlit) where users can enter input and get instant predictions.",
      "interview": "Data Science interviews test: 1. Python programming and SQL query optimization. 2. Statistics and probability theory (A/B testing, hypothesis testing, Bayes theorem). 3. Machine learning algorithm theory (explain bias-variance tradeoff, regularization, how random forest works). 4. Case studies (e.g., how to design a recommendation system or predict user fraud)."
    }
  },
  "ux-designer": {
    "title": "UX/UI Designer",
    "description": "Design user experiences, build user flows, wireframes, and high-fidelity mockups, and run usability tests to build products people love.",
    "skillsToMaster": [
      { "id": "figma", "name": "Figma Mastery (Components, Auto Layout, Prototyping)", "category": "Foundations" },
      { "id": "ux-research", "name": "User Research Methods & Personas", "category": "Foundations" },
      { "id": "wireframing", "name": "Wireframing & Information Architecture", "category": "Tools" },
      { "id": "visual-design", "name": "Visual Design (Typography, Grid Systems, Color Theory)", "category": "Tools" },
      { "id": "prototyping", "name": "Interactive Prototyping & Micro-interactions", "category": "Advanced" },
      { "id": "design-systems", "name": "Building Scalable Design Systems", "category": "Advanced" },
      { "id": "usability-test", "name": "Usability Testing & Analytics Audits", "category": "Advanced" },
      { "id": "dev-handoff", "name": "Developer Handoff & Frontend Collaboration", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: Research & Discovery",
        "duration": "Weeks 1 - 6",
        "description": "Understand user needs, run interviews, perform competitive analysis, and map user flows.",
        "topics": [
          "Human-Centered Design framework principles",
          "Qualitative vs quantitative user research (interviews, surveys, observations)",
          "Creating user personas, empathy maps, and user journey flows",
          "Information architecture: Card sorting and sitemap organization"
        ],
        "projects": [
          { "name": "User Research Case Study", "description": "Identify a problematic application, interview 5 real users, map their pain points, and outline a research report with recommendations." },
          { "name": "App Sitemap & User Flow", "description": "Map the exact step-by-step navigation structure for a complex service, like a community sharing app." }
        ],
        "resources": [
          { "name": "Interaction Design Foundation (IxDF)", "url": "https://www.interaction-design.org/", "type": "Online School" },
          { "name": "Nielsen Norman Group Articles", "url": "https://www.nngroup.com/articles/", "type": "Research Library" }
        ]
      },
      {
        "phaseTitle": "Phase 2: Wireframing & Figma Core",
        "duration": "Weeks 7 - 12",
        "description": "Learn low-fidelity design methods and master Figma layouts, responsive controls, and component systems.",
        "topics": [
          "Sketching ideas and building low-fidelity gray-scale wireframes",
          "Figma foundations: Vector tools, frames, constraints, and auto-layout",
          "Typography hierarchies, grid alignments, and color theory guidelines",
          "Creating reusable UI components and variants"
        ],
        "projects": [
          { "name": "Low-Fidelity App Mockup", "description": "Create a 15-screen gray-scale wireframe walkthrough for a mobile pet adoption service, validating navigation pathways." },
          { "name": "Figma Reusable Component Set", "description": "Build a responsive UI kit including buttons, text fields, headers, and cards that handle resizing correctly." }
        ],
        "resources": [
          { "name": "Figma Learn Tutorials", "url": "https://help.figma.com/hc/en-us/categories/360002051614-Figma-Academy", "type": "Interactive Guides" },
          { "name": "Refactoring UI (Book)", "url": "https://www.refactoringui.com/", "type": "Book" }
        ]
      },
      {
        "phaseTitle": "Phase 3: High-Fidelity & Prototyping",
        "duration": "Weeks 13 - 18",
        "description": "Transform wireframes into pixel-perfect high-fidelity designs and create interactive prototypes with smooth transitions.",
        "topics": [
          "High-fidelity UI styling: Glassmorphism, shadows, gradients, and micro-copy",
          "Figma prototyping: Smart animate, interactive components, hover/click triggers",
          "Accessibility standards in design (color contrast ratios, touch target sizing)",
          "Building responsive layouts across mobile, tablet, and desktop views"
        ],
        "projects": [
          { "name": "Interactive Dashboard Design", "description": "Design a gorgeous data-rich dashboard mockup using modern typography and glassmorphism. Turn it into a fully interactive prototype." },
          { "name": "Responsive E-Commerce Site Mockup", "description": "Design a complete desktop and mobile web layout for a clothing store, linking components to a cohesive design system." }
        ],
        "resources": [
          { "name": "Laws of UX", "url": "https://lawsofux.com/", "type": "Reference Library" },
          { "name": "Material Design Guidelines", "url": "https://m3.material.io/", "type": "Design System Reference" }
        ]
      },
      {
        "phaseTitle": "Phase 4: Testing & Collaboration",
        "duration": "Weeks 19 - 24+",
        "description": "Test prototypes with real users, analyze interaction friction, and prepare clean assets for developers.",
        "topics": [
          "Planning and running moderate usability testing sessions",
          "Creating heatmaps, tracking click success, and documenting user feedback",
          "Design specs, developer handoff notes, redlining, and exporting assets",
          "Basic understanding of HTML/CSS to support engineering handoff"
        ],
        "projects": [
          { "name": "Usability Testing & Design Iteration Report", "description": "Run usability tests on your high-fidelity prototype, note friction points, document the redesign process, and prepare developer-ready spec files." }
        ],
        "resources": [
          { "name": "Google UX Design Professional Certificate", "url": "https://www.coursera.org/professional-certificates/google-ux-design", "type": "Course" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "Junior UX/UI Designers earn $65,000 to $85,000. Senior designers and design leads command salaries from $120,000 to $160,000+. Deep specialization in interaction design or user research increases market value.",
      "portfolio": "Your design portfolio should focus on case studies, not just pretty Dribbble screens. Include 2 or 3 comprehensive case studies showing: 1. The problem statement. 2. Your research insights and target personas. 3. Sketching and wireframing iterations (explain *why* you made certain layout decisions). 4. Usability testing feedback and how you redesigned elements based on data. 5. High-fidelity pixel-perfect layouts and a link to a working Figma prototype.",
      "interview": "Design interviews comprise: 1. Portfolio review (walk through one case study in detail). 2. Whiteboard challenge (given a prompt like 'design a parking payment app for seniors', map the user flow and sketch screens live). 3. App critique (critique a popular app's UI/UX live). 4. Collaboration questions (how you handle engineering constraints or disagreeing stakeholders)."
    }
  },
  "product-manager": {
    "title": "Product Manager",
    "description": "Align customer needs with business strategy, outline product roadmaps, write requirement specs, and collaborate with engineering and design teams.",
    "skillsToMaster": [
      { "id": "pm-foundations", "name": "Product Lifecycle & Agile Methodologies", "category": "Foundations" },
      { "id": "strategy", "name": "Market Research & Competitive Analysis", "category": "Foundations" },
      { "id": "metrics", "name": "Data Analytics & KPI Tracking (SQL, Amplitude)", "category": "Tools" },
      { "id": "prd", "name": "Writing Product Requirement Documents (PRDs)", "category": "Tools" },
      { "id": "roadmap", "name": "Feature Prioritization Frameworks (RICE, MoSCoW)", "category": "Advanced" },
      { "id": "ux-foundations", "name": "UX/UI Principles for Product Managers", "category": "Advanced" },
      { "id": "comm", "name": "Stakeholder Management & Public Speaking", "category": "Advanced" },
      { "id": "launch", "name": "Go-To-Market (GTM) Strategy & Launch Executions", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: PM Core & Agile",
        "duration": "Weeks 1 - 6",
        "description": "Understand the role of product management, study agile workflows, and learn user research.",
        "topics": [
          "The Product lifecycle: Ideation, build, scale, and sunsetting",
          "Agile Scrum vs Kanban, writing user stories, managing backlogs, sprint planning",
          "Customer empathy, interviewing users, and identifying market gaps",
          "Analyzing competitors and mapping market landscapes"
        ],
        "projects": [
          { "name": "Competitor Landscape Analysis", "description": "Choose a growing market (e.g. food delivery or note-taking apps) and compile a comprehensive competitor breakdown highlighting features and gaps." },
          { "name": "User Stories & Backlog Map", "description": "Write a structured set of user stories complete with acceptance criteria for a new mobile messaging feature." }
        ],
        "resources": [
          { "name": "Inspired: How to Create Tech Products Customers Love (Book)", "url": "https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/", "type": "Book" },
          { "name": "Product Management First Steps (LinkedIn Learning)", "url": "https://www.linkedin.com/learning/product-management-first-steps", "type": "Video Course" }
        ]
      },
      {
        "phaseTitle": "Phase 2: PRDs & Prioritization",
        "duration": "Weeks 7 - 12",
        "description": "Learn to write clear product specifications and prioritize features using standard analytical frameworks.",
        "topics": [
          "Writing Product Requirement Documents (PRDs): Scope, metrics, user flows, and mockups",
          "Prioritization frameworks: RICE (Reach, Impact, Confidence, Effort), MoSCoW, and Kano models",
          "Wireframing concepts to communicate layouts to designers and engineers",
          "Defining MVP (Minimum Viable Product) scopes and release milestones"
        ],
        "projects": [
          { "name": "Product Requirement Document (PRD)", "description": "Draft a comprehensive PRD for a new collaborative document editing feature, detailing metrics, user flows, edge cases, and scope." },
          { "name": "MVP Feature Prioritization Matrix", "description": "Score a list of 15 requested features using the RICE framework, mapping out a visual release roadmap." }
        ],
        "resources": [
          { "name": "How to Write a Good PRD", "url": "https://www.atlassian.com/agile/product-management/requirements", "type": "Guide" },
          { "name": "Product School Resources Hub", "url": "https://productschool.com/resources", "type": "Articles & Templates" }
        ]
      },
      {
        "phaseTitle": "Phase 3: Data-Driven Decision Making",
        "duration": "Weeks 13 - 18",
        "description": "Master product analytics, define success metrics (KPIs), run A/B testing, and make decisions based on data.",
        "topics": [
          "Defining North Star metrics, input metrics, and key performance indicators",
          "Product analytics toolings (Amplitude, Mixpanel, Google Analytics)",
          "A/B testing principles: Hypothesis testing, statistical significance, and sample sizes",
          "Understanding unit economics, user acquisition costs (CAC), lifetime value (LTV), and churn rates"
        ],
        "projects": [
          { "name": "Product Metrics Dashboard Design", "description": "Design a mock telemetry plan and Amplitude dashboard showing user activation, conversion funnels, and retention curves for an app." },
          { "name": "A/B Testing Proposal & Analysis", "description": "Write a testing proposal for a checkout flow redesign, outlining sample sizes, target metrics, and confidence limits." }
        ],
        "resources": [
          { "name": "Amplitude Product Analytics Playbook", "url": "https://amplitude.com/mastering-retention", "type": "Guidebook" },
          { "name": "SQL for Product Managers (Udemy/freeCodeCamp)", "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY", "type": "Video Tutorial" }
        ]
      },
      {
        "phaseTitle": "Phase 4: GTM & Leadership",
        "duration": "Weeks 19 - 24+",
        "description": "Create marketing strategies, prepare launch schedules, manage stakeholders, and lead cross-functional alignments.",
        "topics": [
          "Go-to-Market (GTM) strategy: Positioning, messaging, pricing, and distribution channels",
          "Preparing sales enablement resources and release notes",
          "Stakeholder alignment: Communicating roadmap progress to executives, design, and engineering",
          "Product positioning and marketing integrations"
        ],
        "projects": [
          { "name": "Go-to-Market Launch Strategy", "description": "Develop a complete launch plan for a new fintech feature, detailing pricing strategy, user emails, training logs, and feature toggles." }
        ],
        "resources": [
          { "name": "Cracking the PM Interview (Book)", "url": "http://www.crackingthepminterview.com/", "type": "Book" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "Entry-level Associate Product Managers make $80,000 to $105,000. Experienced Product Managers earn $125,000 to $170,000+, while Directors of Product can exceed $200,000+. Business and technical skills increase career velocity.",
      "portfolio": "Your PM portfolio should show problem-solving. Create a personal website showing 2 case studies: 1. A teardown of a real product's feature failure, analyzing why it failed and rewriting the PRD and roadmap to fix it. 2. A launch proposal for a brand-new feature including user interviews, detailed PRD, low-fidelity wireframes, telemetry metrics, and a full RICE prioritization breakdown.",
      "interview": "PM interviews focus on: 1. Product Sense (e.g. 'How would you design a calendar app for blind users?'). 2. Analytical & Execution (e.g., 'How would you measure the success of a new feature?', 'Instagram stories views are down 5%, what do you do?'). 3. Behavior and leadership (how you align engineering teams, handle roadmap changes, or resolve stakeholder conflicts)."
    }
  },
  "technical-writer": {
    "title": "Technical Writer",
    "description": "Create clean API documentations, user guides, reference books, and setup tutorials to bridge the gap between complex software and users.",
    "skillsToMaster": [
      { "id": "writing-style", "name": "Clear Writing & Style Guidelines (Microsoft/Google Style Guide)", "category": "Foundations" },
      { "id": "markdown", "name": "Markdown & Docs-as-Code Workflows", "category": "Foundations" },
      { "id": "git-docs", "name": "Git version control & GitHub actions for Docs", "category": "Tools" },
      { "id": "api-docs", "name": "API Documentation & OpenAPI Specifications (Swagger)", "category": "Tools" },
      { "id": "ssg", "name": "Static Site Generators (Docusaurus, Hugo, Sphinx)", "category": "Advanced" },
      { "id": "ux-docs", "name": "UX Writing & Content Design Principles", "category": "Advanced" },
      { "id": "coding-docs", "name": "Basic Programming Skills (HTML, JS, Python) for examples", "category": "Advanced" },
      { "id": "reviews", "name": "Document Reviews, Analytics & Audits", "category": "Professional" }
    ],
    "phases": [
      {
        "phaseTitle": "Phase 1: Writing Core & Markdown",
        "duration": "Weeks 1 - 6",
        "description": "Learn style guide mechanics, active voice writing, logical structures, and Markdown syntax.",
        "topics": [
          "Writing with clarity: Active voice, avoiding jargon, and sentence simplicity",
          "Applying standard style guides (Google Developer Style Guide / Microsoft Manual of Style)",
          "Markdown formatting, nested lists, tables, code blocks, and visual alerts",
          "Docs-as-code: Writing docs in text editors and managing them via Git versions"
        ],
        "projects": [
          { "name": "Open Source Contribution Walkthrough", "description": "Write a detailed Markdown installation guide for a popular open-source tool, explaining pre-requisites and troubleshooting common errors." },
          { "name": "Quick Start Guide Rewrite", "description": "Take a poorly structured installation guide and rewrite it utilizing active voice, proper headings, and clean formatting." }
        ],
        "resources": [
          { "name": "Google Developer Documentation Style Guide", "url": "https://developers.google.com/style", "type": "Reference Style" },
          { "name": "Microsoft Writing Style Guide", "url": "https://learn.microsoft.com/en-us/style-guide/welcome/", "type": "Reference Style" }
        ]
      },
      {
        "phaseTitle": "Phase 2: API Documentation & OpenAPI",
        "duration": "Weeks 7 - 12",
        "description": "Understand REST APIs, write swagger specifications, document request payloads, and show code examples.",
        "topics": [
          "Understanding REST, HTTP, JSON response payloads, and API status codes",
          "Writing OpenAPI 3.0/Swagger specifications in YAML/JSON",
          "Documenting API authentication, request parameters, responses, and headers",
          "Providing clean code examples in multiple languages (Python, JavaScript, curl)"
        ],
        "projects": [
          { "name": "OpenAPI Spec for Weather API", "description": "Write a complete OpenAPI YAML spec detailing endpoints for a weather querying service, including query parameters and JSON schema definitions." },
          { "name": "Interactive API Reference Guide", "description": "Write a detailed tutorial explaining how to call an API, parse the results, and handle common errors (e.g. rate limit exceptions)." }
        ],
        "resources": [
          { "name": "OpenAPI Specification Documentation", "url": "https://swagger.io/specification/", "type": "Documentation" },
          { "name": "Documenting APIs (Tom Johnson's Blog)", "url": "https://idratherbewriting.com/learnapidoc/", "type": "Course Guide" }
        ]
      },
      {
        "phaseTitle": "Phase 3: SSGs & Deployment",
        "duration": "Weeks 13 - 18",
        "description": "Host your documentation sites using Static Site Generators (SSGs) and run deployment checks.",
        "topics": [
          "Static Site Generators for documentation (Docusaurus, Hugo, Sphinx, Read the Docs)",
          "CSS layout customization for docs sites",
          "Search engine optimization (SEO) for docs, structuring indexes, and navigation headers",
          "Setting up CI/CD check pipelines (spellcheckers, broken link validators, deployments)"
        ],
        "projects": [
          { "name": "Custom Docusaurus Site", "description": "Create a Docusaurus documentation website for a mock application, customize styling, construct a sitemap, and deploy to Vercel." },
          { "name": "CI/CD Markdown Validator Pipeline", "description": "Configure a GitHub Action that runs markdown-lint and link-checker on every pull request." }
        ],
        "resources": [
          { "name": "Docusaurus Documentation", "url": "https://docusaurus.io/", "type": "Documentation" },
          { "name": "Hugo Documentation Project", "url": "https://gohugo.io/", "type": "Documentation" }
        ]
      },
      {
        "phaseTitle": "Phase 4: Content Design & Auditing",
        "duration": "Weeks 19 - 24+",
        "description": "Auditing docs analytics, analyzing search query logs, content design for layouts, and review cycles.",
        "topics": [
          "Content audits: Finding outdated files, tracking search queries with no results",
          "UX writing: In-app error messages, tooltips, and onboarding copy",
          "Feedback collections: Integrating widgets to ask users 'Was this page helpful?'",
          "Managing documentation request review boards and version releases"
        ],
        "projects": [
          { "name": "Documentation Audit and Redesign Plan", "description": "Perform a complete audit on an open documentation page, compile feedback logs, trace navigation gaps, and draft a revision ticket." }
        ],
        "resources": [
          { "name": "Write the Docs Community resources", "url": "https://www.writethedocs.org/", "type": "Community Library" }
        ]
      }
    ],
    "aiMentorAnswers": {
      "salary": "Junior Technical Writers earn $60,000 to $75,000. Experienced writers and API specialists earn $100,000 to $145,000+. Technical writers with coding experience earn a premium in tech companies.",
      "portfolio": "Your portfolio must show diverse samples. Compile 3 high-quality writing files: 1. A clean Quick Start guide that is easy for a developer to run. 2. A complete OpenAPI reference spec for a complex API. 3. A detailed conceptual guide explaining a complex technical topic (e.g. how web sockets work or how to configure CORS)."
    }
  }
};
