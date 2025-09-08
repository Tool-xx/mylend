// Language switching functionality
const languageSelector = document.getElementById('languageSelector');
const languageDropdown = document.getElementById('languageDropdown');
const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const topLogo = document.getElementById('topLogo');
const footerLogo = document.getElementById('footerLogo');
const scrollTopBtn = document.getElementById('scrollTop');
const preloader = document.getElementById('preloader');
const progressBar = document.querySelector('.preloader-progress-bar');
const percentageText = document.querySelector('.preloader-percentage');

// Translations object
const translations = {
    'ru': {
        'choose_language': 'Выберите язык:',
        'nav_services': 'Услуги',
        'nav_experience': 'Опыт',
        'nav_process': 'Процесс',
        'nav_contact': 'Контакты',
        'hero_title': 'Kimono: Эксперт по международному праву',
        'hero_desc': 'Легализация доходов, стратегическое консультирование и работа с правовыми системами различных юрисдикций. Решаем задачи любой сложности.',
        'services_title': 'Услуги',
        'service1_title': 'Легализация доходов',
        'service1_desc': 'Комплексные решения по легализации доходов из различных источников с учетом международного законодательства.',
        'service2_title': 'Стратегическое консультирование',
        'service2_desc': 'Экспертная оценка ситуаций и разработка стратегий с учетом законодательств разных стран.',
        'service3_title': 'Международное право',
        'service3_desc': 'Глубокая работа с правовыми системами различных государств и международными нормативами.',
        'experience_title': 'Опыт',
        'experience_text1': 'С большим опытом работы в международной юридической сфере, я специализируюсь на решении комплексных задач, связанных с легализацией доходов и трансграничным правом.',
        'experience_text2': 'Моя практика охватывает широкий спектр юрисдикций, что позволяет находить нестандартные решения для самых требовательных клиентов.',
        'experience_text3': 'Я работал с делами различной сложности в десятках стран мира, что дало уникальный опыт и понимание тонкостей международного законодательства.',
        'process_title': 'Процесс работы',
        'step1_title': 'Анализ',
        'step1_desc': 'Всестороннее изучение ситуации и определение оптимального подхода',
        'step2_title': 'Стратегия',
        'step2_desc': 'Разработка индивидуальной стратегии с учетом современных реалий',
        'step3_title': 'Реализация',
        'step3_desc': 'Воплощение плана с учетом всех юридических нюансов',
        'step4_title': 'Результат',
        'step4_desc': 'Достижение поставленных целей с максимальной эффективностью',
        'contact_title': 'Контакты',
        'contact_text': 'Свяжитесь со мной через Telegram для консультации',
        'telegram_button': 'Написать в Telegram',
        'copyright': ' 2025 Kimono. Все права защищены.'
    },
    'en': {
        'choose_language': 'Choose language:',
        'nav_services': 'Services',
        'nav_experience': 'Experience',
        'nav_process': 'Process',
        'nav_contact': 'Contact',
        'hero_title': 'Kimono: International Law Expert',
        'hero_desc': 'Income legalization, strategic consulting and work with legal systems of various jurisdictions. Solving tasks of any complexity.',
        'services_title': 'Services',
        'service1_title': 'Income Legalization',
        'service1_desc': 'Comprehensive solutions for legalizing income from various sources, taking into account international legislation.',
        'service2_title': 'Strategic Consulting',
        'service2_desc': 'Expert assessment of situations and development of strategies taking into account the laws of different countries.',
        'service3_title': 'International Law',
        'service3_desc': 'In-depth work with legal systems of various states and international regulations.',
        'experience_title': 'Experience',
        'experience_text1': 'With extensive experience in the international legal field, I specialize in solving complex problems related to income legalization and cross-border law.',
        'experience_text2': 'My practice covers a wide range of jurisdictions, which allows me to find non-standard solutions for the most demanding clients.',
        'experience_text3': 'I have worked with cases of varying complexity in dozens of countries around the world, which has given me unique experience and understanding of the intricacies of international law.',
        'process_title': 'Working Process',
        'step1_title': 'Analysis',
        'step1_desc': 'Comprehensive study of the situation and determination of the optimal approach',
        'step2_title': 'Strategy',
        'step2_desc': 'Development of an individual strategy taking into account modern realities',
        'step3_title': 'Implementation',
        'step3_desc': 'Implementation of the plan taking into account all legal nuances',
        'step4_title': 'Result',
        'step4_desc': 'Achieving set goals with maximum efficiency',
        'contact_title': 'Contacts',
        'contact_text': 'Contact me via Telegram for consultation',
        'telegram_button': 'Write to Telegram',
        'copyright': ' 2025 Kimono. All rights reserved.'
    },
    'de': {
        'choose_language': 'Sprache wählen:',
        'nav_services': 'Dienstleistungen',
        'nav_experience': 'Erfahrung',
        'nav_process': 'Prozess',
        'nav_contact': 'Kontakte',
        'hero_title': 'Kimono: Experte für internationales Recht',
        'hero_desc': 'Einkommenslegalisierung, strategische Beratung und Arbeit mit Rechtssystemen verschiedener Gerichtsbarkeiten. Lösung von Aufgaben jeglicher Komplexität.',
        'services_title': 'Dienstleistungen',
        'service1_title': 'Einkommenslegalisierung',
        'service1_desc': 'Umfassende Lösungen zur Legalisierung von Einkommen aus verschiedenen Quellen unter Berücksichtigung internationaler Rechtsvorschriften.',
        'service2_title': 'Strategische Beratung',
        'service2_desc': 'Expertenbewertung von Situationen und Entwicklung von Strategien unter Berücksichtigung der Gesetze verschiedener Länder.',
        'service3_title': 'Internationales Recht',
        'service3_desc': 'Tiefgehende Arbeit mit Rechtssystemen verschiedener Staaten и международными нормативами.',
        'experience_title': 'Erfahrung',
        'experience_text1': 'Mit umfangreicher Erfahrung im internationalen Rechtsbereich spezialisiere ich mich auf die Lösung komplexer Probleme im Zusammenhang mit Einkommenslegalisierung und grenzüberschreitendem Recht.',
        'experience_text2': 'Meine Praxis umfasst ein breites Spektrum von Rechtsordnungen, was mir ermöglicht, nicht standardmäßige Lösungen für die anspruchsvollsten Kunden zu finden.',
        'experience_text3': 'Ich habe mit Fällen unterschiedlicher Komplexität in Dutzenden von Ländern auf der ganzen Welt gearbeitet, was mir einzigartige Erfahrungen und ein Verständnis für die Feinheiten des internationalen Rechts vermittelt hat.',
        'process_title': 'Arbeitsprozess',
        'step1_title': 'Analyse',
        'step1_desc': 'Umfassende Untersuchung der Situation и Bestimmung des optimalen Ansatzes',
        'step2_title': 'Strategie',
        'step2_desc': 'Entwicklung einer individuellen Strategie unter Berücksichtigung moderner Realitäten',
        'step3_title': 'Umsetzung',
        'step3_desc': 'Umsetzung des Plans unter Berücksichtigung aller rechtlichen Nuancen',
        'step4_title': 'Ergebnis',
        'step4_desc': 'Erreichen der gesetzten Ziele mit maximaler Effizienz',
        'contact_title': 'Kontakte',
        'contact_text': 'Kontaktieren Sie mich per Telegram für eine Beratung',
        'telegram_button': 'In Telegram schreiben',
        'copyright': ' 2025 Kimono. Alle Rechte vorbehalten.'
    }
};

// Load saved language or default to Russian
const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Start loading simulation
    simulateLoading();
});

function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(initializePage, 500);
        }
        updateProgress(progress);
    }, 200);
}

function updateProgress(progress) {
    progressBar.style.width = progress + '%';
    percentageText.textContent = Math.round(progress) + '%';
}

function initializePage() {
    // Hide preloader and show content
    document.body.classList.add('loaded');
    preloader.classList.add('loaded');
    
    changeLanguage(savedLanguage);
    document.querySelector('.current-language span').textContent = savedLanguage.toUpperCase();
    
    // Update mobile language selector
    document.querySelectorAll('.mobile-language-option').forEach(option => {
        if (option.getAttribute('data-lang') === savedLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Initialize checkmarks
    document.querySelectorAll('.language-option i').forEach(icon => {
        icon.style.visibility = 'hidden';
    });
    document.querySelector(`.language-option[data-lang="${savedLanguage}"] i`).style.visibility = 'visible';
    
    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Desktop language selector
    languageSelector.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // Language selection for desktop
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
            document.querySelector('.current-language span').textContent = lang.toUpperCase();
            
            // Update mobile language selector
            document.querySelectorAll('.mobile-language-option').forEach(opt => {
                if (opt.getAttribute('data-lang') === lang) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
            
            // Update checkmarks
            document.querySelectorAll('.language-option i').forEach(icon => {
                icon.style.visibility = 'hidden';
            });
            this.querySelector('i').style.visibility = 'visible';
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', lang);
        });
    });
    
    // Mobile language selector
    document.querySelectorAll('.mobile-language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active state
            document.querySelectorAll('.mobile-language-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', lang);
            
            // Close mobile menu
            closeMobileMenu();
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });
    
    // Prevent dropdown close when clicking inside
    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Mobile menu functionality
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on overlay
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Scroll to top when clicking on logo
    topLogo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    footerLogo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll to top button functionality
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Animate elements on scroll
        animateOnScroll();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function closeMobileMenu() {
    burgerMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Change language function
function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    const serviceCards = document.querySelectorAll('.service-card');
    const experienceParagraphs = document.querySelectorAll('.experience-content p');
    const steps = document.querySelectorAll('.step');
    
    serviceCards.forEach(card => {
        const position = card.getBoundingClientRect();
        if (position.top < window.innerHeight - 100 && !card.classList.contains('animated')) {
            card.classList.add('animated');
        }
    });
    
    experienceParagraphs.forEach(p => {
        const position = p.getBoundingClientRect();
        if (position.top < window.innerHeight - 100 && !p.classList.contains('animated')) {
            p.classList.add('animated');
        }
    });
    
    steps.forEach(step => {
        const position = step.getBoundingClientRect();
        if (position.top < window.innerHeight - 100 && !step.classList.contains('animated')) {
            step.classList.add('animated');
        }
    });
}

// Initialize animations
window.addEventListener('load', function() {
    animateOnScroll();
});
