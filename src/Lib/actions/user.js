
import User from '../modals/usermodal';
import { Database } from '../Database/DB';

export const CreateOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username

) => {
  try {
    await Database();
    const user = await User.findOneAndUpdate(
      { clekid: id },
      {
        $set: {
            firstname: first_name,
            lastname: last_name,
            avator: image_url,
          email: email_addresses[0].email_address,
          username:username
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.log('Error creating or updating user:', error);
  }
};

export const DeleteUser = async (id) => {
  try {
    await Database();
    await User.findOneAndDelete({ clekid: id });
  } catch (error) {
    console.log('Error deleting user:', error);
  }
};