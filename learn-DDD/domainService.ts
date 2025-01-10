import { UserRepository } from "./repository";

class UserDomainService {
  constructor(private readonly userRepository: UserRepository) {}

  async isEmailDuplicated(email: string): Promise<boolean> {
    const existingUser = await this.userRepository.findByEmail(email);
    return existingUser !== null;
  }
}

class UserApplicationService {
  constructor(
    private readonly userDomainService: UserDomainService,
    private readonly userRepository: UserRepository
  ) {}

  async register(email: string): Promise<void> {
    const isDuplicated = await this.userDomainService.isEmailDuplicated(email);
    if (isDuplicated) {
      throw new Error("メールアドレスが既に使用されています");
    }
    const user = new User(generatedUserId(), email);
    await this.userRepository.save(user);
  }
}
