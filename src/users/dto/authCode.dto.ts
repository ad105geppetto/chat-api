import { IsString } from "class-validator";

export class AuthCodeDTO {
  @IsString()
  readonly authorizationCode: string;
}
