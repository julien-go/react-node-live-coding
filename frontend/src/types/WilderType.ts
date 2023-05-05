export type WilderType = {
  id: number;
  name: string;
  city?: string;
  avatar?: string;
  skills: Array<{
    title: string;
    grade: number;
  }>;
};
