import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
  ) { }

  async create(doc: IUser) {
    const result = await new this.userModel(doc).save();
    return result.id;
  }

  async findById(id: number) {
    // ...
  }

  async update(user: IUser) {
    // ...
  }

  async remove(user: IUser) {
    // ...
  }
}