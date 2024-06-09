import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id: any,
  first_name: any,
  last_name: any,
  image_url: any,
  email_addresses: any,
  username: any,
) => {
  try {
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          username: username,
          email: email_addresses[0].email_address,
        },
      },
      { upsert: true, new: true },
    );

    await user.save();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: any) => {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
