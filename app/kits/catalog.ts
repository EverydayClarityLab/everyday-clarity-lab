export const kitLabs = [
  {
    title: "City Relocation and School Finder",
    slug: "city-relocation-school-finder",
    description:
      "A guided decision flow to help families understand assigned schools, enrollment steps, and key contacts without hunting across pages.",
  },
  {
    title: "Business Starter Copilot for City Limits",
    slug: "business-starter-copilot",
    description:
      "Plain-language business startup guidance with citations to permits, ordinances, and forms, plus a next-best-step checklist.",
  },
  {
    title: "Property Tax Increase Appeal Prep Pack",
    slug: "property-tax-appeal-prep-pack",
    description:
      "An evidence-based preparation pack that organizes property facts, comparable data, and questions for an assessor meeting.",
  },
  {
    title: "Park District Registration Agent for Parents",
    slug: "park-district-registration-agent",
    description:
      "A parent-friendly workflow to find programs, handle constraints, and complete registration steps without handling payments.",
  },
];

export const kitTrackLabels: Record<string, string> = {
  mvp: "MVP",
  cvp: "CVP",
  "getting-started": "MVP",
  intermediate: "CVP",
};

export function getKitLabTitle(slug: string) {
  return kitLabs.find((lab) => lab.slug === slug)?.title ?? "Lab";
}
