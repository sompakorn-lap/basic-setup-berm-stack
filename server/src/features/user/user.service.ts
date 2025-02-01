import { CreateUserType, SelectUserType, UpdateUserType } from "./user.schema";
import userTable from "./user.table";

class UserService {
  static async gets() {
    const users = await userTable.find().lean().exec();
    return users;
  }

  static async getByUserId(userId: string) {
    const user = await userTable.findOne({ userId }).lean().exec();
    return user;
  }

  static async get(data: SelectUserType) {
    const user = await userTable.findOne(data).lean().exec();
    return user;
  }

  static async create(data: CreateUserType) {
    const user = await userTable.create(data);
    return user.toJSON();
  }

  static async deleteByUserId(userId: string) {
    const user = await userTable.findOneAndDelete({ userId }).lean().exec();
    return user;
  }

  static async updateByUserId(userId: string, data: UpdateUserType) {
    const user = await userTable
      .findOneAndUpdate({ userId }, data, { new: true })
      .lean()
      .exec();
    return user;
  }
}

export default UserService;
