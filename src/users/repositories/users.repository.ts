import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly dataSource: DataSource,
  ) {}

  async create(email: string) {
    const user = new User();

    user.email = email;

    await this.dataSource.manager.save(user);
  }
}
