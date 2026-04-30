import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PROJECTS, BUSINESS_ACUMEN } from './constants';
 
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="w-full h-20 border-b border-border flex items-center justify-between px-6 md:px-12 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-tighter uppercase">Andrew Puccio</div>
        <div className="hidden md:flex space-x-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          {['Projects', 'Method', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary hover:text-primary transition-colors border-b-2 border-transparent hover:border-black pb-1"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Structural Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        
        {/* Left Panel: Hero & Intro */}
        <section className="lg:col-span-5 lg:border-r border-border p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              Marketing Director · Producer · Brand Strategist
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8">
              Where creative direction meets <span className="font-serif italic text-zinc-400">intentional</span> <span className="font-medium underline decoration-1 underline-offset-[12px]">scale</span>.
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-sm mb-12">
              From directing network television to leading the marketing operation behind the nation's largest production rental house, I work at the intersection of creative and strategy. Currently Director of Marketing & Creative at Lensrentals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://vimeo.com/user3817472" target="_blank" rel="noreferrer" className="h-14 px-8 bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-zinc-800 transition-colors">
                View My Work
              </a>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/andrew-puccio-6808a9150/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://vimeo.com/user3817472" target="_blank" rel="noreferrer" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-4 border-t border-border pt-8">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">Open to New Roles · Q3 2026</p>
              <p className="text-[10px] text-secondary italic">Memphis, TN / Global</p>
            </div>
          </div>
        </section>

        {/* Right Panel: Content & Showcase */}
        <section className="lg:col-span-7 flex flex-col">
          
          {/* Top: Project Grid — starts immediately, no About block */}
          <div id="projects" className="flex-1 grid md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <div 
                key={project.id}
                className={cn(
                  "border-b border-border p-8 md:p-12 flex flex-col justify-between group hover:bg-zinc-50 cursor-pointer transition-colors min-h-[400px]",
                  index % 2 === 0 ? "md:border-r" : ""
                )}
              >
                <div>
                  <p className="text-[10px] text-secondary uppercase tracking-[0.2em] mb-2">0{index + 1} / {project.category}</p>
                  <h3 className="text-2xl font-medium mb-4 group-hover:underline underline-offset-4">{project.title}</h3>
                  <div className="aspect-video mb-6 overflow-hidden bg-zinc-100 border border-border">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-secondary leading-relaxed max-w-xs mb-4">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:underline underline-offset-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
 
          {/* Middle: Discipline & Method */}
          <div id="method" className="p-8 md:p-12 lg:p-16 border-b border-border bg-white">
            <div className="max-w-2xl">
                <p className="text-[10px] text-secondary uppercase tracking-[0.3em] mb-6">Discipline & Method</p>
                <h2 className="text-4xl font-light mb-12">How I deliver <span className="font-serif italic">measurable</span> results.</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {BUSINESS_ACUMEN.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-3">{item.title}</h4>
                      <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
 
          {/* Bottom: Contact Area */}
          <div id="contact" className="p-8 md:p-12 lg:p-16 bg-black text-white flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-2/5">
              <h4 className="text-4xl md:text-5xl font-light mb-8 text-white flex flex-col leading-tight">
                <span>Let's</span>
                <span className="font-serif italic text-zinc-400">Talk!</span>
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                Open to Director of Marketing, Head of Creative, Executive Producer, and senior brand leadership roles. Currently based in Memphis, available globally.
              </p>
            </div>
            
            <div className="lg:w-3/5 flex flex-col justify-center">
              <div className="space-y-10">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Primary Email</p>
                  <a 
                    href="mailto:andrewjamespuccio@gmail.com" 
                    className="text-xl md:text-2xl font-light hover:text-zinc-400 transition-colors flex items-center gap-3"
                  >
                    andrewjamespuccio@gmail.com
                    <Mail className="w-4 h-4 text-zinc-700" />
                  </a>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Direct Line</p>
                  <a 
                    href="tel:9018506700" 
                    className="text-xl md:text-2xl font-light hover:text-zinc-400 transition-colors flex items-center gap-3"
                  >
                    901.850.6700
                    <Phone className="w-4 h-4 text-zinc-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
 
      {/* Footer */}
      <footer className="h-24 md:h-20 border-t border-border flex items-center justify-between px-6 md:px-12 text-[9px] font-medium text-zinc-400 uppercase tracking-[0.4em] bg-white">
        <div className="hidden md:block">© {new Date().getFullYear()} Andrew Puccio</div>
        <div className="flex items-center gap-12 w-full md:w-auto justify-center md:justify-end">
          <a href="https://www.linkedin.com/in/andrew-puccio-6808a9150/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="https://vimeo.com/user3817472" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Vimeo</a>
        </div>
      </footer>
    </div>
  );
}
