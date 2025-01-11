export interface UserRepository {
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}

// インメモリ実装(テスト用)
class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User> = new Map();

  async save(user: User): Promise<void> {
    this.users.set(user.getId(), user);
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }
}

// データベース実装
class MySQLUesrRepository implements UserRepository {
  constructor(private readonly connection: MySQLConnection) {}

  async save(user: User): Promise<void> {
    await this.connection.query(
      "INSERT INTO users (id, name, email) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE name = ?, email = ?",
      [
        user.getId(),
        user.getName(),
        user.getEmail(),
        user.getName(),
        user.getEmail(),
      ]
    );
  }

  async delete(id: string): Promise<void> {
    await this.connection.query("DELETE FROM users WHERE id = ?", [id]);
  }
}
