
# 🚀 ErHarshGanjir Web Apps

### A collection of web applications, utilities, PWAs & experiments

`<img src="./favicon.png" alt="ErHarshGanjir Logo" width="120">`{=html}

`<br>`{=html}

[![GitHub](https://img.shields.io/badge/GitHub-ErHarshGanjir-181717?style=for-the-badge&logo=github)](https://github.com/ErHarshGanjir)
[![Web](https://img.shields.io/badge/Web-Applications-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](#-projects)
[![PWA](https://img.shields.io/badge/PWA-Supported-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](#-progressive-web-apps)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#-technology)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-technology)
:::

------------------------------------------------------------------------

## ✨ About

**ErHarshGanjir Web Apps** is a central repository for a growing
collection of lightweight web applications, utilities, Progressive Web
Apps (PWAs), experiments, and supporting web components.

The repository is organized so that individual projects can be
developed, tested, and deployed independently while sharing common web
technologies and infrastructure.

> 💡 **Goal:** Build simple, useful, responsive web applications that
> work reliably across desktop and mobile devices.

------------------------------------------------------------------------

## 📱 Projects

  -----------------------------------------------------------------------
  Project                 Description             Type
  ----------------------- ----------------------- -----------------------
  📊 **Integer**          Integer-related web     Web App
                          application             

  📡 **RTTS**             RTTS web application    Web App / PWA

  🤖 **RoboPost**         RoboPost application    Web App / PWA
                          and automation          
                          interface               

  📚 **HBook / SyncWave   HBook application       Web App
  Studio**                configured as SyncWave  
                          Studio                  

  🧾 **Chequebook**       Digital chequebook      Web App
                          utility                 

  📄 **DocBox**           Document-focused        PWA
                          Progressive Web App     

  ⏳ **Expiry**           Expiry-management       Utility
                          application             

  📦 **Order**            Order-related           Web App
                          management application  

  🏷️ **Product**          Product-related         Web App
                          application             

  🧪 **Test**             Testing and             Development
                          experimental projects   

  🚧 **WIP**              Work-in-progress        Development
                          projects and            
                          experiments             

  🎮 **WWE**              WWE-related web project Web App
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🗂️ Repository Structure

``` text
.
├── Integer/
├── RTTS/
├── RoboPost/
├── WebApp/
│   └── HBook/
├── chequebook/
├── doc/
├── expiry/
├── order/
├── product/
├── robopost/
├── test/
├── wip/
├── wwe/
│
├── 404.html
├── 404.png
├── CNAME
├── favicon.png
├── index.html
├── index0.txt
├── maintenance.html
├── maintenance.js
├── manifest.json
└── service-worker.js
```

------------------------------------------------------------------------

## 🌐 Progressive Web Apps

Several applications in this repository use modern **PWA technologies**.

### PWA capabilities

-   📲 Installable web applications
-   ⚡ Fast repeat loading
-   💾 Asset caching
-   📴 Offline support where configured
-   🔔 Web application metadata
-   🖥️ Desktop and mobile support
-   🔄 Service-worker based functionality

Typical PWA components include:

``` text
manifest.json
service-worker.js
favicon.png
application assets
```

> **Note:** Service workers are scope-based. Each project should be
> checked individually before modifying caching or registration logic.

------------------------------------------------------------------------

## 🛠️ Technology

The projects in this repository primarily use:

-   **HTML5** --- application structure
-   **CSS3** --- responsive layouts and styling
-   **JavaScript** --- application logic and browser functionality
-   **Progressive Web App APIs**
-   **Service Workers**
-   **Web App Manifests**
-   **Responsive Web Design**
-   **Client-side browser APIs**
-   External APIs and hosted resources where required by individual
    projects

------------------------------------------------------------------------

## 💻 Run Locally

Most applications can be tested using a local web server.

### Option 1 --- VS Code

1.  Clone the repository.
2.  Open it in **Visual Studio Code**.
3.  Open the required project folder.
4.  Start a local web server such as **Live Server**.
5.  Open the application's `index.html`.

### Option 2 --- Python

From the repository root:

``` bash
python -m http.server 8000
```

Then open:

``` text
http://localhost:8000/
```

Navigate to the required project directory.

### ⚠️ Why use a local server?

PWAs and service workers generally require an appropriate web origin.
Opening an application directly using:

``` text
file:///
```

may prevent service-worker functionality from working correctly.

------------------------------------------------------------------------

## 🚀 Deployment

The repository contains a `CNAME` file for custom-domain deployment.

It can be hosted on platforms such as:

-   GitHub Pages
-   Cloudflare Pages
-   Netlify
-   Vercel
-   Any compatible static web server

### Deployment checklist

``` text
☑ HTTPS enabled
☑ Correct manifest path
☑ Correct service-worker scope
☑ All assets accessible
☑ Relative paths tested
☑ Mobile layout tested
☑ Desktop layout tested
☑ PWA installation tested
```

------------------------------------------------------------------------

## 🔧 Important Root Files

  File                  Purpose
  --------------------- --------------------------------------------
  `index.html`          Main website/application entry point
  `manifest.json`       PWA metadata and application configuration
  `service-worker.js`   Root-level service-worker functionality
  `404.html`            Custom 404 error page
  `404.png`             404 page graphic
  `maintenance.html`    Maintenance-mode page
  `maintenance.js`      Maintenance-mode logic
  `favicon.png`         Main website/application icon
  `CNAME`               Custom domain configuration
  `index0.txt`          HTML template/reference content

------------------------------------------------------------------------

## 🎨 Design Philosophy

The applications in this repository generally focus on:

**Simple → Fast → Responsive → Practical**

### Core principles

-   🎯 Keep interfaces easy to understand
-   📱 Design for mobile as well as desktop
-   ⚡ Avoid unnecessary complexity
-   🧩 Keep applications modular
-   🔐 Avoid exposing unnecessary data
-   ♻️ Reuse common web patterns where practical
-   🛠️ Keep deployment simple

------------------------------------------------------------------------

## 📌 Development Guidelines

When adding a new application:

1.  Create a dedicated project directory.
2.  Keep assets close to the application that uses them.
3.  Avoid modifying root-level PWA files unless the change is
    intentional.
4.  Update the relevant `manifest.json`.
5.  Verify favicon and application icons.
6.  Test service-worker changes with a clean cache.
7.  Test on both desktop and mobile.
8.  Check all relative paths before deployment.
9.  Remove unnecessary test files before production deployment.
10. Add project-specific documentation when an application becomes
    substantial.

------------------------------------------------------------------------

## 🔄 Service Worker Notes

When changing a service worker, remember that browsers may retain an
older cached version.

For testing:

1.  Open browser developer tools.
2.  Open **Application → Service Workers**.
3.  Check the registered service worker.
4.  Clear relevant site storage/cache.
5.  Reload the application.
6.  Verify the new cache/version is active.

------------------------------------------------------------------------

## 🧪 Project Status

This repository contains a mixture of:

-   ✅ Active applications
-   🔧 Maintained utilities
-   🧪 Experimental projects
-   🚧 Work-in-progress applications
-   📦 Deployment/support files

Individual projects may have different levels of completeness and
documentation.

------------------------------------------------------------------------

## 🤝 Contributing

For personal projects, changes can be developed directly in the relevant
project directory.

Before pushing changes:

``` bash
git status
git add .
git commit -m "Update application"
git push
```

For larger applications, consider maintaining a separate
project-specific `README.md`.

------------------------------------------------------------------------

## 📈 Repository Roadmap

Possible future improvements include:

-   [ ] Standardize project documentation
-   [ ] Add screenshots for major applications
-   [ ] Improve shared PWA infrastructure
-   [ ] Add common UI components
-   [ ] Improve accessibility
-   [ ] Add automated deployment checks
-   [ ] Add automated testing where useful
-   [ ] Improve offline capabilities
-   [ ] Add project-specific demos and documentation

------------------------------------------------------------------------

## 👨‍💻 Author

::: {align="center"}
`<img src="./favicon.png" alt="ErHarshGanjir" width="80">`{=html}

### **ErHarshGanjir**

Building web applications, utilities and experiments.

**GitHub:** [@ErHarshGanjir](https://github.com/ErHarshGanjir)
:::

------------------------------------------------------------------------

## 📄 License

No explicit license is currently indicated in the repository structure.

If this repository is intended for public reuse, add a `LICENSE` file
defining the permissions and restrictions for using the source code.

------------------------------------------------------------------------

::: {align="center"}
### ⭐ If you find something useful here, consider starring the repository.

**Built with ❤️ using the Web Platform**
:::
