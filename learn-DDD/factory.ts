// ファクトリー

import { UserRepository } from "./repository";

// オブジェクト生成時にロジックが必要な場合や、複数のエンティティをつなげる場合
class EmailAddressFactory {
  constructor(private readonly value: string) {
    this.validate(value);
  }

  private validate(email: string): void {
    if (!email.includes("@")) {
      throw new Error("invalid email format");
    }
  }

  getValue(): string {
    return this.value;
  }
}

class UserFactory {
  constructor(private readonly userRepository: UserRepository) {}

  async create(email: string): Promise<User> {
    const emailAddress = new EmailAddress(email);

    const newxtSequenceNumber = await this.getNextSequenceNumber();
    const userId = `USER_${newxtSequenceNumber.toString().padStart(4, "0")}`;

    return new User(userId, newxtSequenceNumber, emailAddress);
  }

  private async getNextSequenceNumber(): Promise<number> {
    // 最後に使用された連番を取得
    const lastUser = await this.userRepository.findLastCreatedUser();

    if (!lastUser) {
      return 1; // 最初のユーザーの場合
    }

    return lastUser.getSequenceNumber() + 1;
  }
}
