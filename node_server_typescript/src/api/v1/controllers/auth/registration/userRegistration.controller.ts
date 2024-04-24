import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import UserModel from "../../../../../models/user.model";
import { MESSAGE } from "../../../../../constants/message";

// Signup function
export const signup = async (req: Request, res: Response) => {
	try {
		const { full_name, email, password } = req.body;

		const existingUser = await UserModel.findOne({ email });
		if (existingUser) {
			return res.status(200).send({
				message: MESSAGE.post.fail,
				result: existingUser
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new UserModel({
			full_name,
			email,
			password: hashedPassword
		});

		const userInstance = await newUser.save();

		return res.status(200).send({
			message: MESSAGE.post.succ,
			result: userInstance
		});
	} catch (error) {
		console.error("Error in signup:", error);
		return res.status(400).send({
			message: MESSAGE.post.fail
		});
	}
};
