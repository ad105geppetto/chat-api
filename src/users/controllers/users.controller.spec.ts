import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controller";

describe("UsersController", () => {
  let controller: UsersController;
  const authCode = { authorizationCode: "authorizationCode" };
  const data = { email: "hong@gmail.com", accessToken: "accessToken" };
  const mockService = {
    login: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("구글 소셜 로그인 컨트롤러 확인합니다", () => {
    expect(controller).toBeDefined();
  });
  it("로그인 함수(login) 확인합니다", () => {
    expect(typeof controller.login).toBe("function");
  });
  it("서비스의 로그인 함수를 호출할 수 있습니다", async () => {
    await controller.login(authCode);
    expect(mockService.login).toBeCalledWith(authCode);
  });
  it("로그인할 수 있습니다", async () => {
    mockService.login.mockReturnValue(data);
    expect(await controller.login(authCode)).toStrictEqual(data);
  });
});
