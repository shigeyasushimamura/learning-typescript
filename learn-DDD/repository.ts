export interface UserRepository {
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}

class InMemoryUserRepository implements UserRepository {}
