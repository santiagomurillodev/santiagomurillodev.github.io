const themeToggleBtn = document.getElementById('themeToggle');
const langToggleBtn = document.getElementById('langToggle');
const downloadBtn = document.getElementById('downloadBtn');
const cvDocument = document.getElementById('cv-document');
const themeText = document.getElementById('themeText');

const elName = document.getElementById('cv-name');
const elProfession = document.getElementById('cv-profession');
const elSkillsTitle = document.getElementById('cv-skillsTitle');
const elEducationTitle = document.getElementById('cv-educationTitle');
const elAboutTitle = document.getElementById('cv-aboutTitle');
const elExperienceTitle = document.getElementById('cv-experienceTitle');
const elProjectsTitle = document.getElementById('cv-projectsTitle');

const elContactList = document.getElementById('cv-contact-list');
const elSkills = document.getElementById('cv-skills');
const elEducation = document.getElementById('cv-education');
const elAboutText = document.getElementById('cv-aboutText');
const elExperience = document.getElementById('cv-experience');
const elProjects = document.getElementById('cv-projects');

function updateUI() {
  const data = cvData[currentLang];

  elName.textContent = data.name;
  elProfession.textContent = data.profession;
  elSkillsTitle.textContent = data.skillsTitle;
  elEducationTitle.textContent = data.educationTitle;
  elAboutTitle.textContent = data.aboutTitle;
  elExperienceTitle.textContent = data.experienceTitle;
  elProjectsTitle.textContent = data.projectsTitle;

  elAboutText.innerHTML = data.aboutText;

  elContactList.innerHTML = `
    <li><i data-lucide="phone"></i> <a href="tel:+523322750920" class="contact-link">33 22 75 09 20</a></li>
    <li><i data-lucide="mail"></i> <a href="mailto:santiagomurillx@gmail.com" class="contact-link">santiagomurillx@gmail.com</a></li>
    <li><i data-lucide="linkedin"></i> <a href="https://www.linkedin.com/in/santiagomurillx/" target="_blank" class="contact-link">linkedin.com/in/santiagomurillx</a></li>
  `;

  elSkills.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');

  elEducation.innerHTML = data.education.map(edu => `
    <div class="education-item">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-school">${edu.school}</div>
    </div>
  `).join('');

  elExperience.innerHTML = data.experience.map(exp => `
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-title">${exp.title}</div>
        <div class="exp-date">${exp.date}</div>
      </div>
      <div class="exp-company">${exp.company}</div>
      <div class="exp-desc">${exp.desc}</div>
    </div>
  `).join('');

  elProjects.innerHTML = data.projects.map(proj => `
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-title">${proj.title}</div>
      </div>
      <div class="exp-desc" style="margin-top: 0.5rem;">${proj.desc}</div>
    </div>
  `).join('');

  const langTextValue = currentLang === 'es' ? 'EN' : 'ES';
  langToggleBtn.innerHTML = `<i data-lucide="globe"></i> <span id="langText">${langTextValue}</span>`;

  document.getElementById('downloadText').textContent = data.downloadBtn;

  lucide.createIcons();
}

function updateThemeUI() {
  const data = cvData[currentLang];
  if (currentTheme === 'dark') {
    themeToggleBtn.innerHTML = `<i data-lucide="sun"></i> <span id="themeText">${data.lightMode}</span>`;
  } else {
    themeToggleBtn.innerHTML = `<i data-lucide="moon"></i> <span id="themeText">${data.darkMode}</span>`;
  }
  lucide.createIcons();
}

let currentLang = 'es';
let currentTheme = 'light';

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  updateUI();
  updateThemeUI();
});

themeToggleBtn.addEventListener('click', () => {
  const html = document.documentElement;
  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    currentTheme = 'dark';
  } else {
    html.setAttribute('data-theme', 'light');
    currentTheme = 'light';
  }
  updateThemeUI();
});

downloadBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const originalTheme = currentTheme;
  html.removeAttribute('data-theme');
  cvDocument.classList.add('is-exporting');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print();
        cvDocument.classList.remove('is-exporting');
        if (originalTheme === 'dark') {
          html.setAttribute('data-theme', 'dark');
        }
      }, 500);
    });
  });
});

updateUI();
updateThemeUI();
