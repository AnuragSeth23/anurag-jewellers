export const shop = {
  nameHi: 'अनुराग ज्वैलर्स',
  nameEn: 'Anurag Jewellers',
  tagline: 'सोने-चाँदी का विश्वास, परिवार की परंपरा',
  taglineEn: 'Trusted in Gold & Silver — A Family Tradition',
  establishedYear: 2022,
  proprietor: {
    nameHi: 'विवेक कुमार सेठ',
    nameEn: 'Vivek Kumar Seth',
    role: 'Proprietor',
  },
  founder: {
    nameHi: 'राय चन्द्र सेठ',
    nameEn: 'Rai Chandra Seth',
    role: 'Founder & Niwedak',
  },
  address: {
    line1: 'Korauti Chauraha',
    line2: 'Bahumulya',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    pincode: '221105',
    country: 'India',
    full: 'Anurag Jewellers, Korauti Chauraha, Bahumulya, Varanasi, Uttar Pradesh - 221105',
  },
  phones: ['+91 8127535627', '+91 8127504900'],
  whatsapp: '918127535627',
  email: 'info@anuragjewellers.in',
  hours: {
    weekdays: '10:00 AM - 9:00 PM',
    sunday: '10:00 AM - 8:00 PM',
  },
  blessings: [
    'जय श्रीकृष्ण',
    'हर हर महादेव',
    'जय श्री बालाजी महाराज',
    'जय श्री खाटू श्याम बाबा',
    'जय हनुमान',
  ],
  social: {
    instagram: '',
    facebook:  '',
  },
  // Points to the actual "Anurag Jewellers - Bahumulya" listing on Google Maps.
  // Once you create a Google My Business profile, replace mapsLink with the share URL from there.
  mapsEmbed:
    'https://www.google.com/maps?q=Anurag+Jewellers+Bahumulya+Korauti+Chauraha+Varanasi&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Anurag+Jewellers+Bahumulya+Korauti+Chauraha+Varanasi',
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://anurag-jewellers.vercel.app';
