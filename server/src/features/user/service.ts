import { userInsertType, userUpdateType } from "./schema";
import userTable from "./table";

class User {
  static async gets() {
    const users = await userTable.find().lean().exec();
    return users;
  }

  static async get(userId: string) {
    const user = await userTable.findOne({ userId }).lean().exec();
    return user;
  }

  static async create(data: userInsertType) {
    const user = await userTable.create(data);
    return user.userId;
  }

  static async delete(userId: string) {
    await userTable.deleteOne({ userId }).lean().exec();
  }

  static async update(userId: string, data: userUpdateType) {
    await userTable.updateOne({ userId }, data).lean().exec();
  }
}

export default User;