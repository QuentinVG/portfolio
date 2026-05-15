export const contactEmail = "vialgouteyron@gmail.com";
export const githubUrl = "https://github.com/QuentinVG";
export const linkedinUrl = "https://www.linkedin.com/in/qvg/";
export const repoUrl = "https://github.com/QuentinVG/portfolio";

export const asset = (baseUrl: string, path: string) =>
  `${baseUrl.replace(/\/?$/, "/")}${path.replace(/^\//, "")}`;

export const mailto = (subject: string, body = "") =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
