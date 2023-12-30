export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  activitiesId: string[]; // Array of activities IDs
  favoritesId: string[]; // Array of favorite activity IDs
};

export type Activity = {
  id: string;
  title: string;
  description: string;
};
