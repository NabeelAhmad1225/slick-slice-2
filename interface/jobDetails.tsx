export interface JobDetailsInterface {
  id: string;
  name: string;
  salary: string;
  responsibility: string[];
  professional_level: string;
  skill_requirement: { skill: string; level: string }[];
  type: string;
  date: string;
  description: string;
}
