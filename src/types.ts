export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  certification: string;
  color: string;
}

export interface HerbalZone {
  id: string;
  name: string;
  location: string;
  description: string;
  elevation: string;
  weather: string;
  temperature: string;
  benefits: string;
  imageAlt: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}
