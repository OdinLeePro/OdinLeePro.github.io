# OdinLeePro.github.io (odinleedata.com)
OdinLeePro.github.io/odinleedata.com is a personal Data Science portfolio website built with HTML, SCSS, Jekyll, and JavaScript. It showcases projects, skills, and background information in an interactive and visually structured way, serving as a professional hub beyond a traditional resume.

## Overview

This project began as a way to present my Data Science skills and projects more effectively when applying for jobs. It evolved into a dedicated website with:

- Profile header with quick-access links
- Sections for About Me, Education, Projects, and Skills
- A dynamic project carousel for portfolio work
- Clean, responsive design using web technologies
- A flexible structure for continual updates

## Features

- **Profile Header** — Displays headshot, name, and buttons linking to resume, GitHub, LinkedIn, and email
- **About Me** — Short description providing background and interests
- **Education Section** — Undergraduate degree and graduate program displayed clearly
- **Projects Section** — Interactive carousel highlighting multiple Data Science projects, auto-rotating every 5 seconds
- **Skills Section** — Section displaying relevant Data Science and technical skills
- **Responsive Layout** — Built for accessibility and future scalability

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

## Technologies Used

- **HTML** — Core structure for layouts and includes (mainLayout.html, leftSideContent.html)
- **SCSS / CSS** — Custom styles and themes (colors.scss, style.scss, jekyll-theme-minimal.scss) for design and layout
- **JavaScript** — Adds interactivity, including the project carousel (project-carousel.js) and responsive fixes (scale.fix.js)
- **Jekyll** — Static site generator powering the site on GitHub Pages (_layouts, _includes, _config.yml)
- **Google Analytics** — Integrated via _includes/googleAnalytics.html for site traffic monitoring

## Future Plans

- Add new projects as they are completed and ready to publish
- Create an Experience section while Data Science career continues
- Explore further customization and optimizations for design and performance
