/*
  BUSINESS CONFIGURATION
  Update the values in this object when contact details, hours, or social links change.
  The page reads the matching data-field and data-link attributes automatically.
*/
const business = Object.freeze({
  name: "Kulvadhu By Deepdarshit",
  tagline: "Perfect blend of tradition and trend",
  description: "A curated collection of handloom sarees from across India, bringing together traditional craftsmanship, timeless elegance and beautiful weaves under one roof in Burhanpur, Madhya Pradesh.",
  address: "Tulsi Mall, Lalbagh Road, Burhanpur, Madhya Pradesh 450331",
  hours: "Monday-Sunday: 11:00 AM - 9:30 PM",
  phone: "+91 7987081425",
  email: "kulvadsubydeepdarshit@gmail.com",
  links: {
    whatsapp: "https://wa.me/917987081425",
    phone: "tel:+917987081425",
    email: "mailto:kulvadsubydeepdarshit@gmail.com",
    website: "https://www.deepdarshit.com/",
    instagram: "https://www.instagram.com/dd_kulvadhu/",
    youtube: "https://youtube.com/@kulvadhubydeepdarshit",
    facebook: "https://www.facebook.com/kulvadhu.by.dd",
    maps: "https://maps.app.goo.gl/Cv644miA5Dp2PvNc6"
  }
});

document.querySelectorAll("[data-field]").forEach((element) => {
  const value = business[element.dataset.field];
  if (value) element.textContent = value;
});

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = business.links[element.dataset.link];
  if (url) element.href = url;
});
