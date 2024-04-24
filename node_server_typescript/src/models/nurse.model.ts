import { model } from "mongoose";
import { INurseSchema } from "../ts/interfaces/nurse.interface";
import NurseSchema from "./shcemaDefinations/nurse.schema";

const NurseModel = model<INurseSchema>("nurse_details", NurseSchema);

export default NurseModel;
