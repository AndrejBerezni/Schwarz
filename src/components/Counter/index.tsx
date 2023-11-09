import { StyledCounter, CounterBtn, CounterValue } from './Counter.styles'

interface ICounterProps {
  increment: () => void
  decrement: () => void
  amount: number
}

export default function Counter({
  increment,
  decrement,
  amount,
}: Readonly<ICounterProps>) {
  return (
    <StyledCounter>
      <CounterBtn onClick={decrement} disabled={amount === 1}>
        -
      </CounterBtn>
      <CounterValue>{amount}</CounterValue>
      <CounterBtn onClick={increment}>+</CounterBtn>
    </StyledCounter>
  )
}
