export interface BaseServiceInterface<T, U> {
  findAll<T>(): Promise<T[]>;

  findOne<T>(id: string): Promise<T>;

  create<T, U>(body: U): Promise<T>;

  remove<T, U>(id: string, body: U): Promise<T>;

  update<T, U>(id: string, body: U): Promise<T>;
}
