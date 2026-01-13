---
layout: mainLayout
title: Portfolio
---

<!--               -->
<!-- About Section -->
<!--               -->

<section class="about">
  <h1>About Me</h1>
  <p>
      I’m Odin Lee, a data scientist from <strong>St. Paul, Minnesota</strong>, with a 
      strong academic background and a passion for turning data into insight.
  </p>

  <p>
      I’m currently pursuing a <strong>Master of Science degree in Data Science</strong> 
      at the <strong>University of St. Thomas</strong>, building on my <strong>Bachelor’s 
      degree in Data Science</strong> from <strong>Augsburg University</strong>. 
      Throughout my academic journey, I’ve gained hands-on experience in data analytics, 
      statistical modeling, and programming.
  </p>

  <p>
      Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>R</strong>, 
      <strong>Java</strong>, and <strong>Tableau/Power BI</strong>, I enjoy transforming complex 
      datasets into clear, actionable insights that drive meaningful outcomes.
  </p>
</section>

<!--                   -->
<!-- Education Section -->
<!--                   -->

<section class="education" aria-label="Education Background">
  <h1>Education</h1>
  <div class="educationGrid">
    <div class="educationCard">
      <div class="educationText">
        <h2>University of St. Thomas</h2>
        <p><strong>MS, Data Science</strong> <span class="status-badge in-progress">In Progress</span></p><p><em>Sep 2024 – May 2026</em></p>
      </div>
      <div class="educationLogo">
        <img src="assets/img/UniversitySt.Thomas-Logo.png" alt="University of St. Thomas Logo" width="60" height="60" />
      </div>
    </div>
    <div class="educationCard">
      <div class="educationText">
        <h2>Augsburg University</h2>
        <p><strong>BS, Data Science</strong> <span class="status-badge completed">Graduated</span></p><p><em>Jan 2019 – May 2024</em></p>
      </div>
      <div class="educationLogo">
        <img src="assets/img/AugsburgUniversity-Logo.png" alt="Augsburg University Logo" width="60" height="60" />
      </div>
    </div>
  </div>
</section>

<!--                 -->
<!-- Project Section -->
<!--                 -->

<script src="/assets/js/project-carousel.js" defer></script>

<section class="projects" aria-label="Projects">
  <h1>Projects</h1>

  <div class="projectCarousel">
    
    <!--                                     -->
    <!--     IMG size ratio best at 16:9     -->
    <!--                                     -->

    <!-- Slides track -->
    <div class="projectGrid" role="list">
    
      <!-- Project 1: Snowflake Bascketball Data Warehouse -->
      <a class="projectCard"
         href="https://github.com/OdinLeePro/SnowflakeBascketballDataWarehouse"
         target="_blank" rel="noopener noreferrer"
         aria-label="Open Snowflake Bascketball Data Warehouse on GitHub (opens in a new tab)" role="listitem">
        <figure class="projectImg">
          <img src="/assets/img/ProjectOnePNG.png" alt="Snowflake Bascketball Data Warehouse Image">
        </figure>
        <div class="projectBody">
          <h3 class="projectTitle"><u>Snowflake Bascketball Data Warehouse</u></h3>
          <ul class="languageBadges">
            <li>Python</li><li>Excel</li><li>Jupyter Nootbook</li><li>Data Cleaning</li>
          </ul>
          <p class="projectSummary">
            Data warehousing and analytics project using OPTA Basketball Schedule and Results data from the Snowflake Marketplace, delivering a curated, analytics-ready model with automated enhancements and team-level performance insights.
          </p>
          <ul class="projectBullets">
            <li>Designing curated dimension and fact tables in Snowflake SQL</li>
            <li>Enriching game data with point differentials, scoring levels, and win classifications</li>
            <li>Building aggregated analytics for team, venue, and season scoring trends</li>
            <li>Automating weekly data processing with Snowflake tasks and stored procedures</li>
          </ul>
        </div>
      </a>

      <!-- Project 2: Airbnb New York City Analysis -->
      <a class="projectCard"
         href="https://github.com/OdinLeePro/AirbnbNewYorkCityAnalysis"
         target="_blank" rel="noopener noreferrer"
         aria-label="Open Airbnb New York City Analysis on GitHub (opens in a new tab)"
         role="listitem">
        <figure class="projectImg">
          <img src="/assets/img/ProjectTwoPNG.png" alt="Airbnb New York City Analysis Image">
        </figure>
        <div class="projectBody">
          <h3 class="projectTitle"><u>Airbnb New York City Analysis</u></h3>
          <ul class="languageBadges">
            <li>Tableau</li><li>Excel</li><li>Data Cleaning</li><li>Data Visualization</li>
          </ul>
          <p class="projectSummary">
            Comprehensive data analysis and visualization project examining Airbnb rental trends across New York City (2008–2022).
          </p>
          <ul class="projectBullets">
            <li>Cleaned and prepared a dataset of ~190K listings for accurate analysis</li>
            <li>Developed an interactive Tableau dashboard for dynamic insights</li>
            <li>Explored borough-level distribution, pricing trends, and host behavior</li>
            <li>Produced detailed documentation and a video presentation of findings</li>
          </ul>
        </div>
      </a>

      <!-- Project 3: Fantasy Football Analysis -->
      <a class="projectCard"
         href="https://github.com/OdinLeePro/FantasyFootballAnalysisDB"
         target="_blank" rel="noopener noreferrer"
         aria-label="Open Fantasy Football Analysis Database on GitHub (opens in a new tab)" role="listitem">
        <figure class="projectImg">
          <img src="/assets/img/ProjectThreePNG.png" alt="Fantasy Football Analysis Image">
        </figure>
        <div class="projectBody">
          <h3 class="projectTitle"><u>Fantasy Football Analysis Database</u></h3>
          <ul class="languageBadges">
            <li>SQL</li><li>R</li><li>Data Wrangling</li><li>Data Analysis</li>
          </ul>
          <p class="projectSummary">
            Structured SQL database built for fantasy football analysis, featuring cleaned data from 2021–2023 NFL seasons.
          </p>
          <ul class="projectBullets">
            <li>Normalized schemas for efficient querying</li>
            <li>Data wrangling and transformation with R</li>
            <li>SQL triggers to ensure data integrity</li>
            <li>Optimized for future dashboard integration</li>
          </ul>
        </div>
      </a>
      
      <!-- Project 4: Portfolio Website -->
      <a class="projectCard"
         href="https://github.com/OdinLeePro/OdinLeePro.github.io"
         target="_blank" rel="noopener noreferrer"
         aria-label="Open Portfolio Website on GitHub (opens in a new tab)" role="listitem">
        <figure class="projectImg">
          <img src="/assets/img/ProjectFourPNG.png" alt="Portfolio Website Image">
        </figure>
        <div class="projectBody">
          <h3 class="projectTitle"><u>Portfolio Website</u></h3>
          <ul class="languageBadges">
            <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Jekyll</li>
          </ul>
          <p class="projectSummary">
            Personal data science portfolio website showcasing projects, skills, and background information with an interactive design.
          </p>
          <ul class="projectBullets">
            <li>Profile header with headshot, name, and key links</li>
            <li>Interactive projects carousel showcasing Data Science work</li>
            <li>Education and skills sections clearly displayed</li>
            <li>Responsive, accessible layout built for scalability</li>
          </ul>
        </div>
      </a>
      
    </div>

    <!-- Controls row -->
    <div class="carouselControls" aria-label="Carousel controls">
      <button class="carouselNav prev" id="prevBtn" title="Previous project" aria-label="Previous project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <div class="carouselIndicators" id="indicators" aria-label="Slide indicators"></div>

      <button class="carouselNav next" id="nextBtn" title="Next project" aria-label="Next project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </button>

      <button class="playPauseBtn" id="playPauseBtn" title="Pause auto-play" aria-label="Pause auto-play">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      </button>
    </div>
  </div>
</section>

<!--                -->
<!-- Skills Section -->
<!--                -->

<section class="section skills skills--flat" aria-labelledby="skills-title">
  <h1 id="skills-title" class="section-title">Skills</h1>
  <div class="skill-rows">

    <!-- BLUE Section -->
    <article class="skill-row blue">
        <header>
        <h2 class="sub-title">Programming Languages</h2>
        <div class="skill-icons" aria-hidden="true">
            <i class="fa-brands fa-python"></i>
            <i class="fa-solid fa-database"></i>
            <i class="fa-brands fa-java"></i>
        </div>
        </header>

        <p> 
            Skilled in <strong>Python</strong> and <strong>SQL</strong> for data analysis, predictive 
            modeling, and visualization, complemented by <strong>R</strong> for advanced statistical 
            methods. Background in <strong>Java</strong> strengthens foundation in algorithms and 
            complex problem-solving. 
        </p>

        <ul class="skill-tags" aria-label="Highlights">
        <li>Python</li><li>SQL</li><li>R</li><li>Java</li>
        </ul>
    </article>
    
    <!-- AMBER Section -->
    <article class="skill-row amber">
        <header>
        <h2 class="sub-title">Tools & Technologies</h2>
        <div class="skill-icons" aria-hidden="true">
            <i class="fa-brands fa-r-project"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-aws"></i>
        </div>
        </header>

        <p> 
            Experienced in building interactive dashboards with <strong>Tableau/ Power BI</strong>, and managing 
            databases using <strong>Oracle SQL Developer</strong>, with additional data-warehousing experience 
            in <strong>Snowflake</strong>. Skilled in performing in-depth data 
            analyses with <strong>Jupyter Notebooks</strong> and <strong>RStudio</strong>, leveraging 
            <strong>GitHub</strong> and <strong>AWS</strong> (EC2 and S3) for collaboration, 
            scalability, and cloud deployment. 
        </p>

        <ul class="skill-tags" aria-label="Highlights">
        <li>Tableau</li><li>Power BI</li><li>Oracle SQL Developer</li><li>Snowflake</li><li>Jupyter Notebook</li><li>RStudio</li><li>GitHub</li><li>AWS</li>
        </ul>
    </article>
    
    <!-- RED Section -->
    <article class="skill-row red">
        <header>
        <h2 class="sub-title">Frameworks & Libraries</h2>
        <div class="skill-icons" aria-hidden="true">
            <i class="fa-solid fa-diagram-project"></i>
            <i class="fa-solid fa-chart-pie"></i>
            <i class="fa-solid fa-code"></i>
        </div>
        </header>

        <p> 
            Proficient in Python libraries (<strong>pandas</strong>, <strong>NumPy</strong>, 
            <strong>Matplotlib</strong>, <strong>Seaborn</strong>, <strong>Plotly</strong>) 
            for data wrangling and visualization, and in R packages (<strong>dplyr</strong>, 
            <strong>ggplot2</strong>, <strong>Shiny</strong>) for data manipulation and interactive 
            applications. Proficient in creating reproducible reports with <strong>Quarto</strong>. 
        </p>

        <ul class="skill-tags" aria-label="Highlights">
        <li>pandas</li><li>NumPy</li><li>Matplotlib</li><li>Seaborn</li><li>Plotly</li><li>dplyr</li><li>ggplot2</li><li>shiny</li><li>Quarto</li>
        </ul>
    </article>

    <!-- GREEN Section -->
    <article class="skill-row green">
        <header>
        <h2 class="sub-title">Data Science Skills</h2>
        <div class="skill-icons" aria-hidden="true">
            <i class="fa-solid fa-table"></i>
            <i class="fa-solid fa-chart-bar"></i> 
            <i class="fa-solid fa-cloud"></i>
        </div>
        </header>

        <p> 
            Expertise in <strong>data wrangling</strong>, exploratory data analysis (<strong>EDA</strong>)
            , and <strong>statistical modeling</strong>, complemented by strong skills in 
            <strong>data visualization</strong> and deploying <strong>cloud-based solutions</strong>. 
        </p>

        <ul class="skill-tags" aria-label="Highlights">
        <li>Data Wrangling</li><li>EDA</li><li>Statistical Modeling</li><li>Data Visualization</li><li>Cloud-Based Solutions</li>
        </ul>
    </article>
  </div>
</section>  
