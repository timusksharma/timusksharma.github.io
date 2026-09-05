import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumeUrl = '/resume/Sumit_Kumar_Sharma_Resume.pdf';
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
    </nav>
    <div className="nav-actions"><button className="theme-button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? '☀' : '☾'}</button><a className="resume-button" href={resumeUrl} download>Resume ↗</a><button className="menu-button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></div>
  </div></header>;
}
function Hero() {
  return <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy">
    <div className="eyebrow"><span className="dot" /> AI ENGINEER · BENGALURU, INDIA</div>
    <p className="hello">Hi, I’m Sumit Sharma.</p><h1>Engineering AI.<br /><span className="gradient">Building impact.</span></h1>
    <p className="intro">I turn complex data into intelligent products. From agentic workflows to production APIs, I build AI systems that work in the real world.</p>
    <div className="button-row"><a className="button primary" href="#projects">Explore my work <span>↗</span></a><a className="button secondary" href="#contact">Let’s talk <span>↗</span></a></div>
    <div className="network"><a href="https://github.com/timusksharma" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:timusksharma@gmail.com">Email ↗</a><span>Python / AI / Data</span></div>
    </div><div className="hero-system"><div className="system-top"><span className="dot" /> HOW I BUILD <span>01 — 04</span></div><div className="system-title">From a question.<br /><span>To a working system.</span></div><div className="system-flow">{architecture.map(([number,title,,stat]) => <a href="#architecture" key={number}><span className="flow-number">{number}</span><div><strong>{title}</strong><small>{stat}</small></div><span className="flow-arrow">↗</span></a>)}</div><div className="system-bottom"><span>Python + LangGraph + FastAPI</span><span>⌘</span></div></div></div><div className="container hero-foot"><span>INTELLIGENCE, WITH ENGINEERING DISCIPLINE.</span><a href="#about">Scroll to discover ↓</a></div></section>;
}
function Metrics() { return <div className="container"><section className="metrics" id="about" aria-label="About and core strengths">{metrics.map(([value,text]) => <div className="metric" key={value}><strong>{value}</strong><span>{text}</span></div>)}</section></div>; }
function SectionHeading({ kicker, title, note }) { return <div className="section-heading"><div><div className="kicker">{kicker}</div><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>; }
function Architecture() {
 const [selected,setSelected] = useState(0);
 return <section className="section" id="architecture"><div className="container"><SectionHeading kicker="02 / THE APPROACH" title="Built for the whole journey." note="Explore the layers behind a reliable AI system." /><div className="architecture card"><div className="architecture-tabs" role="tablist" aria-label="System architecture">{architecture.map(([number,title],i) => <button key={number} id={`stage-${i}`} role="tab" aria-selected={selected === i} aria-controls="stage-panel" tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={event => { let next; if(event.key === 'ArrowRight') next=(i+1)%4; if(event.key === 'ArrowLeft') next=(i+3)%4; if(event.key === 'Home') next=0; if(event.key === 'End') next=3; if(next !== undefined) {event.preventDefault();setSelected(next);document.getElementById(`stage-${next}`).focus();} }}><span>{number}</span>{title}<span>↗</span></button>)}</div><div className="architecture-panel" id="stage-panel" role="tabpanel" aria-labelledby={`stage-${selected}`} tabIndex="0"><span className="stage-number">{architecture[selected][0]}</span><div><div className="kicker">{architecture[selected][3]}</div><h3>{architecture[selected][1]}</h3><p>{architecture[selected][2]}</p></div></div></div></div></section>;
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
  return <section className="section" id="contact"><div className="container"><div className="contact card"><div><div className="kicker">05 / SAY HELLO</div><h2>Let&apos;s build your next AI system</h2><p>For LLM applications, RAG pipelines, data platforms, and production backend systems, get in touch.</p><div className="contact-details"><a href="mailto:timusksharma@gmail.com">✉ timusksharma@gmail.com</a><span>⌖ Bengaluru, Karnataka, India</span><span>◷ Available for remote collaboration</span></div></div><form className="form" onSubmit={submit}><label className="field-label" htmlFor="name">Name / organization</label><input className="field" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name or company" required /><label className="field-label" htmlFor="email">Email address</label><input className="field" id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required /><label className="field-label" htmlFor="message">System scope & objective</label><textarea className="field" id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the problem you want to solve." required /><button className="button primary" type="submit">✉ Start an email</button></form></div></div></section>;
}
function Footer() { return <footer className="container footer"><span>◈ AI ENGINEER / SYSTEMS & DATA</span><span>© {new Date().getFullYear()} Sumit Kumar Sharma</span></footer>; }

function App() {
  const [theme, setTheme] = useState(() => (() => { try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; } })());
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme); } catch {} }, [theme]);
  return <div className="page"><a className="skip-link" href="#projects">Skip to projects</a><Header theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main><Hero /><Metrics /><Projects /><Architecture /><Experience /><Skills /><Contact /></main><Footer /></div>;
}

createRoot(document.getElementById('root')).render(<App />);
