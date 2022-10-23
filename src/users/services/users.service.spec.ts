import { HttpService } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";
import { Observable } from "rxjs";
import { UsersRepository } from "../repositories/users.repository";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;
  const authCode = { authorizationCode: "authorizationCode" };
  const mockHttpService = {
    post: jest.fn(),
    get: jest.fn(),
  };
  const mockUsersRepository = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("구글 소셜 로그인 서비스 확인합니다", async () => {
    expect(service).toBeDefined();
  });
  it("로그인 함수(login) 확인합니다", async () => {
    expect(typeof service.login).toBe("function");
  });
  it("레포지토리의 함수(create)를 호출할 수 있습니다.", async () => {
    const userEmail = "email";
    mockHttpService.post.mockImplementationOnce(() => {
      const obs = new Observable((subscriber) => {
        const tokenInfo = { data: { access_token: "token" } };
        subscriber.next(tokenInfo);

        subscriber.complete();
      });
      return obs;
    });
    mockHttpService.get.mockImplementationOnce(() => {
      const obs = new Observable((subscriber) => {
        const userInfo = { data: { email: "email" } };
        subscriber.next(userInfo);

        subscriber.complete();
      });
      return obs;
    });
    await service.login(authCode);
    expect(mockUsersRepository.create).toBeCalledWith(userEmail);
  });
  it("로그인 할 수 있습니다.", async () => {
    mockHttpService.post.mockImplementationOnce(() => {
      const obs = new Observable((subscriber) => {
        const tokenInfo = { data: { access_token: "token" } };
        subscriber.next(tokenInfo);

        subscriber.complete();
      });
      return obs;
    });
    mockHttpService.get.mockImplementationOnce(() => {
      const obs = new Observable((subscriber) => {
        const userInfo = { data: { email: "email" } };
        subscriber.next(userInfo);

        subscriber.complete();
      });
      return obs;
    });
    expect(await service.login(authCode)).toEqual({
      email: "email",
      accessToken: "token",
    });
  });
});
