export interface TownDetail {
  localContext: string;
  keyAreas:     string[];
  topServices:  string[];
}

export const townDetails: Record<string, TownDetail> = {

  'central-london/chelsea': {
    localContext: `Chelsea is one of London's most intensively managed residential environments — a combination of Grade II listed stucco-fronted townhouses on Cheyne Walk and Carlyle Square, high-turnover lettings along the Fulham Road, and a dense commercial strip centred on King's Road and Sloane Square. Conservation area designations cover the majority of the borough, meaning that any structural work — however minor — requires a licensed refurbishment survey for asbestos before stripping commences. Interior strip-outs of Chelsea's Victorian and Edwardian mansion conversions are among our most common central London jobs, particularly during lease turnovers where landlords are upgrading period flats between tenancies.

The Royal Borough imposes strict working-hour windows and vehicle-size restrictions on residential streets, particularly east of Beaufort Street and on the garden squares. WasteWize operates ULEZ-compliant vehicles and has established relationships with the managing agents and freeholders who control access to the area's larger residential blocks. All Chelsea collections come with EA-licensed documentation and segregated waste streams to meet the recycling requirements specified by many of the area's premium property management companies.`,
    keyAreas:    ['King\'s Road', 'Sloane Square', 'Cheyne Walk', 'Fulham Road', 'World\'s End', 'Chelsea Embankment'],
    topServices: ['strip-out-demolition', 'residential-waste', 'confidential-waste'],
  },

  'central-london/westminster': {
    localContext: `Westminster encompasses London's most concentrated mix of government, financial, and luxury commercial real estate — from the Whitehall government quarter and Parliament Square through to the luxury retail of Victoria Street, the hotel and conference corridor of Belgravia, and the high-density mixed-use development of Victoria and Pimlico. This density of high-value occupiers creates specific and recurring waste requirements: confidential document shredding for legal chambers and government contractors, WEEE recycling for financial services firms and media organisations, and end-of-tenancy clearances for the constant churn of commercial tenants across Victoria's major office buildings.

Westminster City Council enforces some of central London's most complex loading and parking restrictions, including time-limited bays, permit zones along residential streets, and designated vehicle-size limits on many roads near Parliament. Our operations team pre-clears access requirements for every Westminster job, ensuring collections happen on time without penalty. We regularly handle clearances in Westminster's mansion blocks, serviced offices in Victoria and St James's, and high-security confidential waste runs for clients who require discrete collection without external signage.`,
    keyAreas:    ['Victoria', 'Pimlico', 'Belgravia', 'Whitehall', 'St James\'s', 'Mayfair border'],
    topServices: ['confidential-waste', 'commercial-clearance', 'electrical-equipment'],
  },

  'central-london/kensington': {
    localContext: `Kensington covers two distinct commercial zones: the high-street retail and restaurant quarter along Kensington High Street and Kensington Church Street, and the quieter residential neighbourhoods of Onslow Square, Nevern Square, and the streets surrounding Holland Park. The area's high concentration of period mansion flats and converted Victorian townhouses generates constant demand for renovation strip-outs, pre-sale clearances, and end-of-tenancy waste removal — particularly in the SW7 and W8 postcodes, where rental values are among the highest in London.

The Royal Borough of Kensington and Chelsea's waste permit zone and the presence of multiple resident-led conservation areas mean that contractors must be fully compliant and operate within agreed hours. WasteWize is familiar with the specific requirements of RBKC's major landlords and the estate agents managing Kensington's premium residential portfolio. The museums quarter — home to the V&A, Natural History Museum, and Science Museum — generates occasional specialist disposal requirements for institutional fit-outs. We also regularly work with the area's boutique hotels and private members clubs for scheduled commercial collections and confidential shredding.`,
    keyAreas:    ['Kensington High Street', 'Holland Park', 'Kensington Church Street', 'Exhibition Road', 'Onslow Square'],
    topServices: ['residential-waste', 'strip-out-demolition', 'commercial-clearance'],
  },

  'central-london/city-of-london': {
    localContext: `The City of London — the Square Mile — is Europe's highest-density commercial waste environment. Major financial institutions, law firms, and professional services companies occupy some of the world's most valuable office space across Canary Wharf's satellite and the Square Mile's towers, and their constant cycle of tenant churn, floor refurbishments, and technology refresh creates a sustained requirement for commercial clearance, WEEE collection, confidential document destruction, and strip-out services.

The City of London Corporation enforces rigorous access controls — pre-booked loading bays on most commercial streets, time-limited windows aligned to non-peak trading hours, and ULEZ compliance requirements for all vehicles. Collections cannot simply be turned up for; they must be pre-coordinated with building managers and security teams. WasteWize is experienced in this operational environment and regularly serves City facilities managers with scheduled WEEE collections, same-day confidential waste runs, and planned commercial clearances across Bishopsgate, Moorgate, Fenchurch Street, and the Aldgate fringe. All City collections include a full compliance documentation pack for corporate audit requirements.`,
    keyAreas:    ['Bishopsgate', 'Moorgate', 'Fenchurch Street', 'Aldgate', 'Cannon Street', 'St Paul\'s'],
    topServices: ['confidential-waste', 'electrical-equipment', 'commercial-clearance'],
  },

  'central-london/mayfair': {
    localContext: `Mayfair is home to some of the UK's highest-value commercial occupiers — hedge fund offices on Berkeley Square and Grosvenor Street, luxury retail flagships on New Bond Street and Conduit Street, private banks in Hill Street and Stratton Street, and a concentration of art dealers, legal practices, and family offices throughout the W1K and W1J postcodes. The Grosvenor Estate controls large areas of Mayfair's freehold and imposes specific requirements on contractors operating on its roads — including vehicle pre-registration and restrictions on loading times in residential sections.

The nature of Mayfair's occupiers creates specific waste requirements that differ from standard commercial areas. Confidential waste — both paper and electronic — is a daily requirement for the area's financial and legal clients. IT equipment disposal must be handled with full data destruction certification. Office clearances must often be carried out discreetly and outside peak hours to avoid disrupting neighbouring occupiers or drawing attention in a location where discretion is a professional expectation. WasteWize provides all of these services with ULEZ-compliant vehicles, out-of-hours availability, and documentation standards appropriate for Mayfair's corporate clients.`,
    keyAreas:    ['Berkeley Square', 'New Bond Street', 'Grosvenor Street', 'Hill Street', 'Conduit Street'],
    topServices: ['confidential-waste', 'electrical-equipment', 'commercial-clearance'],
  },

  'north-london/camden': {
    localContext: `Camden's economy spans three very different zones, each with distinct waste management requirements. The Camden Town and Camden Market area — centred on Chalk Farm Road, Camden Lock, and the Stables Market — generates high-volume commercial waste from its dense concentration of food and beverage, retail, and entertainment businesses. The King's Cross and Euston zone, one of London's fastest-growing office and technology clusters, creates sustained demand for commercial clearances, WEEE disposal, and confidential shredding from its media, technology, and professional services tenants. And the residential neighbourhoods of Primrose Hill, Belsize Park, and Hampstead generate steady house clearance and renovation waste from high-value property turnovers.

Camden Council operates permit zones and loading restrictions across large parts of the borough, particularly around the market area and on residential streets in the NW1, NW3, and NW5 postcodes. WasteWize is experienced in planning collections around these restrictions and regularly works with Camden's property managers, market traders, and commercial tenants across all three zones. The King's Cross estate in particular — with its concentrated development by Argent — requires pre-registered contractor access, which our team arranges as standard.`,
    keyAreas:    ['Camden Market', 'King\'s Cross', 'Chalk Farm', 'Primrose Hill', 'Euston', 'Belsize Park'],
    topServices: ['commercial-clearance', 'residential-waste', 'confidential-waste'],
  },

  'north-london/islington': {
    localContext: `Islington's position between the City of London to its south and the established residential areas of Canonbury and Barnsbury to its north makes it one of inner London's most commercially active boroughs. Upper Street — from Angel to Highbury Corner — is one of London's busiest high streets for food and drink, generating daily commercial waste. The Old Street roundabout area, widely known as Silicon Roundabout, hosts a dense cluster of technology startups, digital agencies, and co-working spaces whose regular office moves and equipment refreshes create steady WEEE and clearance requirements.

Islington's Victorian and Georgian residential stock — the garden squares of Barnsbury, the terraces of Canonbury, and the mansion conversions of Highbury — generates significant renovation waste and house clearance demand, particularly among the high-turnover rental market that serves the young professional population. Many of Islington's residential streets are narrow, with residents' parking bays and loading restrictions that require pre-planning for any commercial operation. WasteWize coordinates access requirements for every Islington job to ensure collections happen without penalty notices or disruption to neighbouring residents.`,
    keyAreas:    ['Angel', 'Old Street', 'Upper Street', 'Barnsbury', 'Canonbury', 'Highbury'],
    topServices: ['commercial-clearance', 'electrical-equipment', 'residential-waste'],
  },

  'east-london/tower-hamlets': {
    localContext: `Tower Hamlets encompasses two of east London's most commercially intensive zones: the Canary Wharf financial district, which houses major banks, law firms, and media groups including HSBC, Barclays, and the Daily Telegraph; and the broader inner-east borough, which includes the rapidly developing Whitechapel, Aldgate, and Shoreditch fringe areas alongside established residential neighbourhoods in Bethnal Green and Poplar. Canary Wharf generates substantial commercial waste — office churn, WEEE recycling, confidential shredding, and end-of-tenancy clearances from the estate's multi-tenanted towers — but its private estate status requires contractor pre-registration and bay pre-booking for all vehicle access.

The wider borough has one of the highest residential development rates in London, with major new-build schemes in Whitechapel, Aldgate East, and Poplar Riverside creating ongoing construction waste removal requirements. WasteWize serves both the commercial core and the residential development pipeline, coordinating Canary Wharf access separately and handling construction waste from the borough's numerous active sites with full site compliance documentation.`,
    keyAreas:    ['Canary Wharf', 'Whitechapel', 'Aldgate', 'Bethnal Green', 'Shoreditch border', 'Poplar'],
    topServices: ['confidential-waste', 'electrical-equipment', 'commercial-clearance'],
  },

  'east-london/stratford': {
    localContext: `Stratford is east London's most rapidly transformed neighbourhood — the 2012 Olympic legacy has turned a former railway goods yard into a major mixed-use destination centred on Westfield Stratford City, the Queen Elizabeth Olympic Park, and a growing cluster of institutional headquarters including the BBC, the Financial Conduct Authority, and Transport for London's HQ at 5 Endeavour Square. The International Quarter development alone has brought over two million square feet of Grade A office space into the E20 postcode since 2015, with further towers under construction.

This development intensity means that Stratford is simultaneously a major construction waste market — ongoing site clearances, strip-outs, and hardcore removal across multiple active phases — and a growing corporate commercial waste market as the new occupiers settle into fitted-out spaces and begin generating IT refresh cycles and confidential waste. The proximity of the Olympic Park to Hackney Wick and Fish Island also means WasteWize regularly serves the creative and light-industrial operators in those adjacent zones. Site access on the major developments requires pre-booked contractor slots, which WasteWize arranges as standard.`,
    keyAreas:    ['International Quarter', 'Westfield Stratford', 'Queen Elizabeth Olympic Park', 'Hackney Wick', 'E20'],
    topServices: ['building-construction', 'strip-out-demolition', 'commercial-clearance'],
  },

  'east-london/stratford': {
    localContext: `Stratford is east London's most rapidly transformed neighbourhood — the 2012 Olympic legacy has turned a former railway goods yard into a major mixed-use destination centred on Westfield Stratford City, the Queen Elizabeth Olympic Park, and a growing cluster of institutional headquarters including the BBC, the Financial Conduct Authority, and Transport for London's HQ at 5 Endeavour Square. The International Quarter development alone has brought over two million square feet of Grade A office space into the E20 postcode since 2015, with further phases under construction.

This development intensity means Stratford is simultaneously a major construction waste market — ongoing strip-outs, hardcore removal, and site clearances across multiple active phases — and a growing corporate waste market as new occupiers generate IT refresh cycles, confidential waste, and end-of-tenancy clearances. WasteWize regularly serves the creative and light-industrial operators in the adjacent Hackney Wick and Fish Island zones, as well as construction teams working across the E15 and E20 development corridor. Site access on major developments requires pre-booked contractor slots, which WasteWize arranges as standard.`,
    keyAreas:    ['International Quarter', 'Westfield Stratford', 'Queen Elizabeth Olympic Park', 'Hackney Wick', 'E20', 'E15'],
    topServices: ['building-construction', 'strip-out-demolition', 'commercial-clearance'],
  },

  'south-london/southwark': {
    localContext: `Southwark is one of south London's most commercially diverse boroughs, stretching from the South Bank arts and hospitality quarter — the Tate Modern, Borough Market, and the Bermondsey Street restaurant and gallery corridor — through the Elephant and Castle regeneration scheme (one of Europe's largest urban renewal projects) to the residential neighbourhoods of Peckham, Nunhead, and Dulwich. This breadth of activity generates equally varied waste requirements.

The South Bank and Borough Market areas house a dense concentration of restaurants, hotels, galleries, and creative businesses requiring regular commercial clearances and scheduled waste collections. The Elephant and Castle regeneration — now in its second decade of delivery — generates ongoing construction waste, including significant strip-out and hardcore removal volumes from the demolition of older social housing and commercial blocks. WasteWize is experienced in operating across all of Southwark's distinct neighbourhoods, including the permit-controlled Bermondsey streets and the complex logistics environment around the Elephant and Castle development zone at Newington Causeway and Walworth Road.`,
    keyAreas:    ['Borough Market', 'Bermondsey', 'Elephant and Castle', 'Peckham', 'South Bank', 'London Bridge'],
    topServices: ['commercial-clearance', 'building-construction', 'residential-waste'],
  },

  'south-london/wandsworth': {
    localContext: `Wandsworth is south London's most economically dynamic borough, anchored by the Nine Elms and Battersea Power Station regeneration corridor — one of Europe's largest urban development schemes, stretching from Vauxhall Bridge to Chelsea Bridge along the south bank of the Thames. The scheme has delivered thousands of new residential units, two London Underground stations, and major commercial space including Apple's European headquarters at Battersea Power Station, with further phases including the US Embassy, Embassy Gardens, and multiple mixed-use towers actively under construction or in occupation.

This development volume has generated one of the highest concentrations of construction waste removal, strip-out, and site clearance requirements in south London. Simultaneously, Wandsworth's established affluent residential areas — Putney, Tooting, Balham, Earlsfield, and Southfields — create consistent demand for house clearances, renovation waste, and garden refuse collection. WasteWize serves both markets across the full borough, with specific operational knowledge of the Nine Elms development access procedures and established relationships with the principal contractors working across the Battersea and Vauxhall sites.`,
    keyAreas:    ['Battersea Power Station', 'Nine Elms', 'Putney', 'Wandsworth Town', 'Tooting', 'Balham'],
    topServices: ['building-construction', 'strip-out-demolition', 'residential-waste'],
  },

  'west-london/hammersmith': {
    localContext: `Hammersmith is west London's primary commercial hub, with a major office market centred on the King Street and Hammersmith Broadway area — home to significant corporate tenants including Coca-Cola, L'Oréal, Disney, and Apple's UK operations. The Hammersmith Flyover corridor and the riverfront between Chiswick Bridge and Hammersmith Bridge house a mix of tech, media, and professional services offices generating sustained demand for WEEE recycling, confidential shredding, and end-of-tenancy commercial clearances.

The borough is also undergoing significant regeneration, with the Hammersmith Town Centre project and various riverside mixed-use developments generating construction waste and strip-out requirements. Hammersmith's position on the A4 Great West Road makes it a practical base for waste operations serving both central London and the Heathrow corridor, and WasteWize regularly coordinates same-day collections across Hammersmith's commercial streets and the residential neighbourhoods of Brook Green, Brackenbury Village, and the streets north of the King Street high street. Restricted loading hours on King Street require pre-planning for commercial collections.`,
    keyAreas:    ['Hammersmith Broadway', 'King Street', 'Brook Green', 'Ravenscourt Park', 'Fulham Palace Road'],
    topServices: ['commercial-clearance', 'electrical-equipment', 'confidential-waste'],
  },

  'west-london/notting-hill': {
    localContext: `Notting Hill's combination of high-value residential property — the stucco-fronted townhouses of Pembridge Square and the Ladbroke Estate — with its busy commercial district on Portobello Road, Westbourne Grove, and Ledbury Road creates a distinctive waste management environment. The area's antiques market on Portobello Road generates recurring clearance requirements from dealers regularly refreshing their stock, while the independent boutiques, restaurants, and galleries of Westbourne Grove need scheduled commercial collections that respect the area's trading hours and resident sensitivities.

The residential market is among the most active in west London for high-value renovations, extensions, and basement conversions — projects that generate significant construction waste, asbestos survey requirements (for the area's large Edwardian and Victorian housing stock), and strip-out waste as period fixtures are removed. The Notting Hill Carnival in August creates specific and temporary waste management pressures for which WasteWize provides pre-and-post event commercial clearance services. Loading restrictions on Portobello Road require out-of-hours or early-morning collection windows for most commercial clients.`,
    keyAreas:    ['Portobello Road', 'Westbourne Grove', 'Pembridge Square', 'Ladbroke Grove', 'Ledbury Road'],
    topServices: ['residential-waste', 'strip-out-demolition', 'commercial-clearance'],
  },

  'surrey/guildford': {
    localContext: `Guildford is Surrey's county town and its most economically significant commercial centre, with a town-centre retail and office economy anchored by the High Street, the North Street regeneration zone, and the expanding commercial parks along the A3 corridor towards Godalming. The University of Surrey — with around 15,000 students and a significant research and development campus — creates recurring clearance requirements from the annual student turnover and from the university's ongoing estate development. Guildford's prosperity and its position as a commuter hub for London generates a high volume of executive residential property renovation, producing regular demand for strip-out services, garden refuse collection, and house clearances.

The North Street regeneration scheme — one of the largest town-centre developments in the south east — has added significant construction waste volumes to the Guildford market. WasteWize serves Guildford businesses, contractors, and homeowners across the GU1, GU2, and GU4 postcode areas, providing same-week collections with full EA documentation and the same compliance standards we apply across our London operations.`,
    keyAreas:    ['Guildford High Street', 'North Street', 'Slyfield Industrial Estate', 'University of Surrey', 'Onslow Village'],
    topServices: ['commercial-clearance', 'residential-waste', 'building-construction'],
  },

  'surrey/woking': {
    localContext: `Woking is one of Surrey's fastest-growing commercial centres, with a major office market concentrated around the Victoria Square regeneration scheme and the Woking Business Park on Guildford Road — which houses significant employers including McLaren, Lucozade, and the UK HQ of several international businesses. The town centre has seen substantial regeneration investment in the last decade, with new mixed-use development replacing older retail stock and generating construction waste and strip-out requirements across multiple active sites.

Woking's residential market — spanning the affluent neighbourhoods of Hook Heath, St John's, and Knaphill, as well as the expanding new-build estates around Sheerwater — creates consistent demand for house clearances, garden waste removal, and renovation strip-outs. The town's position on the A320/M25 corridor makes it accessible from WasteWize's London base with predictable travel times. We cover the full GU21 and GU22 postcode areas with same-week availability and full EA documentation on every collection.`,
    keyAreas:    ['Victoria Square', 'Woking Business Park', 'Sheerwater', 'Knaphill', 'Hook Heath'],
    topServices: ['commercial-clearance', 'building-construction', 'residential-waste'],
  },

  'berkshire/reading': {
    localContext: `Reading is the largest commercial centre in Berkshire and one of the most significant office markets outside London, with major technology employers including Microsoft, Huawei, Prudential, and Thames Water headquartered or with large presences in the town. The Green Park Business Park on the southern edge of Reading is one of the UK's largest out-of-town office parks, generating sustained demand for commercial clearances, WEEE recycling from technology tenants, and confidential shredding. Reading's town centre is undergoing significant regeneration, with the Station Hill and Forbury Gardens schemes adding substantial commercial and residential floor space.

Reading's position on the M4 corridor places it at the heart of the Thames Valley technology economy, and the regular churn of technology tenants — moving between Reading's multiple business parks — creates consistent strip-out and commercial clearance requirements. WasteWize serves Reading businesses across the RG1, RG2, and RG30 postcode areas, including the major business parks at Green Park and Winnersh Triangle, with EA-licensed collections and full waste documentation.`,
    keyAreas:    ['Green Park', 'Station Hill', 'Oracle Shopping Centre', 'Winnersh Triangle', 'Forbury'],
    topServices: ['commercial-clearance', 'electrical-equipment', 'confidential-waste'],
  },

  'berkshire/windsor': {
    localContext: `Windsor's economy is shaped by two dominant forces: the Royal Estate — Windsor Castle, Windsor Great Park, and the associated visitor and hospitality economy — and a substantial commercial base of technology, finance, and professional services firms along the Windsor and Maidenhead employment corridor. The town's tourism economy generates significant commercial waste from hotels, restaurants, and retail, while the corporate market in the SL4 postcode area creates demand for office clearances, WEEE disposal, and confidential shredding.

The presence of Legoland Windsor, the Royal Household operations, and a high concentration of retail on the Peascod Street and Windsor Royal shopping centre creates a year-round commercial waste collection requirement. Windsor's heritage buildings — many listed or in conservation areas — generate specific requirements around careful strip-out work and asbestos surveys before renovation commences. Eton College, immediately across Windsor Bridge, provides additional demand for institutional clearances and specialist disposal. WasteWize serves Windsor, Eton, and the surrounding SL4 area with same-week EA-licensed collections.`,
    keyAreas:    ['Windsor Castle', 'Peascod Street', 'Windsor Royal Shopping', 'Eton', 'Legoland vicinity'],
    topServices: ['commercial-clearance', 'residential-waste', 'strip-out-demolition'],
  },

  'hertfordshire/watford': {
    localContext: `Watford is Hertfordshire's most commercially active town, anchored by the intu Watford (now Atria Watford) shopping centre — one of the largest in the UK — and a significant out-of-town business park cluster along Clarendon Road and the Watford Business Park off the A411. Major employers based in Watford include TK Maxx's European headquarters, Camelot, and HMRC's operations on the north side of the town, creating diverse commercial waste requirements spanning office clearances, WEEE disposal, and confidential shredding.

Watford's residential areas — including the high-turnover rental market around Watford High Street and Oxhey, and the more settled residential streets of Nascot Wood and Cassiobury — generate consistent house clearance and renovation waste demand. The town's ongoing regeneration, including the Watford Health Campus development and the continued evolution of the town centre, adds construction and strip-out waste streams. WasteWize serves the full WD17, WD18, and WD24 postcode areas with same-week collections and full EA documentation.`,
    keyAreas:    ['Atria Watford', 'Clarendon Road', 'Watford Business Park', 'Nascot Wood', 'Oxhey'],
    topServices: ['commercial-clearance', 'electrical-equipment', 'residential-waste'],
  },

  'hertfordshire/st-albans': {
    localContext: `St Albans is one of Hertfordshire's most prosperous towns, combining a well-preserved historic city centre — including the Cathedral and Abbey, Roman theatre, and a high street consistently ranked among England's highest-value retail locations — with a substantial residential market of high-value family homes in Clarence Park, Marshalswick, and the surrounding villages. The affluence of the St Albans residential market, combined with the area's high proportion of period properties, creates significant demand for renovation strip-outs, asbestos surveys (particularly for interwar properties in the AL1 and AL3 postcodes), and house clearances from the active property sales market.

St Albans' commercial market is anchored by the Alban Park and Hatfield Road business corridors, with professional services, technology, and financial firms generating regular commercial clearance, WEEE, and confidential waste requirements. The proximity to the M1 and M25 motorway network makes WasteWize's St Albans operations fast to mobilise from our London base. We cover the AL1, AL2, and AL3 postcode areas with same-week availability on all service types.`,
    keyAreas:    ['St Albans City Centre', 'Clarence Park', 'Alban Park', 'Marshalswick', 'Hatfield Road'],
    topServices: ['residential-waste', 'strip-out-demolition', 'commercial-clearance'],
  },

  'essex/chelmsford': {
    localContext: `Chelmsford is Essex's county city and its principal commercial centre, with a city-centre economy built around retail, professional services, and public sector employment — the council, NHS, and Essex Police all have major presences in the CM1 and CM2 postcode areas. The Bond Street and High Chelmer retail centres generate commercial waste from a high-turnover retail environment, while the business parks at Chelmsford Business Park and Dukes Park Industrial Estate house manufacturing, logistics, and commercial operators generating industrial and commercial waste streams.

Chelmsford's residential market — including the high-value areas of Springfield, Great Baddow, and the surrounding villages — creates steady demand for house clearances, garden waste, and renovation strip-outs, particularly from the active property market that benefits from direct rail access to Liverpool Street in 35 minutes. The city's ongoing development pipeline, including the Chelmsford garden community at Beaulieu, adds construction and earthworks waste streams to the market. WasteWize serves the full Chelmsford CM1 and CM2 postcode areas with same-week availability.`,
    keyAreas:    ['Chelmsford City Centre', 'Bond Street', 'Springfield', 'Beaulieu', 'Dukes Park Industrial Estate'],
    topServices: ['commercial-clearance', 'residential-waste', 'building-construction'],
  },

};
