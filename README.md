# Jácint Kovács - Personal Portfolio 👨‍💻

Welcome to the source code of my personal portfolio website. **This project introduces my software development projects, technical skills, and professional background.**

🚀 **Live Demo:** [https://jacintkovacs.hu](https://jacintkovacs.hu)

## 🛠 Tech Stack

It is a fully custom-built **Single Page Application (SPA)** engineered for performance and scalability.

* **Frontend Framework:** [Angular](https://angular.io/)
* **Styling:** CSS, [TailwindCSS](https://tailwindcss.com/)
* **Animations:** [GSAP](https://greensock.com/gsap/) for smooth UI interactions
* **Containerization:** [Docker 🐳](https://www.docker.com/)
* **Web Server:** [Nginx](https://nginx.org/) 
* **CI/CD:** GitHub Actions


## 📂 Project Structure

* `.github/workflows`: Contains the CI/CD YAML configuration for automated deployment.
* `src/app`: Angular components and logic.
* `Dockerfile`: Multi-stage build configuration.
* `nginx.conf`: Server configuration for production.

## 🏃‍♂️ How to Run Locally

If you want to run this project on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JacintDev/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`.

4.  **Run with Docker (Optional):**
    ```bash
    docker build -t my-portfolio .
    docker run -p 8080:80 my-portfolio
    ```
    Navigate to `http://localhost:8080/`.

## 📬 Contact

* **Website:** [jacintkovacs.hu](https://jacintkovacs.hu)
* **LinkedIn:** [linkedin.com/in/jacint-kovacs/](https://www.linkedin.com/in/jacint-kovacs/)
* **Email:** kovacs.jacint02@gmail.com
---
*© 2026 Jácint Kovács. All rights reserved.*
