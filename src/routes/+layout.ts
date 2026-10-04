export const prerender = true;

export const load = async () => {
  return {
    pages: [{
      label: "Présentation",
      pathname: "/",
      section: ""
    },
    {
      label: "Consultation",
      pathname: "/consultation",
      section: "consultation"
    },
    {
      label: "TCC",
      pathname: "/tcc",
      section: "tcc"
    },
    {
      label: "Ressources",
      pathname: "/resources/all",
      section: "resources"
    }
    ],
    keywords: ["Troubles du comportement alimentaire (TCA)", "Trauma", "Stress", "Anxiété", "Dépression", "TDAH", "TSA", "Gestion des émotions"]
  }
}
