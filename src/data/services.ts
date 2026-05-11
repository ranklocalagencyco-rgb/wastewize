export interface Service {
  id:        string;
  title:     string;
  cat:       'clearance' | 'construction' | 'specialist' | 'materials';
  catLabel:  string;
  icon:      string;
  shortDesc: string;
  desc:      string;
  pills:     string[];
  href:      string;
}

export const services: Service[] = [
  {
    id:        'strip-out',
    title:     'Strip out & Demolition',
    cat:       'clearance',
    catLabel:  'Clearance',
    icon:      'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    shortDesc: 'Interior strip-outs & soft demolition with full waste-transfer documentation.',
    desc:      'Full strip-out and soft demolition of commercial and residential interiors. We remove fixtures, fittings, and non-structural elements with full waste-transfer documentation.',
    pills:     ['EA Licensed', 'Duty of care', 'Same-week availability'],
    href:      '/services/strip-out-demolition',
  },
  {
    id:        'commercial-clearance',
    title:     'Commercial Clearance',
    cat:       'clearance',
    catLabel:  'Clearance',
    icon:      'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    shortDesc: 'Office & retail clearance of any size — fully insured, flexible scheduling.',
    desc:      'End-of-tenancy and office clearance for retail units, warehouses, and commercial premises of any size. Includes furniture, equipment, and general debris removal.',
    pills:     ['Office & retail', 'Fully insured', 'Flexible scheduling'],
    href:      '/services/commercial-clearance',
  },
  {
    id:        'residential-waste',
    title:     'Residential Waste',
    cat:       'clearance',
    catLabel:  'Clearance',
    icon:      'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    shortDesc: 'House clearances & bulky item collections, from single items to full properties.',
    desc:      'House clearances, bulky item collections, and domestic waste removal. From single-item pickups to full property clearances after bereavement or relocation.',
    pills:     ['House clearance', 'Bulky items', 'Short-notice bookings'],
    href:      '/services/residential-waste',
  },
  {
    id:        'garden-refuse',
    title:     'Garden Refuse',
    cat:       'clearance',
    catLabel:  'Clearance',
    icon:      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    shortDesc: 'Green waste collection & composting for domestic gardens and landscaping projects.',
    desc:      'Collection and composting of garden waste including grass cuttings, branches, soil, and green waste. Suitable for domestic gardens and commercial landscaping projects.',
    pills:     ['Green waste', 'Composted responsibly', 'Seasonal surge capacity'],
    href:      '/services/garden-refuse',
  },
  {
    id:        'building-construction',
    title:     'Building & Construction',
    cat:       'construction',
    catLabel:  'Construction',
    icon:      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    shortDesc: 'On-site skips & waste management for construction sites with compliance docs.',
    desc:      'On-site waste management for construction and refurbishment projects. Segregated skips, muck-away, and mixed-load collections with full site compliance documentation.',
    pills:     ['On-site segregation', 'Muck-away', 'Site compliance docs'],
    href:      '/services/building-construction',
  },
  {
    id:        'electrical-equipment',
    title:     'Electrical Equipment',
    cat:       'specialist',
    catLabel:  'Specialist',
    icon:      'M13 10V3L4 14h7v7l9-11h-7z',
    shortDesc: 'WEEE-compliant electrical recycling with transfer notes & data destruction.',
    desc:      'WEEE-compliant collection and recycling of electrical and electronic equipment. We issue WEEE transfer notes and ensure full compliance with UK regulations.',
    pills:     ['WEEE compliant', 'Transfer notes issued', 'Data destruction available'],
    href:      '/services/electrical-equipment',
  },
  {
    id:        'confidential-waste',
    title:     'Confidential Waste',
    cat:       'specialist',
    catLabel:  'Specialist',
    icon:      'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    shortDesc: 'Secure document shredding with a certificate of destruction. GDPR compliant.',
    desc:      'Secure collection and destruction of confidential documents and sensitive media. Certificate of destruction issued for every collection — GDPR and DPA 2018 compliant.',
    pills:     ['Certificate of destruction', 'GDPR compliant', 'On-site shredding available'],
    href:      '/services/confidential-waste',
  },
  {
    id:        'asbestos-removal',
    title:     'Asbestos Removal',
    cat:       'specialist',
    catLabel:  'Specialist',
    icon:      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    shortDesc: 'HSE-licensed asbestos removal with air monitoring & waste consignment notes.',
    desc:      'Licensed asbestos surveying, encapsulation, and removal by HSE-licensed contractors. Full air monitoring, analyst sign-off, and waste consignment notes provided.',
    pills:     ['HSE licensed', 'Air monitoring', 'Waste consignment notes'],
    href:      '/services/asbestos-removal',
  },
  {
    id:        'hardcore-wood',
    title:     'Hardcore & Wood',
    cat:       'materials',
    catLabel:  'Materials',
    icon:      'M12 3a9 9 0 100 18A9 9 0 0012 3zM12 8a4 4 0 110 8 4 4 0 010-8zM12 12h.01',
    shortDesc: 'Hardcore crushed & recycled; timber chipped for biomass. Segregated loads.',
    desc:      'Segregated collection of hardcore, rubble, timber, and wood waste from construction and demolition sites. Hardcore is crushed and recycled; wood is chipped for biomass.',
    pills:     ['Crushed & recycled', 'Biomass wood chip', 'Segregated loads preferred'],
    href:      '/services/hardcore-wood',
  },
  {
    id:        'scrap-metal',
    title:     'Scrap Metal',
    cat:       'materials',
    catLabel:  'Materials',
    icon:      'M6 3v9a6 6 0 0012 0V3M6 3h3m6 0h3M6 3v3m12-3v3',
    shortDesc: 'Ferrous & non-ferrous scrap recycling at competitive rates. Transfer notes included.',
    desc:      'Collection and responsible recycling of ferrous and non-ferrous scrap metal from commercial, industrial, and construction sources. Competitive rates; waste transfer notes included.',
    pills:     ['Ferrous & non-ferrous', 'Competitive rates', 'Transfer notes included'],
    href:      '/services/scrap-metal',
  },
];
