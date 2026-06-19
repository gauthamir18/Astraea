import { roadmapData } from './roadmapData.js';

// Application State
const state = {
  currentStep: 1,
  formData: {
    education: '',
    fieldOfStudy: '',
    interests: [],
    targetRole: ''
  },
  activePanel: 'roadmap', // 'roadmap' | 'skills' | 'chat'
  completedSkills: new Set(),
  chatHistory: []
};

// DOM Elements
const elements = {
  onboardingScreen: document.getElementById('onboarding-screen'),
  dashboardScreen: document.getElementById('dashboard-screen'),
  onboardingForm: document.getElementById('onboarding-form'),
  
  // Step Content Blocks
  stepContents: [
    document.getElementById('step-content-1'),
    document.getElementById('step-content-2'),
    document.getElementById('step-content-3')
  ],
  
  // Stepper Indicators
  stepIndicators: [
    document.getElementById('step-indicator-1'),
    document.getElementById('step-indicator-2'),
    document.getElementById('step-indicator-3')
  ],
  
  // Navigation Buttons
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  submitBtn: document.getElementById('submit-btn'),
  
  // Error Selectors
  errors: {
    education: document.getElementById('education-error'),
    interests: document.getElementById('interests-error'),
    targetRole: document.getElementById('target-role-error')
  },
  
  // Form Fields
  eduRadios: document.querySelectorAll('input[name="education"]'),
  fieldInput: document.getElementById('field-of-study'),
  interestChecks: document.querySelectorAll('input[name="interests"]'),
  roleSelect: document.getElementById('target-role'),
  roleCompatibilityPreview: document.getElementById('role-compatibility-preview'),
  
  // Sidebar elements
  avatar: document.getElementById('profile-avatar'),
  displayName: document.getElementById('user-display-name'),
  displayEdu: document.getElementById('user-display-edu'),
  displayInterests: document.getElementById('user-display-interests'),
  menuBtns: {
    roadmap: document.getElementById('menu-btn-roadmap'),
    skills: document.getElementById('menu-btn-skills'),
    chat: document.getElementById('menu-btn-chat')
  },
  restartBtn: document.getElementById('restart-btn'),
  printBtn: document.getElementById('print-btn'),
  
  // Dashboard panels
  panels: {
    roadmap: document.getElementById('panel-roadmap'),
    skills: document.getElementById('panel-skills'),
    chat: document.getElementById('panel-chat')
  },
  
  // Dashboard Header
  roleTitle: document.getElementById('dashboard-role-title'),
  roleDesc: document.getElementById('dashboard-role-desc'),
  fitScoreNumber: document.getElementById('fit-score-number'),
  
  // Roadmap Timeline
  timelineContainer: document.getElementById('roadmap-timeline-container'),
  
  // Skills competency
  masteryPercent: document.getElementById('mastery-percent'),
  masteryProgressFill: document.getElementById('mastery-progress-fill'),
  skillsListCheckboxes: document.getElementById('skills-list-checkboxes'),
  chartFillFoundations: document.getElementById('chart-fill-foundations'),
  chartFillTools: document.getElementById('chart-fill-tools'),
  chartFillAdvanced: document.getElementById('chart-fill-advanced'),
  
  // Chat Elements
  chatMessages: document.getElementById('chat-messages-container'),
  chatForm: document.getElementById('chat-input-form'),
  chatInput: document.getElementById('chat-message-input'),
  quickTopics: document.getElementById('chat-quick-topics-container')
};

// Role Alignment rules to calculate Fit Score
const roleInterestsMap = {
  "software-engineer-frontend": ["Coding & Development", "Visual Design & UX"],
  "software-engineer-backend": ["Coding & Development", "Data Analytics & Logic"],
  "data-scientist": ["Data Analytics & Logic", "Academic Research"],
  "ux-designer": ["Visual Design & UX", "Product Strategy"],
  "product-manager": ["Product Strategy", "Writing & Documentation"],
  "technical-writer": ["Writing & Documentation", "Coding & Development"]
};

// Initialize App
function init() {
  setupEventListeners();
  updateStepper();
}

// Event Handlers Setup
function setupEventListeners() {
  // Navigation Steps
  elements.nextBtn.addEventListener('click', handleNextStep);
  elements.prevBtn.addEventListener('click', handlePrevStep);
  elements.onboardingForm.addEventListener('submit', handleFormSubmit);

  // Field Listeners
  elements.roleSelect.addEventListener('change', handleRoleChange);
  
  elements.eduRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      elements.errors.education.textContent = '';
      state.formData.education = radio.value;
    });
  });

  elements.interestChecks.forEach(check => {
    check.addEventListener('change', () => {
      elements.errors.interests.textContent = '';
      const selected = Array.from(elements.interestChecks)
        .filter(c => c.checked)
        .map(c => c.value);
      state.formData.interests = selected;
    });
  });

  // Sidebar Menu Navigation
  Object.keys(elements.menuBtns).forEach(key => {
    elements.menuBtns[key].addEventListener('click', () => switchPanel(key));
  });

  // Action Buttons
  elements.restartBtn.addEventListener('click', restartApp);
  elements.printBtn.addEventListener('click', () => window.print());

  // Chat Form Submission
  elements.chatForm.addEventListener('submit', handleChatSubmit);

  // Quick topics buttons
  elements.quickTopics.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-btn');
    if (!btn) return;
    const query = btn.dataset.query;
    triggerQuickTopic(query);
  });
}

/* ==========================================================================
   WIZARD STEP NAVIGATION LOGIC
   ========================================================================== */
function handleNextStep() {
  if (validateStep(state.currentStep)) {
    state.currentStep++;
    updateStepVisibility();
  }
}

function handlePrevStep() {
  state.currentStep--;
  updateStepVisibility();
}

function updateStepVisibility() {
  // Hide all steps, show active
  elements.stepContents.forEach((step, idx) => {
    if (idx + 1 === state.currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  updateStepper();

  // Control button visibility
  if (state.currentStep === 1) {
    elements.prevBtn.disabled = true;
    elements.nextBtn.classList.remove('hidden');
    elements.submitBtn.classList.add('hidden');
  } else if (state.currentStep === 2) {
    elements.prevBtn.disabled = false;
    elements.nextBtn.classList.remove('hidden');
    elements.submitBtn.classList.add('hidden');
  } else if (state.currentStep === 3) {
    elements.prevBtn.disabled = false;
    elements.nextBtn.classList.add('hidden');
    elements.submitBtn.classList.remove('hidden');
  }
}

function updateStepper() {
  elements.stepIndicators.forEach((indicator, idx) => {
    const stepNum = idx + 1;
    if (stepNum === state.currentStep) {
      indicator.classList.add('active');
      indicator.classList.remove('completed');
    } else if (stepNum < state.currentStep) {
      indicator.classList.remove('active');
      indicator.classList.add('completed');
    } else {
      indicator.classList.remove('active');
      indicator.classList.remove('completed');
    }
  });
}

// Step-by-step Form Validation
function validateStep(step) {
  let isValid = true;

  if (step === 1) {
    const checkedEdu = document.querySelector('input[name="education"]:checked');
    if (!checkedEdu) {
      elements.errors.education.textContent = 'Please select your educational qualification.';
      isValid = false;
    } else {
      elements.errors.education.textContent = '';
      state.formData.education = checkedEdu.value;
      state.formData.fieldOfStudy = elements.fieldInput.value.trim();
    }
  } 
  
  else if (step === 2) {
    const selectedInterests = Array.from(elements.interestChecks).filter(c => c.checked);
    if (selectedInterests.length < 2) {
      elements.errors.interests.textContent = 'Please select at least 2 interests to help align your path.';
      isValid = false;
    } else {
      elements.errors.interests.textContent = '';
      state.formData.interests = selectedInterests.map(c => c.value);
    }
  }

  return isValid;
}

// Interactive Role compatibility calculator (Step 3)
function handleRoleChange() {
  const roleVal = elements.roleSelect.value;
  state.formData.targetRole = roleVal;
  elements.errors.targetRole.textContent = '';

  if (!roleVal) {
    elements.roleCompatibilityPreview.classList.remove('active');
    return;
  }

  const calculation = calculateCompatibility(roleVal);
  
  // Render fit insights box
  elements.roleCompatibilityPreview.innerHTML = `
    <div class="fit-insights-title">
      <span>✦ Compatibility Match: ${calculation.score}%</span>
    </div>
    <p class="fit-insights-desc">${calculation.reason}</p>
  `;
  elements.roleCompatibilityPreview.classList.add('active');
}

function calculateCompatibility(role) {
  let score = 70; // Base score
  let reason = '';
  
  const selectedInterests = state.formData.interests;
  const targetMatches = roleInterestsMap[role] || [];
  
  // Check interest matches
  const matchingInterests = selectedInterests.filter(interest => targetMatches.includes(interest));
  
  score += matchingInterests.length * 10;
  
  // Check educational match adjustments
  const edu = state.formData.education;
  if (role === 'data-scientist') {
    if (edu === "Master's / Ph.D." || edu === "Undergraduate (STEM)") {
      score += 10;
    } else if (edu === "High School") {
      score -= 10;
    }
  } else if (role.startsWith('software-engineer')) {
    if (edu === "Undergraduate (STEM)" || edu === "Self-Taught") {
      score += 10;
    }
  }

  // Cap score
  if (score > 98) score = 98;
  if (score < 50) score = 50;

  // Set response text based on score
  if (score >= 90) {
    reason = `Excellent match! Your interests in ${selectedInterests.join(', ')} provide a very strong base for a career as a ${roadmapData[role].title}. Your analytical and project capabilities align closely with industry roles.`;
  } else if (score >= 75) {
    reason = `Good match. Choosing ${roadmapData[role].title} leverages some of your primary skills. We've customized your foundational milestones to ensure you fill any conceptual gaps quickly.`;
  } else {
    reason = `Intriguing pathway choice! While this role deviates slightly from your primary interest checkmarks, your unique background will make you stand out. We've added robust introductory modules to get you up to speed.`;
  }

  return { score, reason };
}

/* ==========================================================================
   SUBMIT & GENERATE DASHBOARD
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Validate Step 3
  if (!elements.roleSelect.value) {
    elements.errors.targetRole.textContent = 'Please select a target pathway role.';
    return;
  }

  state.formData.targetRole = elements.roleSelect.value;
  
  // Submit animation and screen transition
  elements.onboardingScreen.classList.remove('active');
  
  // Render all dashboard sections
  renderDashboard();

  setTimeout(() => {
    elements.dashboardScreen.classList.add('active');
  }, 100);
}

function renderDashboard() {
  const roleKey = state.formData.targetRole;
  const data = roadmapData[roleKey];
  if (!data) return;

  // Compute final fit score
  const compatibility = calculateCompatibility(roleKey);

  // Set Profile Information
  elements.avatar.textContent = (state.formData.fieldOfStudy ? state.formData.fieldOfStudy.charAt(0) : data.title.charAt(0)).toUpperCase();
  elements.displayName.textContent = state.formData.fieldOfStudy ? `Student in ${state.formData.fieldOfStudy}` : "Aspiring Specialist";
  elements.displayEdu.textContent = state.formData.education;
  
  // Set interest badges
  elements.displayInterests.innerHTML = state.formData.interests
    .map(interest => `<span class="badge">${interest}</span>`)
    .join('');

  // Set Header Information
  elements.roleTitle.textContent = `Roadmap: ${data.title}`;
  elements.roleDesc.textContent = data.description;
  elements.fitScoreNumber.textContent = `${compatibility.score}%`;

  // Render Milestone Timeline
  renderTimeline(data.phases);

  // Render Competency checklist
  renderSkillsChecklist(data.skillsToMaster);

  // Update initial progress bars
  updateProgressCalculations();

  // Reset chatbot initial message with custom greeting
  resetChatbot(data.title);
}

// 1. Render Timeline
function renderTimeline(phases) {
  elements.timelineContainer.innerHTML = '';
  
  phases.forEach((phase, index) => {
    const timelineCard = document.createElement('article');
    timelineCard.className = `timeline-node-card glass-panel timeline-panel ${index === 0 ? 'expanded' : ''}`;
    
    // Renders list of topics
    const topicsHtml = phase.topics
      .map(topic => `<li>${topic}</li>`)
      .join('');

    // Renders projects
    const projectsHtml = phase.projects
      .map(proj => `
        <div class="project-item">
          <div class="project-title">${proj.name}</div>
          <p class="project-desc">${proj.description}</p>
        </div>
      `).join('');

    // Renders resources
    const resourcesHtml = phase.resources
      .map(res => `
        <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="resource-item">
          <span class="resource-link-title">${res.name}</span>
          <span class="resource-type">${res.type}</span>
        </a>
      `).join('');

    timelineCard.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>
      <header class="timeline-header" tabIndex="0" role="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <div>
          <span class="timeline-duration">${phase.duration}</span>
          <h3>${phase.phaseTitle}</h3>
        </div>
        <span class="timeline-toggle-indicator" aria-hidden="true">▼</span>
      </header>
      
      <div class="timeline-body">
        <p class="timeline-desc">${phase.description}</p>
        <div class="timeline-grid">
          
          <div class="timeline-col">
            <h4>Core Subjects to Master</h4>
            <ul class="timeline-list">
              ${topicsHtml}
            </ul>
            
            <h4 style="margin-top: 1.5rem;">Suggested Milestones</h4>
            <div class="projects-list">
              ${projectsHtml}
            </div>
          </div>

          <div class="timeline-col">
            <h4>Curated Learning Assets</h4>
            <div class="resources-list">
              ${resourcesHtml}
            </div>
          </div>

        </div>
      </div>
    `;

    // Toggle expansion event
    const header = timelineCard.querySelector('.timeline-header');
    header.addEventListener('click', () => {
      const isExpanded = timelineCard.classList.toggle('expanded');
      header.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });

    elements.timelineContainer.appendChild(timelineCard);
  });
}

// 2. Render Skills Competency Checklist
function renderSkillsChecklist(skills) {
  elements.skillsListCheckboxes.innerHTML = '';
  state.completedSkills.clear();

  skills.forEach(skill => {
    const label = document.createElement('label');
    label.className = 'skill-checkbox-label';
    label.htmlFor = `chk-${skill.id}`;
    
    label.innerHTML = `
      <input type="checkbox" id="chk-${skill.id}" data-category="${skill.category}" value="${skill.id}">
      <span class="skill-checkbox-name">${skill.name}</span>
    `;

    const input = label.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) {
        state.completedSkills.add(skill.id);
      } else {
        state.completedSkills.delete(skill.id);
      }
      updateProgressCalculations();
    });

    elements.skillsListCheckboxes.appendChild(label);
  });
}

// Update progress values and metrics
function updateProgressCalculations() {
  const roleKey = state.formData.targetRole;
  const skills = roadmapData[roleKey]?.skillsToMaster || [];
  
  if (skills.length === 0) return;

  const total = skills.length;
  const completed = state.completedSkills.size;
  const percent = Math.round((completed / total) * 100);

  // Update Main Progress Bar
  elements.masteryPercent.textContent = `${percent}%`;
  elements.masteryProgressFill.style.width = `${percent}%`;

  // Calculate categorized distributions
  const categories = ['Foundations', 'Tools', 'Advanced', 'Professional'];
  const catStats = {
    Foundations: { total: 0, completed: 0 },
    Tools: { total: 0, completed: 0 },
    Advanced: { total: 0, completed: 0 },
    Professional: { total: 0, completed: 0 }
  };

  skills.forEach(s => {
    if (catStats[s.category]) {
      catStats[s.category].total++;
      if (state.completedSkills.has(s.id)) {
        catStats[s.category].completed++;
      }
    }
  });

  // Calculate percentage and fill sub-charts
  const calcCatPercent = (cat) => {
    const data = catStats[cat];
    if (!data || data.total === 0) return 0;
    return Math.round((data.completed / data.total) * 100);
  };

  elements.chartFillFoundations.style.width = `${calcCatPercent('Foundations')}%`;
  // Grouping Tools and Professional under Tools & Advanced for visual simplicity
  const toolsPercent = Math.round(((catStats['Tools'].completed + catStats['Professional'].completed) / Math.max(1, catStats['Tools'].total + catStats['Professional'].total)) * 100);
  elements.chartFillTools.style.width = `${toolsPercent}%`;
  elements.chartFillAdvanced.style.width = `${calcCatPercent('Advanced')}%`;
}

/* ==========================================================================
   4. CHATBOT INTERACTIVE SYSTEM
   ========================================================================== */
function resetChatbot(roleTitle) {
  elements.chatMessages.innerHTML = `
    <div class="message mentor-message">
      <p>Hello! I am your Astraea virtual career guide. I've analyzed your profile and generated your study milestones.</p>
      <p>What would you like to discuss? Click one of the quick topics below, or write your own question!</p>
    </div>
  `;
}

function handleChatSubmit(e) {
  e.preventDefault();
  const text = elements.chatInput.value.trim();
  if (!text) return;

  // Add User message
  addChatMessage(text, 'user');
  elements.chatInput.value = '';

  // Simulated Mentor response
  showMentorTyping();

  setTimeout(() => {
    removeMentorTyping();
    const reply = generateMentorResponse(text);
    addChatMessage(reply, 'mentor');
  }, 1000);
}

function addChatMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `message ${sender === 'user' ? 'user-message' : 'mentor-message'}`;
  msg.innerHTML = `<p>${text}</p>`;
  elements.chatMessages.appendChild(msg);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function showMentorTyping() {
  const typing = document.createElement('div');
  typing.id = 'chat-typing-indicator';
  typing.className = 'message mentor-message typing-indicator';
  typing.innerHTML = `<p><span class="pulse-dot"></span> Analyzing question...</p>`;
  elements.chatMessages.appendChild(typing);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function removeMentorTyping() {
  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.remove();
}

function generateMentorResponse(query) {
  const roleKey = state.formData.targetRole;
  const data = roadmapData[roleKey];
  const queryLower = query.toLowerCase();

  if (queryLower.includes('salary') || queryLower.includes('earn') || queryLower.includes('pay') || queryLower.includes('money')) {
    return data.aiMentorAnswers.salary;
  }
  
  if (queryLower.includes('portfolio') || queryLower.includes('project') || queryLower.includes('github') || queryLower.includes('build')) {
    return data.aiMentorAnswers.portfolio;
  }

  if (queryLower.includes('interview') || queryLower.includes('job') || queryLower.includes('questions') || queryLower.includes('hired')) {
    return data.aiMentorAnswers.interview;
  }

  if (queryLower.includes('hello') || queryLower.includes('hi') || queryLower.includes('hey')) {
    return `Hello there! I am your career mentor for ${data.title}. I can guide you on salaries, interview questions, portfolio templates, and resource study schedules. What would you like to focus on first?`;
  }

  if (queryLower.includes('study') || queryLower.includes('learn') || queryLower.includes('roadmap') || queryLower.includes('course')) {
    return `Your primary milestones are laid out in the <strong>Roadmap Timeline</strong>. For a ${data.title}, I recommend starting with Phase 1, marking skills as complete in your **Competency Matrix** as you go.`;
  }

  // Generic smart fallbacks
  return `That's a key question for a ${data.title}. When starting out from a **${state.formData.education}** background, focus heavily on laying strong fundamentals (Phase 1) and pushing code directly to GitHub. Would you like to know more about the salary ranges or the specific interview questions for this career track?`;
}

function triggerQuickTopic(topicKey) {
  const roleKey = state.formData.targetRole;
  const data = roadmapData[roleKey];
  
  let label = '';
  if (topicKey === 'salary') label = '💵 Salary Outlook';
  else if (topicKey === 'portfolio') label = '📁 Portfolio Projects';
  else if (topicKey === 'interview') label = '📋 Interview Preparation';

  addChatMessage(label, 'user');
  showMentorTyping();

  setTimeout(() => {
    removeMentorTyping();
    const reply = data.aiMentorAnswers[topicKey] || "I don't have details on that topic currently.";
    addChatMessage(reply, 'mentor');
  }, 750);
}

/* ==========================================================================
   APP RESET & SIDEBAR VIEW MANAGEMENT
   ========================================================================== */
function switchPanel(panelKey) {
  // Update state
  state.activePanel = panelKey;

  // Toggle sidebar menu items
  Object.keys(elements.menuBtns).forEach(key => {
    if (key === panelKey) {
      elements.menuBtns[key].classList.add('active');
    } else {
      elements.menuBtns[key].classList.remove('active');
    }
  });

  // Toggle panel contents display
  Object.keys(elements.panels).forEach(key => {
    if (key === panelKey) {
      elements.panels[key].classList.add('active');
    } else {
      elements.panels[key].classList.remove('active');
    }
  });
}

function restartApp() {
  // Clear forms and state
  elements.onboardingForm.reset();
  elements.roleCompatibilityPreview.classList.remove('active');
  
  state.currentStep = 1;
  state.formData = { education: '', fieldOfStudy: '', interests: [], targetRole: '' };
  state.completedSkills.clear();

  // Clear checkbox state UI
  elements.interestChecks.forEach(c => c.checked = false);

  // Transition screen
  elements.dashboardScreen.classList.remove('active');
  updateStepVisibility();
  
  setTimeout(() => {
    elements.onboardingScreen.classList.add('active');
  }, 300);
}

// Run app init
document.addEventListener('DOMContentLoaded', init);
