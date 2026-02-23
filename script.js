document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links (if browser support is partial)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced scroll animation using Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // If it's a section, reveal its children with delay
                const children = entry.target.querySelectorAll('.domain-card, .project-card, .about-container');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('reveal');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .hero-section, .domain-card, .project-card, .about-container').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });

    // Timeline scroll-reveal
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, i * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });

    // Active link highlighting (Scroll-Spy)
    const spyObserverOptions = {
        threshold: 0.01, // Trigger as soon as any part enters the zone
        rootMargin: '-10% 0px -50% 0px' // Highlight when section crosses upper third of viewport
    };

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                if (id) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    }, spyObserverOptions);

    document.querySelectorAll('section[id]').forEach(section => {
        spyObserver.observe(section);
    });

    // Vertical Phrase Switcher
    const phrases = document.querySelectorAll('.phrase-switcher span');
    let phraseIndex = 0;

    function switchPhrase() {
        if (phrases.length === 0) return;

        const current = phrases[phraseIndex];
        current.classList.remove('active');
        current.classList.add('exit');

        phraseIndex = (phraseIndex + 1) % phrases.length;
        const next = phrases[phraseIndex];

        // Reset next phrase position before making it active
        next.classList.remove('exit');
        next.classList.add('active');

        // Cleanup the previous phrase class after transition
        setTimeout(() => {
            current.classList.remove('exit');
        }, 600);
    }

    if (phrases.length > 0) {
        setInterval(switchPhrase, 3000);
    }

    // Certification Showcase
    const llmData = [
        {
            name: "AWS Solutions Architect",
            model: "Associate",
            issuer: "Amazon Web Services",
            description: "Validated expertise in designing distributed systems on AWS — covering high availability, security, cost optimization, and scalable cloud architectures.",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            logoAlt: "AWS",
            tools: [
                { name: "EC2 / VPC", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "S3 / IAM", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "CloudFormation", icon: "devicon-terraform-plain colored" }
            ],
            color: "#FF9900"
        },
        {
            name: "Databricks Gen AI Eng",
            model: "Associate",
            issuer: "Databricks",
            description: "Certified expertise in building production-grade Generative AI solutions using LLMs, RAG pipelines, prompt engineering, and vector databases on the Databricks platform.",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
            logoAlt: "Databricks",
            tools: [
                { name: "LLM / RAG", icon: "devicon-python-plain colored" },
                { name: "MLflow", icon: "devicon-apachespark-original colored" },
                { name: "Vector DB", icon: "devicon-postgresql-plain colored" }
            ],
            color: "#FF3621"
        },
        {
            name: "Databricks Data Eng",
            model: "Associate",
            issuer: "Databricks",
            description: "Hands-on certification in data pipeline engineering using Apache Spark, Delta Lake, and the Databricks Lakehouse platform for large-scale data processing.",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
            logoAlt: "Databricks",
            tools: [
                { name: "Apache Spark", icon: "devicon-apachespark-original colored" },
                { name: "Delta Lake", icon: "devicon-sqldeveloper-plain colored" },
                { name: "ETL Pipelines", icon: "devicon-bash-plain colored" }
            ],
            color: "#FF3621"
        },
        {
            name: "AWS Cloud Practitioner",
            model: "Foundational",
            issuer: "Amazon Web Services",
            description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support — the entry point to the AWS certification path.",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            logoAlt: "AWS",
            tools: [
                { name: "AWS Core", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "Cloud Security", icon: "devicon-docker-plain colored" },
                { name: "Billing & Support", icon: "devicon-jira-plain colored" }
            ],
            color: "#FF9900"
        }
    ];

    let currentLlmIndex = 0;
    const llmCard = document.getElementById('llm-card');
    const progressBar = document.getElementById('progress-bar');
    const switchInterval = 5000;

    function updateLlmShowcase() {
        if (!llmCard) return;

        const data = llmData[currentLlmIndex];

        llmCard.classList.remove('active');
        llmCard.classList.add('exit');

        setTimeout(() => {
            const logoEl = document.getElementById('llm-logo');
            const nameEl = document.getElementById('llm-name');
            const modelEl = document.getElementById('llm-model');
            const descEl = document.getElementById('llm-description');
            const toolGrid = document.getElementById('tool-grid');

            if (logoEl) {
                logoEl.innerHTML = `<img src="${data.logoUrl}" alt="${data.logoAlt}" style="width:40px;height:40px;object-fit:contain;filter:brightness(1.1);">`;
                logoEl.style.boxShadow = `0 0 20px ${data.color}44`;
                logoEl.style.borderColor = `${data.color}55`;
            }
            if (nameEl) nameEl.textContent = data.name;
            if (modelEl) {
                modelEl.textContent = data.model;
                modelEl.style.color = data.color;
            }
            if (descEl) descEl.textContent = data.description;

            if (toolGrid) {
                toolGrid.innerHTML = '';
                data.tools.forEach(tool => {
                    const badge = document.createElement('div');
                    badge.className = 'tool-badge';
                    badge.innerHTML = `<i class="${tool.icon}"></i> <span>${tool.name}</span>`;
                    toolGrid.appendChild(badge);
                });
            }

            llmCard.classList.remove('exit');
            llmCard.classList.add('active');

            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
                void progressBar.offsetWidth;
                progressBar.style.transition = `width ${switchInterval}ms linear`;
                progressBar.style.width = '100%';
            }

            currentLlmIndex = (currentLlmIndex + 1) % llmData.length;
        }, 600);
    }

    if (llmCard) {
        updateLlmShowcase();
        setInterval(updateLlmShowcase, switchInterval);
    }

    // Skills Marquee
    const skillsList = [
        { name: "Generative AI", imgSrc: "genai.png" },
        { name: "Airflow", imgSrc: "airflow.png" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Angular", icon: "devicon-angularjs-plain colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Flask", icon: "devicon-flask-original colored" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "Azure", icon: "devicon-azure-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Jenkins", icon: "devicon-jenkins-line colored" },
        { name: "Terraform", icon: "devicon-terraform-plain colored" },
        { name: "Shell Scripting", icon: "devicon-bash-plain colored" },
        { name: "SonarQube", icon: "devicon-sonarqube-plain colored" },
        { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
        { name: "SQL", icon: "devicon-sqldeveloper-plain colored" },
        { name: "Cypress", icon: "devicon-cypressio-plain colored" },
        { name: "JUnit", icon: "devicon-junit-plain colored" },
        { name: "Swagger", icon: "devicon-swagger-plain colored" },
        { name: "GraphQL", icon: "devicon-graphql-plain colored" },
        { name: "Kafka", icon: "devicon-apachekafka-original colored" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "Github", icon: "devicon-github-original" }
    ];

    const marqueeWrapper = document.getElementById('skills-marquee');
    if (marqueeWrapper) {
        const marqueeContent = document.createElement('div');
        marqueeContent.className = 'marquee-content';

        skillsList.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';

            if (skill.icon) {
                const icon = document.createElement('i');
                icon.className = skill.icon;
                skillItem.appendChild(icon);
            } else if (skill.imgSrc) {
                const img = document.createElement('img');
                img.src = skill.imgSrc;
                img.alt = skill.name;
                img.style.width = '1.8rem';
                img.style.height = '1.8rem';
                img.style.objectFit = 'contain';
                skillItem.appendChild(img);
            }

            const text = document.createElement('span');
            text.textContent = skill.name;
            skillItem.appendChild(text);

            marqueeContent.appendChild(skillItem);
        });

        marqueeWrapper.appendChild(marqueeContent);

        // Clone for infinite scroll
        const clone = marqueeContent.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        marqueeWrapper.appendChild(clone);
    }
});
