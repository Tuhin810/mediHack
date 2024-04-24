import { Schema } from "mongoose";
import { INurseSchema } from "../../ts/interfaces/nurse.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";

const NurseSchema: Schema<INurseSchema> = new Schema<INurseSchema>(
	{
		nurse_id: SCHEMA_DEFINITION_PROPERTY.requiredString,
		name: SCHEMA_DEFINITION_PROPERTY.requiredString,
		qualifications: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
		specialties: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
		years_of_experience: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		languages: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
		availability: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		gender: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		travel_distance_km: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		rating: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		service_charge_per_hour: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		patient_age_group_expertise: [SCHEMA_DEFINITION_PROPERTY.optionalNullString],
		emergency_availability: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
		virtual_care_capability: SCHEMA_DEFINITION_PROPERTY.optionalBoolean
	},
	GENERAL_SCHEMA_OPTIONS
);

export default NurseSchema;
