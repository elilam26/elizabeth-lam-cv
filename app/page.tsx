'use client';

import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaLocationDot, FaMountain } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';

type Language = 'en' | 'es';
type PageName = 'about' | 'research';

const profileLinks = [
  { label: 'ResearchGate', icon: 'researchgate', href: 'https://www.researchgate.net/profile/Elizabeth-Lam-Esquenazi/publications' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/elizabeth-lam-esquenazi-bb85578b/' },
  { label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?hl=es&user=Lw0EYoAAAAAJ&view_op=list_works&sortby=pubdate' },
  { label: 'ORCID', icon: 'orcid', href: 'https://orcid.org/0000-0002-0388-4660' },
  { label: 'RESILMIN', icon: 'resilmin', href: 'https://resilmin.ucn.cl/' },
  { label: 'Relaves UCN', icon: 'relaves', href: 'https://relaves.ucn.cl/', role: { en: 'Director', es: 'Directora' } },
  { label: 'ORRM', icon: 'orrm', href: 'https://orrm.ucn.cl/', role: { en: 'Alternate Director', es: 'Directora alterna' } },
] as const;

type ProfileIconName = (typeof profileLinks)[number]['icon'];

function ProfileIcon({ name }: { name: ProfileIconName }) {
  if (name === 'researchgate') {
    return <span className="profile-icon researchgate-icon" aria-hidden="true">R<sup>G</sup></span>;
  }
  if (name === 'resilmin') {
    return <span className="profile-icon resilmin-icon" aria-hidden="true"><img src="./resilmin-icon.png" alt="" /></span>;
  }
  if (name === 'orrm') {
    return <span className="profile-icon orrm-icon" aria-hidden="true"><img src="./orrm-logo.png" alt="" /></span>;
  }

  const icons = {
    linkedin: <FaLinkedin />,
    scholar: <SiGooglescholar />,
    orcid: <SiOrcid />,
    relaves: <FaMountain />,
  };
  return <span className={`profile-icon ${name}-icon`} aria-hidden="true">{icons[name]}</span>;
}

const content = {
  en: {
    languageLabel: 'Language', navAbout: 'About Me', navResearch: 'Research', follow: 'Follow', close: 'Close follow links', location: 'Antofagasta, Chile',
    degree: 'Ph.D. in Engineering Sciences',
    roleLines: ['Full Professor at the Department of Chemical', 'Engineering and Environment at', 'Universidad Católica del Norte.'],
    about: 'About me', recognition: 'Selected Recognition', memberships: 'Memberships & Advisory Roles',
    currentProjects: 'Current Research Projects', pastProjects: 'Past Projects', publications: 'Publications',
    publicationFooter: 'Full publication list available on',
    paragraphs: [
      'I am a Full Professor at the Department of Chemical Engineering and Environment at Universidad Católica del Norte (UCN) in Antofagasta, Chile, where I have been a faculty member since 1997. I currently lead two research structures at UCN: CITRAM (Center for Technological Innovation in Mining Waste and Tailings) and the Research Nucleus on Technological Developments for Mining Waste Management.',
      "My research focuses on the environmental geochemistry of mine tailings, phytoremediation in hyper-arid environments, circular economy strategies for mining waste, and thermodynamic and physical properties of electrolyte solutions. Northern Chile concentrates some of the world's largest copper mining operations, making these issues both locally urgent and globally relevant. I have built and directed multidisciplinary research teams in these areas, supervising doctoral students and postdoctoral researchers, and securing competitive national and international funding.",
      "I am a member of Chile's Scientific Advisory Committee on Climate Change, advising the Ministry of Science, for a second consecutive term, and I currently serve on the Technical Expert Committee for the National Critical Minerals Strategy. I was a reviewer for the Seventh Edition of UNEP's Global Environment Outlook (GEO-7).",
      'I have authored peer-reviewed articles in high-impact journals on tailings geochemistry and phytoremediation, book chapters, and have served as guest editor and editorial board member for journals including Minerals. I am a Full Member of Sigma Xi, The Scientific Research Honor Society, and was recognized among the 100 Women in Mining (WIM) in 2026.',
      "I hold a Chemical Engineering degree from Universidad de Antofagasta, a Ph.D. in Engineering Sciences from Universidad de Concepción, and a Master's in Mine Closure Plans from the European School of Business (Escuela Europea de Negocios).",
    ],
  },
  es: {
    languageLabel: 'Idioma', navAbout: 'Sobre mí', navResearch: 'Investigación', follow: 'Seguir', close: 'Cerrar enlaces de seguimiento', location: 'Antofagasta, Chile',
    degree: 'Doctora en Ciencias de la Ingeniería',
    roleLines: ['Profesora titular del Departamento de Ingeniería', 'Química y Medio Ambiente de la', 'Universidad Católica del Norte.'],
    about: 'Sobre mí', recognition: 'Reconocimientos destacados', memberships: 'Membresías y funciones de asesoría',
    currentProjects: 'Proyectos de investigación actuales', pastProjects: 'Proyectos anteriores', publications: 'Publicaciones',
    publicationFooter: 'La lista completa de publicaciones está disponible en',
    paragraphs: [
      'Soy profesora titular del Departamento de Ingeniería Química y Medio Ambiente de la Universidad Católica del Norte (UCN), en Antofagasta, Chile, donde integro el cuerpo académico desde 1997. Actualmente dirijo dos estructuras de investigación en la UCN: el Centro de Innovación Tecnológica para Residuos y Relaves Mineros (CITRAM) y el Núcleo de Investigación en Desarrollos Tecnológicos para la Gestión de Residuos Mineros.',
      'Mi investigación se centra en la geoquímica ambiental de relaves mineros, la fitorremediación en ambientes hiperáridos, las estrategias de economía circular para residuos mineros y las propiedades termodinámicas y físicas de soluciones electrolíticas. El norte de Chile concentra algunas de las mayores operaciones de minería de cobre del mundo, por lo que estos temas son urgentes a nivel local y relevantes a escala global. He formado y dirigido equipos de investigación multidisciplinarios en estas áreas, supervisando estudiantes de doctorado e investigadores posdoctorales y obteniendo financiamiento competitivo nacional e internacional.',
      'Integro por segundo período consecutivo el Comité Científico Asesor para el Cambio Climático de Chile, que asesora al Ministerio de Ciencia, y actualmente participo en el Comité Técnico de Expertos para la Estrategia Nacional de Minerales Críticos. También fui revisora de la séptima edición del informe Perspectivas del Medio Ambiente Mundial del PNUMA (GEO-7).',
      'He publicado artículos revisados por pares en revistas de alto impacto sobre geoquímica de relaves y fitorremediación, además de capítulos de libros. También me he desempeñado como editora invitada e integrante de comités editoriales de revistas, entre ellas Minerals. Soy miembro titular de Sigma Xi, The Scientific Research Honor Society, y fui reconocida entre las 100 Mujeres en Minería de WIM en 2026.',
      'Soy Ingeniera Química por la Universidad de Antofagasta, doctora en Ciencias de la Ingeniería por la Universidad de Concepción y máster en Planes de Cierre de Minas por la Escuela Europea de Negocios.',
    ],
  },
} as const;

const recognition = [
  { year: '2026', en: 'Recognized among the 100 Women in Mining (WIM)', es: 'Reconocida entre las 100 Mujeres en Minería (WIM)' },
  { year: '2025', en: '“Mujeres Líderes 2025” recognition, El Mercurio de Antofagasta', es: 'Reconocimiento “Mujeres Líderes 2025”, El Mercurio de Antofagasta' },
  { year: '2024', en: 'Full Membership in Sigma Xi, The Scientific Research Honor Society', es: 'Membresía titular en Sigma Xi, The Scientific Research Honor Society' },
  { year: '2024', en: 'Recognition for Female Leadership in Research and Development, UCN', es: 'Reconocimiento al Liderazgo Femenino en Investigación y Desarrollo, UCN' },
  { year: '2024', en: 'Reviewer, UNEP Global Environment Outlook (GEO-7)', es: 'Revisora del informe Perspectivas del Medio Ambiente Mundial del PNUMA (GEO-7)' },
  { year: '2022', en: 'Doctor Honoris Causa, Organización Internacional para la Inclusión y Calidad Educativa (OIICE)', es: 'Doctora Honoris Causa, Organización Internacional para la Inclusión y Calidad Educativa (OIICE)' },
  { year: '2022', en: 'Award for Educational Excellence, OIICE (Mexico City Edition)', es: 'Premio a la Excelencia Educativa, OIICE (edición Ciudad de México)' },
  { year: '2021', en: 'Recognition for disability inclusion work, SENADIS', es: 'Reconocimiento por trabajo de inclusión de personas con discapacidad, SENADIS' },
  { year: '2013', en: 'Outstanding Professor Award, Universidad Católica del Norte', es: 'Premio Profesora Destacada, Universidad Católica del Norte' },
  { year: '2008', en: 'Innovation Recognition Award, CORFO Innova Chile', es: 'Reconocimiento a la Innovación, CORFO Innova Chile' },
  { year: '1989', en: 'First in class, Chemical Engineering, Universidad de Antofagasta', es: 'Primer lugar de la promoción de Ingeniería Química, Universidad de Antofagasta' },
] as const;

const memberships = [
  { en: 'Scientific Advisory Committee on Climate Change (C4), Ministry of Science, Chile (2nd term, 2024–2028)', es: 'Comité Científico Asesor para el Cambio Climático (C4), Ministerio de Ciencia, Chile (segundo período, 2024–2028)' },
  { en: 'Technical Expert Committee, National Critical Minerals Strategy, Ministry of Mining, Chile (2025–2027)', es: 'Comité Técnico de Expertos, Estrategia Nacional de Minerales Críticos, Ministerio de Minería, Chile (2025–2027)' },
  { en: 'President, Accreditation Standardization Commission (CNA), Chilean Society of Soil Science (2025–2027)', es: 'Presidenta de la Comisión de Normalización de Acreditación (CNA), Sociedad Chilena de la Ciencia del Suelo (2025–2027)' },
  { en: 'Full Member, Sigma Xi, The Scientific Research Honor Society', es: 'Miembro titular de Sigma Xi, The Scientific Research Honor Society' },
  { en: 'Regional Director, Organización Internacional para la Inclusión y Calidad Educativa (OIICE)', es: 'Directora regional, Organización Internacional para la Inclusión y Calidad Educativa (OIICE)' },
  { en: 'Editorial Board Member, Journal of Mineral and Material Science', es: 'Integrante del comité editorial, Journal of Mineral and Material Science' },
  { en: 'Topical Advisory Panel Member, Minerals (MDPI)', es: 'Integrante del panel asesor temático, Minerals (MDPI)' },
  { en: 'Member, Chilean Society of Soil Science', es: 'Miembro de la Sociedad Chilena de la Ciencia del Suelo' },
] as const;

const currentProjects = [
  {
    role: { en: 'Director', es: 'Directora' }, roleClass: 'director',
    title: { en: 'ANID Ring Project RESILMIN – Environmental Democracy and Technological Governance for Mine Tailings Management', es: 'Proyecto Anillo ANID RESILMIN – Democracia Ambiental y Gobernanza Tecnológica para la Gestión de Relaves Mineros' },
    meta: 'ANID – ATE250035 · 2025–2027', href: 'https://resilmin.ucn.cl/',
    description: { en: 'This project addresses the challenge of mine tailings management in Chile, integrating technological innovation with environmental governance to develop tools and frameworks for sustainable management, geochemical monitoring, circular economy approaches, and community participation in arid and hyper-arid regions.', es: 'Este proyecto aborda el desafío de la gestión de relaves mineros en Chile e integra innovación tecnológica y gobernanza ambiental para desarrollar herramientas y marcos de gestión sostenible, monitoreo geoquímico, economía circular y participación comunitaria en regiones áridas e hiperáridas.' },
  },
  {
    role: { en: 'Principal Investigator', es: 'Investigadora principal' }, roleClass: 'pi',
    title: { en: 'ANID Ring Project Aqua-Loa – Water Resources for Agriculture in Hyper-Arid Zones', es: 'Proyecto Anillo ANID Aqua-Loa – Recursos hídricos para la agricultura en zonas hiperáridas' },
    meta: 'ANID – ATE250025 · 2025–2027',
    description: { en: 'Exploration, quality assessment, and ecosystem restoration in the Loa River basin, integrating hydrogeology, geochemistry, and environmental restoration.', es: 'Exploración, evaluación de calidad y restauración de ecosistemas en la cuenca del río Loa, integrando hidrogeología, geoquímica y restauración ambiental.' },
  },
  {
    role: { en: 'Director', es: 'Directora' }, roleClass: 'director',
    title: { en: 'FONDEF – Intelligent Platform for Environmental Management and Soil Monitoring', es: 'FONDEF – Plataforma inteligente para gestión ambiental y monitoreo de suelos' },
    meta: 'ANID FONDEF · 2024–2026',
    description: { en: 'Development of an AI-based platform for geochemical baseline modeling and soil monitoring in the Antofagasta region, integrating machine learning with field geochemistry data.', es: 'Desarrollo de una plataforma basada en inteligencia artificial para modelar líneas base geoquímicas y monitorear suelos en la Región de Antofagasta, integrando aprendizaje automático y datos geoquímicos de terreno.' },
  },
  {
    role: { en: 'Director', es: 'Directora' }, roleClass: 'director',
    title: { en: 'FONDEF – Stabilization Process for Copper Tailings as Construction Aggregates', es: 'FONDEF – Proceso de estabilización de relaves de cobre como áridos de construcción' },
    meta: 'ANID FONDEF I+D · 2022–2025',
    description: { en: 'Development of an agglomeration process for copper mine tailings, enabling their reuse as construction material and advancing circular economy strategies.', es: 'Desarrollo de un proceso de aglomeración de relaves de cobre que permite reutilizarlos como material de construcción y avanzar en estrategias de economía circular.' },
  },
  {
    role: { en: 'Alternate Director', es: 'Directora alterna' }, roleClass: 'pi',
    title: { en: 'Regional Observatory of Mining Tailings (ORRM)', es: 'Observatorio Regional de Relaves Mineros (ORRM)' },
    meta: 'FRPD Antofagasta · 2025–2027', href: 'https://orrm.ucn.cl/',
    description: { en: 'A regional platform for monitoring, characterizing, and promoting circular economy strategies for mining tailings in the Antofagasta region.', es: 'Plataforma regional para monitorear, caracterizar y promover estrategias de economía circular para los relaves mineros de la Región de Antofagasta.' },
  },
  {
    role: { en: 'Researcher', es: 'Investigadora' }, roleClass: 'researcher',
    title: { en: 'Center for AI Innovation for the Antofagasta Region', es: 'Centro de Innovación en Inteligencia Artificial para la Región de Antofagasta' },
    meta: 'FRPD Antofagasta · 2025–2027',
    description: { en: 'Regional center for artificial intelligence innovation, integrating AI applications across mining, environment, and education in northern Chile.', es: 'Centro regional de innovación en inteligencia artificial que integra aplicaciones en minería, medio ambiente y educación en el norte de Chile.' },
  },
] as const;

const pastProjects = [
  { role: { en: 'Director', es: 'Directora' }, roleClass: 'director', title: 'Emprende-Incluye-Impacta en la Región de Antofagasta', meta: 'FIC-R · 2021–2023', description: { en: 'Regional innovation project fostering inclusive entrepreneurship and social impact in the Antofagasta region.', es: 'Proyecto regional de innovación para fomentar el emprendimiento inclusivo y el impacto social en la Región de Antofagasta.' } },
  { role: { en: 'Alternate Director', es: 'Directora alterna' }, roleClass: 'pi', title: 'AcuyMinAgro', meta: 'BHP (International Competition BHP-Súmate) · 2021–2024', description: { en: 'International project exploring sustainable intersections between mining, aquaculture, and agriculture in arid zones.', es: 'Proyecto internacional que exploró interacciones sostenibles entre minería, acuicultura y agricultura en zonas áridas.' } },
  { role: { en: 'Director', es: 'Directora' }, roleClass: 'director', title: { en: 'Paving Stone Prototypes from Mine Tailings', es: 'Prototipos de adoquines elaborados con relaves mineros' }, meta: 'Ing 2030 · 2019–2020', description: { en: 'Development of paving stone prototypes using copper mine tailings as aggregates.', es: 'Desarrollo de prototipos de adoquines utilizando relaves de cobre como áridos.' } },
  { role: { en: 'International Advisor', es: 'Asesora internacional' }, roleClass: 'researcher', title: 'Sol Precaire', meta: 'European Commission (SUDOE Programme) · 2016–2019', description: { en: 'European project addressing contaminated soils in precarious conditions across the SUDOE region.', es: 'Proyecto europeo sobre suelos contaminados en condiciones precarias en la región SUDOE.' } },
  { role: { en: 'Director', es: 'Directora' }, roleClass: 'director', title: { en: 'Integrated Magnetochemical Technologies and Phytotechnologies for Heavy Metal Remediation', es: 'Tecnologías magnetoquímicas y fitotecnologías integradas para remediar metales pesados' }, meta: 'CORFO-INNOVA · 2009–2013', description: { en: 'Integrated system combining magnetochemical technologies and phytoremediation to treat heavy metals in mining environmental liabilities.', es: 'Sistema integrado que combinó tecnologías magnetoquímicas y fitorremediación para tratar metales pesados en pasivos ambientales mineros.' } },
  { role: { en: 'International Advisor', es: 'Asesora internacional' }, roleClass: 'researcher', title: { en: 'Post-Mined Polluted Landscapes Reclamation', es: 'Recuperación de paisajes contaminados tras la actividad minera' }, meta: 'European Commission · 2009–2015', description: { en: 'European project on reclaiming post-mining polluted landscapes through the valorization of different residues.', es: 'Proyecto europeo para recuperar paisajes contaminados posminería mediante la valorización de distintos residuos.' } },
  { role: { en: 'International Advisor', es: 'Asesora internacional' }, roleClass: 'researcher', title: 'IRIS – Integrated European Industrial Risk Reduction System', meta: 'European Commission, Seventh Framework Programme · 2009–2011', description: { en: 'Collaborative European project on industrial risk reduction systems.', es: 'Proyecto colaborativo europeo sobre sistemas de reducción del riesgo industrial.' } },
] as const;

const publications = [
  ['Beyond Traditional Methods: Machine Learning for Geochemical Baselines and Anomaly Detection', 'G. Ananganó-Alvarado, E. Lam-Esquenazi, Í. Montofré-Bacigalupo et al.', 'Minerals, 16(7), 700 · 2026'],
  ['Analysis of Quantum Machine Learning Methods for Geochemical Pattern Recognition', 'B. Keith-Norambuena, M. Orellana-Hormazábal, Í. Montofré-Bacigalupo et al.', 'IEEE Access · 2026'],
  ['Multi-Element Soil-Geochemistry Dataset, La Negra Formation, Chile', 'E. Lam-Esquenazi, J. Tapia-Zamora, B. Keith-Norambuena et al.', 'Geoscience Data Journal, 13(3), e70090 · 2026'],
  ['Quantum Kernels for Narrative Coherence: An Application to Path Optimization in Document Graphs for Storyline Extraction', 'B. Keith-Norambuena, J. Canales, M. Araya, C. Rojas-Córdova et al.', 'Mathematics, 14(10), 1734 · 2026'],
  ['Benchmarking Hierarchical and Spectral Clustering for Geochemical Baseline and Anomaly Detection in Hyper-Arid Soils of Northern Chile', 'G. Ananganó-Alvarado, B. Keith, E. Lam, Í. Montofré et al.', 'Minerals, 15(11), 1185 · 2025'],
  ['Magnetic Properties as Proxies for Geochemical Prediction in Mining Tailings: A Semi-Supervised Spatial Approach', 'E. Lam, B. Keith, J. Bech, C. Herrera, J. Urrutia & Í. Montofré', 'Minerals, 15(3), 197 · 2025'],
  ['Aplicación de modelos de lenguaje para el análisis geoquímico ambiental de suelos en la región de Antofagasta', 'B. Ibarra-Campillay, E. Lam-Esquenazi & B. Keith-Norambuena', 'Ingeniare. Revista Chilena de Ingeniería, 33 · 2025'],
  ['From Mine Waste to Construction Materials: A Bibliometric Analysis of Mining Waste Recovery and Tailing Utilization in Construction', 'V. Zetola, B. Keith, E. Lam, Í. Montofré, R. Rojas, J. Marín & M. Becerra', 'Sustainability, 16(23), 10314 · 2024'],
  ['The scientific landscape of phytoremediation of tailings: a bibliometric and scientometric analysis', 'B. Keith, E. Lam, Í. Montofré, V. Zetola & J. Bech', 'International Journal of Phytoremediation, 26(13), 2084–2102 · 2024'],
  ['Mining Sustainability: A Reality in Arid Zones', 'E. Lam, I. Montofré & F. Alvarez', 'Biodiversity and Ecosystem Services on Post-Industrial Land, 1–23 · 2024'],
  ['Evaluation of the geochemical background of soil in a hyper-arid zone using a multivariate statistical methodology', 'B. Keith, E. Lam, Í. Montofré, V. Zetola, J. Urrutia, C. Herrera & J. Bech', 'Chemosphere, 366, 143472 · 2024'],
  ['An Evaluation of the Brine Flow in the Upper Part of the Halite Nucleus of the Salar de Atacama (Chile) through an Isotopic Study of δ¹⁸O and δ²H', 'C. Herrera, J. Urrutia, L. Godfrey, J. Jódar, M. Pereira et al.', 'Water, 16(18), 2651 · 2024'],
  ['Origin of old saline groundwater in the deep coastal formations of the Atacama Desert region', 'C. Herrera, L. Godfrey, J. Urrutia, E. Custodio, C. Gamboa, J. Jódar, E. Lam & J. Fuentes', 'Journal of Hydrology, 624, 129919 · 2023'],
  ['An extension of the characteristic curve model of plant species behavior in heavy metal soils', 'E. Lam, B. Keith, J. Bech, M. Gálvez, R. Rojas, F. Alvarez, V. Zetola & Í. Montofré', 'Environmental Geochemistry and Health, 45(12), 9477–9494 · 2023'],
  ['Heavy metal pollution index calculation in geochemistry assessment: a case study on Playa Las Petroleras', 'E. Lam, J. Urrutia, J. Bech, C. Herrera, Í. Montofré, V. Zetola & M. Cánovas', 'Environmental Geochemistry and Health, 45(2), 409–426 · 2023'],
  ['Characteristic curve modeling of plant species behavior in soils with heavy metals', 'E. Lam, B. Keith, J. Bech, F. Alvarez, V. Zetola, L. Pereira & Í. Montofré', 'Environmental Geochemistry and Health, 45(12), 8867–8880 · 2023'],
  ['Editorial for special issue “Risk assessment, management and control of mining contamination”', 'E. Lam, A. Bernardo-Sánchez & V. Sokoła-Szewioła', 'Minerals, 12(8), 992 · 2022'],
  ['Hydrochemical evolution of the Reocín mine filling water (Spain)', 'N. Barral, R. Husillos, E. Castillo, M. Cánovas & E. Lam', 'Environmental Geochemistry and Health, 43(12), 5119–5134 · 2021'],
  ['Evaluation of copper tailing amendments through poultry waste and ammonium nitrate', 'Í. Montofré, E. Lam, Y. Ramírez & M. Gálvez', 'Environmental Geochemistry and Health, 43(6), 2213–2230 · 2021'],
  ['Volumetric quantification and quality of water stored in a mining lake: A case study at Reocín mine (Spain)', 'N. Barral, R. Husillos, E. Castillo, M. Cánovas, E. Lam & L. Calvo', 'Minerals, 11(2), 212 · 2021'],
  ['Mine tailings phytoremediation in arid and semiarid environments', 'E. Lam, Í. Montofré & Y. Ramírez', 'Phytorestoration of Abandoned Mining and Oil Drilling Sites, 115–166 · 2021'],
  ['A methodology based on magnetic susceptibility to characterize copper mine tailings', 'E. Lam, R. Carle, R. González, Í. Montofré, E. Veloso, A. Bernardo & F. Álvarez', 'Minerals, 10(11), 939 · 2020'],
  ['Methodology to prioritize Chilean tailings selection, according to their potential risks', 'E. Lam, Í. Montofré, F. Álvarez, N. Gaete, D. Poblete & R. Rojas', 'International Journal of Environmental Research and Public Health, 17(11), 3948 · 2020'],
  ['Making Paving Stones from Copper Mine Tailings as Aggregates', 'E. Lam, V. Zetola, Y. Ramírez, Í. Montofré & F. Pereira', 'International Journal of Environmental Research and Public Health, 17(7), 2448 · 2020'],
  ['Necessity of intervention policies for tailings identified in the Antofagasta Region, Chile', 'E. Lam, B. Keith, Í. Montofré & M. Gálvez', 'Revista Internacional de Contaminación Ambiental, 35(3), 515–539 · 2019'],
  ['Copper Uptake by Adesmia atacamensis in a Mine Tailing in an Arid Environment', 'E. Lam, B. Keith, Í. Montofré & M. Gálvez', 'Air, Soil and Water Research, 11 · 2018'],
  ['Assessment of the adaptive capacity of plant species in copper mine tailings in arid and semiarid environments', 'E. Lam, M. Gálvez, M. Cánovas, Í. Montofré & B. Keith', 'Journal of Soils and Sediments, 18(6), 2203–2216 · 2018'],
  ['Evaluation of soil intervention values in mine tailings in northern Chile', 'E. Lam, B. Keith, Í. Montofré & M. Gálvez', 'PeerJ, 6, e5879 · 2018'],
  ['Evaluation of the phytoremediation potential of native plants growing on a copper mine tailing in northern Chile', 'E. Lam, M. Cánovas, M. Gálvez, Í. Montofré, B. Keith & Á. Faz', 'Journal of Geochemical Exploration, 182, 210–217 · 2017'],
  ['Evaluation of metal mobility from copper mine tailings in northern Chile', 'E. Lam, M. Gálvez, M. Cánovas, I. Montofré, D. Rivero & A. Faz', 'Environmental Science and Pollution Research, 23(12), 11901–11915 · 2016'],
  ['Evaluación de un sistema de desalinización solar, tipo concentrador cilíndrico parabólico de agua de mar', 'C. Mercado & E. Lam', 'Avances en Ciencias e Ingeniería, 6(4), 19–27 · 2015'],
  ['Phytoremediation of lead and zinc using Myoporum laetum and Brassica nigra in Antofagasta, Northern Chile', 'E. Lam & Í. Montofré', 'Advances in GeoEcology, 40, 355–360 · 2009'],
] as const;

function localized(value: string | { en: string; es: string }, language: Language) {
  return typeof value === 'string' ? value : value[language];
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState<PageName>('about');
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

  const showPage = (page: PageName) => {
    setActivePage(page);
    setFollowOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label={copy.languageLabel}>
        <button type="button" className="brand" onClick={() => showPage('about')}>Elizabeth Lam Esquenazi</button>
        <div className="page-switch" role="group" aria-label={language === 'en' ? 'Sections' : 'Secciones'}>
          <button type="button" className={activePage === 'about' ? 'active' : ''} aria-pressed={activePage === 'about'} onClick={() => showPage('about')}>{copy.navAbout}</button>
          <button type="button" className={activePage === 'research' ? 'active' : ''} aria-pressed={activePage === 'research'} onClick={() => showPage('research')}>{copy.navResearch}</button>
        </div>
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
            <p className="degree">{copy.degree}</p>
            <a className="profile-email" href="mailto:elam@ucn.cl"><FaEnvelope aria-hidden="true" />elam@ucn.cl</a>
          </div>

          <div className="follow-area" ref={followAreaRef}>
            <button type="button" className="follow-button" aria-expanded={followOpen} aria-controls="follow-menu" onClick={() => setFollowOpen((value) => !value)}>
              {copy.follow}<span aria-hidden="true" className="chevron">{followOpen ? '−' : '+'}</span>
            </button>
            {followOpen && (
              <div className="follow-menu" id="follow-menu" role="dialog" aria-label={copy.follow}>
                <div className="menu-tip" aria-hidden="true" />
                <p className="location"><FaLocationDot aria-hidden="true" />{copy.location}</p>
                <ul>
                  {profileLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <ProfileIcon name={link.icon} />
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

        {activePage === 'about' ? (
          <div className="content-page">
            <section className="about-section section-block" aria-labelledby="about-title">
              <h2 id="about-title">{copy.about}</h2>
              <div className="about-copy">{copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
            <section className="section-block compact-section" aria-labelledby="recognition-title">
              <h2 id="recognition-title">{copy.recognition}</h2>
              <ul className="detail-list recognition-list">
                {recognition.map((item) => <li key={`${item.year}-${item.en}`}><strong>{item.year}</strong><span>{item[language]}</span></li>)}
              </ul>
            </section>
            <section className="section-block compact-section" aria-labelledby="memberships-title">
              <h2 id="memberships-title">{copy.memberships}</h2>
              <ul className="detail-list membership-list">
                {memberships.map((item) => <li key={item.en}>{item[language]}</li>)}
              </ul>
            </section>
          </div>
        ) : (
          <div className="content-page research-page">
            <section className="section-block compact-section" aria-labelledby="current-projects-title">
              <h2 id="current-projects-title">{copy.currentProjects}</h2>
              <div className="projects-list">
                {currentProjects.map((project) => (
                  <article className="project" key={project.title.en}>
                    <span className={`project-role ${project.roleClass}`}>{project.role[language]}</span>
                    <h3>{'href' in project ? <a href={project.href} target="_blank" rel="noreferrer">{project.title[language]}</a> : project.title[language]}</h3>
                    <p className="project-meta">{project.meta}</p>
                    <p className="project-description">{project.description[language]}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="section-block compact-section" aria-labelledby="past-projects-title">
              <h2 id="past-projects-title">{copy.pastProjects}</h2>
              <div className="projects-list">
                {pastProjects.map((project) => (
                  <article className="project" key={localized(project.title, language)}>
                    <span className={`project-role ${project.roleClass}`}>{project.role[language]}</span>
                    <h3>{localized(project.title, language)}</h3>
                    <p className="project-meta">{project.meta}</p>
                    <p className="project-description">{project.description[language]}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="section-block compact-section" aria-labelledby="publications-title">
              <h2 id="publications-title">{copy.publications}</h2>
              <div className="publications-list">
                {publications.map(([title, authors, journal]) => (
                  <article className="publication" key={title}>
                    <h3>{title}</h3>
                    <p>{authors}</p>
                    <cite>{journal}</cite>
                  </article>
                ))}
              </div>
              <p className="publication-footer">{copy.publicationFooter}{' '}
                <a href="https://scholar.google.com/citations?hl=es&user=Lw0EYoAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">Google Scholar</a>{' '}
                {language === 'en' ? 'and' : 'y'}{' '}
                <a href="https://www.researchgate.net/profile/Elizabeth-Lam-Esquenazi/publications" target="_blank" rel="noreferrer">ResearchGate</a>.
              </p>
            </section>
          </div>
        )}
      </article>
      <footer>Elizabeth Lam Esquenazi · Universidad Católica del Norte · Antofagasta, Chile</footer>
    </main>
  );
}
