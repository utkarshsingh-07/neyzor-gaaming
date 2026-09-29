import React, {useEffect, useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X, Gamepad2, Trophy, Users, Handshake, Play, CalendarDays, Sparkles, Mail, Linkedin, Instagram, Youtube } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { services, events, team, navItems } from "./data/company";

const fadeUp = {hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}}};

function Logo({compact=false}) {
  return <Link to="/" className={"logo"+(compact?" logo-compact":"")}>
    <span className="logo-mark" aria-hidden="true"><span>N</span><span>G</span></span>
    <span className="logo-type"><b>NEYZOR</b><small>GAAMING</small></span>
  </Link>
}

function Navbar(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(scrollY>20); addEventListener("scroll",f); return()=>removeEventListener("scroll",f)},[]);
  return <header className={"nav "+(scrolled?"nav-scrolled":"")}>
    <Logo/>
    <nav className="desktop-nav">{navItems.map(n=><Link key={n.href} to={n.href}>{n.label}</Link>)}</nav>
    <Link className="nav-cta" to="/contact">LET'S CONNECT <ArrowUpRight size={15}/></Link>
    <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    {open && <div className="mobile-menu">{navItems.map(n=><Link onClick={()=>setOpen(false)} key={n.href} to={n.href}>{n.label}</Link>)}<Link onClick={()=>setOpen(false)} className="nav-cta" to="/contact">LET'S CONNECT <ArrowUpRight size={15}/></Link></div>}
  </header>
}

function Hero(){
  const {scrollYProgress}=useScroll();
  const y=useTransform(scrollYProgress,[0,.35],[0,100]);
  return <section className="hero">
    <motion.div className="hero-bg" style={{y}}/>
    <div className="hero-grid"/>
    <div className="container hero-inner">
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="eyebrow"><span/> GAMING • ESPORTS • ENTERTAINMENT</motion.div>
      <motion.h1 initial="hidden" animate="show" variants={fadeUp}>WE ARE BUILDING<br/>THE NEXT ERA<br/><em>OF GAMING.</em></motion.h1>
      <motion.p initial="hidden" animate="show" variants={fadeUp}>NEYZOR GAAMING is a next-generation gaming and esports company creating experiences, communities and opportunities at the intersection of gaming, technology and entertainment.</motion.p>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-actions"><Link className="btn primary" to="/what-we-do">EXPLORE NEYZOR <ArrowUpRight/></Link><Link className="btn" to="/contact">WORK WITH US <ArrowUpRight/></Link></motion.div>
      <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
    </div>
  </section>
}

function Intro(){
 return <section className="section intro"><div className="container two-col">
  <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><div className="eyebrow">01 / OUR VISION</div><h2>MORE THAN A GAMING COMPANY.<br/><span>WE'RE BUILDING AN ECOSYSTEM.</span></h2></motion.div>
  <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><p className="lead">NEYZOR GAAMING brings together gaming, esports, creators, communities, brands and digital entertainment to build experiences that connect people through play.</p><p>We create opportunities across competitive gaming, tournaments, gaming communities, content, brand partnerships, events and digital experiences.</p><div className="mini-grid">{["GAMING","ESPORTS","EVENTS","COMMUNITY"].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span><ArrowUpRight/></div>)}</div></motion.div>
 </div></section>
}

function About(){
 return <section className="section about"><div className="container two-col about-layout">
   <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}><div className="eyebrow">02 / ABOUT US</div><h2>OUR <span>STORY</span></h2><p>Gaming is no longer just a form of entertainment. It is a culture, a community and a global opportunity.</p><p>NEYZOR GAAMING was created with a simple ambition — to build meaningful experiences around gaming and esports while creating opportunities for players, creators, brands and communities.</p><p>From competitive gaming and tournaments to digital content, partnerships and community-led experiences, we aim to build a platform where gaming culture can thrive.</p><Link className="text-link" to="/about">LEARN MORE <ArrowUpRight/></Link></motion.div>
   <div className="about-art"><div className="orb"/><div className="portrait-grid"><span/><span/><span/></div></div>
 </div></section>
}

function WhatWeDo(){
 return <section className="section services"><div className="container"><div className="section-head"><div><div className="eyebrow">03 / OUR FOCUS</div><h2>WHAT WE <span>DO</span></h2></div><Link className="text-link" to="/what-we-do">VIEW ALL <ArrowUpRight/></Link></div>
 <div className="service-grid">{services.map((s,i)=><motion.div key={s.title} className="service-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><div className="card-top"><span>0{i+1}</span>{React.createElement(s.icon)}</div><h3>{s.title}</h3><p>{s.description}</p><ArrowUpRight className="card-arrow"/></motion.div>)}</div></div></section>
}

function Ecosystem(){
 const nodes=[["GAMERS",Gamepad2],["TEAMS",Trophy],["CREATORS",Sparkles],["COMMUNITIES",Users],["BRANDS",Handshake],["PUBLISHERS",Play],["EVENTS",CalendarDays]];
 return <section className="section ecosystem"><div className="container"><div className="eyebrow">04 / OUR ECOSYSTEM</div><h2>THE NEYZOR <span>ECOSYSTEM</span></h2><p className="max-copy">Connecting players, creators, communities, brands and publishers to create bigger opportunities in gaming and esports.</p><div className="eco-wrap"><div className="eco-lines"/><div className="eco-center"><Logo compact/><span>GAMING • ESPORTS</span></div>{nodes.map(([n,I],i)=><div key={n} className={"eco-node n"+i}><I/><b>{n}</b></div>)}</div></div></section>
}

function Events(){
 return <section className="section events"><div className="container"><div className="section-head"><div><div className="eyebrow">05 / UPCOMING</div><h2>EVENTS & <span>EXPERIENCES</span></h2></div><Link className="text-link" to="/events">VIEW ALL EVENTS <ArrowUpRight/></Link></div><div className="event-grid">{events.map((e,i)=><motion.article className="event-card" key={e.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className={"event-art art-"+i}><span>{e.status}</span></div><div className="event-copy"><h3>{e.title}</h3><p>{e.description}</p><ArrowUpRight/></div></motion.article>)}</div></div></section>
}

function Impact(){
 return <section className="section impact"><div className="container"><div className="eyebrow">06 / OUR IMPACT</div><h2>A GROWING GAMING <span>ECOSYSTEM</span></h2><div className="impact-grid">{["COMMUNITY","EVENTS","CREATORS","PARTNERS"].map(x=><div key={x}><strong>00+</strong><span>{x}</span></div>)}</div></div></section>
}

function Contact(){
 return <section className="section contact-page"><div className="container contact-layout"><div><div className="eyebrow">LET'S CONNECT</div><h1>LET'S BUILD<br/><span>SOMETHING EPIC.</span></h1><p>Have an idea, partnership or gaming experience in mind? Let's talk.</p></div><form onSubmit={e=>{e.preventDefault(); alert("Thanks — your message has been captured in this demo.")}}><input required placeholder="Name"/><input placeholder="Company"/><input required type="email" placeholder="Email"/><input placeholder="Phone"/><select defaultValue=""><option value="" disabled>What are you looking for?</option><option>Esports</option><option>Gaming Event</option><option>Brand Partnership</option><option>Creator Partnership</option><option>Other</option></select><textarea required placeholder="Message"/><button className="btn primary" type="submit">SEND MESSAGE <ArrowUpRight/></button></form></div></section>
}

function Footer(){return <footer><div className="container footer-grid"><div><Logo/><p>Gaming. Esports. Experiences.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="YouTube"><Youtube/></a></div></div><div><b>QUICK LINKS</b>{navItems.slice(1).map(n=><Link key={n.href} to={n.href}>{n.label}</Link>)}</div><div><b>LEGAL</b><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div></div><div className="container footer-bottom">© 2026 NEYZOR GAAMING. ALL RIGHTS RESERVED.</div></footer>}

function GenericPage({title,eyebrow,children}){return <><Navbar/><main className="inner-page"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{children}</div></main><Footer/></>}

function Home(){return <><Navbar/><main><Hero/><Intro/><About/><WhatWeDo/><Ecosystem/><Events/><Impact/><section className="section final-cta"><div className="container"><div className="eyebrow">READY WHEN YOU ARE</div><h2>LET'S BUILD<br/><span>SOMETHING EPIC.</span></h2><Link className="btn primary" to="/contact">START A CONVERSATION <ArrowUpRight/></Link></div></section></main><Footer/></>}

export default function App(){
 return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<GenericPage eyebrow="02 / ABOUT US" title="OUR STORY"><p className="page-copy">Gaming is a culture, a community and a global opportunity. NEYZOR GAAMING exists to create meaningful experiences around gaming and esports while opening opportunities for players, creators, brands and communities.</p></GenericPage>}/>
  <Route path="/what-we-do" element={<><Navbar/><WhatWeDo/><Footer/></>}/>
  <Route path="/ecosystem" element={<><Navbar/><Ecosystem/><Footer/></>}/>
  <Route path="/events" element={<><Navbar/><Events/><Footer/></>}/>
  <Route path="/partners" element={<GenericPage eyebrow="07 / PARTNERS" title="BUILT TO COLLABORATE"><p className="page-copy">We collaborate with brands, publishers, creators, gaming communities and organizations to create meaningful gaming experiences.</p><div className="partner-placeholders">{[1,2,3,4,5].map(n=><div key={n}>PARTNER 0{n}</div>)}</div></GenericPage>}/>
  <Route path="/team" element={<GenericPage eyebrow="08 / THE PEOPLE" title="THE PEOPLE BEHIND NEYZOR"><div className="team-grid">{team.map(t=><div className="team-card" key={t.role}><div className="team-photo"/><b>{t.name}</b><span>{t.role}</span></div>)}</div></GenericPage>}/>
  <Route path="/careers" element={<GenericPage eyebrow="09 / CAREERS" title="BUILD THE FUTURE WITH US."><p className="page-copy">Gaming is evolving fast. We're looking for people who want to help shape what comes next.</p><div className="career-list">{["Esports Operations","Event Production","Content","Partnerships","Marketing","Technology"].map(x=><div key={x}>{x}<ArrowUpRight/></div>)}</div></GenericPage>}/>
  <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>}/>
 </Routes>
}