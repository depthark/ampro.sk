export const site = {
  name: "AMpro.SK",
  company: "AMpro SK, s.r.o.",
  language: "sk",
  description: "Projekcia a energetika budov. Kontakt na Ing. Adama Mahdiara, stavebného inžiniera, projektanta a energetika.",
  services: {
    design: "Projekcia",
    designLabel: "Projektovanie",
    energy: "Energetika budov",
    energyLabel: "Energetika",
  },
  person: {
    name: "Ing. Adam Mahdiar",
    profession: "Stavebný inžinier",
    designer: "projektant",
    energySpecialist: "energetik",
    role: "konateľ",
    phone: "+421 910 769 741",
    email: "adame.mah@gmail.com",
  },
  webLabel: "www.ampro.sk",
  url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href,
};

export const getSiteData = () => site;
