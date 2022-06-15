export type PostsState = {
  error: any
  state: 'idle' | 'pending' | 'fulfilled' | 'rejected',
  posts: Array<{id: number, userId: number, title: string, body: string}>,
  users: Array<{id: number, name: string, username: string, email: string}>,
}
