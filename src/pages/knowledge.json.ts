import type { APIRoute } from "astro";
import cv from "@config/cv.json";

const aboutMe = (cv as any).aboutMe ?? {};
const profile = aboutMe.profile ?? {};
const experience = (cv as any).experience ?? {};
const knowledge = (cv as any).knowledge ?? {};
const careerPreferences = (cv as any).careerPreferences ?? {};
const manfredSpecificData = (cv as any).manfredSpecificData ?? {};

const publicProfiles = Array.isArray(careerPreferences?.contact?.publicProfiles)
  ? careerPreferences.contact.publicProfiles
  : [];

const relevantLinks = Array.isArray(aboutMe?.relevantLinks)
  ? aboutMe.relevantLinks
  : [];

const links = [...relevantLinks, ...publicProfiles]
  .filter((item: any) => item?.URL)
  .filter(
    (item: any, index: number, array: any[]) =>
      array.findIndex((candidate: any) => candidate.URL === item.URL) === index,
  );

const projects = Array.isArray(experience?.projects)
  ? experience.projects.map((project: any) => ({
      name: project?.details?.name ?? null,
      description: project?.details?.description ?? null,
      url: project?.details?.URL ?? null,
      type: project?.type ?? null,
      startDate: project?.roles?.[0]?.startDate ?? null,
      finishDate: project?.roles?.[0]?.finishDate ?? null,
    }))
  : [];

const jobs = Array.isArray(experience?.jobs)
  ? experience.jobs.map((job: any) => ({
      company: job?.organization?.name ?? null,
      companyUrl: job?.organization?.URL ?? null,
      role: job?.roles?.[0]?.name ?? null,
      startDate: job?.roles?.[0]?.startDate ?? null,
      finishDate: job?.roles?.[0]?.finishDate ?? null,
      summary: job?.roles?.[0]?.challenges?.[0]?.description ?? null,
    }))
  : [];

const hardSkillsFromKnowledge = Array.isArray(knowledge?.hardSkills)
  ? knowledge.hardSkills.map((item: any) => item?.skill?.name).filter(Boolean)
  : [];

const hardSkillsFromManfred = Array.isArray(manfredSpecificData?.mainStackTechs)
  ? manfredSpecificData.mainStackTechs
      .map((item: any) => item?.name)
      .filter(Boolean)
  : [];

const hardSkills =
  hardSkillsFromKnowledge.length > 0
    ? hardSkillsFromKnowledge
    : hardSkillsFromManfred;

const payload = {
  source: "https://mzrdeveloper.com/knowledge.json",
  lastUpdated: new Date().toISOString(),
  person: {
    name: [profile?.name, profile?.surnames].filter(Boolean).join(" "),
    title: profile?.title ?? null,
    description: profile?.description ?? null,
    location: {
      municipality: profile?.location?.municipality ?? null,
      region: profile?.location?.region ?? null,
      country: profile?.location?.country ?? null,
    },
  },
  contact: {
    emails: Array.isArray(careerPreferences?.contact?.contactMails)
      ? careerPreferences.contact.contactMails
      : [],
  },
  links,
  experience: jobs,
  projects,
  skills: hardSkills,
};

export const prerender = true;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
