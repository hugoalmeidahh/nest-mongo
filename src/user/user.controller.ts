import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.model';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {
  }

  @Get('findById/:id')
  get(@Param() params) {
    return this.service.findById(params.id);
  }

  @Post('create')
  create(@Body() user: IUser) {
    return this.service.create(user);
  }

  @Put('update')
  update(@Body() user: IUser) {
    return this.service.update(user);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}