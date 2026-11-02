export type ResumeType = 'dotnet' | 'flutter';

export interface ResumeData {
  type: ResumeType;
  title: string;
  subtitle: string;
  fileName: string;
  url: string;
  categoryTag: string;
}

export const RESUMES: Record<ResumeType, ResumeData> = {
  dotnet: {
    type: 'dotnet',
    title: '.NET Developer Resume',
    subtitle: 'Associate Software Developer · Backend & Cloud Architecture',
    fileName: 'Gajendra_Pardhi_.NET_Resume.pdf',
    url: `${import.meta.env.BASE_URL}.NET_Resume.pdf`,
    categoryTag: 'Curriculum Vitae',
  },
  flutter: {
    type: 'flutter',
    title: 'Flutter Developer Resume',
    subtitle: 'Associate Software Developer · Cross-Platform Mobile Applications',
    fileName: 'Gajendra_Pardhi_Flutter_Resume.pdf',
    url: `${import.meta.env.BASE_URL}Flutter_Resume.pdf`,
    categoryTag: 'Curriculum Vitae',
  },
};

export default RESUMES;

