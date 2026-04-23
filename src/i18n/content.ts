export type Locale = 'de' | 'en';

type Content = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    problem: string;
    solution: string;
    benefits: string;
    contact: string;
  };
  hero: {
    patentLabel: string;
    patentId: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    specLabel: string;
    specItems: { k: string; v: string }[];
    imgAlt: string;
  };
  problem: {
    eyebrow: string;
    headline: string;
    lead: string;
    stats: { value: string; unit: string; label: string; source: string }[];
    errors: {
      title: string;
      intro: string;
      items: { num: string; title: string; body: string }[];
    };
  };
  solution: {
    eyebrow: string;
    headline: string;
    lead: string;
    steps: { num: string; title: string; body: string }[];
    timing: { label: string; value: string };
  };
  benefits: {
    eyebrow: string;
    headline: string;
    items: { title: string; body: string }[];
  };
  cost: {
    eyebrow: string;
    headline: string;
    lead: string;
    withoutLabel: string;
    withLabel: string;
    rows: { label: string; without: string; with: string }[];
    cascade: {
      title: string;
      items: string[];
    };
  };
  applications: {
    eyebrow: string;
    headline: string;
    items: string[];
  };
  credibility: {
    eyebrow: string;
    headline: string;
    body: string;
    facts: { k: string; v: string }[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    mailLabel: string;
    phoneLabel: string;
    subject: string;
  };
  footer: {
    company: string;
    address: string;
    legal: string;
    patent: string;
    langSwitch: { de: string; en: string };
  };
};

export const content: Record<Locale, Content> = {
  de: {
    meta: {
      title: 'Fugenblechzentrierung FBZ – Präzise Zentrierung für WU-Bau',
      description:
        'Die patentangemeldete FBZ zentriert Fugenbleche millimetergenau in der Arbeitsfuge zwischen Bodenplatte und Wand von WU-Konstruktionen. Reduziert eine häufige Ausführungsfehlerquelle am Boden-Wand-Anschluss. Einbau unter einer Minute pro Laufmeter.',
      ogAlt: 'FBZ Fugenblechzentrierung – 3D-Darstellung des Formteils',
    },
    nav: {
      problem: 'Problem',
      solution: 'Lösung',
      benefits: 'Vorteile',
      contact: 'Kontakt',
    },
    hero: {
      patentLabel: 'Patent angemeldet',
      patentId: 'DE 10 2025 121 129.9',
      headlineLine1: 'Fugenbleche.',
      headlineLine2: 'Millimetergenau',
      headlineLine3: 'zentriert.',
      sub: 'Die FBZ ist ein patentangemeldetes Formteil, das Fugenbleche in der Arbeitsfuge zwischen Bodenplatte und Wand automatisch mittig positioniert – und während des Betoniervorgangs sicher in Lage hält.',
      ctaPrimary: 'Angebot anfordern',
      ctaSecondary: 'Wie es funktioniert',
      specLabel: 'Eckdaten',
      specItems: [
        { k: 'Material', v: 'Formteil aus Schaumstoff' },
        { k: 'Einbauzeit', v: '< 1 Minute / lfm' },
        { k: 'Spezialwerkzeug', v: 'Keines erforderlich' },
        { k: 'Einsatzbereich', v: 'WU-Konstruktionen im Boden-Wand-Bereich' },
      ],
      imgAlt: 'FBZ Fugenblechzentrierung – präzises Schaumstoff-Formteil mit zentralem Schlitz zur Aufnahme des Fugenblechs',
    },
    problem: {
      eyebrow: '01 — Das Problem',
      headline: 'Leckagen entstehen meist an derselben Stelle.',
      lead:
        'Nach Sachverständigenerfahrung sind Undichtigkeiten bei Weißen Wannen häufig auf fehlerhaft geplante oder ausgeführte Durchdringungen, Öffnungen, Fugen und Anschlüsse zurückzuführen – besonders kritisch: die Arbeitsfuge zwischen Bodenplatte und Wand.',
      stats: [
        {
          value: 'Immer',
          unit: 'vorhanden',
          label: 'Die Arbeitsfuge zwischen Bodenplatte und aufgehender Wand lässt sich konstruktiv nicht vermeiden – und gilt bei WU-Konstruktionen als anerkannter Schwachpunkt.',
          source: 'BVS Sachverständigenverband · Standpunkt 04/2016',
        },
        {
          value: '5',
          unit: 'Fehlerquellen',
          label: 'am Fugenblech wirken beim Boden-Wand-Anschluss systematisch zusammen: Lageverschiebung, Randabstand, Zentrierung, Einbindetiefe und Beschichtung.',
          source: 'TÜV SÜD Schulungsunterlage · DIBt/ETA · Herstellerangaben',
        },
        {
          value: '5–6',
          unit: 'stellig',
          label: 'Typische Größenordnung einer nachträglichen Instandsetzung pro Schadensfall – zuzüglich Nutzungsausfall, Gutachten und möglicher Rechtsstreitigkeiten.',
          source: 'DBZ Fallstudien · Fachliteratur Bauwerksabdichtung',
        },
      ],
      errors: {
        title: 'Fünf systematische Fehlerquellen beim Einbau',
        intro:
          'Diese Fehler entstehen nicht durch Unwissenheit, sondern durch Zeitdruck, Improvisation und das Fehlen einer verlässlichen Zentrierhilfe.',
        items: [
          {
            num: '01',
            title: 'Verschiebung beim Betonieren',
            body: 'Unzureichende Fixierung – das Fugenblech verrutscht beim Betonieren.',
          },
          {
            num: '02',
            title: 'Abstandsfehler zur Bewehrung',
            body: 'Mindestabstand nach Systemvorgabe unterschritten – der Beton umfließt das Fugenblech nicht vollständig.',
          },
          {
            num: '03',
            title: 'Mangelhafte Zentrierung',
            body: 'Das Blech sitzt nicht mittig in der Arbeitsfuge – einseitige Einbindung.',
          },
          {
            num: '04',
            title: 'Falsche Einbindetiefe',
            body: 'Zu wenig oder zu viel Einbindung in Wand oder Platte – ohne Kontrollinstrument.',
          },
          {
            num: '05',
            title: 'Beschädigung der Beschichtung',
            body: 'Die Beschichtung des Fugenblechs wird während der Betonage beschädigt – Dichtigkeit kompromittiert.',
          },
        ],
      },
    },
    solution: {
      eyebrow: '02 — Die Lösung',
      headline: 'Ein Formteil. Drei Schritte. Kein Spezialwerkzeug.',
      lead:
        'Die FBZ wird auf die Arbeitsfuge aufgesetzt. Das Fugenblech gleitet in einen präzisen Schlitz und zentriert sich dabei automatisch. Der Beton umschließt das System und fixiert alles dauerhaft in der richtigen Position.',
      steps: [
        {
          num: '01',
          title: 'Positionieren',
          body: 'FBZ auf der Arbeitsfuge aufsetzen. Keine Vorarbeit, keine Messung.',
        },
        {
          num: '02',
          title: 'Einstecken',
          body: 'Fugenblech in den Schlitz einführen – es zentriert sich automatisch mittig.',
        },
        {
          num: '03',
          title: 'Betonieren',
          body: 'Beton einbringen. Die FBZ hält das Fugenblech lagesicher in Position.',
        },
      ],
      timing: { label: 'Einbauzeit', value: 'unter 1 Minute pro Laufmeter' },
    },
    benefits: {
      eyebrow: '03 — Kernvorteile',
      headline: 'Was die FBZ leistet.',
      items: [
        {
          title: 'Exakte Zentrierung',
          body: 'Das Fugenblech sitzt automatisch mittig – unabhängig von der Sorgfalt der einzelnen Bauarbeiter.',
        },
        {
          title: 'Zeitersparnis',
          body: 'Schneller, standardisierter Einbau statt Improvisation auf der Baustelle – unter einer Minute pro Laufmeter.',
        },
        {
          title: 'Fehlerreduktion',
          body: 'Eine häufige Ausführungsfehlerquelle am Boden-Wand-Anschluss wird systematisch reduziert.',
        },
        {
          title: 'Kein Spezialwerkzeug',
          body: 'Einfaches Handling – jeder Bauarbeiter kann die FBZ nach einer kurzen Einweisung einsetzen.',
        },
        {
          title: 'Wirtschaftlich',
          body: 'Spart Einbauzeit auf jedem Laufmeter und wirkt einer der teuersten Ursachen für Folgekosten entgegen: undichten Arbeitsfugen.',
        },
      ],
    },
    cost: {
      eyebrow: '04 — Prävention vs. Sanierung',
      headline: 'Ein Bruchteil der Kosten. Ohne den Schaden.',
      lead:
        'Eine nachträgliche Instandsetzung an der Arbeitsfuge bewegt sich pro Schadensfall regelmäßig im fünf- bis sechsstelligen Bereich – zuzüglich Nutzungsausfall, Gutachten und möglicher Rechtsstreitigkeiten. Die FBZ kostet einen Bruchteil davon pro Laufmeter.',
      withoutLabel: 'Ohne FBZ',
      withLabel: 'Mit FBZ',
      rows: [
        {
          label: 'Maßnahme',
          without: 'Nachträgliche Instandsetzung',
          with: 'Prävention durch exakte Zentrierung',
        },
        {
          label: 'Direkte Kosten',
          without: 'Fünf- bis sechsstellig pro Fall',
          with: 'Bruchteil davon, pro Laufmeter',
        },
        {
          label: 'Zusatzkosten',
          without: 'Nutzungsausfall, Gutachten, Rechtsstreit',
          with: 'Keine',
        },
        {
          label: 'Zeitverlust',
          without: 'Wochen bis Monate',
          with: 'Keiner',
        },
      ],
      cascade: {
        title: 'Die Schadenskaskade – was ein fehlerhaftes Fugenblech auslöst',
        items: [
          'Wassereintritt – Feuchteflecken, Wasserfilm, freier Eintritt bei Grundwasserdruck',
          'Sanierungskosten im fünf- bis sechsstelligen Bereich',
          'Nutzungsausfall, Schimmel, Wertminderung',
          'Gutachterstreitigkeiten und Gewährleistungsansprüche',
        ],
      },
    },
    applications: {
      eyebrow: '05 — Einsatzbereiche',
      headline: 'Wo die FBZ zum Einsatz kommt.',
      items: [
        'Tiefgaragenböden im Bodenplatten-Wandanschlussbereich',
        'Keller und Untergeschosse mit Grundwasserbeanspruchung',
        'Industriebauten mit wasserdichten Betonkonstruktionen',
        'Systembau-Projekte mit engen Taktzeiten',
        'Jede Arbeitsfuge zwischen Bodenplatte und aufgehender Wand, die dauerhaft wasserdicht sein muss',
      ],
    },
    credibility: {
      eyebrow: '06 — Hersteller',
      headline: 'Entwickelt aus langjähriger Sachverständigenpraxis.',
      body:
        'Die FBZ wurde von Dr. Ing. Jörn Budde entwickelt – Sachverständiger für Gebäudeabdichtung und Bautenschutz. Aus langjähriger Begutachtungspraxis am Boden-Wand-Anschluss entstand ein Formteil, das die Zentrierung des Fugenblechs standardisiert und eine häufige Ausführungsfehlerquelle reduziert.',
      facts: [
        { k: 'Hersteller', v: 'BBA GmbH' },
        { k: 'Entwickler', v: 'Dr. Ing. Jörn Budde' },
        { k: 'Fachgebiet', v: 'Gebäudeabdichtung · Bautenschutz' },
        { k: 'Patent angemeldet', v: 'DE 10 2025 121 129.9' },
        { k: 'Sitz', v: 'Bad Saarow, Deutschland' },
      ],
    },
    cta: {
      eyebrow: '07 — Kontakt',
      headline: 'Angebot anfordern.',
      body:
        'Schreiben Sie uns eine kurze Nachricht mit Projekt, Laufmeter und gewünschtem Liefertermin. Wir antworten in der Regel innerhalb eines Werktags.',
      mailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      subject: 'Anfrage FBZ Fugenblechzentrierung',
    },
    footer: {
      company: 'BBA GmbH',
      address: 'Silberberger Chaussee 14, 15526 Bad Saarow',
      legal: 'Impressum',
      patent: 'Patent angemeldet: DE 10 2025 121 129.9',
      langSwitch: { de: 'DE', en: 'EN' },
    },
  },
  en: {
    meta: {
      title: 'Waterstop Centering FBZ – Precision Alignment for Watertight Concrete',
      description:
        'The patent-pending FBZ positions waterstop sheets perfectly centered in the construction joint between base slab and wall in watertight concrete structures. Reduces a common installation error at the base-to-wall joint. Installation under one minute per linear meter.',
      ogAlt: 'FBZ Fugenblechzentrierung – 3D view of the foam centering element',
    },
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      benefits: 'Benefits',
      contact: 'Contact',
    },
    hero: {
      patentLabel: 'Patent pending',
      patentId: 'DE 10 2025 121 129.9',
      headlineLine1: 'Waterstops.',
      headlineLine2: 'Perfectly',
      headlineLine3: 'centered.',
      sub: 'The FBZ is a patent-pending formed element that automatically positions waterstop sheets dead-center in the construction joint between base slab and wall — and holds them securely in place throughout the entire pour.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'How it works',
      specLabel: 'Specification',
      specItems: [
        { k: 'Material', v: 'Moulded foam element' },
        { k: 'Install time', v: '< 1 minute / lm' },
        { k: 'Special tooling', v: 'None required' },
        { k: 'Application', v: 'Watertight concrete — base-to-wall' },
      ],
      imgAlt: 'FBZ centering element – precision foam part with central slit to receive the waterstop sheet',
    },
    problem: {
      eyebrow: '01 — The problem',
      headline: 'Leaks almost always appear in the same place.',
      lead:
        'Expert practice shows that leaks in watertight concrete structures usually trace back to poorly designed or executed penetrations, openings, joints and connections — with the construction joint between base slab and wall being especially critical.',
      stats: [
        {
          value: 'Always',
          unit: 'present',
          label: 'The construction joint between base slab and rising wall is structurally unavoidable — and a recognised weak detail in watertight concrete.',
          source: 'BVS Experts Association · position paper 04/2016',
        },
        {
          value: '5',
          unit: 'error sources',
          label: 'at the waterstop combine at the base-to-wall joint: displacement, clearance, centering, embedment and coating damage.',
          source: 'TÜV SÜD training material · DIBt/ETA · manufacturer documentation',
        },
        {
          value: '5–6',
          unit: 'figure',
          label: 'Typical order of magnitude for retroactive remediation per case — plus loss of use, expert reports and potential legal disputes.',
          source: 'DBZ case studies · waterproofing literature',
        },
      ],
      errors: {
        title: 'Five systematic sources of error during installation',
        intro:
          'These errors do not arise from lack of knowledge. They arise from time pressure, improvisation, and the absence of a reliable centering aid.',
        items: [
          {
            num: '01',
            title: 'Displacement during the pour',
            body: 'Insufficient fixation — the waterstop shifts when concrete is placed.',
          },
          {
            num: '02',
            title: 'Insufficient rebar clearance',
            body: 'Minimum clearance per system specification not met — concrete fails to fully encase the waterstop.',
          },
          {
            num: '03',
            title: 'Poor centering',
            body: 'The sheet does not sit centered in the joint — one-sided embedment.',
          },
          {
            num: '04',
            title: 'Wrong embedment depth',
            body: 'Too little or too much embedment into wall or slab — without any control tool.',
          },
          {
            num: '05',
            title: 'Coating damage',
            body: 'The waterstop coating is damaged during the pour — water tightness compromised.',
          },
        ],
      },
    },
    solution: {
      eyebrow: '02 — The solution',
      headline: 'One element. Three steps. No special tools.',
      lead:
        'The FBZ is placed on the construction joint. The waterstop sheet slides into a precision slit and self-centers automatically. Concrete then encases the system and locks everything permanently in place.',
      steps: [
        {
          num: '01',
          title: 'Place',
          body: 'Position the FBZ on the construction joint. No prep work, no measurement.',
        },
        {
          num: '02',
          title: 'Insert',
          body: 'Slide the waterstop into the slit — it self-centers automatically.',
        },
        {
          num: '03',
          title: 'Pour',
          body: 'Place the concrete. The FBZ holds the waterstop securely in position.',
        },
      ],
      timing: { label: 'Install time', value: 'under 1 minute per linear meter' },
    },
    benefits: {
      eyebrow: '03 — Key benefits',
      headline: 'What the FBZ delivers.',
      items: [
        {
          title: 'Exact centering',
          body: 'The waterstop sits centered automatically — independent of individual worker diligence.',
        },
        {
          title: 'Time saved',
          body: 'Fast, standardised installation instead of improvisation on site — under one minute per linear meter.',
        },
        {
          title: 'Error reduction',
          body: 'A common installation error source at the base-to-wall joint is systematically reduced.',
        },
        {
          title: 'No special tools',
          body: 'Simple handling — any worker can install the FBZ after a brief instruction.',
        },
        {
          title: 'Economical',
          body: 'Saves installation time on every linear meter and counters one of the costliest causes of follow-up damage: leaking construction joints.',
        },
      ],
    },
    cost: {
      eyebrow: '04 — Prevention vs. remediation',
      headline: 'A fraction of the cost. Without the damage.',
      lead:
        'Retroactive remediation at the construction joint regularly runs in the five- to six-figure range per case — plus loss of use, expert reports and potential legal disputes. The FBZ costs a fraction of that per linear meter.',
      withoutLabel: 'Without FBZ',
      withLabel: 'With FBZ',
      rows: [
        {
          label: 'Action',
          without: 'Retroactive remediation',
          with: 'Prevention through exact centering',
        },
        {
          label: 'Direct cost',
          without: 'Five- to six-figure per case',
          with: 'A fraction, per linear meter',
        },
        {
          label: 'Indirect cost',
          without: 'Loss of use, expert reports, legal',
          with: 'None',
        },
        {
          label: 'Time lost',
          without: 'Weeks to months',
          with: 'None',
        },
      ],
      cascade: {
        title: 'The damage cascade — what a faulty waterstop triggers',
        items: [
          'Water ingress — damp patches, water film, free inflow under groundwater pressure',
          'Remediation costs in the five- to six-figure range',
          'Loss of use, mould, devaluation',
          'Expert disputes and warranty claims',
        ],
      },
    },
    applications: {
      eyebrow: '05 — Applications',
      headline: 'Where the FBZ is used.',
      items: [
        'Underground car park floors at the base slab-to-wall junction',
        'Basements and cellars exposed to groundwater',
        'Industrial buildings with watertight concrete',
        'System-build projects with tight schedules',
        'Any construction joint between base slab and rising wall that must remain permanently watertight',
      ],
    },
    credibility: {
      eyebrow: '06 — Manufacturer',
      headline: 'Engineered from long-standing expert practice.',
      body:
        'The FBZ was developed by Dr. Ing. Jörn Budde — expert for building waterproofing and structural protection. Emerging from many years of expert practice at the base-to-wall joint, the element standardises waterstop centering and reduces a common source of installation error.',
      facts: [
        { k: 'Manufacturer', v: 'BBA GmbH' },
        { k: 'Developer', v: 'Dr. Ing. Jörn Budde' },
        { k: 'Field', v: 'Waterproofing · Structural protection' },
        { k: 'Patent pending', v: 'DE 10 2025 121 129.9' },
        { k: 'Location', v: 'Bad Saarow, Germany' },
      ],
    },
    cta: {
      eyebrow: '07 — Contact',
      headline: 'Request a quote.',
      body:
        'Send us a short message with your project, the required linear meters, and your delivery target. We usually reply within one business day.',
      mailLabel: 'Email',
      phoneLabel: 'Phone',
      subject: 'Inquiry FBZ Fugenblechzentrierung',
    },
    footer: {
      company: 'BBA GmbH',
      address: 'Silberberger Chaussee 14, 15526 Bad Saarow, Germany',
      legal: 'Legal notice',
      patent: 'Patent pending: DE 10 2025 121 129.9',
      langSwitch: { de: 'DE', en: 'EN' },
    },
  },
};
