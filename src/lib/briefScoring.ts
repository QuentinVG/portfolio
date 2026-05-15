export type BriefData = {
  projectType: string;
  goal: string;
  features: string[];
  deadline: string;
  budget: string;
  clarity: string;
  contentReady: string;
  users: string;
  existingTools: string;
  constraints: string;
};

export type ComplexityLevel = {
  key: "simple" | "medium" | "high";
  title: string;
  text: string;
  recommendation: string;
};

export type BriefResult = {
  score: number;
  maxScore: number;
  level: ComplexityLevel;
  risks: string[];
  questions: string[];
  summary: string;
};

const projectTypeScores: Record<string, number> = {
  "Site clair": 1,
  "Outil métier léger": 3,
  Automatisation: 3,
  Refonte: 2,
  "Formulaire avancé": 2,
};

const featureScores: Record<string, number> = {
  "Espace admin": 2,
  "Droits utilisateurs": 3,
  "Import / export": 2,
  "Notifications email": 1,
  "Connexion à un outil existant": 3,
  "Historique ou journal": 2,
  Paiement: 4,
  "Documents générés": 2,
};

const deadlineScores: Record<string, number> = {
  Flexible: 0,
  "1 à 2 mois": 1,
  "Moins d'un mois": 3,
  Urgent: 5,
};

const budgetScores: Record<string, number> = {
  "Non défini": 2,
  "Moins de 500 EUR": 3,
  "500 à 1500 EUR": 1,
  "1500 à 3000 EUR": 0,
  "Plus de 3000 EUR": 0,
};

const clarityScores: Record<string, number> = {
  "Assez clair": 0,
  "Quelques zones floues": 2,
  "Très flou": 4,
};

const contentScores: Record<string, number> = {
  "Déjà prêts": 0,
  "Partiellement prêts": 1,
  "Pas prêts": 3,
};

const maxScore =
  Math.max(...Object.values(projectTypeScores)) +
  Object.values(featureScores).reduce((total, value) => total + value, 0) +
  Math.max(...Object.values(deadlineScores)) +
  Math.max(...Object.values(budgetScores)) +
  Math.max(...Object.values(clarityScores)) +
  Math.max(...Object.values(contentScores));

const scoreFrom = (map: Record<string, number>, key: string) => map[key] ?? 0;

const scoreBrief = (data: BriefData) =>
  scoreFrom(projectTypeScores, data.projectType) +
  data.features.reduce((total, feature) => total + scoreFrom(featureScores, feature), 0) +
  scoreFrom(deadlineScores, data.deadline) +
  scoreFrom(budgetScores, data.budget) +
  scoreFrom(clarityScores, data.clarity) +
  scoreFrom(contentScores, data.contentReady);

const getLevel = (score: number): ComplexityLevel => {
  if (score >= 18) {
    return {
      key: "high",
      title: "Complexité élevée",
      text: "Le projet cumule assez de risques pour mériter un cadrage séparé avant développement.",
      recommendation: "Recommandation : réduire le périmètre, isoler une V1 et valider les dépendances avant devis.",
    };
  }

  if (score >= 9) {
    return {
      key: "medium",
      title: "Complexité moyenne",
      text: "Le projet paraît faisable, mais quelques décisions doivent être clarifiées pour éviter les dérives.",
      recommendation: "Recommandation : cadrage court, priorisation stricte et livraison par version.",
    };
  }

  return {
    key: "simple",
    title: "Complexité simple",
    text: "Le projet semble compatible avec une intervention courte si le contenu et les validations sont prêts.",
    recommendation: "Recommandation : périmètre écrit, retours regroupés et livraison simple.",
  };
};

const buildRisks = (data: BriefData, score: number) => {
  const risks: string[] = [];

  if (data.deadline === "Urgent" || data.deadline === "Moins d'un mois") {
    risks.push("Délai court : le périmètre doit être réduit et validé vite.");
  }
  if (data.budget === "Moins de 500 EUR") {
    risks.push("Budget bas : il faudra probablement viser une version très limitée.");
  }
  if (data.budget === "Non défini") {
    risks.push("Budget non défini : difficile d'arbitrer les priorités.");
  }
  if (data.clarity !== "Assez clair") {
    risks.push("Besoin encore flou : un cadrage court est nécessaire avant de développer.");
  }
  if (data.contentReady === "Pas prêts") {
    risks.push("Contenus ou données pas prêts : risque de blocage ou d'allers-retours.");
  }
  if (data.features.includes("Paiement")) {
    risks.push("Paiement en ligne : sécurité, responsabilité et tests à traiter sérieusement.");
  }
  if (data.features.includes("Connexion à un outil existant")) {
    risks.push("Intégration externe : dépendance à la qualité de l'outil ou de ses exports/API.");
  }
  if (data.features.includes("Droits utilisateurs")) {
    risks.push("Droits utilisateurs : il faut définir les rôles et les actions autorisées.");
  }
  if (score >= 18) {
    risks.push("Accumulation de fonctionnalités : le projet doit être découpé.");
  }

  return risks.length ? risks : ["Aucun risque majeur détecté à ce stade, sous réserve d'un périmètre écrit."];
};

const buildQuestions = (data: BriefData) => {
  const questions = [
    "Qui valide le périmètre et les retours ?",
    "Quelle est la version minimale réellement utile ?",
  ];

  if (!data.goal.trim()) questions.push("Quel résultat concret doit être obtenu à la fin du projet ?");
  if (!data.users.trim()) questions.push("Qui utilise l'outil et à quelle fréquence ?");
  if (data.features.length) questions.push("Quelles fonctionnalités sont indispensables en V1 ?");
  if (data.features.includes("Droits utilisateurs")) questions.push("Quels rôles faut-il prévoir et que peuvent-ils faire ?");
  if (data.existingTools || data.features.includes("Connexion à un outil existant")) {
    questions.push("Les données existantes sont-elles accessibles, propres et exportables ?");
  }
  if (data.contentReady !== "Déjà prêts") {
    questions.push("Qui fournit les contenus, données, visuels ou exemples métier ?");
  }

  return questions;
};

const buildSummary = (data: BriefData, result: Omit<BriefResult, "summary">) => `Bonjour Quentin,

Je vous contacte pour préparer un projet web.

Type de projet : ${data.projectType}
Objectif principal : ${data.goal || "À préciser"}
Fonctionnalités envisagées : ${data.features.length ? data.features.join(", ") : "Aucune fonctionnalité avancée indiquée"}
Utilisateurs concernés : ${data.users || "À préciser"}
Outils ou données existants : ${data.existingTools || "À préciser"}
Délai souhaité : ${data.deadline}
Budget approximatif : ${data.budget}
Clarté du besoin : ${data.clarity}
Contenus ou données : ${data.contentReady}
Contraintes : ${data.constraints || "À préciser"}

Lecture de l'assistant :
${result.level.title}
Score indicatif : ${result.score}/${result.maxScore}
${result.level.text}
${result.level.recommendation}

Risques détectés :
${result.risks.map((risk) => `- ${risk}`).join("\n")}

Questions à clarifier :
${result.questions.map((question) => `- ${question}`).join("\n")}

Merci,`;

export const evaluateBrief = (data: BriefData): BriefResult => {
  const score = scoreBrief(data);
  const level = getLevel(score);
  const risks = buildRisks(data, score);
  const questions = buildQuestions(data);
  const result = { score, maxScore, level, risks, questions };

  return {
    ...result,
    summary: buildSummary(data, result),
  };
};
