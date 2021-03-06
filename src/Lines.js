import styled from 'styled-components'

const Line = styled.div`
  width: 100%;
`

const HistoryLine = styled(Line)`
  color: ${props => (props.type === 'say' ? '#02aa02' : 'white')};
`

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
  outline: none;
  margin-bottom: 1em;
`

const LoginSpan = styled.div`
  margin-right: 0.5em;
`

const VimBarSpan = styled.div`
  margin-right: 0.5em;
`

const ActionSpan = styled.div``

export {
  ActionSpan,
  HistoryLine,
  ActionLine,
  LoginSpan,
  ActionInput,
  VimBarSpan,
}
