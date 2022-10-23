import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { AuthCodeDTO } from "../dto/authCode.dto";
import { UsersRepository } from "../repositories/users.repository";

@Injectable()
export class UsersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async login(authCode: AuthCodeDTO) {
    const tokenInfo = await lastValueFrom(
      this.httpService.post(`https://oauth2.googleapis.com/token`, {
        code: authCode.authorizationCode,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_PASSWORD,
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
      }),
    );

    const accessToken = tokenInfo.data.access_token;

    const userInfo = await lastValueFrom(
      this.httpService.get(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ),
    );

    const userEmail = userInfo.data.email;

    this.usersRepository.create(userEmail);

    return { email: userEmail, accessToken };
  }
}
