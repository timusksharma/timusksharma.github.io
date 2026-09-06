import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumeUrl = 'https://drive.google.com/file/d/1zLPmcgxbjUPqvm0RJK7UKjTqS4oIlgmu/view';
const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1zLPmcgxbjUPqvm0RJK7UKjTqS4oIlgmu';
const profileImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvYFjVFFdk-VgXMST3n9wnHFwbW1FwRZWe0K-QfeHzSOT_cvW4D-vhSOcbz0V8Tk3m2dVX2QAGo3nsAplQkEvkGYxhMI2_xzDuQ8dVwtXsjPHfaO2tmTfINyABmAf2E8MZy0uHzKY7dW69EzukG_JKzzLxL9AlgaT4ZqYlZ-6Cv-aQ_sZQggno0y9MTbKMIHHDhOtUn4hlpSYNt0hiPw9g-ps158UQyGPIAVGYxUCuu867yoJf5X7Sio1E-P5LUVeAUIg';

const metrics = [
  ['5+', 'Years of backend, data, and AI engineering'], ['LLM', 'RAG and agentic workflow systems'], ['PySpark', 'Distributed data processing expertise'], ['FastAPI', 'Scalable production API design'],
];
const architecture = [
  ['01', 'Data ingestion', 'PySpark processing, SQL transformations, and dataset quality validation.', 'Data products'],
  ['02', 'Knowledge retrieval', 'Document ingestion, embeddings, vector databases, and hybrid RAG search.', 'RAG pipelines'],
  ['03', 'Agent orchestration', 'LangChain and LangGraph workflows using tools, memory, and checkpoints.', 'Agent workflows'],
  ['04', 'Reliable delivery', 'FastAPI services with Docker, Kubernetes, observability, and integrations.', 'Production APIs'],
];
const projects = [
  { type: 'Agentic ETL', title: 'AI Data Pipeline Generator', text: 'An AI-powered agent that turns natural-language specifications into ETL pipelines with SQL generation, PySpark transformations, schema validation, and data-quality checks.', stats: [['Focus', 'Code generation'], ['Output', 'Deployable templates']], tags: ['Python', 'FastAPI', 'LangGraph', 'PySpark', 'OpenAI'] },
  { type: 'Hybrid RAG', title: 'Enterprise AI Knowledge Assistant', text: 'A private-document assistant with ingestion for PDF, DOCX, Excel, HTML, and Markdown, plus metadata-aware hybrid semantic search.', stats: [['Retrieval', 'Hybrid search'], ['Serving', 'Streaming APIs']], tags: ['LangChain', 'Qdrant', 'Redis', 'PostgreSQL'] },
  { type: 'Multi-agent', title: 'Workflow Automation Platform', text: 'Planner, Researcher, Executor, and Reviewer agents collaborate with tool calling, long-term memory, state persistence, retries, and approvals.', stats: [['Pattern', 'Human in the loop'], ['Tools', 'MCP']], tags: ['LangGraph', 'MCP', 'FastAPI', 'Docker'] },
  { type: 'Frontend AI', title: 'AI Frontend Engineering Agent', text: 'An agentic Figma-to-code system that produces structured UI representations and production-ready React and TypeScript, then validates and refines output.', stats: [['Input', 'Figma via MCP'], ['Output', 'React + TypeScript']], tags: ['React', 'TypeScript', 'MCP', 'OpenAI'] },
];
const experience = [
  { period: 'AUG 2022 — PRESENT', title: 'Senior Software Engineer', company: 'Alten India · Client: Airbus', text: 'Built aircraft intelligence, compliance-assistant, and dataset-observability systems using PySpark, RAG, vector search, and FastAPI over enterprise engineering data.', tags: ['PySpark', 'FastAPI', 'RAG', 'Palantir Foundry'] },
  { period: 'NOV 2021 — AUG 2022', title: 'Software Developer', company: 'Salesken.ai', text: 'Developed conversation-intelligence services for real-time sales workflows, including Deepgram transcription, vector search, RAG, WebSockets, Kafka, and CRM integrations.', tags: ['Python', 'FastAPI', 'Kafka', 'Deepgram'] },
  { period: 'SEP 2021 — NOV 2021', title: 'Software Engineer', company: 'Oracle Cerner', text: 'Contributed to enterprise healthcare web applications, backend REST APIs, production fixes, testing, and Agile delivery.', tags: ['JavaScript', 'Node.js', 'REST APIs'] },
];
const skillGroups = [
  ['Reasoning & agents', ['LangChain', 'LangGraph', 'MCP', 'Prompt engineering', 'OpenAI APIs']],
  ['Vector & retrieval', ['Qdrant', 'Milvus', 'Pinecone', 'FAISS', 'Embeddings']],
  ['Backend & data', ['Python', 'FastAPI', 'PySpark', 'PostgreSQL', 'Kafka']],
  ['MLOps & tools', ['Docker', 'Kubernetes', 'MLflow', 'Git', 'Jira']],
];

function Header({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="nav"><div className="container nav-row">
    <a className="brand" href="#home" aria-label="Sumit Sharma home">s<span>.</span><small>SUMIT SHARMA</small></a>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation" id="main-menu">
      {['About', 'Projects', 'Architecture', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} aria-current={active === item.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{item}</a>)}
      <div className="mobile-menu-actions">
        <a className="mobile-resume" href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume ↗</a>
        <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk ↗</a>
      </div>
    </nav>
    <div className="nav-actions"><button className="theme-button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☀' : '☾'}</button><a className="resume-button" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a><a className="nav-contact" href="#contact">Let’s talk ↗</a><button className="menu-button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></div>
  </div></header>;
}
function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  return <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy">
    <div className="eyebrow"><span className="dot" /> LET’S BUILD SOMETHING INTELLIGENT</div>
    <h1>Hi, I’m an<br />AI engineer<span className="title-dot">.</span></h1>
    <p className="intro">I’m Sumit Sharma. I build thoughtful AI applications, intelligent agents, and data platforms that turn complex problems into useful products.</p>
    <div className="button-row"><a className="button primary" href="#contact">Let’s work together <span>↗</span></a><a className="text-link" href="#projects">Explore my work ↓</a></div>
    </div><div className="hero-bento">
      <a className="identity-tile" href="#architecture"><div><h2>Sumit Sharma</h2><p>Bengaluru, India</p></div><div className="mini-flow" aria-hidden="true"><span>YOUR IDEA</span><i>↓</i><strong>Data → Agents → API</strong><i>↓</i><span>A WORKING PRODUCT</span></div><span className="expert-badge">✳ AI & DATA ENGINEERING</span><span className="tile-link">From idea to production ↗</span></a>
      <div className="portrait-tile">{!imageFailed ? <img src={profileImage} alt="Sumit Sharma" onError={() => setImageFailed(true)} /> : <div className="portrait-fallback"><span>SS</span><p>Curiosity.<br />Code. Craft.</p></div>}<div className="portrait-label"><span className="dot" /> Human behind the systems</div></div>
      <div className="brands-tile experience-tile">
        <div className="experience-tile-heading"><span>THE TEAMS BEHIND THE JOURNEY</span><h2>Built with experience.</h2></div>
        <div className="company-links">
          {[['ALTEN', 'Aerospace · Airbus', '2022 — Present'], ['Salesken.ai', 'Conversation intelligence', '2021 — 2022'], ['Oracle Cerner', 'Healthcare technology', '2021']].map(([name, sector], index) => <a className="company-link" href="#experience" key={name} aria-label={`Explore my experience at ${name}`}><span className={`company-logo company-logo-${['alten', 'salesken', 'oracle-cerner'][index]}`} aria-hidden="true"><img src={`/logos/${['alten', 'salesken', 'oracle-cerner'][index]}.svg`} alt="" width="80" height="48" /></span><span className="company-copy"><strong>{name}</strong><small>{sector}</small></span><span className="company-arrow" aria-hidden="true">↗</span></a>)}
        </div>
      </div>
      <div className="social-tiles"><a href="https://github.com/timusksharma" target="_blank" rel="noreferrer" aria-label="Visit GitHub">GH<span>↗</span></a><a href="mailto:timusksharma@gmail.com" aria-label="Email Sumit">@<span>↗</span></a><a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="View resume on Google Drive (opens in a new tab)">CV<span>↗</span></a><a href="#projects" aria-label="Explore projects">⌘<span>↗</span></a></div>
    </div></div><div className="container hero-foot"><span>AI SYSTEMS. BUILT WITH PURPOSE.</span><a href="#about">A little about my approach ↓</a></div></section>;
}
function Metrics() { return <section className="container about-section" id="about"><div className="mission"><span className="kicker">THE WHY BEHIND THE WORK</span><h2>Make intelligence useful.<br />Build systems people can<br className="desktop-break" /> actually depend on.</h2><p>I connect data, reasoning, and reliable engineering to help teams move from AI experiments to everyday impact.</p><div className="mission-tools"><span>Python</span><span>LangGraph</span><span>FastAPI</span><span>PySpark</span></div></div><div className="metrics">{metrics.map(([value,text]) => <div className="metric" key={value}><strong>{value}</strong><span>{text}</span></div>)}</div></section>; }
function Services() { return <section className="section services-section"><div className="container services-layout"><div><div className="kicker">WHAT I DO</div><h2>How can I<br />help you?</h2><a className="text-link" href="#contact">Let’s talk about it ↗</a></div><div className="service-grid">{[['✳','AI applications','Useful LLM-powered experiences, from document assistants to intelligent tools that fit your workflow.','Retrieval'],['↗','Backend development','Reliable APIs and integrations, with the performance and infrastructure to serve real products.','All work'],['⌘','Agentic automation','Connected agents that plan, use tools, and complete complex tasks with human oversight.','Agents'],['≋','Data engineering','Scalable data pipelines and transformations that give intelligent systems a dependable foundation.','Data']].map(([icon,title,text,category],i) => <a className="service-card" href="#projects" key={title}><span className="service-icon" aria-hidden="true">{icon}</span><p>{text}</p><h3>{title}</h3><span className="service-index">0{i+1} ↗</span></a>)}</div></div></section>; }
function SectionHeading({ kicker, title, note }) { return <div className="section-heading"><div><div className="kicker">{kicker}</div><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>; }
function Architecture() {
 const tools = [['PySpark', 'SQL', 'Quality checks'], ['Embeddings', 'Vector search', 'RAG'], ['LangGraph', 'Tools & memory', 'Checkpoints'], ['FastAPI', 'Kubernetes', 'Observability']];
 const symbols = [
   <><ellipse cx="16" cy="8" rx="10" ry="4" /><path d="M6 8v8c0 5.3 20 5.3 20 0V8M6 16v8c0 5.3 20 5.3 20 0v-8" /></>,
   <><rect x="5" y="4" width="16" height="22" rx="3" /><path d="M9 10h8M9 15h5" /><circle cx="23" cy="22" r="5" /><path d="m27 26 3 3" /></>,
   <><rect x="11" y="11" width="10" height="10" rx="3" /><path d="M16 5v6M5 16h6M21 16h6M16 21v6" /><circle cx="16" cy="4" r="2" /><circle cx="4" cy="16" r="2" /><circle cx="28" cy="16" r="2" /><circle cx="16" cy="28" r="2" /></>,
   <><path d="M16 3 27 7v8c0 7-11 14-11 14S5 22 5 15V7L16 3Z" /><path d="m11 15 4 4 7-8" /></>
 ];
 return <section className="section" id="architecture"><div className="container">
   <SectionHeading kicker="02 / THE APPROACH" title="Built for the whole journey." note="From raw data to reliable AI. Every layer, thoughtfully engineered." />
   <ol className="journey-grid">{architecture.map(([number, title, text, outcome], i) => <li className={`journey-step journey-step-${i + 1}`} key={number}>
     <div className="journey-top"><span className="journey-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{symbols[i]}</svg></span><span className="journey-number">{number} / 04</span></div>
     <div className="journey-outcome">{outcome}</div><h3>{title}</h3><p>{text}</p>
     <ul className="journey-tools" aria-label={`${title} tools`}>{tools[i].map(tool => <li key={tool}>{tool}</li>)}</ul>
     {i < 3 && <span className="journey-connector" aria-hidden="true">↗</span>}
   </li>)}</ol>
   <div className="journey-caption"><span className="dot" aria-hidden="true" /><span>One connected approach. Built to work in the real world.</span><a className="text-link" href="#projects">See the work ↗</a></div>
 </div></section>;
}
function Projects() {
 const [filter,setFilter] = useState('All work');
 const categories=['All work','Agents','Retrieval','Data'];
 const visible=projects.filter(p => filter === 'All work' || (filter === 'Agents' && ['Multi-agent','Frontend AI'].includes(p.type)) || (filter === 'Retrieval' && p.type === 'Hybrid RAG') || (filter === 'Data' && p.type === 'Agentic ETL'));
 return <section className="section" id="projects"><div className="container"><SectionHeading kicker="01 / SELECTED WORK" title="Ideas into working systems." note="A selection of AI, automation, and data engineering projects." /><div className="filters" aria-label="Filter projects">{categories.map(category => <button key={category} aria-pressed={filter===category} onClick={() => setFilter(category)}>{category}{category === 'All work' && <span>04</span>}</button>)}</div><p className="sr-only" role="status">Showing {visible.length} projects</p><div className="project-grid">{visible.map(project => <article className="project card" key={project.title}><div className="project-tag"><span>{project.type}</span><span>0{projects.indexOf(project)+1} ↗</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><details className="project-details"><summary>Explore project <span>+</span></summary><div className="project-metrics">{project.stats.map(([label,value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></details></article>)}</div></div></section>;
}
function Experience() { return <section className="section" id="experience"><div className="container"><SectionHeading kicker="03 / EXPERIENCE" title="Engineering in the real world." note="2021 — Present" /><div className="experience-list">{experience.map((item,i) => <details className="experience" key={item.company} open={i===0}><summary><span className="period">{item.period}</span><span><strong>{item.title}</strong><span className="company">{item.company}</span></span><span className="expand-icon">+</span></summary><div className="experience-content"><p>{item.text}</p><div className="tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></details>)}</div></div></section>; }
function Skills() { return <section className="section"><div className="container"><SectionHeading kicker="04 / TOOLKIT" title="The tools behind the work." /><div className="skills">{skillGroups.map(([title,tags],i) => <div className="skill-group" key={title}><span className="skill-number">0{i+1}</span><h3>{title}</h3><div className="tags">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>)}</div></div></section>; }
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = (event) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`); const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`); window.location.href = `mailto:timusksharma@gmail.com?subject=${subject}&body=${body}`; };
  return <section className="section" id="contact"><div className="container"><div className="contact card"><div><div className="kicker">05 / SAY HELLO</div><h2>Let&apos;s build your next AI system</h2><p>For LLM applications, RAG pipelines, data platforms, and production backend systems, get in touch.</p><div className="contact-details"><a href="mailto:timusksharma@gmail.com">✉ timusksharma@gmail.com</a><span>⌖ Bengaluru, Karnataka, India</span><span>◷ Available for remote collaboration</span></div></div><form className="form" onSubmit={submit}><label className="field-label" htmlFor="name">Name / organization</label><input className="field" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name or company" required /><label className="field-label" htmlFor="email">Email address</label><input className="field" id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required /><label className="field-label" htmlFor="message">System scope & objective</label><textarea className="field" id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the problem you want to solve." required /><button className="button primary email-button" type="submit">Start an email<span className="email-button-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M5 4h14a3 3 0 0 1 2.9 2.2L12 12.3 2.1 6.2A3 3 0 0 1 5 4Z" /><path d="M2 8.2 11.2 14a1.5 1.5 0 0 0 1.6 0L22 8.2V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.2Z" /></svg></span></button></form></div></div></section>;
}
function Footer() { return <footer className="container footer"><span>◈ AI ENGINEER / SYSTEMS & DATA</span><span>© {new Date().getFullYear()} Sumit Kumar Sharma</span></footer>; }

function FloatingResume() {
  return <a className="floating-resume" href={resumeDownloadUrl} target="_blank" rel="noopener noreferrer" aria-label="Download resume from Google Drive (opens in a new tab)">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" /></svg>
    <span>Resume</span>
  </a>;
}

function App() {
  const [theme, setTheme] = useState(() => (() => { try { return localStorage.getItem('portfolio-theme-v2') || 'light'; } catch { return 'light'; } })());
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme-v2', theme); } catch {} }, [theme]);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;
    const elements = document.querySelectorAll('.section-heading, .project, .service-card, .mission, .experience, .skill-group, .contact');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach((element, i) => { element.classList.add('reveal'); element.style.setProperty('--reveal-delay', `${i % 2 * 80}ms`); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal')); };
  }, []);
  return <div className="page"><a className="skip-link" href="#projects">Skip to projects</a><Header theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main><Hero /><Metrics /><Services /><Projects /><Architecture /><Experience /><Skills /><Contact /></main><Footer /><FloatingResume /></div>;
}

createRoot(document.getElementById('root')).render(<App />);
