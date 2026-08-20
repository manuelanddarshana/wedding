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
    note: 'Dance and music performances — guests very welcome to join in.',
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
  },
  {
    name: 'Aroohan Serenity Resort',
    address: 'Chandrapur Bagicha Rd, Guwahati, Assam 781150, India',
  },
]

export const rsvpUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZe09EqcYo2B3aK-bhw4C2NMH2nNF5VzBnIXlBaMUpn8w2gQ/viewform?usp=header'

export const visaUrl = 'https://indianvisaonline.gov.in/evisa/tvoa.html'

export const meghalayaDetails =
  'We are organising this one — a bus/car convoy leaving together from Guwahati, with hotels and guides arranged. Waterfalls, caves, and sunrises. Approx. 100–130€ per person.'

export const goaDetails =
  'Not planned in detail yet — probably your own stay, though we may settle on a shared beach/area together depending on how many people join.'
