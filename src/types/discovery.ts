export interface DiscoveryItem {
  id: string;
  title: string;
  description: string;
  type: DiscoveryItemType;
  imageUrl?: string;
  link?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DiscoverySection {
  id: string;
  title: string;
  description: string;
  items: DiscoveryItem[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface DiscoveryPreferences {
  userId: string;
  interests: string[];
  excludedTags: string[];
  createdAt: string;
  updatedAt: string;
}

export type DiscoveryItemType = 
  | 'EVENT'
  | 'RESOURCE'
  | 'OPPORTUNITY'
  | 'ANNOUNCEMENT'
  | 'CUSTOM'; 