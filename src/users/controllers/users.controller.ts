import { Body, Controller, Post } from "@nestjs/common";
import { AuthCodeDTO } from "../dto/authCode.dto";
import { UsersService } from "../services/users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersservice: UsersService) {}

  @Post()
  async login(@Body() authCode: AuthCodeDTO) {
    const user = await this.usersservice.login(authCode);
    return user;
  }
}
