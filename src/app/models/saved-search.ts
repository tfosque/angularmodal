export interface SavedSearch {
  id: number;
  name: string;
  description: string;
  path: string;
  api_queries: any[];
  geojson: any[];
  datetime_created: string;
  datetime_updated: string;
  created_by_id: number;
  enable_notifications: boolean;
  result_count: number;
}
