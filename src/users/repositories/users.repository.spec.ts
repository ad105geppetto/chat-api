import { Test, TestingModule } from "@nestjs/testing";
import { DataSource } from "typeorm";
import { UsersRepository } from "./users.repository";

describe("UsersRepository", () => {
  let repository: UsersRepository;

  const mockRepository = {
    create: jest.fn(),
  };

  const mockDataSource = {
    manager: { save: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersRepository,
        { provide: DataSource, useValue: mockDataSource },
      ],
    })
      .overrideProvider(UsersRepository)
      .useValue(mockRepository)
      .compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  it("구글 소셜 로그인 레포지토리 확인합니다", () => {
    expect(repository).toBeDefined();
  });
  it("유저 생성 함수(create) 확인합니다", () => {
    expect(typeof repository.create).toBe("function");
  });
  it("유저를 생성 할 수 있습니다", async () => {
    const email = "email";
    const user = { email };
    mockDataSource.manager.save.mockReturnValue(email);
    await repository.create(email);
    expect(mockDataSource.manager.save(user)).toBe(email);
  });
});
