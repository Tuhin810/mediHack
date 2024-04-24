import { IObjectId } from "./objectId.interface";

export interface INurseSchema {
	nurse_id: string;
	name: string;
	qualifications: string[];
	specialties: string[];
	years_of_experience: number;
	languages: string[];
	availability: string;
	gender: string;
	travel_distance_km: number;
	rating: number;
	service_charge_per_hour: number;
	patient_age_group_expertise: string[];
	emergency_availability: boolean;
	virtual_care_capability: boolean;
}

export interface INurse extends INurseSchema, IObjectId {}
