import { UserDTO, UserQuery } from "@alumni/dal";

export class UserManager {
  userQuery: UserQuery;

  constructor() {
    this.userQuery = new UserQuery();
  }

  public async createUser(user: UserDTO) {
    const newUser = await this.userQuery.createUser(user);
    return newUser;
  }

  public async findUserByEmail(email: string) {
    const user = await this.userQuery.findUserByEmail(email);
    return user;
  }

    public async findUserById(id: number) {
        const user = await this.userQuery.findUserById(id);
        return user;
    }

  public async updateUser(user: UserDTO) {
    const updatedUser = await this.userQuery.updateUser(user.id, user);
    return updatedUser;
  }

  public async deleteUser(user: UserDTO) {
    const deletedUser = await this.userQuery.deleteUser(user.id);
    return deletedUser;
  }

  public async getAllUsers() {
    const allUsers = await this.userQuery.getAllUsers();
    return allUsers;
  }
}