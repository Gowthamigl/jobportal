import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
//  const token = user.createJWT();
  res.status(200).json({
    user,
 //   token,
  });
};


export const getUserController = async (req, res, next) => {
  try {
    // Find the user in the database using the authenticated user's ID (req.user.userId)
    const user = await userModel.findOne({ _id: req.user.userId });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Sending a successful response with the user details
    res.status(200).json({ user });
  } catch (error) {
    // If any error occurs during the database query or processing, pass it to the error handler middleware
    next(error);
  }
};

