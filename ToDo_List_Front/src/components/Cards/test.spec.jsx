import { expect, it } from 'vitest'
import {render} from '@testing-library/react'
import { Card } from './index'

//runing npx viteste for start verification
const DatasFantasy = {
    "priority":"priority",
    "tech":"tech",
    "name":"name",
    "category":"category",
    "status":"status"
}

test("rendering", () =>{
  const card = render(<Card datasForCreateCard={DatasFantasy}/>)
  expect(card).toBeDefined()
})


test('status', () => {
  const {getByTestId} = render(<Card datasForCreateCard={DatasFantasy}/>)

  const status = getByTestId('status')
  expect(status.textContent).toBe("status")
})
