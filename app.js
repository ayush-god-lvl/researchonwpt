* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Times New Roman', Times, serif;
    background: #f8f9fa;
    color: #2c3e50;
    overflow-x: hidden;
    line-height: 1.8;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid #34495e;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2c3e50;
    font-family: 'Georgia', serif;
}

.nav-menu {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

.nav-item {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    font-weight: 500;
}

.nav-item:hover {
    background: #ecf0f1;
    color: #2980b9;
}

.nav-item.active {
    background: #2980b9;
    color: white;
}

/* Download Button */
.download-button {
    background: #28a745;
    color: white;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.download-button:hover {
    background: #218838;
}


/* Slide Container */
.slide-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.6s ease-in-out;
    padding: 6rem 2rem 2rem;
    overflow-y: auto;
}

.slide.active {
    opacity: 1;
    transform: translateX(0);
}

.slide.prev {
    transform: translateX(-100%);
}

/* Academic Paper Styling */
.slide-content {
    max-width: 900px;
    width: 100%;
    background: white;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
    margin: 0 auto;
}

/* Typography */
.slide h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    text-align: center;
    font-weight: 700;
    border-bottom: 3px solid #2980b9;
    padding-bottom: 1rem;
}

.slide h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #34495e;
    text-align: center;
    font-weight: 600;
}

.slide h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem 0;
    color: #2c3e50;
    font-weight: 600;
    border-left: 4px solid #2980b9;
    padding-left: 1rem;
}

.slide h4 {
    font-size: 1.2rem;
    margin: 1rem 0 0.5rem 0;
    color: #34495e;
    font-weight: 600;
}

.slide p {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    color: #2c3e50;
    text-align: justify;
    line-height: 1.8;
}

.slide ul, .slide ol {
    margin: 1rem 0 1.5rem 2rem;
}

.slide li {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    color: #2c3e50;
    line-height: 1.7;
}

/* Abstract and Keywords */
.abstract {
    background: #f8f9fa;
    border-left: 4px solid #2980b9;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 4px;
}

.abstract h4 {
    color: #2980b9;
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.keywords {
    background: #ecf0f1;
    padding: 1rem;
    margin: 1.5rem 0;
    border-radius: 4px;
    font-style: italic;
}

/* Circuit Diagram Placeholder */
.circuit-diagram {
    width: 100%;
    max-width: 600px;
    height: 300px;
    background: #f8f9fa;
    border: 2px dashed #95a5a6;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #7f8c8d;
    border-radius: 4px;
}

/* Tables */
.materials-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: white;
}

.materials-table th,
.materials-table td {
    border: 1px solid #bdc3c7;
    padding: 1rem;
    text-align: left;
}

.materials-table th {
    background: #34495e;
    color: white;
    font-weight: 600;
}

.materials-table tr:nth-child(even) {
    background: #f8f9fa;
}

/* Equations */
.equation {
    background: #f8f9fa;
    padding: 1.5rem;
    margin: 2rem 0;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    font-family: 'Courier New', monospace;
    font-size: 1.2rem;
}

/* Figure captions */
.figure-caption {
    text-align: center;
    font-style: italic;
    color: #7f8c8d;
    margin-top: 0.5rem;
    font-size: 1rem;
}

/* Navigation Arrows */
.nav-arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: 2px solid #2980b9;
    color: #2980b9;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 100;
    font-size: 1.2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-arrow:hover {
    background: #2980b9;
    color: white;
    transform: translateY(-50%) scale(1.05);
}

.nav-arrow.prev {
    left: 2rem;
}

.nav-arrow.next {
    right: 2rem;
}

/* Slide Indicators */
.slide-indicators {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    z-index: 100;
}

.indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #bdc3c7;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid white;
}

.indicator.active {
    background: #2980b9;
    transform: scale(1.3);
}

/* References */
.references {
    background: #f8f9fa;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 4px;
    border-left: 4px solid #2980b9;
}

.references h4 {
    color: #2980b9;
    margin-bottom: 1rem;
}

.references ol {
    margin-left: 1rem;
}

.references li {
    margin-bottom: 1rem;
    font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .slide-content {
        padding: 2rem 1.5rem;
        margin: 0 1rem;
    }
    
    .slide h1 { font-size: 2rem; }
    .slide h2 { font-size: 1.6rem; }
    .slide h3 { font-size: 1.3rem; }
    .slide p, .slide li { font-size: 1rem; }
    .nav-menu { display: none; }
    .nav-arrow { padding: 0.8rem; font-size: 1rem; }
    
    .materials-table {
        font-size: 0.9rem;
    }
    
    .materials-table th,
    .materials-table td {
        padding: 0.5rem;
    }

    .download-button {
        padding: 0.6rem 0.8rem;
        font-size: 0.8rem;
    }
    .nav-container {
        flex-direction: column;
        gap: 0.5rem;
    }
    .logo {
        margin-bottom: 0.5rem;
    }
}

/* Author info */
.author-info {
    text-align: center;
    margin: 2rem 0;
    padding: 1rem;
    background: #ecf0f1;
    border-radius: 4px;
}

.author-info h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.author-info p {
    margin: 0.5rem 0;
    font-size: 1rem;
}

/* Section numbering */
.section-number {
    color: #2980b9;
    font-weight: 700;
    margin-right: 0.5rem;
}
