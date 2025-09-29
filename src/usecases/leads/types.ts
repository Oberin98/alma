export enum LeadStatus {
  PENDIN = "PENDIN",
  REACHED_OUT = "REACHED_OUT",
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  submitted: Date;
  status: LeadStatus;
  country: string;
  phone?: string;
  visaType?: string;
}
