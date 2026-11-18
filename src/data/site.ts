export const site = {
  name: "AMpro.SK",
  company: "AMpro SK, s.r.o.",
  language: "sk",
  description: "Projektovanie budov a energetická certifikácia (OSO č. 418). Kontakt na Ing. Adama Mahdiara, stavebného inžiniera a konateľa AMpro SK, s.r.o.",
  services: {
    design: "Projekcia",
    designLabel: "Projektovanie",
    energy: "Energetika budov",
    energyLabel: "Energetika",
    scope: "budov",
  },
  person: {
    name: "Ing. Adam Mahdiar",
    profession: "Stavebný inžinier",
    designer: "projektant",
    energySpecialist: "energetik",
    certification: {
      reference: "OSO č. 418",
      service: "energetická certifikácia budov",
    },
    role: "konateľ",
    phone: "+421 910 769 741",
    email: "adame.mah@gmail.com",
  },
  webLabel: "www.ampro.sk",
  url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href,
};

export const getSiteData = () => site;
