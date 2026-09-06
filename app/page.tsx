'use client';

import { useEffect, useRef, useState } from 'react';

type Language = 'en' | 'es';

const profileLinks = [
  { label: 'ResearchGate', short: 'RG', href: 'https://www.researchgate.net/profile/Elizabeth-Lam-Esquenazi/publications' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/elizabeth-lam-esquenazi-bb85578b/' },
  { label: 'Google Scholar', short: 'GS', href: 'https://scholar.google.com/citations?hl=es&user=Lw0EYoAAAAAJ&view_op=list_works&sortby=pubdate' },
  { label: 'ORCID', short: 'iD', href: 'https://orcid.org/0000-0002-0388-4660' },
  { label: 'RESILMIN', short: 'R', href: 'https://resilmin.ucn.cl/' },
  { label: 'Relaves UCN', short: 'RU', href: 'https://relaves.ucn.cl/', role: { en: 'Director', es: 'Directora' } },
] as const;

const content = {
  en: {
    languageLabel: 'Language', about: 'About me', follow: 'Follow', close: 'Close follow links', location: 'Antofagasta, Chile',
    roleLines: ['Full Professor at the Department of Chemical', 'Engineering and Environment at', 'Universidad Católica del Norte.'],
    paragraphs: [
      'I am a Full Professor at the Department of Chemical Engineering and Environment at Universidad Católica del Norte (UCN) in Antofagasta, Chile, where I have been a faculty member since 1997. I currently lead two research structures at UCN: CITRAM (Center for Technological Innovation in Mining Waste and Tailings) and the Research Nucleus on Technological Developments for Mining Waste Management.',
      "My research focuses on the environmental geochemistry of mine tailings, phytoremediation in hyper-arid environments, and circular economy strategies for mining waste. Northern Chile concentrates some of the world's largest copper mining operations, making these issues both locally urgent and globally relevant. Over the past decade I have built and directed multidisciplinary research teams in these areas, supervising doctoral students and postdoctoral researchers, and securing competitive national and international funding.",
      'I currently direct the ANID Ring Project RESILMIN on Environmental Democracy and Technological Governance for Mine Tailings Management and the FONDEF project developing an AI-based intelligent platform for geochemical soil monitoring. I serve as Principal Investigator of the ANID Ring Project Aqua-Loa on water resources in the Loa River basin, and as Alternate Director of the FRPD Regional Observatory of Mining Tailings. I have also led projects funded by CORFO, the European Commission, BHP, and SENADIS, among others.',
      "I am a member of Chile's Scientific Advisory Committee on Climate Change, advising the Ministry of Science, for a second consecutive term, and I currently serve on the Technical Expert Committee for the National Critical Minerals Strategy. I was a reviewer for the Seventh Edition of UNEP's Global Environment Outlook (GEO-7).",
      'I have authored numerous peer-reviewed articles in high-impact journals on tailings geochemistry and phytoremediation, book chapters, and have served as guest editor and editorial board member for journals including Minerals. I am a Full Member of Sigma Xi, The Scientific Research Honor Society, and was recognized among the 100 Women in Mining (WIM) in 2026.',
      "I hold a Chemical Engineering degree from Universidad de Antofagasta, a Ph.D. in Engineering Sciences from Universidad de Concepción, and a Master's in Mine Closure Plans from the European School of Business (Escuela Europea de Negocios).",
    ],
  },
  es: {
    languageLabel: 'Idioma', about: 'Sobre mí', follow: 'Seguir', close: 'Cerrar enlaces de seguimiento', location: 'Antofagasta, Chile',
    roleLines: ['Profesora titular del Departamento de Ingeniería', 'Química y Medio Ambiente de la', 'Universidad Católica del Norte.'],
    paragraphs: [
      'Soy profesora titular del Departamento de Ingeniería Química y Medio Ambiente de la Universidad Católica del Norte (UCN), en Antofagasta, Chile, donde integro el cuerpo académico desde 1997. Actualmente dirijo dos estructuras de investigación en la UCN: el Centro de Innovación Tecnológica para Residuos y Relaves Mineros (CITRAM) y el Núcleo de Investigación en Desarrollos Tecnológicos para la Gestión de Residuos Mineros.',
      'Mi investigación se centra en la geoquímica ambiental de relaves mineros, la fitorremediación en ambientes hiperáridos y las estrategias de economía circular para residuos mineros. El norte de Chile concentra algunas de las mayores operaciones de minería de cobre del mundo, por lo que estos temas son urgentes a nivel local y relevantes a escala global. Durante la última década he formado y dirigido equipos de investigación multidisciplinarios en estas áreas, supervisando estudiantes de doctorado e investigadores posdoctorales y obteniendo financiamiento competitivo nacional e internacional.',
      'Actualmente dirijo el Proyecto Anillo ANID RESILMIN sobre Democracia Ambiental y Gobernanza Tecnológica para la Gestión de Relaves Mineros, y el proyecto FONDEF que desarrolla una plataforma inteligente basada en inteligencia artificial para el monitoreo geoquímico de suelos. Soy investigadora principal del Proyecto Anillo ANID Aqua-Loa sobre recursos hídricos en la cuenca del río Loa y directora alterna del Observatorio Regional de Relaves Mineros financiado por el FRPD. También he dirigido proyectos financiados por CORFO, la Comisión Europea, BHP y SENADIS, entre otros.',
      'Integro por segundo período consecutivo el Comité Científico Asesor para el Cambio Climático de Chile, que asesora al Ministerio de Ciencia, y actualmente participo en el Comité Técnico de Expertos para la Estrategia Nacional de Minerales Críticos. También fui revisora de la séptima edición del informe Perspectivas del Medio Ambiente Mundial del PNUMA (GEO-7).',
      'He publicado numerosos artículos revisados por pares en revistas de alto impacto sobre geoquímica de relaves y fitorremediación, además de capítulos de libros. También me he desempeñado como editora invitada e integrante de comités editoriales de revistas, entre ellas Minerals. Soy miembro titular de Sigma Xi, The Scientific Research Honor Society, y fui reconocida entre las 100 Mujeres en Minería de WIM en 2026.',
      'Soy Ingeniera Química por la Universidad de Antofagasta, doctora en Ciencias de la Ingeniería por la Universidad de Concepción y máster en Planes de Cierre de Minas por la Escuela Europea de Negocios.',
    ],
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [followOpen, setFollowOpen] = useState(false);
  const followAreaRef = useRef<HTMLDivElement>(null);
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'en' ? 'Elizabeth Lam Esquenazi | Academic profile' : 'Elizabeth Lam Esquenazi | Perfil académico';
  }, [language]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!followAreaRef.current?.contains(event.target as Node)) setFollowOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFollowOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label={copy.languageLabel}>
        <a className="brand" href="#profile">Elizabeth Lam Esquenazi</a>
        <div className="language-switch" role="group" aria-label={copy.languageLabel}>
          <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
          <button type="button" className={language === 'es' ? 'active' : ''} aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>Español</button>
        </div>
      </nav>

      <article id="profile" className="profile-card">
        <header className="profile-header">
          <img className="portrait" src="./elizabeth-lam.png" alt="Elizabeth Lam Esquenazi" width="254" height="324" />
          <div className="identity">
            <h1>Elizabeth Lam Esquenazi</h1>
            <p className="role">{copy.roleLines.map((line) => <span key={line}>{line}</span>)}</p>
          </div>

          <div className="follow-area" ref={followAreaRef}>
            <button type="button" className="follow-button" aria-expanded={followOpen} aria-controls="follow-menu" onClick={() => setFollowOpen((value) => !value)}>
              {copy.follow}<span aria-hidden="true" className="chevron">{followOpen ? '−' : '+'}</span>
            </button>
            {followOpen && (
              <div className="follow-menu" id="follow-menu" role="dialog" aria-label={copy.follow}>
                <div className="menu-tip" aria-hidden="true" />
                <p className="location"><span aria-hidden="true">●</span>{copy.location}</p>
                <ul>
                  {profileLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <span className="link-mark" aria-hidden="true">{link.short}</span>
                        <span>{link.label}{'role' in link && <small>{link.role[language]}</small>}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <button type="button" className="menu-close" onClick={() => setFollowOpen(false)}>{copy.close}</button>
              </div>
            )}
          </div>
        </header>

        <section className="about-section" aria-labelledby="about-title">
          <h2 id="about-title">{copy.about}</h2>
          <div className="about-copy">{copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>
      </article>
    </main>
  );
}
