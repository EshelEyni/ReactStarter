import { MiniUser, User } from "../types/user.interface";
import { httpService } from "./http.service";
import { storageService } from "./storage.service";
import { utilService } from "./utils.service";

function getLoggedinUser(): User | null {
  return storageService.get("loggedinUser");
}

function getMiniUser(user: User): MiniUser {
  const miniUser = {
    id: user.id,
    username: user.username,
    fullname: user.fullname,
    imgUrl: user.imgUrl,
    isAdmin: user.isAdmin,
    isVerified: user.isVerified,
    bio: user.bio,
    followersCount: user.followersCount,
    followingCount: user.followingCount,
    isFollowing: user.isFollowing,
  };

  return miniUser;
}

function getDefaultUserImgUrl(): string {
  return "https://res.cloudinary.com/dng9sfzqt/image/upload/v1681677382/user-chirper_ozii7u.png";
}

async function query(): Promise<User[]> {
  try {
    const respose = await httpService.get(`user`);
    return utilService.handleServerResponse<User[]>(respose);
  } catch (err) {
    console.log("User service: err in query", err);
    throw err;
  }
}

async function getById(userId: string): Promise<User> {
  try {
    const respose = await httpService.get(`user/${userId}`);
    return utilService.handleServerResponse<User>(respose);
  } catch (err) {
    console.log("User service: err in getById", err);
    throw err;
  }
}

async function getByUsername(username: string): Promise<User> {
  try {
    const respose = await httpService.get(`user/username/${username}`);
    return utilService.handleServerResponse<User>(respose);
  } catch (err) {
    console.log("User service: err in getByUsername", err);
    throw err;
  }
}

async function remove(userId: string): Promise<void> {
  try {
    await httpService.delete(`user/${userId}`);
  } catch (err) {
    console.log("User service: err in remove", err);
    throw err;
  }
}

async function update(user: User): Promise<User> {
  try {
    const respose = await httpService.put(`user/${user.id}`, user);
    return utilService.handleServerResponse<User>(respose);
  } catch (err) {
    console.log("User service: err in update", err);
    throw err;
  }
}

export const userService = {
  query,
  getById,
  getByUsername,
  getLoggedinUser,
  getMiniUser,
  getDefaultUserImgUrl,
  update,
  remove,
};
