export type WilderType = {
  id: number;
  name: string;
  city?: string;
  skills: Array<{
    title: string;
    grade: number;
  }>;
};
