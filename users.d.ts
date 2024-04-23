import type { ObjectId } from 'mongodb';

export interface BaseUser {
  _id: ObjectId;
  username: string;
  picture?: string;
}

export interface UserMe extends BaseUser {
  email: string;
}

export interface UserWithPassword extends UserMe {
  password: string;
}
