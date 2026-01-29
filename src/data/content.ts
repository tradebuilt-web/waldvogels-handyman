export type Page = {
  title: string;
  url: string;
  hero?: string;
  subHero?: string;
  aboutContent?: string;
  servicesContent?: string[];
};

export const content = {
  company: {
    name: `Waldvogel's Handyman`,
    phone: `(505) 402-8253`,
    email: ``,
    address: {
      street: `123 Main St.`,
      city: `Farmington`,
      state: `NM`,
      zip: `87401`,
    },
  },

  pages: [
    {
      title: "Home",
      url: "/",
      hero: "Let us fix your home today!",
      subHero: "Contact us for a free estimate.",
    },
    {
      title: "About",
      url: "/about",
      aboutContent: `Shane Waldvogel has been helping folks in the Four Corners region since 2014, 
                  taking on all kinds of handyman projects with pride and attention to detail. 
                  He serves the communities of Farmington, Bloomfield, Aztec, and all across San Juan County, 
                  New Mexico. Shane believes good communication makes all the difference, so he keeps customers 
                  in the loop with live project updates and a professional approach that makes working with him easy 
                  and stress-free.
                  
                  \n\n
                  When he’s not busy fixing, building, or improving something, Shane likes to spend time 
                  with his son and take his motorcycle out for a ride. He brings that same hands-on attitude 
                  and sense of pride to both his work and his life—getting things done right, the first time.`,
    },
    {
      title: "Services",
      url: "/services",
      servicesContent: [
        "Home repairs",
        "Remodeling",
        "Painting",
        "Drywall",
        "Texture",
        "Tile work",
        "Trim",
        "Roofing",
        "Roof repairs",
        "Siding",
        "Flooring",
        "Plumbing",
        "Fencing",
        "Cabinet installation",
        "Cabinet repair",
        "Gutters",
        "Swamp coolers",
      ],
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

export const colors = {
  header: "238 199 125",
  button: "238 199 125",
  button_hover: "216 180 106",
  text_light: "235 235 235",
  text_dark: "20 20 20",
  content_bg: "245 245 245",
};
