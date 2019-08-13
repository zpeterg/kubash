import React, { Component } from 'react'
import styled from 'styled-components'
import {
  ActionSpan,
  HistoryLine,
  ActionInput,
  ActionLine,
  LoginSpan,
  VimBarSpan,
} from './Lines'
import { getResponse } from './kubash/index'

const BlackWrap = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  text-align: left;
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.2em;
`

class Bash extends Component {
  constructor() {
    super()
    this.state = {
      histories: [],
      vimHistories: [
        {
          text: ['Here you are in vim!'],
          type: 'say',
        },
      ],
      vimBarText: '~',
      loginText: '',
      inputText: '',
      state: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.callResponse = this.callResponse.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    const inputText = e.target.value
    this.setState({
      inputText,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { loginText, inputText, histories, vimHistories } = this.state
    if (vimHistories.length > 0) {
      vimHistories.push({
        text: [inputText],
        type: 'input',
      })
    } else {
      histories.push({
        text: [`${loginText} ${inputText}`],
        type: 'input',
      })
    }
    this.setState({
      histories,
    })
    this.callResponse()
  }
  handleClick() {
    this.actionInput.focus()
  }
  callResponse() {
    const { histories, inputText, state, vimHistories } = this.state
    console.log('sending', inputText, state)
    const res = getResponse(inputText, state)
    console.log('returning', res)
    if (res.displayType && res.displayType === 'vim') {
      vimHistories.push({
        text: res.say,
        type: 'say',
      })
      // If output, add that
      if (res.output) {
        vimHistories.push({
          text: res.output,
          type: 'output',
        })
      }
      this.setState({
        vimHistories,
        inputText: '',
        state: res.state,
      })
    } else {
      histories.push({
        text: res.say,
        type: 'say',
      })
      if (res.output) {
        histories.push({
          text: res.output,
          type: 'output',
        })
      }
      // If changing bar, change it (it sticks until changed next)
      if (res.bar !== null) this.setState({ loginText: res.bar })
      // Set rest of state
      this.setState({
        histories,
        inputText: '',
        state: res.state,
        // Clearn vimhistories in case switching out of vim
        vimHistories: [],
      })
    }
  }
  componentDidMount() {
    this.callResponse()
    this.actionInput.focus()
  }
  componentDidUpdate() {
    document.getElementById('bottom').scrollIntoView()
  }
  render() {
    const {
      inputText,
      vimHistories,
      vimBarText,
      histories,
      loginText,
    } = this.state
    console.log('hx:', vimHistories)
    return (
      <BlackWrap onClick={this.handleClick}>
        {vimHistories.length === 0 &&
          histories.map((hx, i) => {
            return hx.text.map((txt, textI) => (
              <HistoryLine key={`${i}-${textI}`} type={hx.type}>
                {txt}
              </HistoryLine>
            ))
          })}
        {vimHistories.length > 0 &&
          vimHistories.map((hx, i) => {
            return hx.text.map((txt, textI) => (
              <HistoryLine key={`${i}-${textI}`} type={hx.type}>
                -{txt}
              </HistoryLine>
            ))
          })}
        <ActionLine>
          {vimHistories.length === 0 && <LoginSpan>{loginText}</LoginSpan>}
          {vimHistories.length > 0 && <VimBarSpan>{vimBarText}</VimBarSpan>}
          <ActionSpan>
            <form onSubmit={this.handleSubmit}>
              <ActionInput
                ref={input => {
                  this.actionInput = input
                }}
                value={inputText}
                onChange={this.handleChange}
                spellCheck="false"
              />
            </form>
          </ActionSpan>
        </ActionLine>
        <div id="bottom" />
      </BlackWrap>
    )
  }
}

export default Bash
