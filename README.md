# FantasyFootballAnalysisDB
FantasyFootballAnalysisDB is a structured SQL database built for fantasy football analysis, featuring cleaned data from 2021–2023 NFL seasons. Includes R-based data wrangling, SQL triggers, and normalized schemas supporting advanced queries and future web app integration.

## Overview

This project began as a tool for analyzing fantasy football data with a friend. It evolved into a fully normalized SQL database with:

- Cleaned, imported player/game data
- SQL triggers to automate calculations
- Example queries for analysis
- R scripts for data preparation (via `nflverse` and `nflfastR`)
- A flexible structure for future expansion (e.g., Oracle APEX web app)

## Features

- **Normalized SQL Schema** — ~14 tables (initially), designed using Oracle Data Modeler
- **Automated Logic** — Triggers handle real-time calculations during data import
- **R Data Wrangling** — Scripts used to clean and transform raw NFL datasets
- **Query Examples** — Included for fantasy-relevant metrics
- **Expandable** — Scalable for future app development or analysis

## Project Structure

```
/OdinLeePro.github.io
├── _include/
│   ├── googleAnalytics.html
│   ├── leftSideContent(Desktop).html
│   ├── leftSideContent(Mobile).html
│   ├── leftSideContent.html
│   └── leftSideHeader.html
├── _layouts/
│   └── mainLayout.html
├── _sass/
│   ├── colors.scss
│   ├── fonts.scss
│   ├── jekyll-theme-minimal.scss
│   └── rouge-github.scss
├── assets/
│   ├── css/
│   │   ├── colorsLight.scss
│   │   └── style.scss
│   ├── file/
│   │   └── resume.pdf
│   ├── fonts/
│   │   ├── Noto-Sans-700/
│   │   │   ├── Noto-Sans-700.eot
│   │   │   ├── Noto-Sans-700.svg
│   │   │   ├── Noto-Sans-700.ttf
│   │   │   ├── Noto-Sans-700.woff
│   │   │   └── Noto-Sans-700.woff2
│   │   ├── Noto-Sans-700italic/
│   │   │   ├── Noto-Sans-700italic.eot
│   │   │   ├── Noto-Sans-700italic.svg
│   │   │   ├── Noto-Sans-700italic.ttf
│   │   │   ├── Noto-Sans-700italic.woff
│   │   │   └── Noto-Sans-700italic.woff2
│   │   ├── Noto-Sans-italic/
│   │   │   ├── Noto-Sans-italic.eot
│   │   │   ├── Noto-Sans-italic.svg
│   │   │   ├── Noto-Sans-italic.ttf
│   │   │   ├── Noto-Sans-italic.woff
│   │   │   └── Noto-Sans-italic.woff2
│   │   └── Noto-Sans-regular/
│   │   │   ├── Noto-Sans-regular.eot
│   │   │   ├── Noto-Sans-regular.svg
│   │   │   ├── Noto-Sans-regular.ttf
│   │   │   ├── Noto-Sans-regular.woff
│   │   │   └── Noto-Sans-regular.woff2
│   ├── img/
│   │   ├── AugsburgUniversity-Logo.png
│   │   ├── Odin-Logo.png
│   │   ├── ProjectOnePNG.png
│   │   ├── UniversitySt.Thomas-Logo.png
│   │   └── headshot.png
│   ├── js/
│   │   ├── project-carousel.js
│   │   └── scale.fix.js
├── .gitignore
├── 404.html
├── CNAME
├── Gemfile
├── README.md
├── _config.yml
├── favicon.ico
├── index.md
├── robots.txt
```

## Data Sources

- [`nflverse`](https://nflverse.nflverse.com/) / [`nflfastR`](https://mrcaseb.github.io/pages_dummy/) R packages

## Future Plans

- Add new tables and data points for deeper analysis
- Explore Oracle APEX to build a front-end app
- Incorporate projections, rankings, and historical trends

## Class Concepts Applied

- Entity-Relationship Modeling
- SQL Normalization (Primary/Foreign Keys)
- Triggers for data integrity
- Query Design and Optimization

## License

This project is licensed under the MIT License.
