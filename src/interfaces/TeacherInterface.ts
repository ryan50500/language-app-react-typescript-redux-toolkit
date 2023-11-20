interface TeacherInterface {
  language: string;
  flag: string;
  native: boolean;
  name: string;
  email: string;
  skypeID: string;
  teachingPlatform: string;
  whatsApp?: string;
  experience: string;
  country: string;
  price: number;
  time: string;
  days: string[];
  reviews: string;
  rating: number;
  id: number;
}
export default TeacherInterface;
