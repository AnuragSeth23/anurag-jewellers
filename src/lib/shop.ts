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
    line2: 'Yogesh Singh Katra, Mangalpur',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    pincode: '221101',
    country: 'India',
    full: 'Korauti Chauraha, Yogesh Singh Katra, Mangalpur, Varanasi, Uttar Pradesh - 221101',
  },
  phones: ['+91 8127504900', '+91 8127535687'],
  whatsapp: '918127504900',
  email: 'info@anuragjewellers.in',
  hours: {
    weekdays: '10:00 AM - 9:00 PM',
    sunday: '10:00 AM - 8:00 PM',
  },
  blessings: ['जय श्रीकृष्ण', 'हर हर महादेव', 'जय श्री बालाजी महाराज', 'जय हनुमान'],
  social: {
    instagram: '',
    facebook:  '',
  },
  // Replace with actual Google Maps embed URL once shop is listed on Google My Business
  mapsEmbed:
    'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Korauti+Chauraha+Mangalpur+Varanasi',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Korauti+Chauraha+Mangalpur+Varanasi',
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://anurag-jewellers.vercel.app';
