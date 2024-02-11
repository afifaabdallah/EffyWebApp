import { Project } from './project.interface';

export interface User {
  civil_status: string;
  last_name: string;
  first_name: string;
  email_address: string;
  phone_number: string;
  project: Project;
}
