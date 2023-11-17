export type TTodo = {
  id: number,
  title: string,
  description: string,
  status: 'inProgress' | 'inQA' | 'done' | 'todo' | 'blocked',
}