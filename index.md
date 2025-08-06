---
layout: default
title: Portfolio
---

<section class="about-me">
  <h1>About Me</h1>
  <p>
    I’m Odin Lee, a data scientist from <strong>St. Paul, Minnesota</strong>,  
    with a strong academic background and a passion for turning data into insight.
  </p>
  <p>
    I’m pursuing an <strong>MS in Data Science</strong> at the University of St. Thomas,  
    building on my <strong>BS in Data Science</strong> from Augsburg University.  
    Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>R</strong>, <strong>Java</strong>, and <strong>Tableau</strong>.
  </p>
</section>

<hr />

<section class="education">
  <h2>Education</h2>
  <div class="edu-list">
    <!-- University of St. Thomas -->
    <div class="edu-item">
      <img src="/assets/img/UniversitySt.Thomas-Logo.png"
           alt="University of St. Thomas Logo"
           class="edu-logo">
      <div class="edu-info">
        <h3>University of St. Thomas</h3>
        <p><strong>MS, Data Science</strong> &mdash; Sep 2024 – May 2026</p>
      </div>
    </div>

    <!-- Augsburg University -->
    <div class="edu-item">
      <img src="/assets/img/AugsburgUniversity-Logo.png"
           alt="Augsburg University Logo"
           class="edu-logo">
      <div class="edu-info">
        <h3>Augsburg University</h3>
        <p><strong>BS, Data Science</strong> &mdash; Jan 2019 – May 2024</p>
      </div>
    </div>
  </div>
</section>

<hr />

<section class="projects">
  <h2>Projects</h2>
  {% assign projects = site.data.projects %}
  <div class="project-grid">
    {% for p in projects %}
      <a class="project-card" href="{{ p.link }}" target="_blank" rel="noopener">
        <h3 class="project-title">{{ p.title }}</h3>
        <p class="project-tools">Tools: {{ p.tools }}</p>
        <p>{{ p.desc }}</p>
        <ul>
          {% for item in p.items %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
        <img src="{{ p.img }}" alt="{{ p.alt }}">
      </a>
    {% endfor %}
  </div>
</section>

<hr />

<section class="skills">
  <h2>Skills</h2>
  <p><strong>Programming Languages:</strong> Python | R | SQL | Java</p>
  <p><strong>Data Visualization:</strong> Tableau | Matplotlib | Seaborn | ggplot2 | Plotly | Leaflet</p>
  <p><strong>Data Wrangling & Analysis:</strong> NumPy | Pandas | tidyr | dplyr | tidyverse | stringr</p>
  <p><strong>Databases & Modeling:</strong> Oracle SQL Developer | Oracle Data Modeler</p>
</section>
