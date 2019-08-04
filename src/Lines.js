import styled from 'styled-components'

const Line = styled.div`
  width: 100%;
`

const HistoryLine = styled(Line)``

const ActionLine = styled(Line)`
  display: grid;
  grid-template-columns: auto 3fr;
`

const ActionInput = styled.input`
  display: inline-block;
  width: 100%;
  border: 0;
  background-color: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`

const LoginSpan = styled.div`
  margin-right: 0.5em;
`

const ActionSpan = styled.div``

export { ActionSpan, HistoryLine, ActionLine, LoginSpan, ActionInput }
