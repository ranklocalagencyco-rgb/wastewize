export interface ProcessStep {
  title: string;
  desc:  string;
}

export interface ComplianceBadge {
  badge: string;
  title: string;
  desc:  string;
  href?: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface BodySection {
  heading: string;
  body:    string;
}

export interface ServiceDetail {
  slug:         string;
  metaTitle:    string;
  metaDesc:     string;
  heroDesc:     string;
  bodySections: BodySection[];
  included:     string[];
  process:      ProcessStep[];
  compliance:   ComplianceBadge[];
  faqs:         ServiceFAQ[];
  relatedIds:   string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {

  'strip-out-demolition': {
    slug:      'strip-out-demolition',
    metaTitle: 'Strip Out & Demolition London | EA-Licensed Interior Strip-Out | WasteWize UK',
    metaDesc:  'Professional interior strip-out and soft demolition across London and the Home Counties. EA-licensed, same-week availability, full duty-of-care documentation. Get a free quote.',
    heroDesc:  'Professional interior strip-out and soft demolition for commercial and residential projects across London and the Home Counties. Our experienced crews remove fixtures, fittings, partitions, raised floors, and all non-structural elements safely and efficiently, with full waste segregation and EA-licensed disposal on every project. Every job includes duty-of-care Waste Transfer Notes delivered within 24 hours.',
    bodySections: [
      {
        heading: 'Strip-Out for Commercial Refurbishments',
        body:    'The majority of our interior strip-out work takes place on commercial projects — office refurbishments, retail fit-outs, hotel renovations, and mixed-use developments across Central London and the wider Home Counties. We regularly work alongside principal contractors as the dedicated strip-out and waste management subcontractor, clearing completed floors while construction continues elsewhere in the building. Our crews are accustomed to tight programme windows, restricted working hours, and active-site conditions. We arrive with our own access equipment, so we are never waiting on yours. Clients typically tell us we are the fastest part of their supply chain.',
      },
      {
        heading: 'Residential Strip-Out for Home Renovations',
        body:    'For homeowners undertaking full-scale renovations — kitchen gut-outs, bathroom removals, loft conversion preparations, or extension works — our residential strip-out service clears everything so your building contractor starts on a clean canvas. We remove kitchens, bathroom suites, and fitted wardrobes, including connected waste pipes and cabling where accessible. Items are segregated for recycling or donation wherever possible. A full Waste Transfer Note is issued on every residential strip-out, giving you the compliance paperwork your buildings insurer may require as evidence of lawful disposal.',
      },
      {
        heading: 'Material Segregation and Our 99% Landfill Diversion Rate',
        body:    'On-site segregation is the primary driver of our 99% landfill diversion rate. Every strip-out produces several distinct material streams: structural timber, plasterboard, metal framing, copper cabling, ceramic tiles, and general mixed waste. By separating these throughout the removal process, we direct each to the most efficient recovery route — plasterboard to gypsum recyclers, metal to certified smelters, timber to biomass or board processors. We provide a written material breakdown per stream on request, which is particularly useful for BREEAM assessments, planning compliance, and ESG reporting on larger commercial projects.',
      },
    ],
    included: [
      'Fixtures, fittings, and built-in furniture',
      'Partition walls and internal dividers (non-structural)',
      'Raised access floors and sub-frames',
      'Carpets, tiles, and all floor coverings',
      'Kitchen and bathroom units',
      'Suspended ceilings and lighting rigs',
      'Cabling, conduit, and pipework extraction',
      'Site dust-down and broom-clean on completion',
    ],
    process: [
      {
        title: 'Site Survey',
        desc:  'We visit the site to assess scope, identify any hazardous materials — including suspected asbestos-containing materials (ACMs) — and agree access and working-hours requirements.',
      },
      {
        title: 'Asbestos Check',
        desc:  'If suspected ACMs are present, we arrange a licensed refurbishment/demolition asbestos survey before any stripping work begins. Work does not proceed until the survey is cleared.',
      },
      {
        title: 'Crew Mobilisation',
        desc:  'Our uniformed team arrives with all plant and equipment. Floor protection and access sheeting are laid before any stripping begins.',
      },
      {
        title: 'Systematic Strip-Out',
        desc:  'Materials are removed level by level and segregated on site into metal, timber, plasterboard, and general streams to achieve the maximum possible recycling rate.',
      },
      {
        title: 'Waste Removal & Documentation',
        desc:  'All loads are removed to EA-licensed facilities. Duty-of-care Waste Transfer Notes are issued and emailed within 24 hours of final clearance.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Upper-Tier Waste Carrier Licence', desc: 'Licence No. CBDU335711 — legally authorised to collect, transport, and broker all controlled waste streams.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Notes',   desc: 'Issued for every load under the Environmental Protection Act 1990. Your legal protection against fly-tipping liability.' },
      { badge: 'ACM',  title: 'Asbestos Awareness Trained',          desc: 'All strip-out crews hold UKATA Asbestos Awareness certification. Licensed asbestos removal arranged through our specialist partners before any stripping commences.' },
      { badge: '99%',  title: '99% Landfill Diversion',              desc: 'On most strip-out projects all recovered material is stream-segregated for recycling — achieving near-zero landfill.' },
    ],
    faqs: [
      {
        q: 'What is the difference between strip-out and structural demolition?',
        a: 'Strip-out removes non-structural internal fittings — partitions, ceilings, floors, fixtures, and fit-out. Structural demolition removes load-bearing walls, columns, and frames. WasteWize specialises in strip-out and soft demolition only. We do not touch structural steelwork or load-bearing elements.',
      },
      {
        q: 'Do I need planning permission for an interior strip-out?',
        a: 'For internal non-structural works on a standard commercial or residential building, planning permission is generally not required. However, if the building is listed, you will need listed building consent for even minor internal alterations. We recommend confirming with your local planning authority before work commences.',
      },
      {
        q: 'Can you work outside normal business hours?',
        a: 'Yes. We regularly work evenings and weekends to minimise disruption to neighbouring businesses or to operational areas of the building. Overtime rates may apply — confirm at the quotation stage.',
      },
      {
        q: 'What happens to the materials after removal?',
        a: 'All materials are stream-segregated on site. Metal is sent to certified smelters; timber to biomass or timber recycling; plasterboard to specialist gypsum recyclers; and general mixed waste to energy-from-waste facilities. We achieve a 99% landfill diversion rate on most strip-out projects.',
      },
    ],
    relatedIds: ['asbestos-removal', 'building-construction', 'commercial-clearance'],
  },

  'commercial-clearance': {
    slug:      'commercial-clearance',
    metaTitle: 'Commercial Clearance London | Retail, Warehouse & Industrial | WasteWize UK',
    metaDesc:  'EA-licensed commercial clearance for retail units, warehouses, restaurants, and industrial premises across London and the Home Counties. Fixed-price quotes, short-notice availability.',
    heroDesc:  'EA-licensed commercial clearance for retail units, warehouses, restaurants, and industrial premises across London and the Home Counties. Property managers, landlords, and facilities teams choose WasteWize for fast end-of-tenancy turnarounds, flexible scheduling, and a complete compliance paper trail on every job. Need a dedicated office clearance? See our specialist office clearance service.',
    bodySections: [
      {
        heading: 'Retail & Warehouse End-of-Tenancy Clearance',
        body:    'End-of-tenancy clearances are among our most frequent commercial instructions. Whether you have a retail unit full of shelving and point-of-sale fixtures, a warehouse with industrial racking and stored stock, or a restaurant with commercial kitchen equipment to strip out, WasteWize provides fast turnaround — typically within 48 to 72 hours of instruction for a standard unit. We liaise directly with building managers to coordinate loading bay access, parking permits, and any landlord restrictions on working hours, so you do not need to act as the go-between. Premises are left broom-clean and ready for your agent to photograph and re-let.',
      },
      {
        heading: 'Industrial & Specialist Commercial Clearance',
        body:    'WasteWize handles clearances that most companies decline — light industrial premises containing machinery and process equipment, commercial kitchens with heavy catering appliances, server rooms with rack enclosures, and storage facilities with mixed hazardous and non-hazardous material. Large or awkward items such as safes, commercial ovens, industrial freezers, and heavy shelving are handled with appropriate lifting equipment. For unusually heavy items, we can arrange crane-assisted removal through our specialist plant subcontractor network.',
      },
      {
        heading: 'Reuse, Donation, and Recycling Before Disposal',
        body:    'Before anything goes to a disposal facility, we assess cleared items for reuse. Serviceable commercial furniture and equipment is offered to local charities, schools, and social enterprises in our partner network — documented for your company\'s CSR and sustainability reporting. IT equipment is separated as WEEE and processed by registered handlers, with official transfer notes issued. Only items with no viable reuse or recycling route go to energy-from-waste — nothing we handle goes to landfill when a recovery pathway exists.',
      },
    ],
    included: [
      'Retail fixtures, shelving, display units, and point-of-sale equipment',
      'Warehouse racking, pallet storage, and industrial shelving',
      'Commercial kitchen and catering equipment',
      'Restaurant fit-out and front-of-house furniture',
      'IT equipment and server racks (WEEE-compliant stream)',
      'Industrial machinery and process equipment',
      'General commercial fit-out, carpet, and floor tiles',
      'Site broom-clean on completion',
    ],
    process: [
      {
        title: 'Quote & Site Survey',
        desc:  'We visit the premises (or review photos and a floor plan) and provide a written fixed-price quotation within 24 hours. No hidden extras.',
      },
      {
        title: 'Access Coordination',
        desc:  'We liaise directly with your building manager to confirm lift access, parking, and any building-management restrictions on working hours.',
      },
      {
        title: 'Clearance Day',
        desc:  'Our uniformed crew arrives on time. All items are removed systematically and segregated by material stream — furniture, WEEE, metal, and general waste are kept separate.',
      },
      {
        title: 'WEEE & IT Handling',
        desc:  'Electrical equipment is processed separately under the WEEE Regulations. Official WEEE Duty of Care Transfer Notes are issued. Data destruction certificates are available on request.',
      },
      {
        title: 'Documentation & Sign-Off',
        desc:  'A full duty-of-care Waste Transfer Note is provided. A signed copy is retained on file for your compliance records. The premises is left broom-clean and ready for handover.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Upper-Tier Waste Carrier Licence', desc: 'Licence No. CBDU335711 — legally authorised to collect, transport, and broker all controlled waste.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'WEEE', title: 'WEEE-Registered Disposal',            desc: 'All electrical and electronic equipment is collected and processed by WEEE-registered handlers. Transfer notes issued for every load.' },
      { badge: '£5m',  title: 'Public Liability Insurance',          desc: 'WasteWize carries £5 million public liability insurance on all commercial clearance operations.' },
      { badge: 'DBS',  title: 'DBS-Checked Crew',                   desc: 'All crew members working on commercial premises are DBS checked and uniformed.' },
    ],
    faqs: [
      {
        q: 'Can you clear a commercial premises at short notice?',
        a: 'Yes. We routinely take short-notice bookings for commercial clearances — particularly for end-of-tenancy work where lease surrender dates are fixed and non-negotiable. Call us with your deadline and we will confirm vehicle availability within the hour.',
      },
      {
        q: 'Do you provide a fixed-price quote?',
        a: 'Yes. After a site visit or a detailed photo/inventory assessment, we issue a written fixed-price quotation. You pay the quoted amount regardless of how long the job takes — there are no hourly rate surprises on the final invoice.',
      },
      {
        q: 'Do you donate or reuse cleared office furniture?',
        a: 'Where items are in usable condition, we first offer them to local charities, schools, and social enterprises. Furniture that cannot be donated is directed to certified reuse networks or recycling facilities. We aim to keep reusable items out of the waste stream entirely.',
      },
      {
        q: 'What happens if hazardous materials are found during the clearance?',
        a: 'If we encounter asbestos, unknown chemical containers, or other hazardous materials, we pause work immediately and advise you on the appropriate specialist removal process. Hazardous waste is never mixed with general clearance loads — each stream requires its own licensed handler and documentation.',
      },
    ],
    relatedIds: ['strip-out-demolition', 'residential-waste', 'confidential-waste'],
  },

  'residential-waste': {
    slug:      'residential-waste',
    metaTitle: 'Residential Waste Removal London | Bulky Item Collection | WasteWize UK',
    metaDesc:  'EA-licensed residential waste removal and bulky item collection across London and the Home Counties. Single items to loft, garage, and partial room clearances. Same-week availability.',
    heroDesc:  'EA-licensed residential waste removal and bulky item collection for London homeowners, landlords, and residents across the Home Counties. Whether you need a single sofa collected, a garage emptied, a loft cleared after decades of accumulation, or a mixed load of household rubbish removed, WasteWize handles every size of job with a fixed-price quote, same-week availability, and a Duty of Care Waste Transfer Note on every collection. Need a full property cleared? See our dedicated house clearance service.',
    bodySections: [
      {
        heading: 'Bulky Items & Partial Clearances — No Volume Too Small',
        body:    'Not every job is a full property clearance. WasteWize collects single bulky items — a sofa the council will not take, a mattress left by a previous tenant, an old washing machine that needs responsible disposal — as well as partial clearances where one room or outbuilding needs emptying rather than the whole property. We load and carry everything ourselves so you do not need to move items to the kerb or hire a skip. Most single-item and small-load collections are booked within two working days and completed in under an hour.',
      },
      {
        heading: 'Items the Council Refuse Service Will Not Collect',
        body:    'Local authority refuse services have strict size and volume limits — and an ever-growing list of items they will not accept. WasteWize has no such restrictions. We collect heavily stained mattresses and bed frames, fridges and freezers (F-gas certified disposal), upright pianos and heavy furniture, full kitchen units including ceramic hobs and extractor fans, bathroom suites, broken flatscreen televisions, and mixed bags of general household waste. Difficult or specialist items are factored into your fixed quote rather than charged as extras on the day.',
      },
      {
        heading: 'Legal Proof Your Waste Was Handled Correctly',
        body:    'If you pay an unlicensed trader to remove waste and they fly-tip it, the legal liability can fall back to you as the waste producer under the Environmental Protection Act 1990. Every WasteWize residential collection includes a Duty of Care Waste Transfer Note issued on the day of collection. This document traces your waste from your property to its licensed disposal destination and is your legal proof of compliant handling. We retain a copy; you keep a copy. Environment Agency fines for producers who cannot produce a WTN start at £400 and can exceed £5,000 for larger volumes.',
      },
    ],
    included: [
      'Single bulky item collections (sofas, mattresses, white goods)',
      'Mixed household waste loads',
      'Loft and garage clearances',
      'Shed and outbuilding contents',
      'Garden furniture and equipment',
      'WEEE electronics (TVs, computers, appliances)',
      'F-gas white goods (fridges, freezers) — certified disposal',
      'Partial room and single-floor clearances',
    ],
    process: [
      {
        title: 'Quick Quote',
        desc:  'Describe your items by phone or send a WhatsApp photo. We give you a fixed price immediately — no survey required for most single-item or small-load jobs.',
      },
      {
        title: 'Book a Slot',
        desc:  'Choose a date and AM or PM window. We confirm 24 hours ahead with a 30-minute arrival call on the day.',
      },
      {
        title: 'We Arrive & Load',
        desc:  'Our uniformed crew handles all lifting and carrying. Items left in situ — in a loft, garage, or upstairs room — are no problem.',
      },
      {
        title: 'Responsible Disposal',
        desc:  'All material goes to EA-licensed facilities. Reusable items are donated; recyclables are recovered; only genuine residual waste goes to energy-from-waste.',
      },
      {
        title: 'Waste Transfer Note',
        desc:  'Your Duty of Care WTN is issued on the day — your legal proof the waste left your property correctly.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Waste Carrier Licence CBDU335711', desc: 'Legally registered to collect and transport household waste. Your WTN protects you if waste is later found fly-tipped.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Note',    desc: 'Issued on every collection under the Environmental Protection Act 1990. Your legal proof of compliant household waste disposal.' },
      { badge: '£5m',  title: 'Public Liability Insurance',          desc: 'Full public liability insurance on every residential collection visit.' },
      { badge: '99%',  title: '99% Landfill Diversion',              desc: 'Reusable items donated; recyclable materials recovered; only genuine residual waste goes to energy-from-waste.' },
    ],
    faqs: [
      {
        q: 'How much does bulky item collection cost in London?',
        a: 'A single bulky item — sofa, mattress, washing machine — typically costs between £50 and £120 depending on size and floor level. Small mixed loads (a van\'s worth of household rubbish) start from around £150. We provide fixed prices by phone or WhatsApp photo before any commitment.',
      },
      {
        q: 'Can you collect from upstairs rooms or lofts?',
        a: 'Yes. Our crew handles all carrying and lifting — including from lofts via hatch, upstairs rooms, and basement or cellar areas. There is no additional charge for upper-floor collections in most cases; if access is unusually difficult we will flag it during quoting.',
      },
      {
        q: 'Do I need to move items to the kerb before you arrive?',
        a: 'No. We collect from wherever the items are — inside the property, in a garage, in a loft, or in a garden. You do not need to move anything to the street or the front door.',
      },
      {
        q: 'How do I know my rubbish will not be fly-tipped?',
        a: 'WasteWize holds an Environment Agency Waste Carrier Licence (CBDU335711) and issues a Duty of Care Waste Transfer Note on every collection. This document traces your waste to its licensed destination — and is your legal protection if waste is ever found fly-tipped and investigated back to its source.',
      },
      {
        q: 'Do you take fridges, freezers, and televisions?',
        a: 'Yes. Fridges and freezers are collected under F-gas certified disposal procedures. Televisions and other electrical items are handled under WEEE (Waste Electrical and Electronic Equipment) regulations. Both are included in your standard quote.',
      },
    ],
    relatedIds: ['garden-refuse', 'commercial-clearance', 'confidential-waste'],
  },

  'garden-refuse': {
    slug:      'garden-refuse',
    metaTitle: 'Garden Waste Removal London | Green Waste Collection | WasteWize UK',
    metaDesc:  'Professional garden waste collection and green waste removal across London and the Home Counties. All material composted or recovered — zero landfill. EA licensed. Book online.',
    heroDesc:  'Professional garden waste collection and responsible composting for homeowners, housing associations, and landscaping contractors across London and the Home Counties. From seasonal clearances and hedge trimmings to soil removal and shed contents, our EA-licensed service collects from your garden or driveway and diverts everything to PAS 100-certified composting and biomass facilities. No landfill, no hassle, full duty-of-care documentation.',
    bodySections: [
      {
        heading: 'One-Off and Seasonal Garden Clearances',
        body:    'The most common request is a one-off clearance before or after a significant garden project — clearing years of accumulated growth before landscapers begin, or removing the waste after major works are completed. We collect everything the council refuse service will not touch: large volumes of soil and turf, heavy root balls, entire tree sections up to 150mm diameter, overgrown hedging, and greenhouse contents including broken glass carefully bagged for safe transport. We load from wherever the material has been piled, so you do not have to move it twice. Most domestic garden clearances are completed in a single visit.',
      },
      {
        heading: 'Where Your Garden Waste Goes',
        body:    'All green waste collected by WasteWize goes to composting or biomass recovery — not landfill. The majority is composted to PAS 100 standard, producing a certified product used by local authorities and professional landscapers. Cleaner woody material — branches and logs — is chipped and directed to biomass energy facilities. Soil and turf go to licensed soil recovery sites and, after testing, are often reused as engineering fill or certified topsoil. We provide the waste facility name and Environment Agency permit number on your Waste Transfer Note, so you can verify the destination independently if you wish.',
      },
      {
        heading: 'Garden Waste Collections for Landscaping Contractors',
        body:    'Landscaping contractors and grounds maintenance companies often need more than a one-off residential service. WasteWize provides regular scheduled collections under fixed-rate monthly agreements, with priority booking slots for our regular clients. All commercial garden waste collections come with a Duty of Care Waste Transfer Note as standard — a legal requirement for businesses producing commercial waste under the Environmental Protection Act 1990. We work across London and the Home Counties and can accommodate short-notice bookings when end-of-project volumes exceed your initial estimate. Contact us to discuss a regular account arrangement.',
      },
    ],
    included: [
      'Grass cuttings and lawn clippings',
      'Hedge and shrub trimmings',
      'Branches, logs, and tree cuttings (up to 150mm diameter)',
      'Garden soil and turf',
      'Leaves and general plant material',
      'Weeds and root balls',
      'Shed and greenhouse contents',
      'Loose or bagged — we collect either way',
    ],
    process: [
      {
        title: 'Quick Quote',
        desc:  'Call or message us with your location and an estimate of the volume. We give you a fixed price on the spot for most domestic garden clearances.',
      },
      {
        title: 'Garden Preparation',
        desc:  'Bag, pile, or bundle your waste — or leave it loose. We collect from your garden, driveway, or a designated roadside point agreed in advance.',
      },
      {
        title: 'Collection',
        desc:  'Our team loads all green waste from the agreed collection point. No need to carry anything — we do the lifting.',
      },
      {
        title: 'Composting & Recovery',
        desc:  'All green waste goes to PAS 100-certified composting facilities. Soil and turf are directed to licensed soil recovery sites. Branches and logs may be chipped for biomass depending on species and condition.',
      },
      {
        title: 'Waste Transfer Note',
        desc:  'A Duty of Care Waste Transfer Note is issued on collection. Businesses and landlords need this to demonstrate compliance with their duty-of-care obligations.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Waste Carrier Licence CBDU335711', desc: 'Required by law for any business transporting garden waste. Protects you from fly-tipping liability.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'PAS',  title: 'PAS 100-Certified Composting',        desc: 'All green waste is directed to composting facilities certified to the PAS 100 British standard for quality compost.' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Note',    desc: 'Issued on every commercial collection under the Environmental Protection Act 1990.' },
      { badge: '0%',   title: 'Zero Landfill on Green Waste',        desc: 'Green and garden waste is composted, chipped for biomass, or used in soil recovery — none goes to landfill.' },
    ],
    faqs: [
      {
        q: 'Can you remove large volumes of soil and excavated material?',
        a: 'Yes. We collect soil, turf, and clay from garden renovation and construction projects. For volumes over one tonne, we recommend our dedicated muck-away service, which uses larger vehicles designed for excavation material. Contact us for a volume-based price.',
      },
      {
        q: 'Do you offer regular scheduled garden waste collections?',
        a: 'Yes. We can arrange fortnightly or monthly collections for domestic gardeners, housing associations, schools, and landscaping contractors across London and the Home Counties. Regular clients receive a fixed rate and a priority booking slot.',
      },
      {
        q: 'Can you also remove patio slabs or timber decking?',
        a: 'Patio slabs, concrete, and bricks are classified as hardcore/rubble and fall under our Building & Construction service. Timber decking is collected under our Hardcore & Wood service where possible, and diverted to biomass. We can often combine both services in a single visit.',
      },
      {
        q: 'Does a homeowner need a waste transfer note for garden waste?',
        a: 'For homeowners using a licensed carrier, a Waste Transfer Note is issued as standard and is evidence of your duty of care. Businesses — including landscaping contractors and housing associations — are legally required to hold a WTN for every commercial waste collection under the Environmental Protection Act 1990.',
      },
    ],
    relatedIds: ['residential-waste', 'hardcore-wood', 'building-construction'],
  },

  'building-construction': {
    slug:      'building-construction',
    metaTitle: 'Construction Waste Removal London | Builder\'s Waste Collection | WasteWize UK',
    metaDesc:  'On-site construction waste management for London and the Home Counties. Segregated collections, muck-away, compliance docs. EA licensed. Alternative to skip hire. Get a quote.',
    heroDesc:  'On-site waste management for construction, refurbishment, and fit-out projects of all scales across London and the Home Counties. We supply segregated collection services for every construction waste stream — from general mixed debris and plasterboard to hardcore, timber, and excavation material — with full site compliance documentation included on every job. Our flexible, on-call model is designed to keep active build sites clear without the constraints of static skip hire.',
    bodySections: [
      {
        heading: 'On-Call Construction Waste Management',
        body:    'Build sites generate waste unpredictably — a delivery arrives early, stripping work runs ahead of programme, a subcontractor leaves more rubble than expected. Our on-call service is designed for exactly this: you call when you have a load, and we arrive within hours. Unlike a static skip, which ties up space, requires a council permit, and runs on a fixed rental period, our model scales with your actual output. Clients on active London build programmes typically call us two to four times per week during intensive phases. We confirm availability within the hour and hold a fleet of vehicles dedicated to construction waste.',
      },
      {
        heading: 'Skip Hire Alternative for London Construction Sites',
        body:    'Many of our construction clients originally used skips but switched for three reasons. First, there is no skip permit required — in dense London streets, placement permits are frequently refused or take days to arrange, stalling programmes. Second, our segregated collections — timber, metal, plasterboard, and general mixed waste kept separate — attract lower processing costs and achieve better recycling rates than a mixed skip, which commonly sends a higher proportion to landfill and incurs a higher landfill tax liability. Third, we carry items that skips legally cannot, including treated timber, certain hazardous streams, and asbestos, coordinated through our specialist partners.',
      },
      {
        heading: 'Compliance Documentation for Contractors and Principal Contractors',
        body:    'Under the Environmental Protection Act 1990, any contractor producing waste on a client\'s site is legally responsible for ensuring it is disposed of correctly — regardless of whether you physically handle it. Every WasteWize construction collection comes with a signed Duty of Care Waste Transfer Note per load, a copy of our EA Waste Carrier Licence, and copies of our public liability and employers\' liability insurance. We compile these into a single compliance pack on request, ready for building control inspections, planning enforcement visits, or principal contractor supply chain audits.',
      },
    ],
    included: [
      'Mixed construction and demolition (C&D) waste',
      'Plasterboard — segregated stream as required by EA regulations',
      'Hardcore, concrete, and rubble (see also Hardcore & Wood)',
      'Timber, wood, and pallet waste',
      'Packaging waste — cardboard, plastic wrap, polystyrene',
      'Excavation material, soil, and spoil (muck-away)',
      'Metal, pipe, and cable off-cuts',
      'Hazardous construction waste via specialist streams (asbestos excluded)',
    ],
    process: [
      {
        title: 'Site Assessment',
        desc:  'We review your project schedule, waste streams, and site access to recommend the right collection frequency and vehicle type for your build programme.',
      },
      {
        title: 'Collection Schedule',
        desc:  'We agree a regular collection slot or an on-call arrangement. Many clients call us as the skip fills; we arrive within hours to empty and return.',
      },
      {
        title: 'Segregated Collections',
        desc:  'We collect segregated loads — plasterboard, timber, metals, and general mixed — to maximise recycling rates and reduce your landfill tax liability.',
      },
      {
        title: 'On-Site Documentation',
        desc:  'Every collection is accompanied by a signed Waste Transfer Note. Records are retained and available for site inspection, planning authority queries, or building control.',
      },
      {
        title: 'Monthly Reporting',
        desc:  'Regular clients receive a monthly waste data summary showing volumes by stream and diversion rates — useful for ESG reporting, BREEAM credits, and planning compliance.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Upper-Tier Waste Carrier Licence', desc: 'Licence No. CBDU335711. Required by law for any contractor transporting controlled waste from a construction site.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Notes',   desc: 'Issued per-load under the Environmental Protection Act 1990. Satisfies EA inspection and planning enforcement requirements.' },
      { badge: 'PLB',  title: 'Plasterboard Segregation Compliance', desc: 'Since 2009, plasterboard must be segregated from biodegradable waste. We collect it as a separate stream at no additional charge when pre-sorted.' },
      { badge: 'SWM',  title: 'Site Waste Management Plan Support',  desc: 'We can provide waste volume and stream data to support your SWMP, planning condition compliance, or BREEAM waste assessment.' },
    ],
    faqs: [
      {
        q: 'Why must plasterboard be kept separate from other construction waste?',
        a: 'Since 2009, EA regulations require plasterboard (gypsum-based waste) to be segregated from biodegradable waste. When gypsum mixes with biodegradable material in landfill, it generates hydrogen sulphide gas — a toxic hazard. We provide a separate plasterboard stream at no additional charge on segregated loads.',
      },
      {
        q: 'Do you supply skips?',
        a: 'We do not supply traditional static skips, but our on-call collection model works similarly — when your storage area is full, you call us and we arrive to collect within hours. This is typically more flexible and cost-effective than a static skip for active build sites, where material volumes fluctuate day by day.',
      },
      {
        q: 'What compliance documentation do you provide for site inspections?',
        a: 'We provide a Duty of Care Waste Transfer Note for every single collection, a copy of our EA Waste Carrier Licence, and copies of our public liability and employers\' liability insurance certificates. We can compile these into a single compliance pack on request for planning enforcement or building inspector queries.',
      },
      {
        q: 'Can you handle asbestos found during construction?',
        a: 'Not as a standard construction waste stream. If asbestos-containing materials are found during a refurbishment, work must pause and a licensed asbestos survey must be carried out. We coordinate directly with our HSE-licensed asbestos removal partners and can manage the handover so your project timeline is not disrupted.',
      },
    ],
    relatedIds: ['strip-out-demolition', 'hardcore-wood', 'asbestos-removal'],
  },

  'electrical-equipment': {
    slug:      'electrical-equipment',
    metaTitle: 'WEEE Collection London | Electrical Equipment Recycling | WasteWize UK',
    metaDesc:  'WEEE-compliant electrical equipment collection and recycling for London businesses. Official WEEE transfer notes, data destruction certificates. EA and WEEE registered.',
    heroDesc:  'WEEE-compliant collection and recycling of waste electrical and electronic equipment for businesses across London and the Home Counties. Every collection is handled by our WEEE-registered team with official WEEE Duty of Care Transfer Notes issued as standard — ensuring your business meets its full legal obligations under the UK WEEE Regulations 2013. Certified data destruction is available for computers, servers, and all data-bearing devices.',
    bodySections: [
      {
        heading: 'WEEE Compliance for London Offices and Businesses',
        body:    'Under the WEEE Regulations 2013, any business producing waste electrical equipment is legally responsible for ensuring it reaches an Approved Treatment Facility (AATF). Placing old computers, printers, or appliances in a general waste skip or bin is a criminal offence — not simply a disposal shortcut. WasteWize provides a fully documented WEEE collection service: equipment is separated from all other waste, transported in a dedicated vehicle, and processed at an AATF registered for each equipment category. The official WEEE Duty of Care Transfer Note you receive is your legal compliance evidence — retain it for a minimum of two years, as required under the Regulations.',
      },
      {
        heading: 'Data Destruction for Old Computers and IT Equipment',
        body:    'Data destruction is the most sensitive aspect of IT asset disposal. We offer two GDPR-compliant destruction methods: Blancco-certified software wiping, which produces a per-device certificate showing the serial number, wipe date, and overwrite standard achieved; and physical shredding to DIN 66399 H-5 standard, with a certificate of destruction per device. Both methods satisfy GDPR Article 17 requirements for erasure. For large IT decommissions — server room clearances, office floor relocations, or data centre wind-downs — we provide an on-site inventory audit before collection, ensuring every device is logged and accounted for before it leaves the building.',
      },
      {
        heading: 'WEEE Collections for Office Fit-Outs and Relocations',
        body:    'Office relocations and fit-out projects are the single largest source of WEEE waste in London. A typical floor of 50 desks generates monitors, desktop units, phones, printers, UPS systems, and network equipment — often several tonnes of WEEE in total. WasteWize works alongside office removal firms and fit-out contractors to coordinate WEEE collections on clearance day or immediately afterwards. We arrive with our own equipment trolleys and loading crew, so there is no waiting for the removals team to sort items and no risk of WEEE being accidentally mixed with general clearance waste and sent to the wrong facility.',
      },
    ],
    included: [
      'Desktop computers, laptops, tablets, and monitors',
      'Servers, networking equipment, and data centre hardware',
      'Printers, scanners, photocopiers, and fax machines',
      'Telecoms equipment — phones, switchboards, and handsets',
      'White goods — fridges, washing machines, dishwashers, ovens',
      'Audio-visual and presentation equipment',
      'Industrial and commercial electrical equipment',
      'Small electronic devices — keyboards, mice, cables, chargers',
    ],
    process: [
      {
        title: 'Enquiry & Data Declaration',
        desc:  'Tell us the volume and types of equipment. We confirm your data destruction requirements before collection — drives flagged for destruction are tagged and bagged separately at collection.',
      },
      {
        title: 'WEEE Collection',
        desc:  'Equipment is loaded into a dedicated WEEE vehicle — separate from any general waste. No mixing of streams.',
      },
      {
        title: 'WEEE Transfer Note',
        desc:  'An official WEEE Duty of Care Transfer Note is issued on the day of collection. This is your legal proof of compliant disposal — retain it for a minimum of two years.',
      },
      {
        title: 'Approved Treatment',
        desc:  'Equipment is taken to an EA-approved Authorised Treatment Facility (AATF) registered for the specific equipment category. Evidence of treatment is available on request.',
      },
      {
        title: 'Data Destruction Certificate',
        desc:  'Where requested, a certificate of data destruction — identifying each device by serial number and confirming the destruction standard — is issued within five working days.',
      },
    ],
    compliance: [
      { badge: 'WEEE', title: 'WEEE Regulations 2013',             desc: 'WasteWize is registered under the UK WEEE Regulations 2013. All electrical equipment is collected and treated by AATF-registered facilities only.' },
      { badge: 'AATF', title: 'Approved Treatment Facility',      desc: 'Equipment is processed exclusively by EA-approved Authorised Treatment Facilities registered for each equipment category.' },
      { badge: 'GDPR', title: 'GDPR-Compliant Data Destruction',  desc: 'Blancco-certified software wipe or physical shredding to BS EN 15713. Certificate issued per device with serial number.' },
      { badge: 'EA',   title: 'EA Waste Carrier Licence',         desc: 'Licence No. CBDU335711 covers transportation of WEEE between your premises and the treatment facility.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
    ],
    faqs: [
      {
        q: 'What counts as WEEE and why does it matter legally?',
        a: 'WEEE is any product powered by electricity or a battery at the end of its useful life — computers, phones, white goods, power tools, lighting, and more. Under the WEEE Regulations 2013, businesses that produce or use electrical equipment must ensure it is disposed of through an approved treatment facility, not general waste. Disposing of WEEE incorrectly is a criminal offence with potential fines of up to £5,000 per incident.',
      },
      {
        q: 'Do I receive a WEEE transfer note for every collection?',
        a: 'Yes. Every business customer receives an official WEEE Duty of Care Transfer Note for every single collection, listing the equipment types and quantities collected. Retain this for a minimum of two years — it is your legal evidence of compliant disposal under the WEEE Regulations.',
      },
      {
        q: 'How do I know the data on old computers has been destroyed?',
        a: 'We offer two options: (1) Blancco-certified software wipe — a per-device certificate showing the device serial number, wipe date, and the overwrite standard achieved (typically NIST 800-88 or DoD 5220.22-M). (2) Physical destruction — shredding to DIN 66399 H-5 standard, with a certificate of destruction. Both methods meet GDPR Article 17 requirements for erasure.',
      },
      {
        q: 'Is there a minimum collection quantity?',
        a: 'We collect from a single large item upward, though our minimum charge applies to collections requiring a dedicated van. For large volumes — an entire office floor\'s equipment, a server room decommission, or a warehouse of white goods — we can provide a dedicated vehicle and on-site inventory audit.',
      },
    ],
    relatedIds: ['confidential-waste', 'commercial-clearance', 'strip-out-demolition'],
  },

  'confidential-waste': {
    slug:      'confidential-waste',
    metaTitle: 'Confidential Waste Disposal London | GDPR Document Shredding | WasteWize UK',
    metaDesc:  'Secure confidential waste collection and certified destruction for London businesses. Certificate of destruction on every job. GDPR and DPA 2018 compliant. Book online.',
    heroDesc:  'Secure collection and certified destruction of confidential documents, sensitive records, and data-bearing media for businesses across London and the Home Counties. A time-stamped certificate of destruction is issued for every single collection — giving you a complete, GDPR-compliant audit trail that satisfies data protection obligations under UK GDPR and the Data Protection Act 2018. On-site shredding is available for organisations with the highest security requirements.',
    bodySections: [
      {
        heading: 'Who Needs Confidential Waste Disposal?',
        body:    'Any organisation that handles personal data — which under UK GDPR means virtually every business — has a legal obligation to securely destroy that data when it is no longer needed. Our most common clients include law firms and barristers\' chambers disposing of closed files, accountancy practices clearing historical client records, medical practices destroying patient notes, HR departments shredding personnel files, and financial services firms retiring transaction records. We also carry out residential collections for individuals with significant personal document volumes — former company directors, executors administering estates, and home workers winding down a business.',
      },
      {
        heading: 'The Destruction Process and Chain of Custody',
        body:    'From the moment your material is collected — whether in tamper-evident sacks or from locked consoles — it remains in a sealed, locked vehicle under continuous chain-of-custody until it reaches our licensed destruction facility. The seal is never broken in transit. At the facility, documents are cross-cut shredded to DIN 66399 P-4 standard, producing a maximum particle size of 160mm² — a far more secure cut than the strip shredding most offices use in-house, which can still be reassembled. Higher security levels, P-5 and P-6, are available for legal, government, and medical material where the highest destruction standard is contractually required.',
      },
      {
        heading: 'Your Certificate of Destruction',
        body:    'Within 24 hours of destruction, you receive a time-stamped certificate listing your company name, collection reference, date and time of destruction, approximate volume of material, the destruction method applied, and the DIN 66399 security level achieved. This certificate is your primary evidence under UK GDPR Article 5(1)(f) that personal data was processed securely — and you should retain it for at least six years to align with the Limitation Act 1980 limitation period for civil claims. Regulated firms in the legal, financial services, and healthcare sectors should additionally cross-reference their specific sector regulator\'s data retention requirements.',
      },
    ],
    included: [
      'Paper documents — personnel files, financial records, contracts, client data',
      'Hard drives (HDDs and SSDs) and solid-state storage',
      'USB drives, memory cards, CDs, and DVDs',
      'Access cards, ID badges, and security passes',
      'X-rays and medical records',
      'Photographs, negatives, and microfilm',
      'Branded packaging, letterheads, and unused stationery',
      'Any document or device containing personal or commercially sensitive data',
    ],
    process: [
      {
        title: 'Sack or Console Supply',
        desc:  'We supply tamper-evident secure sacks or locked consoles to your office, or you can use your own pre-bagged material. Locked consoles are ideal for ongoing regular collections.',
      },
      {
        title: 'Secure Collection',
        desc:  'Material is collected in sealed, locked vehicles. Chain-of-custody is maintained from your premises to the destruction facility — the seal is never broken in transit.',
      },
      {
        title: 'Cross-Cut Shredding',
        desc:  'Documents are shredded to DIN 66399 P-4 standard (maximum particle size 160mm²) as standard. Higher security levels (P-5 or P-6) are available for legal, medical, or government material.',
      },
      {
        title: 'Certificate of Destruction',
        desc:  'A time-stamped certificate listing your company name, collection date, volume, destruction method, and security level is issued within 24 hours of destruction.',
      },
    ],
    compliance: [
      { badge: 'GDPR', title: 'UK GDPR Article 5 Compliant',        desc: 'UK GDPR requires personal data to be erased securely when no longer needed. Certified destruction is the only method that fully satisfies this obligation.' },
      { badge: 'DPA',  title: 'Data Protection Act 2018',           desc: 'The UK\'s domestic data protection law. Criminal liability attaches to data controllers who fail to dispose of personal data correctly.' },
      { badge: 'DIN',  title: 'DIN 66399 Shredding Standard',      desc: 'P-4 as standard (particle ≤ 160mm²). P-5 and P-6 available for higher security requirements on request.' },
      { badge: 'BS',   title: 'BS EN 15713 Secure Destruction',     desc: 'British standard for the secure destruction of confidential material — covering chain-of-custody, facility security, and staff vetting.' },
    ],
    faqs: [
      {
        q: 'What does the certificate of destruction contain?',
        a: 'Your company name and registered address, the collection date and time, a unique reference number, the approximate volume or weight of material destroyed, the destruction method (shredding or physical destruction), the DIN 66399 security level applied, and the authorised signature of the destruction facility officer.',
      },
      {
        q: 'Can you carry out on-site shredding at our premises?',
        a: 'Yes. For organisations with the highest security requirements — law firms handling privileged material, medical practices with patient records, or government bodies — we can arrange a mobile shredding unit that destroys documents at your premises while a member of your team witnesses the process in real time. On-site shredding is priced higher than off-site destruction; contact us for a bespoke quote.',
      },
      {
        q: 'How long should we keep our certificates of destruction?',
        a: 'GDPR does not specify a minimum retention period for destruction records, but we recommend retaining them for at least six years to align with the Limitation Act 1980 (the standard limitation period for civil claims). Organisations in regulated sectors — legal, financial services, healthcare — should check their specific sector regulator\'s data retention guidance, which may require longer.',
      },
      {
        q: 'Can you collect confidential waste from a residential address?',
        a: 'Yes. Self-employed professionals, former directors, home workers, and individuals with significant amounts of personal data at home can book a residential confidential waste collection. All the same chain-of-custody and destruction standards apply as for business collections.',
      },
    ],
    relatedIds: ['electrical-equipment', 'commercial-clearance', 'residential-waste'],
  },

  'asbestos-removal': {
    slug:      'asbestos-removal',
    metaTitle: 'Asbestos Removal London | HSE-Licensed Asbestos Disposal | WasteWize UK',
    metaDesc:  'HSE-licensed asbestos surveying, encapsulation, and removal across London and the Home Counties. Air monitoring, UKAS analyst sign-off, and waste consignment notes included.',
    heroDesc:  'HSE-licensed asbestos surveying, encapsulation, and full removal for commercial, residential, and industrial sites across London and the Home Counties. Every project includes comprehensive air monitoring throughout, an independent UKAS-accredited analyst clearance certificate on completion, and all required hazardous waste consignment notes — covering you fully for compliance, planning, and insurance purposes. Work does not commence until a licensed survey has cleared the scope.',
    bodySections: [
      {
        heading: 'When Do You Need an Asbestos Survey?',
        body:    'The Control of Asbestos Regulations 2012 requires an asbestos survey before any refurbishment or demolition work on a building constructed or refurbished before 2000. This is a legal requirement, not a recommendation. Failing to carry out a pre-works survey can invalidate project insurance, expose principal contractors to HSE prosecution, and — if asbestos-containing materials are inadvertently disturbed — create a serious and immediate health risk. WasteWize arranges the appropriate survey type for your situation: management surveys for occupied premises, and refurbishment or demolition surveys before any stripping, renovation, or demolition work begins.',
      },
      {
        heading: 'Common Asbestos Locations in London Properties',
        body:    'Asbestos appears in more places than most building owners expect. In domestic properties built before 1985, it is commonly found in ceiling tiles, textured coatings such as artex, vinyl floor tiles and their adhesive backing, pipe lagging in boiler cupboards and loft spaces, and asbestos insulation board lining airing cupboards and internal garage walls. In commercial buildings, add suspended ceiling tiles, profiled roof panels, and structural steelwork insulation. The presence of asbestos does not always require removal: if it is in good condition and will not be disturbed by planned works, a management plan in place is often the legally correct and proportionate response.',
      },
      {
        heading: 'Asbestos in Domestic Properties — What Homeowners Need to Know',
        body:    'Many homeowners are surprised to learn that residential asbestos removal falls under the same legal framework as commercial projects. An HSE licence is required for all high-risk removal work in domestic properties — including friable asbestos, asbestos insulation board, and pipe lagging. For lower-risk materials such as textured ceiling coatings in good condition, the guidance is generally to leave the material undisturbed or encapsulate it rather than remove it — disturbing a stable coating creates more risk than managing it in place. If you are planning any work that will cut, drill, or abrade surfaces in a pre-2000 home, ask us about a refurbishment survey before your tradesperson begins.',
      },
    ],
    included: [
      'Asbestos management surveys (for occupied premises)',
      'Refurbishment and demolition surveys (required before any strip-out)',
      'Asbestos encapsulation — sealing ACMs in place where removal is impractical',
      'Licensed asbestos removal — friable, AIB, lagging, and sprayed coatings',
      'Non-licensed asbestos works — textured coatings, some floor tiles',
      'Air monitoring throughout all licensed work',
      'Four-stage clearance procedure and UKAS-accredited analyst sign-off',
      'Hazardous waste consignment notes for all asbestos waste',
    ],
    process: [
      {
        title: 'Asbestos Survey',
        desc:  'A licensed surveyor inspects the building to identify the type, location, and condition of all suspected asbestos-containing materials (ACMs). A refurbishment/demolition (R&D) survey is always required before any stripping or demolition work.',
      },
      {
        title: 'Risk Assessment & Work Plan',
        desc:  'A detailed written work plan sets out the removal or encapsulation methodology, respiratory protective equipment (RPE) requirements, supervision arrangements, and the air monitoring strategy.',
      },
      {
        title: 'Enclosure Setup',
        desc:  'For licensed removal, a sealed negative-pressure enclosure is constructed around the work area. Air flows through industrial HEPA-filtered extraction units, preventing fibre release to the wider building.',
      },
      {
        title: 'Removal or Encapsulation',
        desc:  'Licensed operatives in full PPE remove or encapsulate the ACMs. All material is double-bagged in UN-approved asbestos waste bags and labelled correctly as hazardous waste.',
      },
      {
        title: 'Four-Stage Air Clearance',
        desc:  'An independent UKAS-accredited analyst conducts the four-stage clearance procedure, including a final background air test. The enclosure is not dismantled and the area is not released until fibres are confirmed below the clearance criterion.',
      },
      {
        title: 'Hazardous Waste Consignment',
        desc:  'All asbestos waste is transported under a hazardous waste consignment note to an EA-permitted asbestos disposal facility. Copies of all consignment notes are provided to the client.',
      },
    ],
    compliance: [
      { badge: 'HSE',  title: 'HSE Asbestos Removal Licence',       desc: 'Required by law for all licensed asbestos work (friable ACMs, AIB, lagging, sprayed coatings). Licence details available on request.' },
      { badge: 'CAR',  title: 'Control of Asbestos Regulations 2012', desc: 'The primary UK legal framework governing all asbestos work. Sets out duty-to-manage obligations for building owners and employers.' },
      { badge: 'UKAS', title: 'Independent UKAS-Accredited Analyst', desc: 'The four-stage clearance procedure requires an independent UKAS-accredited analyst. We arrange this as standard — the analyst is not connected to the removal contractor.' },
      { badge: 'HWR',  title: 'Hazardous Waste Consignment Notes',  desc: 'Required under the Environmental Permitting Regulations for all asbestos waste. Copies provided to client for their compliance records.' },
    ],
    faqs: [
      {
        q: 'How do I know if my building contains asbestos?',
        a: 'Asbestos was widely used in UK construction from the 1950s until its total ban in 1999. If your building was constructed or refurbished before 2000, it may contain asbestos. Common locations include ceiling tiles, floor tiles, artex coatings, pipe lagging, boiler insulation, roof panels, and partition boards (asbestos insulation board). Only a licensed asbestos survey can confirm the presence, type, and condition of ACMs.',
      },
      {
        q: 'What is the difference between licensed and non-licensed asbestos work?',
        a: 'Licensed work covers high-risk materials where asbestos fibres are more likely to become airborne during removal — friable asbestos, asbestos insulation board (AIB), sprayed coatings, and pipe lagging. An HSE licence is legally required for this work. Non-licensed work covers lower-risk materials such as textured coatings (artex) and some types of floor tiles where fibre release is lower. We carry out both types of work.',
      },
      {
        q: 'Can the building remain occupied during asbestos removal?',
        a: 'For licensed removal work, the affected area must be sealed and all non-essential personnel must vacate. Depending on the scope, it may be possible to continue working in other parts of the building — your project coordinator will define the exclusion zone before work begins and keep you informed throughout.',
      },
      {
        q: 'How much does asbestos removal cost?',
        a: 'Cost depends on the type and quantity of material, accessibility, and the decontamination requirements. A small area of textured coating removal typically ranges from £400 to £900; a larger commercial project involving extensive AIB or lagging can run to several thousand pounds. We provide fixed-price written quotations after the survey is completed — there are no unexpected extras.',
      },
    ],
    relatedIds: ['strip-out-demolition', 'building-construction', 'confidential-waste'],
  },

  'hardcore-wood': {
    slug:      'hardcore-wood',
    metaTitle: 'Hardcore & Rubble Removal London | Timber Disposal | WasteWize UK',
    metaDesc:  'Segregated hardcore, rubble, concrete, and timber collection across London and the Home Counties. Crushed for aggregate or chipped for biomass — zero landfill. EA licensed.',
    heroDesc:  'Segregated collection of hardcore, rubble, concrete, bricks, and timber from construction, demolition, and renovation sites across London and the Home Counties. All hardcore material is crushed and processed for recycling as secondary aggregate — displacing virgin quarried material. Clean wood and timber is chipped and processed for biomass energy or panel board. Segregated loads attract lower rates and achieve near-zero landfill.',
    bodySections: [
      {
        heading: 'Hardcore and Rubble from Renovation and Construction Projects',
        body:    'A standard bathroom or kitchen renovation produces more hardcore than most homeowners anticipate — tiles, a concrete floor screed, a redundant partition, and rubble from routing new pipework can fill a large skip quickly. WasteWize collects hardcore and rubble from residential and commercial sites of any scale: from a single bathroom worth of broken tiles to multi-load volumes from a structural demolition. Our crew handles all loading — you do not need to move anything. We cover all of London and the Home Counties and can often collect the same day for urgent site clearances where access or programme pressure dictates a fast turnaround.',
      },
      {
        heading: 'What Happens to Concrete and Brick After Collection',
        body:    'Concrete, brick, and stone collected by WasteWize go to licensed inert waste processing facilities where they are crushed and graded to produce Type 1 sub-base aggregate — the same material used in road construction, foundations, and drainage applications. This qualifies as end-of-waste recovery under the Quality Protocol for Aggregate Recycling, meaning the processed material is no longer classified as waste and displaces virgin quarried material. Clean, uncontaminated hardcore achieves a near-zero landfill rate. The only material that cannot follow this route is hardcore contaminated with asbestos, which must be handled as hazardous waste under a separate specialist stream.',
      },
      {
        heading: 'Timber Disposal: Clean Wood vs Treated or Preserved Wood',
        body:    'Clean structural timber — joists, rafters, floorboards, and dimensional lumber without preservative treatment — is chipped and directed to biomass energy facilities or processed into chipboard and MDF, achieving full material recovery. Treated or preserved timber requires different handling: CCA-treated timber and creosote-treated timber cannot go to standard biomass facilities under UK air quality regulations and must be sent to specialist high-temperature combustion plants with appropriate emissions controls. When you book a timber collection, tell us whether the wood is treated — this determines the vehicle type, processing route, and price, and avoids any compliance issue at the receiving facility.',
      },
    ],
    included: [
      'Concrete, reinforced concrete, and pre-cast sections',
      'Bricks, blocks, and masonry',
      'Stone, slate, and hardcore',
      'Road planings and tarmac (minimum volumes apply)',
      'Clean structural timber and dimensional lumber',
      'Pallet wood and packaging timber',
      'Floorboards and joists',
      'MDF and chipboard (routed to specialist processors)',
    ],
    process: [
      {
        title: 'Booking & Stream Confirmation',
        desc:  'Tell us whether your load is hardcore/rubble, clean timber, or a mixed load. Segregated loads attract lower collection rates — it pays to keep streams separate.',
      },
      {
        title: 'Volume Assessment',
        desc:  'For large volumes, we assess whether to use multiple collections with a standard vehicle or arrange a dedicated tipper or grab lorry for a single efficient collection.',
      },
      {
        title: 'Collection',
        desc:  'Material is loaded directly from your site, storage area, or skip. Our crew handles all loading — you do not need to move anything.',
      },
      {
        title: 'Hardcore Processing',
        desc:  'Concrete, brick, and stone are crushed and graded at a licensed processing facility to produce Type 1 sub-base aggregate for reuse in civil engineering and construction. This qualifies as end-of-waste recovery under the QP Protocol.',
      },
      {
        title: 'Timber Processing',
        desc:  'Clean structural timber is chipped into biomass fuel for energy-from-waste facilities or processed into particleboard. MDF and treated timber are routed to facilities with appropriate emissions controls.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Waste Carrier Licence CBDU335711', desc: 'Legally required for transportation of hardcore and timber waste from construction sites.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Note',    desc: 'Issued per load confirming the stream, approximate weight, and receiving facility. Required for all controlled waste.' },
      { badge: 'QP',   title: 'QP Aggregate Recycling Protocol',    desc: 'Hardcore crushed under the Quality Protocol for Aggregate Recycling meets end-of-waste criteria and can be reused as secondary aggregate without waste classification.' },
      { badge: '0%',   title: 'Zero Landfill on Inert Streams',     desc: 'Concrete and brick achieve near-zero landfill through aggregate recycling. Clean timber achieves the same through biomass recovery.' },
    ],
    faqs: [
      {
        q: 'Can you collect small amounts of rubble from a residential property?',
        a: 'Yes. We have no minimum volume for hardcore or rubble collections from residential or commercial sites. Our minimum charge covers up to approximately 500kg — sufficient for a standard bathroom or kitchen renovation. Contact us for a volume-based price.',
      },
      {
        q: 'Does concrete need to be separated from brick for recycling?',
        a: 'Separating concrete from brick generally makes no practical difference to the processing outcome — both are inert and go to the same crushing facility. However, if you have significant volumes of asphalt or tarmac, keep those separate as they require a dedicated asphalt recycler and are processed differently.',
      },
      {
        q: 'Can you take treated or preservative-treated timber?',
        a: 'Preservative-treated timbers — for example, those treated with copper chromium arsenate (CCA) or creosote — cannot go to biomass facilities under UK air quality regulations. They must be sent to specialist high-temperature combustion facilities with appropriate emissions controls. Please tell us if your timber is treated and we will route it correctly.',
      },
      {
        q: 'Are there any materials you cannot take in this service?',
        a: 'Yes. Asbestos-containing materials, contaminated soil, and chemically treated waste must be handled under separate specialist streams. We will identify any of these during booking and arrange the correct service. Never mix asbestos with general hardcore — this is a criminal offence under the Control of Asbestos Regulations 2012.',
      },
    ],
    relatedIds: ['building-construction', 'strip-out-demolition', 'garden-refuse'],
  },

  'scrap-metal': {
    slug:      'scrap-metal',
    metaTitle: 'Scrap Metal Collection London | Metal Recycling | WasteWize UK',
    metaDesc:  'Ferrous and non-ferrous scrap metal collection and recycling across London and the Home Counties. Competitive rates on large volumes. Waste transfer notes included. EA licensed.',
    heroDesc:  'Collection and responsible recycling of ferrous and non-ferrous scrap metal from commercial, industrial, and construction sites across London and the Home Counties. Competitive rates are available for large volumes; all collections are carried out under our Environment Agency Waste Carrier Licence with a full Duty of Care Waste Transfer Note issued as standard. We operate exclusively on a cashless basis in full compliance with the Scrap Metal Dealers Act 2013.',
    bodySections: [
      {
        heading: 'Scrap Metal Collection for London Businesses and Contractors',
        body:    'Construction sites, engineering workshops, electrical contractors, and commercial properties across London generate significant scrap metal volumes during normal operations — structural steel offcuts, copper cabling stripped during rewiring, aluminium window frames from building refurbishments, and cast iron radiators from heating system replacements. WasteWize collects all of these under our EA Waste Carrier Licence, with a full Duty of Care Waste Transfer Note on every collection. For large volumes of high-value metals — particularly copper, aluminium, and stainless steel — we offer competitive purchase rates paid by bank transfer within five working days of collection.',
      },
      {
        heading: 'Metal Recycling — Why It Matters',
        body:    'Recycling metal is significantly more energy-efficient than producing it from raw ore. Recycled aluminium uses just 5% of the energy required for primary production from bauxite; recycled copper requires around 15% of the energy of smelting virgin ore. The UK steel industry relies on scrap as a primary feedstock, with electric arc furnaces producing new steel almost entirely from recycled material. When you use WasteWize for scrap metal collection, your material goes to certified smelters and shredders operating within the UK or EU — not through overseas intermediaries with unknown processing standards. We can provide the name and EA permit number of the receiving facility on your Waste Transfer Note.',
      },
      {
        heading: 'The Scrap Metal Dealers Act 2013 — What It Means for Your Business',
        body:    'The Scrap Metal Dealers Act 2013 banned all cash payments for scrap metal — for both dealers and the individuals or businesses providing material. Any collector that offers cash for your scrap is operating illegally, and accepting cash payment from such a collector may implicate you in that offence. WasteWize is registered as a scrap metal collector and dealer under the Act. Where purchase rates are agreed for large volumes of high-value metals, all payments are made exclusively by bank transfer with a clear paper trail on both sides. We are happy to provide a copy of our registration certificate on request before any collection.',
      },
    ],
    included: [
      'Structural steel — beams, columns, and sections',
      'Cast iron — radiators, pipes, and machinery',
      'Copper cabling, pipe, and sheet',
      'Aluminium — extrusions, profiles, guttering, and window frames',
      'Stainless steel — vessels, catering equipment, and fabrications',
      'Brass and bronze — valves, fittings, and ingots',
      'Lead — sheet, flashing, and pipework',
      'Mixed metals and white goods containing recoverable metal',
    ],
    process: [
      {
        title: 'Enquiry & Rate',
        desc:  'Tell us the metal type and approximate volume. For large volumes of high-value metals (copper, aluminium, stainless steel), we can offer a purchase rate. For smaller mixed loads, we quote a fixed collection charge.',
      },
      {
        title: 'Collection',
        desc:  'Our vehicle arrives at your site and metal is loaded using appropriate equipment — trolleys, pallet trucks, chains, or a crane-lift for larger fabrications.',
      },
      {
        title: 'Segregation',
        desc:  'Pre-segregated loads attract better rates. Mixed loads are separated at our depot before onward transfer. We will advise you on how to pre-sort for maximum return.',
      },
      {
        title: 'Waste Transfer Note',
        desc:  'An official Duty of Care Waste Transfer Note is issued on collection, confirming the metal type, approximate weight, and the licensed receiving facility.',
      },
      {
        title: 'Recycling & Payment',
        desc:  'Metal goes to a licensed shredder or smelter for full material recovery. Where a purchase rate applies, payment is made by bank transfer within five working days.',
      },
    ],
    compliance: [
      { badge: 'EA',   title: 'EA Waste Carrier Licence CBDU335711', desc: 'Legally required for transportation of scrap metal as controlled waste between sites.', href: 'https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers?regIdentifier=CBDU335711' },
      { badge: 'SMA',  title: 'Scrap Metal Dealers Act 2013',        desc: 'WasteWize is registered as a scrap metal collector and dealer. All payments are made by bank transfer — cash payments for scrap metal are illegal under the Act.' },
      { badge: 'WTN',  title: 'Duty of Care Waste Transfer Note',    desc: 'Issued on every collection under the Environmental Protection Act 1990. Required for all business scrap metal disposals.' },
      { badge: 'CML',  title: 'Cashless Payments Only',              desc: 'Under the Scrap Metal Dealers Act 2013, cash payment for scrap metal is a criminal offence. All purchase payments are made by bank transfer.' },
    ],
    faqs: [
      {
        q: 'Do you pay cash for scrap metal?',
        a: 'No. Under the Scrap Metal Dealers Act 2013, paying cash for scrap metal is a criminal offence for both the payer and the recipient. All purchase payments for large volumes of scrap metal are made by bank transfer within five working days. We do not handle cash transactions under any circumstances.',
      },
      {
        q: 'What is the difference between ferrous and non-ferrous metal?',
        a: 'Ferrous metals contain iron — structural steel, cast iron, and mild steel are the most common examples. Non-ferrous metals do not contain iron — copper, aluminium, brass, lead, and stainless steel are the most common. Non-ferrous metals generally have a higher scrap value per tonne because of their material properties and the energy savings achieved through recycling versus primary production.',
      },
      {
        q: 'Do I need a waste transfer note for scrap metal?',
        a: 'Yes. Scrap metal is classified as controlled waste under the Environmental Protection Act 1990. Any business disposing of scrap metal must use a registered waste carrier and retain a Duty of Care Waste Transfer Note as evidence of their duty-of-care compliance. WasteWize issues these on every commercial collection as standard.',
      },
      {
        q: 'Can you collect scrap metal from a residential property?',
        a: 'Yes. Homeowners with significant amounts of scrap metal — from a renovation, inherited machinery, or appliance disposal — can book a residential scrap metal collection. Our standard collection service applies; the Waste Transfer Note is provided as with any other collection.',
      },
    ],
    relatedIds: ['hardcore-wood', 'building-construction', 'electrical-equipment'],
  },

};
