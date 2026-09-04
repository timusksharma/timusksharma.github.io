import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const resumeUrl = '/resume/Sumit_Kumar_Sharma_Resume.docx';
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
  return <header className="nav"><div className="container nav-row">
    <a className="brand" href="#home">Sumit Sharma <small>/ AI</small></a>
    <nav className="nav-links" aria-label="Main navigation">
      {['About', 'Projects', 'Architecture', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
    </nav>
    <div className="nav-actions">
      <button className="theme-button" onClick={onThemeToggle} aria-label="Toggle color theme">{theme === 'dark' ? '☾ Dark' : '☀ Day'}</button>
      <a className="resume-button" href={resumeUrl} download><span>⇩</span> Resume</a>
      <img className="avatar" src={profileImage} alt="Sumit Kumar Sharma" />
    </div>
  </div></header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="container hero-grid">
    <div>
      <div className="eyebrow"><span className="dot" /> Ready for production AI and agentic systems</div>
      <h1>Hi, I&apos;m <span className="gradient">Sumit Sharma</span></h1>
      <p className="role">AI Engineer</p>
      <p className="intro">I build reliable LLM-powered applications, RAG pipelines, and scalable data platforms with Python, FastAPI, LangGraph, and PySpark.</p>
      <div className="button-row">
        <a className="button primary" href="#projects">Explore systems ↓</a>
        <a className="button secondary" href={resumeUrl} download>⇩ Download resume <small>DOCX</small></a>
      </div>
      <div className="network"><span>Network grid:</span><a className="icon-link" href="https://github.com/timusksharma" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a className="icon-link" href="mailto:timusksharma@gmail.com" aria-label="Email">✉</a><span>// node: Bengaluru, IN</span></div>
    </div>
    <div className="portrait-wrap" aria-label="Profile image and technical specialties">
      <span className="float-label float-top">◉ MCP PROTOCOL · ACTIVE</span><span className="float-label float-left">&lt;LangGraph /&gt;</span><span className="float-label float-bottom">● SYSTEMS · AI / DATA</span>
      <img className="portrait" src={profileImage} alt="Sumit Kumar Sharma, AI Engineer" />
      <span className="photo-caption">MODEL INFERENCE · AI ENGINEER</span>
    </div>
  </div></section>;
}

function Metrics() { return <div className="container"><section className="metrics" id="about" aria-label="Core strengths">{metrics.map(([value, text]) => <div className="metric" key={value}><div className="metric-label">Engineering focus</div><strong>{value}</strong><span>{text}</span></div>)}</section></div>; }
function SectionHeading({ kicker, title, note }) { return <div className="section-heading"><div><div className="kicker">• {kicker}</div><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>; }
function Architecture() { return <section className="section" id="architecture"><div className="container"><SectionHeading kicker="Topology & execution graph" title="AI systems architecture" note="A practical engineering path from enterprise data to reliable AI experiences." /><div className="architecture card"><div className="architecture-grid">{architecture.map(([number, title, text, stat]) => <article className="architecture-step" key={number}><div className="step-top"><span>STAGE {number}</span><span>◈</span></div><h3>{title}</h3><p>{text}</p><div className="step-stat"><span>Capability</span><strong>{stat}</strong></div></article>)}</div><div className="terminal"><span>$ build-ai-system --reliable --production-ready</span><span>● Engineering-first delivery</span></div></div></div></section>; }
function Projects() { return <section className="section" id="projects"><div className="container"><SectionHeading kicker="Selected works" title="Production AI & agent architectures" note="Four projects grounded in the technical work described in the resume." /><div className="project-grid">{projects.map((project) => <article className="project card" key={project.title}><div className="project-tag"><span>{project.type}</span><span>◌ PROJECT</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="project-metrics">{project.stats.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div></div></section>; }
function Experience() { return <section className="section" id="experience"><div className="container"><SectionHeading kicker="Engineering provenance" title="Experience & production track record" note="2021 — Present" /><div className="experience-list">{experience.map((item) => <article className="experience card" key={item.company}><div><div className="period">{item.period}</div><h3>{item.title}</h3><div className="company">{item.company}</div></div><div><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>; }
function Skills() { return <section className="section"><div className="container"><div className="skills card">{skillGroups.map(([title, tags]) => <div className="skill-group" key={title}><h3><span>◈</span>{title}</h3><div className="tags">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>)}</div></div></section>; }
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = (event) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`); const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`); window.location.href = `mailto:timusksharma@gmail.com?subject=${subject}&body=${body}`; };
  return <section className="section" id="contact"><div className="container"><div className="contact card"><div><div className="kicker">• Direct connection</div><h2>Let&apos;s build your next AI system</h2><p>For LLM applications, RAG pipelines, data platforms, and production backend systems, get in touch.</p><div className="contact-details"><a href="mailto:timusksharma@gmail.com">✉ timusksharma@gmail.com</a><span>⌖ Bengaluru, Karnataka, India</span><span>◷ Available for remote collaboration</span></div></div><form className="form" onSubmit={submit}><label className="field-label" htmlFor="name">Name / organization</label><input className="field" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name or company" required /><label className="field-label" htmlFor="email">Email address</label><input className="field" id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required /><label className="field-label" htmlFor="message">System scope & objective</label><textarea className="field" id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the problem you want to solve." required /><button className="button primary" type="submit">✉ Start an email</button></form></div></div></section>;
}
function Footer() { return <footer className="container footer"><span>◈ AI ENGINEER / SYSTEMS & DATA</span><span>© {new Date().getFullYear()} Sumit Kumar Sharma</span></footer>; }

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);
  return <div className="page"><Header theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><Hero /><Metrics /><Architecture /><Projects /><Experience /><Skills /><Contact /><Footer /></div>;
}

createRoot(document.getElementById('root')).render(<App />);
