// 値オブジェクト
class EmailAddress {
  private readonly email: string;

  constructor(email: string) {
    this.email = email;
  }
}

class FullName {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string
  ) {}

  equals(other: FullName): boolean {
    return (
      this.firstName === other.firstName && this.lastName === other.lastName
    );
  }
}

const name1 = new FullName("太郎", "山田");
const name2 = new FullName("太郎", "山田");
const name3 = new FullName("花子", "山田");

console.log(name1.equals(name2)); // true
console.log(name1.equals(name3)); // false

// エンティティ
class User {
  private readonly id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  changeName(newName: string) {
    this.name = newName;
  }
}

class User2 {
  private readonly id: string;
  private name: string;
  private email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  equals(other: User2): boolean {
    return this.id === other.id; // IDのみで同一性を判断
  }
}

// 同じ属性値を持つ2つのユーザー
const user1 = new User2("1", "山田太郎", "taro@example.com");
const user2 = new User2("2", "山田太郎", "taro@example.com");
const user3 = new User2("1", "山田花子", "hanako@example.com");

console.log(user1.equals(user2)); // false - 同じ属性値でもIDが異なれば別物
console.log(user1.equals(user3)); // true  - 属性値が異なってもIDが同じなら同一
