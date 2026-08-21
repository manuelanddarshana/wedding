export type ScheduleItem = {
  date: string
  time: string
  title: string
  place?: string
  note?: string
  optional?: boolean
}

export const postWeddingSchedule: ScheduleItem[] = [
  {
    date: '10–13 Feb',
    time: 'Trip',
    title: 'Meghalaya (Shillong)',
    optional: true,
  },
  {
    date: '14 Feb onward',
    time: 'Trip',
    title: 'Onward to Goa, then home',
    optional: true,
  },
]

export const schedule: ScheduleItem[] = [
  {
    date: '6 Feb',
    time: 'Afternoon',
    title: 'Henna (Mehndi)',
    place: 'Kalita home, Shyamalaya',
  },
  {
    date: '6 Feb',
    time: 'Evening',
    title: 'Welcome Dinner',
    place: 'Kalita home, Shyamalaya',
  },
  {
    date: '7 Feb',
    time: 'During the day',
    title: 'Haldi and Games',
    place: 'Kalita home, Shyamalaya',
  },
  {
    date: '7 Feb',
    time: 'Afternoon',
    title: 'Transfer to the wedding location',
    place: 'Aroohan Serenity Resort',
  },
  {
    date: '7 Feb',
    time: 'Evening',
    title: 'Bonfire get-together',
    place: 'Aroohan Serenity Resort',
  },
  {
    date: '8 Feb',
    time: 'Daytime',
    title: 'Wedding Day — Traditional Assamese Wedding',
    place: 'Aroohan Serenity Resort',
  },
  {
    date: '8 Feb',
    time: 'Evening',
    title: 'Cocktail Party & Sangeet',
    place: 'Aroohan Serenity Resort',
    note: 'Dance and music performances',
  },
  {
    date: '9 Feb',
    time: 'All day',
    title: 'Return to Guwahati, chill-out day',
  },
  ...postWeddingSchedule,
]

export const venues = [
  {
    name: 'Kalita home, Shyamalaya',
    address: 'House No. 22, Ananda Nagar, Jyotinagar, Bamunimaidan, Guwahati',
    mapsUrl: 'https://maps.app.goo.gl/aBkzisu1DzFcJG5e8',
  },
  {
    name: 'Aroohan Serenity Resort',
    address: 'Chandrapur Bagicha Rd, Guwahati, Assam 781150, India',
    mapsUrl: 'https://maps.app.goo.gl/boMMumyTTv4yY1Vv9',
  },
]

export const rsvpUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZe09EqcYo2B3aK-bhw4C2NMH2nNF5VzBnIXlBaMUpn8w2gQ/viewform?usp=header'

export const visaUrl = 'https://indianvisaonline.gov.in/evisa/tvoa.html'

export type EventInfo = {
  title: string
  date: string
  time: string
  place: string
  dressCode: string
  dressCodeDetails: string
  pinterestUrl: string
}

// General notes shown at the top of the Events & Dress Code page, above
// the per-event breakdown.
export const dressCodeNotes = [
  'Indian ethnic (formal) wear is welcome but never required; please feel free to come as you are.',
  'No colours are strictly enforced for the dress codes, but please avoid darker colours during the day events; they are welcome for the evening events.',
]

export const events: EventInfo[] = [
  {
    title: 'Henna (Mehndi)',
    date: '6 Feb',
    time: 'Afternoon',
    place: 'Kalita home, Shyamalaya',
    dressCode: 'Indian Casual',
    dressCodeDetails:
      'Think bright, festive, and comfortable. This is a relaxed daytime event where henna is applied, so avoid anything precious or tight-fitting on the hands/arms. Flowy dresses, jumpsuits, or Indian-inspired kurtas work well. Flat sandals recommended as seating is often on the floor or low stools.',
    pinterestUrl: 'https://www.pinterest.de/sciencebyteswithliza/mehendihenna/',
  },
  {
    title: 'Welcome Dinner',
    date: '6 Feb',
    time: 'Evening',
    place: 'Kalita home, Shyamalaya',
    dressCode: 'Smart Casual',
    dressCodeDetails:
      'An easy first-night mixer. Think "nice dinner out": maxi dresses or button-down with trousers, no tie required. This is a good event to ease into Indian-inspired fabrics (printed maxis, a nice kurta set, salwar kameez sets, sharara sets) without needing full traditional wear.',
    pinterestUrl: 'https://www.pinterest.de/sciencebyteswithliza/welcome-dinner/',
  },
  {
    title: 'Haldi and Games',
    date: '7 Feb',
    time: 'During the day',
    place: 'Kalita home, Shyamalaya',
    dressCode: 'Yellow & Bright Colors',
    dressCodeDetails:
      'Haldi (turmeric) is the color of the day, so lean into yellow — mustard, sunflower, marigold — along with other bright, festive shades like orange, coral, or fuchsia. Cotton or other washable fabrics over silk. Flat, comfortable shoes, since seating is often on the floor.',
    pinterestUrl: 'https://www.pinterest.de/sciencebyteswithliza/haldi/',
  },
  {
    title: 'Traditional Assamese Wedding',
    date: '8 Feb',
    time: 'Daytime',
    place: 'Aroohan Serenity Resort',
    dressCode: 'Formal Traditional / Indian Formal Attire Encouraged',
    dressCodeDetails:
      "This is the main ceremony — more formal and culturally rooted. Guests are welcome (and encouraged) to wear Indian formalwear if they'd like to participate in the spirit: sarees, salwar suits, or kurta-pajamas, or even the traditional Assamese mekhela sador, can often be rented or bought locally — or a modest, elegant Western outfit works too (below-knee or maxi length). Avoid complete white (traditionally associated with mourning in Hindu tradition). Comfortable shoes are a requirement as the ceremonies can run long.",
    pinterestUrl: 'https://www.pinterest.de/sciencebyteswithliza/wedding-day/',
  },
  {
    title: 'Cocktail Party & Sangeet',
    date: '8 Feb',
    time: 'Evening',
    place: 'Aroohan Serenity Resort',
    dressCode: 'Indian Glam / Black Tie Optional',
    dressCodeDetails:
      'The big celebratory finale, you need to dress to dance. Think sparkle, sequins, jewel tones, or a fun Indian fusion look (a sharara set, a sequined gown, a statement Indo-western outfit). Suits or bold cocktail dresses are equally welcome. This is the event to go all out.',
    pinterestUrl: 'https://www.pinterest.de/sciencebyteswithliza/sangeet-and-cocktail/',
  },
]

export const meghalayaDetails =
  'We are organising a joint trip with a bus/car convoy leaving together from Guwahati, with hotels and guides arranged. We will explore the beautiful landscape of Meghalaya (home of the clouds), including waterfalls, caves, and sunrises. Costs are not finalized but should be approx. 100–130€ per person.'

export const meghalayaPinterestUrl =
  'https://www.pinterest.de/sciencebyteswithliza/meghalaya-2027/'

export const goaDetails =
  'Not planned in detail yet. We will probably settle on a shared beach/area together depending on how many people join.'

export const goaPinterestUrl = 'https://www.pinterest.de/sciencebyteswithliza/goa/'
