import { Photo } from './photo';

export interface User {
  // Basically we are going to replicate what UserDetailedDto are returning
  id: number;
  name: string;
  knowAs: string;
  age: number;
  gender: string;
  created: Date;
  lastedActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string; // optional prop
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[]; // type Photo, will make it a array
}
