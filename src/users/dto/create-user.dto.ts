import {ApiProperty} from '@nestjs/swagger'

export class CreateUserDto {

  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес'})
  readonly email: string;

  @ApiProperty({ example: '123123123', description: 'Пароль'})
  readonly password: string;
}