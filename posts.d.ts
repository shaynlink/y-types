import type { ObjectId } from 'mongodb';
import type { BaseUser } from './users';

export interface Post {
  _id: ObjectId;
  user: BaseUser;
  content: string;
  timestamp: string;
  likes: ObjectId[];
  comments: Post[];
  reposts: number;
}