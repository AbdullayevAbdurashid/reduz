export interface BlogPost {
  id: string;
  collectionId: string;
  created: string;
  updated: string;
  title: string;
  slug: string;
  content: string;
  featured_image?: string;
  excerpt?: string;
  published: boolean;
}

export interface PaginatedResult<T> {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
