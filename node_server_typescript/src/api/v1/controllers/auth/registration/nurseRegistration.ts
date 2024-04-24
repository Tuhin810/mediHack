import { Request, Response } from "express";
import NurseModel from "../../../../../models/nurse.model";
import { MESSAGE } from "../../../../../constants/message";

// Create nurse function
export const createNurse = async (req: Request, res: Response) => {
	try {
		const nurseData = req.body;

		const newNurse = new NurseModel(nurseData);

		const nurseInstance = await newNurse.save();

		return res.status(200).send({
			message: MESSAGE.post.succ,
			result: nurseInstance
		});
	} catch (error) {
		console.error("Error in creating nurse:", error);
		return res.status(400).send({
			message: MESSAGE.post.fail
		});
	}
};

// Edit nurse details function
export const editNurse = async (req: Request, res: Response) => {
	try {
		const { nurseId } = req.params;
		const updatedNurseData = req.body;

		const updatedNurse = await NurseModel.findByIdAndUpdate(nurseId, updatedNurseData, { new: true });

		return res.status(200).send({
			message: MESSAGE.patch.succ,
			result: updatedNurse
		});
	} catch (error) {
		console.error("Error in editing nurse details:", error);
		return res.status(400).send({
			message: MESSAGE.patch.fail
		});
	}
};

// Get all nurses function
export const getAllNurses = async (req: Request, res: Response) => {
	try {
		const allNurses = await NurseModel.find();

		return res.status(200).send({
			message: MESSAGE.get.succ,
			result: allNurses
		});
	} catch (error) {
		console.error("Error in getting all nurses:", error);
		return res.status(400).send({
			message: MESSAGE.get.fail
		});
	}
};

// Get nurses by filter function
export const getNurseByFilter = async (req: Request, res: Response) => {
	try {
		const filter = req.body;

		const filteredNurses = await NurseModel.find(filter);

		return res.status(200).send({
			message: "Nurses fetched successfully by filter",
			result: filteredNurses
		});
	} catch (error) {
		console.error("Error in getting nurses by filter:", error);
		return res.status(400).send({
			message: "Internal server error"
		});
	}
};

// Delete all nurses function
export const deleteAllNurses = async (req: Request, res: Response) => {
	try {
		await NurseModel.deleteMany();

		return res.status(200).send({
			message: "All nurses deleted successfully"
		});
	} catch (error) {
		console.error("Error in deleting all nurses:", error);
		return res.status(400).send({
			message: "Internal server error"
		});
	}
};
