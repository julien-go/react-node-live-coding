export type WilderType = {
  id: number;
  name: string;
  city?: string;
  avatar?: string;
  grades: Array<{
    title: string;
    grade: number;
  }>;
};
