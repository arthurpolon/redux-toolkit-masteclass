type UserId = number

export type UsersState = {
  state: 'idle' | 'pending' | 'fulfilled' | 'rejected',
  users: {[key: UserId]: Array<{id: number, name: string, username: string, email: string}>}
}
