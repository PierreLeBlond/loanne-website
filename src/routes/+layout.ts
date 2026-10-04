export const prerender = true;

export const load = async () => {
  return {
    pages: [{
      label: "Présentation",
      pathname: "/"
    },
    {
      label: "Consultation",
      pathname: "/consultation"
    },
    {
      label: "TCC",
      pathname: "/tcc"
    },
    {
      label: "Ressources",
      pathname: "/resources/all"
    }
    ],
    keywords: ["Troubles du comportement alimentaire (TCA)", "Trauma", "Stress", "Anxiété", "Dépression", "TDAH", "TSA", "Gestion des émotions"]
  }
}
