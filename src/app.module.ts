import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hugoalmeida:M0nt3r3y1638q@cluster0.tj7sm.mongodb.net/MyMongo?retryWrites=true&w=majority'),  
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
