---
layout: default
---

<!--               -->
<!-- About Section -->
<!--               -->

<section class="about">
  <h1>About Me</h1>
  <p>
    I’m Odin Lee, a data scientist from <strong>St. Paul, Minnesota</strong>, with a strong academic background and a passion for turning data into insight.
  </p>
  <p>
    I’m currently pursuing a <strong>Master of Science in Data Science</strong> at the <strong>University of St. Thomas</strong>, building on my <strong>Bachelor’s degree in Data Science</strong> from <strong>Augsburg University</strong>. Throughout my academic journey, I’ve gained hands-on experience in data analytics, statistical modeling, and programming.
  </p>
  <p>
    Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>R</strong>, <strong>Java</strong>, and <strong>Tableau</strong>, I enjoy transforming complex datasets into clear, actionable insights that drive meaningful outcomes.
  </p>
</section>

<!--                   -->
<!-- Education Section -->
<!--                   -->

<section class="education" aria-label="Education Background">
  <h1>Education</h1>
  <div class="education-grid">
    <div class="education-card">
      <div class="edu-text">
        <h2>University of St. Thomas</h2>
        <p><strong>MS, Data Science</strong><br><em>Sep 2024 – May 2026</em></p>
      </div>
      <div class="edu-logo">
        <img src="assets/img/UniversitySt.Thomas-Logo.png" alt="University of St. Thomas Logo" width="60" height="60" />
      </div>
    </div>
    <div class="education-card">
      <div class="edu-text">
        <h2>Augsburg University</h2>
        <p><strong>BS, Data Science</strong><br><em>Jan 2019 – May 2024</em></p>
      </div>
      <div class="edu-logo">
        <img src="assets/img/AugsburgUniversity-Logo.png" alt="Augsburg University Logo" width="60" height="60" />
      </div>
    </div>
  </div>
</section>

<!--                 -->
<!-- Project Section -->
<!--                 -->

<section class="projects">
  <h1>Projects</h1>

  <div class="project-grid">
    <!-- Project 1: Real (no crop, default 16:9) -->
    <a class="project-card"
       href="https://github.com/OdinLeePro/FantasyFootballAnalysisDB"
       target="_blank" rel="noopener noreferrer"
       aria-label="Open Fantasy Football Analysis Database on GitHub (opens in a new tab)">
      <figure class="project-media">
        <img src="/assets/img/FinalProjectRationalModel.png"
             alt="Fantasy Football ER Diagram"
             width="1280" height="720" loading="lazy" decoding="async">
      </figure>
      <div class="project-body">
        <h3 class="project-title">Fantasy Football Analysis Database</h3>
        <ul class="tool-badges"><li>SQL</li><li>R</li></ul>
        <p class="project-summary">A structured database for fantasy football analytics using cleaned NFL data (2021–2023).</p>
        <ul class="project-bullets">
          <li>Normalized schemas for efficient querying</li>
          <li>Data wrangling and transformation with R</li>
          <li>SQL triggers to ensure data integrity</li>
          <li>Optimized for future dashboard integration</li>
        </ul>
      </div>
    </a>

    <!-- Project 2: Fake (slightly taller box 3:2, no crop) -->
    <a class="project-card"
       href="https://github.com/exampleuser/WeatherWizard"
       target="_blank" rel="noopener noreferrer"
       aria-label="Open Weather Wizard on GitHub (opens in a new tab)">
      <figure class="project-media ratio-32">
        <img src="https://via.placeholder.com/960x640.png?text=Weather+Wizard"
             alt="Weather forecast dashboard screenshot"
             width="960" height="640" loading="lazy" decoding="async">
      </figure>
      <div class="project-body">
        <h3 class="project-title">Weather Wizard</h3>
        <ul class="tool-badges"><li>Python</li><li>Flask</li><li>OpenWeather API</li></ul>
        <p class="project-summary">A web app delivering hyperlocal weather forecasts with real-time data visualization.</p>
        <ul class="project-bullets">
          <li>Integrated OpenWeatherMap API</li>
          <li>Interactive temp & precipitation charts</li>
          <li>Location presets and geolocation</li>
          <li>Responsive layout</li>
        </ul>
      </div>
    </a>

    <!-- Project 3: Fake (ultrawide 21:9 + crop to fill) -->
    <a class="project-card"
       href="https://github.com/exampleuser/CryptoTrackerPro"
       target="_blank" rel="noopener noreferrer"
       aria-label="Open Crypto Tracker Pro on GitHub (opens in a new tab)">
      <figure class="project-media ratio-219 cover">
        <img src="https://via.placeholder.com/1260x540.png?text=Crypto+Tracker+Pro"
             alt="Cryptocurrency tracking dashboard"
             width="1260" height="540" loading="lazy" decoding="async">
      </figure>
      <div class="project-body">
        <h3 class="project-title">Crypto Tracker Pro</h3>
        <ul class="tool-badges"><li>React</li><li>Node.js</li><li>CoinGecko API</li></ul>
        <p class="project-summary">A portfolio management tool for cryptocurrency traders.</p>
        <ul class="project-bullets">
          <li>Live price updates from multiple exchanges</li>
          <li>Custom alerts and watchlists</li>
          <li>Portfolio performance tracking</li>
          <li>Dark mode & CSV export</li>
        </ul>
      </div>
    </a>

    <!-- Project 4: Fake (classic 4:3, no crop) -->
    <a class="project-card"
       href="https://github.com/exampleuser/RecipeRover"
       target="_blank" rel="noopener noreferrer"
       aria-label="Open Recipe Rover on GitHub (opens in a new tab)">
      <figure class="project-media ratio-43">
        <img src="https://via.placeholder.com/800x600.png?text=Recipe+Rover"
             alt="Recipe search and meal planning app"
             width="800" height="600" loading="lazy" decoding="async">
      </figure>
      <div class="project-body">
        <h3 class="project-title">Recipe Rover</h3>
        <ul class="tool-badges"><li>JavaScript</li><li>Vue.js</li><li>Spoonacular API</li></ul>
        <p class="project-summary">A smart meal-planning app that finds recipes from ingredients you already have.</p>
        <ul class="project-bullets">
          <li>Ingredient-based search</li>
          <li>Weekly planner with auto shopping list</li>
          <li>Nutrition facts integration</li>
          <li>Save and share favorites</li>
        </ul>
      </div>
    </a>
  </div>
</section>

<!--                -->
<!-- Skills Section -->
<!--                -->

<section class="skills">
  <h1>Skills</h1>
  <ul class="skill-list">
    <li><strong>Programming Languages:</strong> Python, R, SQL, Java</li>
    <li><strong>Data Visualization:</strong> Tableau, Matplotlib, Seaborn, ggplot2, Plotly, Leaflet</li>
    <li><strong>Data Wrangling & Analysis:</strong> NumPy, Pandas, tidyr, dplyr, tidyverse, stringr</li>
    <li><strong>Databases & Modeling:</strong> Oracle SQL Developer, Oracle Data Modeler</li>
  </ul>
</section>
