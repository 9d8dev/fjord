type StaticUrl = {
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?:
    | "yearly"
    | "monthly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "never"
    | undefined;
  priority?: number | undefined;
};
