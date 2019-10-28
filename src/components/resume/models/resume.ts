export interface Resume {
  basics: ResumeBasics;
  work: ResumeWork[];
  volunteer: ResumeVolunteer[];
  education: ResumeEducation[];
  awards: ResumeAward[];
  publications: ResumePublication[];
  skills: ResumeSkill[];
  languages: ResumeLanguage[];
  interests: ResumeInterest[];
  references: ResumeReference[];
}

export interface ResumeBasics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: ResumeLocation;
  profiles: ResumeProfile[];
}

export interface ResumeLocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface ResumeProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeWork {
  company: string,
  position: string,
  website: string,
  startDate: string,
  endDate: string | null,
  summary: string,
  highlights: string[];
}

export interface ResumeVolunteer {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string | null;
  gpa: string;
  courses: string[];
}

export interface ResumeAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ResumePublication {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  summary: string;
}

export interface ResumeSkill {
  name: string;
  level: string;
  keywords: string[];
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface ResumeInterest {
  name: string;
  keywords: string[];
}

export interface ResumeReference {
  name: string;
  reference: string;
}
