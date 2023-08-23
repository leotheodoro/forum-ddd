import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'

export function makeAnswer(
  override?: Partial<AnswerProps>,
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      questionId: new UniqueEntityID('question-1'),
      authorId: new UniqueEntityID('author-1'),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
