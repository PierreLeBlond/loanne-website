import type { LayoutLoad } from "./$types"
import { type Resources } from "./resources"

export const load: LayoutLoad = async ({ params }) => {
  return {
    categories: [{
      label: "Ressources en ligne",
      resources: [{
        content: "TDA/H : [Association Hypersupers TDAH France - Trouble Déficit de l'Attention Hyperactivité - Enfant hyperactif](https://www.tdah-france.fr/)",
        filters: ["TDA-H"]
      }, {
        content: "TCA : [Espoir et Soutien pour la Guérison des Troubles du Comportement Alimentaire | TCAACT | TCAACT](https://tcaact.com/)",
        filters: ["TCA"]
      }, {
        content: "[Lire notre BD - Corps en révolte](https://asso-tca-corpsenrevolte.fr/bd-numerique/)",
        filters: []
      }, {
        content: "[StopTCA | Plateforme spécialisée dans les troubles du comportement alimentaire](https://stoptca.fr/tca/lanorexie-chez-ladolescent-comprendre-et-aider-en-tant-que-parent)",
        filters: ["TCA"]
      }, {
        content: "Dépression : [Comment agir soi-même face à une dépression légère ? – Mon-Psychotherapeute.Com](https://www.mon-psychotherapeute.com/comment-agir-soi-meme-face-a-une-depression-legere/)",
        filters: []
      }, {
        content: "Fanny TERRISSE ou « la psy des couleurs cachées »",
        filters: []
      }]
    }, {
      label: "Guides self-help",
      resources: [{
        content: "TDA/H : [Outils pratiques au quotidien, objets, guides – TDAH Âge Adulte : symptômes, diagnostic, test, traitement](https://tdah-age-adulte.fr/outils-pratiques-au-quotidien-objets-guides/)",
        filters: ["TDA-H"]
      }, {
        content: "ANXIETE : [Outils sur l’ANXIETE – Virginie Couillaud, éducatrice spécialisée](https://virginieeducatricelarochelle.com/2023/10/31/outils-sur-lanxiete/)",
        filters: []
      }, {
        content: "TOC : [Guide-d-auto-assistance-TOC-UUIAP---Final-en-PDF.pdf](https://www.chu-montpellier.fr/fileadmin/medias/Services/Psychiatrie-adulte/Cs-TOC/Guide-d-auto-assistance-TOC-UUIAP---Final-en-PDF.pdf))",
        filters: []
      }, {
        content: "DEPRESSION : [Guide_autosoins_dépression_VF_2eme_édition_2008](https://medfam.umontreal.ca/wp-content/uploads/sites/16/Guide-dautosoins-pour-la-d%C3%A9pression-adultes.pdf)",
        filters: []
      }, {
        content: "AUTOMUTILATION : [Automutilations : stratégies et conseils pour s'en éloigner - PSSM France - Premiers Secours en Santé Mentale](https://www.pssmfrance.fr/actualites/gerer-la-detresse/)",
        filters: []
      }, {
        content: "[Guide Info-famille](https://enseignement.chusj.org/fr/bibliotheques/les-Ressources/Guide-Info-famille?NodeAlias=Troubles-du-comportement-alimentaire)",
        filters: []
      }]
    }, {
      label: "Littérature scientifique",
      resources: [{
        content: "Troubles anxieux : [Revue Médicale de Liège - Les troubles anxieux : du diagnostic au traitement](https://rmlg.uliege.be/article/3770)",
        filters: []
      }, {
        content: "TCC et trouble anxieux généralisé : [Comparing the Efficacy of Electronically Delivered Cognitive Behavioral Therapy (e-CBT) to Weekly Online Mental Health Check-Ins for Generalized Anxiety Disorder—A Randomized Controlled Trial: Comparaison de l'efficacité de la thérapie cognitivo-comportementale délivrée par voie électronique (e-TCC) aux contrôles hebdomadaires en ligne de santé mentale pour le trouble d'anxiété généralisée - un essai randomisé contrôlé - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11351059/)",
        filters: []
      }, {
        content: "Syndrome de l’imposteur : [« J’ai réussi, j’ai de la chance… je serai démasqué » : revue de littérature du syndrome de l’imposteur - ScienceDirect ; Prevalence, Predictors, and Treatment of Impostor Syndrome: a Systematic Review - PMC ; Imposter Syndrome - PMC](https://www.sciencedirect.com/science/article/abs/pii/S1269176317300019) (full text)",
        filters: []
      }, {
        content: "Traitement des cauchemars : [Traitement des cauchemars par la thérapie par répétition d’imagerie mentale (ou RIM) : mise en place pratique - ScienceDirect ; Traitements de la maladie des cauchemars](https://www.sciencedirect.com/science/article/abs/pii/S1769449322001911)",
        filters: []
      }, {
        content: "Trauma complexe : [Trauma complexe chez les jeunes - Clinique de psychoéducation de l'Université Laval (CPUL)](https://clinique-psychoeducation.fse.ulaval.ca/blogues/le-trauma-complexe-chez-les-jeunes/)",
        filters: []
      }, {
        content: "Dépression à l’adolescence : [Diagnostic et traitement de la dépression à l’adolescence - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10426345/)",
        filters: []
      }]
    }, {
      label: "Podcasts",
      resources: [{
        content: "« Un podcast à soi » ; « Les idées larges » - ARTE Radio",
        filters: []
      }, {
        content: "« Emotions » - Louie Media",
        filters: []
      }, {
        content: "« Les pieds sur terre » ; « Votre cerveau » - France Culture",
        filters: []
      }, {
        content: "« J’ai peur, donc j’y vais » - Stef Bluelips",
        filters: []
      }, {
        content: "« Les couilles sur la table » - Binge Audio",
        filters: []
      }, {
        content: "« Les mots des autres » - Courrier international",
        filters: []
      }, {
        content: "« DINGUE » - RTS",
        filters: []
      }]
    }, {
      label: "Lecture conseillées",
      resources: [{
        content: "*Philo, psycho & confidences existentielles*, Joachim Sanselme",
        filters: []
      }, {
        content: "*La Philo, c’est la vie*, Jules Evans",
        filters: []
      }, {
        content: "*Le Manuel*, Epictète",
        filters: []
      }, {
        content: "*Méditer, jour après jour*, Christophe André",
        filters: []
      }, {
        content: "*Je réinvente ma vie*, Jeffrey E. Young et al.",
        filters: []
      }, {
        content: "*Le Chœur des femmes*, Aude Mermilliod, adaptation du roman de Martin Winckler",
        filters: []
      }, {
        content: "*Quand la mort est traumatique ; Entretenir ma vitalité d’aidant*, Pascale Brillon",
        filters: []
      }, {
        content: "*Sur le TDA/H : Mon cerveau a besoin de lunettes* (enfant) ; *Mon cerveau a ENCORE besoin de lunettes* (ado et adultes), Annick Vincent",
        filters: ["TDA-H"]
      }, {
        content: "*Le trauma ? Comment s’en sortir*, Coraline Hingray & Wissam El-Hage",
        filters: []
      }, {
        content: "[Folie, bipolarité, dépression : six livres pour changer de regard | France Inter](https://www.radiofrance.fr/franceinter/folie-bipolarite-depression-six-livres-pour-changer-de-regard-5363982)",
        filters: []
      }]
    }],
    filters: [{
      id: "all",
      label: "Afficher tout"
    }, {
      id: "TDA-H", label: "TDA/H"
    }, { id: "TCA", label: "TCA" }],
    filter: params.filter
  } as Resources
}
