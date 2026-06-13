/**
 * Per-page content overrides for area × town × service pages.
 *
 * Key format: `${areaSlug}/${townSlug}/${serviceSlug}`
 *
 * These objects provide differentiated local signals that the generic
 * TypeScript data files cannot supply — making each priority page unique
 * enough to rank on page 1 rather than page 2.
 *
 * The interface below is the TypeScript equivalent of the Zod content
 * collection schema requested in the brief (the project uses plain TS data
 * files rather than Astro Content Collections).
 */

export interface PageFAQ {
  /** Full question text — written to target a specific intent category */
  q: string;
  /** 1–2 sentence answer — extractable by Google AI Overviews */
  a: string;
}

/**
 * Minimum 8 FAQs required, covering all fan-out intent categories:
 * DEFINITIONAL | LOCAL | PROCESS | PRICING | COMPLIANCE | MATERIALS | TRUST | CONVERSION
 */
export interface PageOverride {
  /** 2–3 nearby landmarks, postcodes, or named zones we serve */
  localLandmarks:    string[];
  /** Borough or district council name */
  localCouncil:      string;
  /** URL to the council's waste or fly-tip reporting page */
  councilWasteUrl:   string;
  /** Coverage description or postcode range */
  serviceArea:       string;
  /** One-sentence example of a real job type in this area */
  typicalJobExample: string;
  /** e.g. "Same-day collection available across Uxbridge" */
  responseTime:      string;
  /** e.g. "Serving Hillingdon Borough contractors since 2019" */
  localProof:        string;
  /** Main GSC query this page targets — used to seed the FAQ fan-out */
  primaryQuery:      string;
  /** Local pricing context — "from £X" or "free collection for metals" */
  pricingContext:    string;
  /**
   * 2 paragraphs of service-specific local copy separated by \n\n.
   * Every sentence must be specific to this town + service combination.
   * No boilerplate. Uses localLandmarks, localCouncil, typicalJobExample.
   */
  localContext:      string;
  /** Min 8 fan-out FAQs covering all 8 intent categories */
  faqs:              PageFAQ[];
  /** Override title tag — max 60 chars */
  metaTitle?:        string;
  /** Override meta description — max 155 chars */
  metaDesc?:         string;
}

export const pageOverrides: Record<string, PageOverride> = {

  /* ─────────────────────────────────────────────────────────────────────
     1. Scrap Metal Collection — Uxbridge (Middlesex UB8/UB9/UB10)
     GSC: 273 impressions, avg position 17.37
  ───────────────────────────────────────────────────────────────────── */

  'middlesex/uxbridge/scrap-metal-collection': {
    localLandmarks:    ['Stockley Park Business Park', 'Cowley Mill Road Industrial Estate', 'Uxbridge Business Park'],
    localCouncil:      'London Borough of Hillingdon',
    councilWasteUrl:   'https://www.hillingdon.gov.uk/article/2490/Fly-tipping', // TODO: confirm live URL
    serviceArea:       'All UB8, UB9, and UB10 postcodes — including Cowley, Harefield, Ickenham, and the full Stockley Park and Uxbridge Business Park corridors',
    typicalJobExample: 'Collection of 200 kg of copper cabling and aluminium window frames from a rewiring project at a warehouse unit on Cowley Mill Road, UB8',
    responseTime:      'Same-day scrap metal collection available across Uxbridge UB8, UB9, and UB10 — call before noon for same-day attendance',
    localProof:        'Serving Hillingdon Borough contractors and industrial businesses since 2019',
    primaryQuery:      'scrap metal collection Uxbridge',
    pricingContext:    'Copper, aluminium, and stainless steel from Uxbridge sites may attract a purchase rate paid by bank transfer. Ferrous metal (steel, iron, cast iron) collections from £75 depending on volume. Large Stockley Park and Cowley Mill Road clearances quoted on-site — call 07929 771954.',
    localContext:      `Uxbridge generates substantial scrap metal volumes from its dual commercial character: the corporate business parks at Stockley Park and Uxbridge Business Park produce a steady stream of copper cabling, aluminium fixtures, and IT infrastructure from office fit-outs and technology refreshes, while the light industrial and trade estates along Cowley Mill Road and the Grand Union Canal corridor generate structural steel, cast iron, and mixed metals from manufacturing and engineering operations. Both environments require a licensed, documented collection with a Waste Transfer Note that protects the disposal client from duty-of-care liability under the Environmental Protection Act 1990.

WasteWize collects all metal types across the full UB8, UB9, and UB10 postcode area — including commercial offices at Stockley Park, manufacturing units at Cowley Mill Road, and residential refurbishments across Hillingdon's suburban hinterland. High-value non-ferrous metals (copper, aluminium, brass) may attract a purchase rate; all payments are by bank transfer in compliance with the Scrap Metal Dealers Act 2013. Call 07929 771954 to confirm rates and same-day availability.`,
    metaTitle: 'Scrap Metal Collection Uxbridge | EA Licensed | WasteWize UK',
    metaDesc:  'Licensed scrap metal collection Uxbridge UB8–UB10. Stockley Park & Cowley Mill Rd. Purchase rates on copper & aluminium. EA Licence CBDU335711. Same-day available.',
    faqs: [
      {
        q: 'What is scrap metal collection, and which metal types does WasteWize collect from Uxbridge sites?',
        a: 'Scrap metal collection is the licensed removal and recycling of ferrous metals (structural steel, cast iron, mild steel) and non-ferrous metals (copper cabling, aluminium, brass, lead, stainless steel) from your site. WasteWize collects all of these under EA Waste Carrier Licence CBDU335711 — from structural steel offcuts on Cowley Mill Road to copper cabling from corporate fit-outs at Stockley Park.',
      },
      {
        q: 'Do you cover all UB8, UB9, and UB10 postcodes for scrap metal collection in Uxbridge?',
        a: 'Yes. We cover all three Uxbridge postcode areas: UB8 (Uxbridge town centre and Cowley), UB9 (Harefield and Denham Green), and UB10 (Hillingdon and Ickenham), plus the Stockley Park and Uxbridge Business Park corridors. Call 07929 771954 to confirm same-day availability at your specific address.',
      },
      {
        q: 'How do I book scrap metal collection in Uxbridge, and how quickly can you attend?',
        a: 'Call 07929 771954 or complete the online form with your metal type and approximate volume. We confirm same-day or next-day attendance for most Uxbridge jobs — collection before 5 pm is possible for jobs placed before noon. A Duty of Care Waste Transfer Note is issued at the time of collection.',
      },
      {
        q: 'Do you pay for scrap metal collected in Uxbridge, and what rates apply?',
        a: 'High-value non-ferrous metals — copper, aluminium, and stainless steel — may attract a purchase rate paid by bank transfer within five working days. Ferrous metal (steel, cast iron) is usually collected free or at a small charge depending on volume. Under the Scrap Metal Dealers Act 2013, cash payments for scrap are a criminal offence — all payments are by bank transfer only.',
      },
      {
        q: 'Is WasteWize authorised to collect scrap metal in the London Borough of Hillingdon?',
        a: 'Yes. WasteWize holds EA Waste Carrier Licence CBDU335711 and is registered as a scrap metal collector and dealer under the Scrap Metal Dealers Act 2013 — both legally required to collect scrap metal commercially in Hillingdon Borough. A Duty of Care Waste Transfer Note is issued on every collection as required by the Environmental Protection Act 1990.',
      },
      {
        q: 'What scrap metals do you collect in Uxbridge, and are there any you will not take?',
        a: 'We collect structural steel, cast iron (radiators, pipes, machinery), copper (cabling, pipe, sheet), aluminium (extrusions, window frames, guttering), stainless steel, brass, lead, and white goods containing recoverable metal. We do not collect radioactive materials, PCB-contaminated equipment, or sealed pressurised vessels. Call us to check any unusual item before booking.',
      },
      {
        q: 'What are the legal risks of using an unlicensed scrap metal collector in Uxbridge?',
        a: 'An unlicensed collector cannot issue a Duty of Care Waste Transfer Note, leaving you liable under the Environmental Protection Act 1990 if the waste is dumped elsewhere. Accepting a cash payment is also a criminal offence for both parties under the Scrap Metal Dealers Act 2013. Always ask for the collector\'s EA Waste Carrier Licence number before booking — WasteWize\'s is CBDU335711.',
      },
      {
        q: 'How do I arrange scrap metal collection in Uxbridge today?',
        a: 'Call 07929 771954 for same-day booking — collection is often possible on the same day for Uxbridge jobs placed before noon. Alternatively, complete the form at wastewize.co.uk/contact with your metal type and quantity. We confirm attendance within the hour and bring the Waste Transfer Note on collection.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     2. Fly Tipping Removal — Thatcham (Berkshire RG18/RG19)
     GSC: 45 impressions, avg position 11.00 (nearest to page 1)
  ───────────────────────────────────────────────────────────────────── */

  'berkshire/thatcham/fly-tipping-removal': {
    localLandmarks:    ['Colthrop Industrial Estate', 'Kennet & Avon Canal towpath', 'Thatcham Nature Discovery Centre'],
    localCouncil:      'West Berkshire Council',
    councilWasteUrl:   'https://www.westberks.gov.uk/reportflytipping', // TODO: confirm live URL
    serviceArea:       'All RG18 and RG19 postcodes — including central Thatcham, Cold Ash, Headley, Ashmore Green, and rural access lanes between Thatcham and Newbury',
    typicalJobExample: 'Emergency clearance of a mattress, three rubbish bags, and a fridge-freezer fly-tipped at the entrance to a private access lane off Colthrop Lane, RG19',
    responseTime:      'Same-day fly-tipping clearance across Thatcham RG18 and RG19 — most jobs attended within 4 hours of booking',
    localProof:        'Serving West Berkshire landowners and private property owners with fly-tipping removal across the Newbury area',
    primaryQuery:      'fly tipping removal Thatcham',
    pricingContext:    'Fly-tipping removal in Thatcham from £150 for small mixed loads. Full van load clearances (furniture, rubble, mixed waste) from £275. Price includes pre-removal photography and Duty of Care Waste Transfer Note — send us a photo for a quote within the hour.',
    localContext:      `Thatcham's mix of residential development, the Colthrop Industrial Estate, and rural access lanes along the Kennet Valley makes it a consistent target for fly-tipping — particularly along the canal towpath, private farm track entrances off the A4, and in the lay-bys of rural lanes around Cold Ash and Headley. West Berkshire Council handles fly-tipping on public roads and council land; private landowners across RG18 and RG19 are legally responsible for removing fly-tipped waste from their own land under the Environmental Protection Act 1990, regardless of who dumped it.

WasteWize provides same-day fly-tipping removal across the full Thatcham area — photographing all waste before removal for council reporting and insurance purposes, then clearing the site and issuing a Duty of Care Waste Transfer Note. If you are under council enforcement pressure or the waste poses a safety risk, call 07929 771954 for priority attendance. We advise clients on the West Berkshire Council fly-tipping reporting process and can provide the pre-removal photographs required by the council's evidence system.`,
    metaTitle: 'Fly Tipping Removal Thatcham | Same-Day | WasteWize UK',
    metaDesc:  'Same-day fly tipping removal Thatcham RG18/RG19. Private land cleared with photos & Duty of Care docs for West Berkshire Council. EA Licence CBDU335711.',
    faqs: [
      {
        q: 'What is fly-tipping removal, and who is legally responsible for clearing it on private land in Thatcham?',
        a: 'Fly-tipping is the illegal dumping of waste on land without the owner\'s consent. Under the Environmental Protection Act 1990, private landowners in Thatcham — homeowners, farmers, and businesses — are responsible for clearing fly-tipped waste from their own land even if they did not cause it. West Berkshire Council clears fly-tipping on public land; private land is the owner\'s legal responsibility.',
      },
      {
        q: 'Do you cover rural lanes and private land around Cold Ash, Headley, and Ashmore Green near Thatcham?',
        a: 'Yes. We cover all RG18 and RG19 postcodes including rural access lanes in Cold Ash, Ashmore Green, Headley, and the Kennet Valley corridor between Thatcham and Newbury. Rural fly-tipping often involves heavier loads and difficult access, which our vehicles and equipment are suited to handle.',
      },
      {
        q: 'How quickly can WasteWize remove fly-tipped waste in Thatcham?',
        a: 'We aim to attend the same day for most Thatcham fly-tipping clearances — typically within 4 hours of booking. For urgent cases (active tipping site, safety risk, or council enforcement notice), call 07929 771954 directly for priority dispatch.',
      },
      {
        q: 'How much does fly-tipping removal cost in Thatcham?',
        a: 'Fly-tipping clearances in Thatcham start from around £150 for a small mixed load (a few bags and a single bulky item) and from £275 for a full van load. Send us photos via the online form at wastewize.co.uk/contact and we quote within the hour — price includes all removal, disposal, pre-removal photography, and a Duty of Care Waste Transfer Note.',
      },
      {
        q: 'Is WasteWize authorised to remove fly-tipped waste from private land in West Berkshire?',
        a: 'Yes. WasteWize holds EA Waste Carrier Licence CBDU335711, legally required to remove fly-tipped and controlled waste from private land. We issue a Duty of Care Waste Transfer Note on every clearance — suitable as evidence for West Berkshire Council reporting and for insurance claims.',
      },
      {
        q: 'What types of fly-tipped waste do you remove in Thatcham?',
        a: 'We remove all common fly-tipped materials: furniture and mattresses, builder\'s rubble and construction waste, mixed rubbish bags, garden waste, white goods, tyres, and electrical items. For hazardous materials such as asbestos or clinical waste, we assess the load before quoting and arrange specialist disposal where required — we advise you in advance if this applies.',
      },
      {
        q: 'What legal risks do I face if I leave fly-tipped waste on my land in Thatcham?',
        a: 'West Berkshire Council can issue a Fixed Penalty Notice of up to £400 to private landowners who fail to clear fly-tipped waste from their land, and may prosecute under the Environmental Protection Act 1990 which carries an unlimited fine. The perpetrators may also return if the site is not cleared promptly. WasteWize provides same-day removal with a full paper trail protecting you from enforcement action.',
      },
      {
        q: 'How do I arrange same-day fly-tipping clearance in Thatcham?',
        a: 'Call 07929 771954 or send photos via the online form at wastewize.co.uk/contact with your RG18 or RG19 postcode. We confirm attendance time within the hour. You can simultaneously report the fly-tipping to West Berkshire Council — our pre-removal photographs make that report straightforward to file.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     3. Fly Tipping Removal — Brentford (Middlesex TW8)
     GSC: 81 impressions, avg position 11.31
  ───────────────────────────────────────────────────────────────────── */

  'middlesex/brentford/fly-tipping-removal': {
    localLandmarks:    ['Brentford Waterside development', 'Grand Union Canal towpath', 'Great West Road (A4) corridor'],
    localCouncil:      'London Borough of Hounslow',
    councilWasteUrl:   'https://www.hounslow.gov.uk/info/20056/fly-tipping', // TODO: confirm live URL
    serviceArea:       'All TW8 postcodes — including Brentford town centre, Brentford Waterside, Kew Bridge, and the Grand Union Canal corridor',
    typicalJobExample: 'Emergency clearance of construction rubble and mixed rubbish bags fly-tipped against the hoarding of an active development site on Kew Bridge Road, TW8',
    responseTime:      'Same-day fly-tipping clearance across Brentford TW8 — urgent development site clearances typically attended within 2–3 hours',
    localProof:        'Supporting Brentford development contractors and TW8 landlords with fly-tipping removal along the Grand Union Canal corridor',
    primaryQuery:      'fly tipping removal Brentford',
    pricingContext:    'Fly-tipping removal in Brentford from £150 for small mixed loads. Development site perimeter clearances (rubble, mixed waste against hoardings) from £200 per load. Pre-removal photography and Duty of Care Waste Transfer Note included in every quote.',
    localContext:      `Brentford's Grand Union Canal corridor and the ongoing Brentford Waterside development create specific fly-tipping hotspots: the canal towpath, private access roads adjacent to development hoardings, and former industrial plots awaiting redevelopment see repeated tipping incidents that require fast, documented clearance. The London Borough of Hounslow handles fly-tipping on public roads and council land; private landowners and development site operators in TW8 are responsible under the Environmental Protection Act 1990 for clearing waste on their own land — regardless of who dumped it.

WasteWize provides same-day fly-tipping removal across Brentford — photographing all waste before removal for Hounslow Council reporting and insurance purposes, then clearing the site and issuing a Duty of Care Waste Transfer Note. Active development sites on the Great West Road and Kew Bridge Road corridor are prioritised for same-day attendance. Call 07929 771954 directly for fastest response on urgent clearances.`,
    metaTitle: 'Fly Tipping Removal Brentford TW8 | Same-Day | WasteWize UK',
    metaDesc:  'Same-day fly tipping removal Brentford TW8. Development sites & private land. Photos + Duty of Care docs for Hounslow Council. EA Licence CBDU335711.',
    faqs: [
      {
        q: 'What is fly-tipping removal, and who is responsible for clearing dumped waste in Brentford?',
        a: 'Fly-tipping is the illegal dumping of waste without the landowner\'s permission. Under the Environmental Protection Act 1990, private landowners in Brentford — including development site operators, businesses, and homeowners — are legally responsible for clearing fly-tipped waste from their land even if they did not dump it. The London Borough of Hounslow handles fly-tipping on public land; private land is the owner\'s responsibility.',
      },
      {
        q: 'Do you offer fly-tipping removal across the whole of Brentford TW8, including the canal corridor?',
        a: 'Yes. We cover all TW8 postcodes — including Brentford town centre, the Brentford Waterside development zone, the Great West Road corridor, and the Grand Union Canal towpath area. Development site hoardings and private access roads in the Kew Bridge and Ballymore zones are areas we attend regularly.',
      },
      {
        q: 'How quickly can you clear fly-tipped waste from a development site in Brentford?',
        a: 'For urgent Brentford clearances — active development site hoardings, canal towpath incidents, or safety-risk waste — we aim to attend within 2–3 hours of booking. Call 07929 771954 directly for fastest response. We photograph the waste on arrival, clear the site, and issue a Duty of Care Waste Transfer Note before departing.',
      },
      {
        q: 'How much does fly-tipping removal cost in Brentford?',
        a: 'Fly-tipping removal in Brentford starts from £150 for small mixed loads. Development site clearances — builder\'s rubble, mixed commercial waste against hoardings — are typically £200–£400 per load depending on volume. Send photos via wastewize.co.uk/contact and we quote within the hour; price includes pre-removal photography and a Duty of Care Waste Transfer Note.',
      },
      {
        q: 'Is WasteWize a licensed carrier authorised to remove fly-tipped waste in the London Borough of Hounslow?',
        a: 'Yes. WasteWize holds EA Waste Carrier Licence CBDU335711, legally required to remove controlled and fly-tipped waste from private land. We issue a Duty of Care Waste Transfer Note on every Brentford clearance — serving as evidence for Hounslow Council\'s fly-tipping reporting system and for insurance claims.',
      },
      {
        q: 'What types of fly-tipped waste do you remove from Brentford sites?',
        a: 'We remove all common fly-tipped waste: furniture and mattresses, builder\'s rubble and construction waste, mixed rubbish bags, garden waste, white goods, tyres, and electrical items. For hazardous materials (asbestos sheets, clinical waste), we assess on-site before quoting and arrange specialist disposal where needed — advising you in advance if specialist handling applies.',
      },
      {
        q: 'What are the legal consequences of leaving fly-tipped waste on private land in Brentford?',
        a: 'The London Borough of Hounslow can issue Fixed Penalty Notices of up to £400 to Brentford landowners who fail to clear fly-tipped waste from private land, and may prosecute under the Environmental Protection Act 1990 (unlimited fine). Leaving waste on development site hoardings may also trigger additional Planning Enforcement notices. WasteWize provides same-day removal with a full paper trail protecting you from action.',
      },
      {
        q: 'How do I arrange same-day fly-tipping clearance in Brentford?',
        a: 'Call 07929 771954 — for urgent Brentford clearances on development sites or the canal corridor, calling is fastest. Alternatively, send photos via wastewize.co.uk/contact with your TW8 address and we confirm attendance within the hour. You can simultaneously report to Hounslow Council\'s fly-tipping portal — our pre-removal photographs make this straightforward.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     4. Scrap Metal Collection — Thatcham (Berkshire RG18/RG19)
     GSC: 96 impressions, avg position 13.32
  ───────────────────────────────────────────────────────────────────── */

  'berkshire/thatcham/scrap-metal-collection': {
    localLandmarks:    ['Colthrop Industrial Estate', 'Kennet & Avon Canal', 'A4 Bath Road corridor'],
    localCouncil:      'West Berkshire Council',
    councilWasteUrl:   'https://www.westberks.gov.uk/waste', // TODO: confirm live URL
    serviceArea:       'All RG18 and RG19 postcodes — including Thatcham town centre, Colthrop Industrial Estate, Cold Ash, and the rural Kennet Valley corridor',
    typicalJobExample: 'Collection of aluminium window frames, copper plumbing pipe, and structural steel sections from a full commercial refurbishment at a unit on Colthrop Way, RG19',
    responseTime:      'Same-day scrap metal collection available across Thatcham RG18 and RG19 — call before noon for same-day attendance',
    localProof:        'Serving West Berkshire industrial businesses and commercial operators between Newbury and Reading',
    primaryQuery:      'scrap metal collection Thatcham',
    pricingContext:    'Copper, aluminium, and brass from Thatcham sites may attract a purchase rate paid by bank transfer. Ferrous metal (steel, cast iron) collections from £65 depending on volume. Colthrop Industrial Estate clearances can be quoted on-site. All payments by bank transfer — cash is illegal under the Scrap Metal Dealers Act 2013.',
    localContext:      `Thatcham's Colthrop Industrial Estate — one of Berkshire's most active manufacturing and trade zones — is a significant source of scrap metal: engineering businesses, fabricators, and commercial operators along Colthrop Way and the surrounding RG19 logistics corridor generate structural steel offcuts, copper wiring, and aluminium from regular operational and strip-out activity. Alongside the industrial profile, ongoing residential refurbishment in Thatcham town centre and Cold Ash generates aluminium window frames, copper plumbing, and cast iron from the area's older housing stock.

WasteWize collects all metal types from Thatcham — covering the full RG18 and RG19 postcode area, including the Colthrop estate, commercial premises on the A4 Bath Road corridor, and residential addresses throughout the town. High-value non-ferrous metals attract competitive purchase rates paid by bank transfer within five working days; ferrous collections are typically free or at a small charge depending on volume. Call 07929 771954 for same-day collection in Thatcham.`,
    metaTitle: 'Scrap Metal Collection Thatcham | EA Licensed | WasteWize UK',
    metaDesc:  'Licensed scrap metal collection Thatcham RG18/RG19. Colthrop Industrial Estate & West Berkshire. Purchase rates on copper & aluminium. EA Licence CBDU335711.',
    faqs: [
      {
        q: 'What scrap metal types does WasteWize collect from Thatcham, and what areas do you cover?',
        a: 'We collect ferrous metals (structural steel, cast iron, mild steel) and non-ferrous metals (copper, aluminium, brass, lead, stainless steel) from commercial and residential sites across Thatcham — covering all RG18 and RG19 postcodes, including Colthrop Industrial Estate, Cold Ash, and the A4 corridor between Thatcham and Newbury.',
      },
      {
        q: 'Do you collect scrap metal from Colthrop Industrial Estate and other commercial premises in Thatcham?',
        a: 'Yes. We regularly collect from industrial estates and commercial premises in Thatcham — including Colthrop Way, Colthrop Lane, and the surrounding RG19 commercial zone. Call 07929 771954 for a quote on large industrial volumes or to discuss ongoing scheduled collections from Colthrop businesses.',
      },
      {
        q: 'How do I book scrap metal collection in Thatcham, and how quickly can you attend?',
        a: 'Call 07929 771954 or complete the online form with your metal type and estimated volume. Same-day or next-day collection is available for most Thatcham jobs placed before noon. We issue a Duty of Care Waste Transfer Note at the point of collection — essential for business duty-of-care compliance under the Environmental Protection Act 1990.',
      },
      {
        q: 'Will WasteWize pay for scrap metal collected in Thatcham, and how are payments made?',
        a: 'High-value non-ferrous metals — copper, aluminium, brass, and stainless steel — collected from Thatcham sites may attract a purchase rate, paid by bank transfer within five working days. Ferrous metal (steel, cast iron) is typically collected free or at a small charge. Cash payments for scrap are a criminal offence under the Scrap Metal Dealers Act 2013 — all payments are by bank transfer only.',
      },
      {
        q: 'Is WasteWize authorised to collect scrap metal in West Berkshire?',
        a: 'Yes. WasteWize holds EA Waste Carrier Licence CBDU335711 and is registered as a scrap metal collector and dealer under the Scrap Metal Dealers Act 2013 — both legally required for commercial scrap metal collection in West Berkshire. Duty of Care Waste Transfer Notes are issued on every collection as required by the Environmental Protection Act 1990.',
      },
      {
        q: 'What metals do you collect in Thatcham, and are there any you will not take?',
        a: 'We collect structural steel, cast iron (radiators, pipes, machinery), copper (cabling, pipe, sheet), aluminium (window frames, guttering, extrusions), stainless steel, brass, lead, and mixed white goods containing recoverable metal. We do not collect radioactive materials, PCB-contaminated equipment, or sealed pressurised vessels. Call with a description of anything unusual and we will advise before booking.',
      },
      {
        q: 'What are the legal risks of using an unlicensed scrap metal collector in Thatcham?',
        a: 'Unlicensed collectors cannot issue a Duty of Care Waste Transfer Note, leaving you liable under the Environmental Protection Act 1990 if the waste is dumped elsewhere. Accepting a cash payment is also a criminal offence for both the seller and the collector under the Scrap Metal Dealers Act 2013. Always ask for the collector\'s EA Waste Carrier Licence number — WasteWize\'s is CBDU335711.',
      },
      {
        q: 'How do I arrange scrap metal collection in Thatcham today?',
        a: 'Call 07929 771954 for a verbal quote and same-day booking, or complete the form at wastewize.co.uk/contact with your metal type and RG18 or RG19 postcode. We confirm attendance time within the hour and bring the Waste Transfer Note on collection.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     5. Scrap Metal Collection — Hillingdon (Middlesex UB10)
     GSC: 68 impressions, avg position 12.28
  ───────────────────────────────────────────────────────────────────── */

  'middlesex/hillingdon/scrap-metal-collection': {
    localLandmarks:    ['Long Lane industrial zone', 'Hillingdon Road (A4020) corridor', 'Uxbridge town boundary'],
    localCouncil:      'London Borough of Hillingdon',
    councilWasteUrl:   'https://www.hillingdon.gov.uk/article/2490/Fly-tipping', // TODO: confirm live URL
    serviceArea:       'All UB10 postcodes — including Hillingdon village, Hillingdon Heath, Colham Avenue, and the Long Lane industrial zone',
    typicalJobExample: 'Collection of two tonnes of structural steel and copper pipe from a commercial strip-out at an industrial unit on Long Lane, UB10',
    responseTime:      'Same-day scrap metal collection available across Hillingdon UB10 — call before noon for same-day attendance',
    localProof:        'Serving London Borough of Hillingdon industrial estates and commercial properties since 2019',
    primaryQuery:      'scrap metal collection Hillingdon',
    pricingContext:    'Copper, aluminium, and non-ferrous metals from Hillingdon UB10 sites may attract a purchase rate paid by bank transfer. Ferrous metal collections from £75 depending on volume and access. Long Lane industrial clearances can be quoted on-site. All payments by bank transfer only.',
    localContext:      `Hillingdon's Long Lane industrial zone is the primary commercial scrap metal source in the UB10 area — light industrial units, trade businesses, and engineering companies along Long Lane and Colham Avenue generate structural steel offcuts, copper plumbing, and cast iron from regular operational and strip-out activity. The residential hinterland of Hillingdon village and Hillingdon Heath, with its mix of interwar and post-war housing undergoing ongoing renovation, adds aluminium window frames, copper piping, and cast iron radiators to the collection mix.

WasteWize covers the full UB10 postcode — from the Long Lane industrial zone through Hillingdon village to the Ickenham boundary, and along the full Uxbridge Road (A4020) corridor. High-value non-ferrous metals may attract a purchase rate paid by bank transfer within five working days; ferrous metal is typically collected free or at a small charge depending on volume. All collections include a Duty of Care Waste Transfer Note. Call 07929 771954 for same-day collection or to discuss large industrial volumes from Long Lane.`,
    metaTitle: 'Scrap Metal Collection Hillingdon | EA Licensed | WasteWize UK',
    metaDesc:  'Licensed scrap metal collection Hillingdon UB10. Long Lane industrial zone. Purchase rates on copper & aluminium. EA Licence CBDU335711. Same-day available.',
    faqs: [
      {
        q: 'What is scrap metal collection, and which metals does WasteWize collect in Hillingdon UB10?',
        a: 'Scrap metal collection is the licensed removal and recycling of ferrous metals (structural steel, cast iron, mild steel) and non-ferrous metals (copper, aluminium, brass, lead, stainless steel) from your site. WasteWize collects all of these across Hillingdon UB10 — from Long Lane industrial strip-outs to residential renovation offcuts in Hillingdon village and Hillingdon Heath.',
      },
      {
        q: 'Do you collect from Long Lane industrial estate and commercial premises across Hillingdon UB10?',
        a: 'Yes. We regularly collect scrap metal from Long Lane, Colham Avenue, and commercial premises throughout the Hillingdon and Hillingdon Heath UB10 area. For large industrial volumes — structural steel, copper cabling, and mixed metals from strip-out projects — call 07929 771954 for an on-site quote.',
      },
      {
        q: 'How do I book scrap metal collection in Hillingdon, and how quickly can you attend?',
        a: 'Call 07929 771954 or use the online form at wastewize.co.uk/contact with your metal type and approximate volume. Same-day collection is available for most UB10 jobs placed before noon. We bring the Duty of Care Waste Transfer Note to every collection — essential for business compliance under the Environmental Protection Act 1990.',
      },
      {
        q: 'Does WasteWize pay for scrap metal in Hillingdon, and how are rates calculated?',
        a: 'High-value non-ferrous metals — copper, aluminium, and stainless steel — from Hillingdon sites may attract a purchase rate paid by bank transfer within five working days. Ferrous metal (steel, cast iron) is generally collected free or at a small charge depending on volume. All payments are by bank transfer; cash payments are a criminal offence under the Scrap Metal Dealers Act 2013.',
      },
      {
        q: 'Is WasteWize licensed to collect scrap metal in the London Borough of Hillingdon?',
        a: 'Yes. WasteWize holds EA Waste Carrier Licence CBDU335711 and is registered as a scrap metal collector and dealer under the Scrap Metal Dealers Act 2013 — both legally required for scrap metal collection in Hillingdon Borough. A Duty of Care Waste Transfer Note is issued on every collection as required by the Environmental Protection Act 1990.',
      },
      {
        q: 'What scrap metals do you collect in Hillingdon, and which will you not take?',
        a: 'We collect structural steel, cast iron (radiators, pipes, machinery), copper (cabling, pipe, sheet), aluminium (window frames, extrusions, guttering), stainless steel, brass, lead sheet and flashing, and white goods containing recoverable metal. We do not collect radioactive materials, PCB-contaminated equipment, or sealed gas cylinders. Call to check any item you are unsure about before booking.',
      },
      {
        q: 'What risks come with using an unlicensed scrap metal collector in Hillingdon?',
        a: 'Unlicensed collectors cannot issue a legal Duty of Care Waste Transfer Note, leaving Hillingdon businesses liable under the Environmental Protection Act 1990 if the waste is dumped. Receiving a cash payment for scrap is also a criminal offence under the Scrap Metal Dealers Act 2013 for both parties. Always check the collector\'s EA licence number before booking — WasteWize\'s is CBDU335711.',
      },
      {
        q: 'How do I arrange scrap metal collection in Hillingdon today?',
        a: 'Call 07929 771954 for same-day booking — collection before 5 pm is possible for most Hillingdon UB10 jobs placed before noon. Or complete the online form at wastewize.co.uk/contact with your metal type and postcode. We confirm timing within the hour and issue a Waste Transfer Note at collection.',
      },
    ],
  },
};
