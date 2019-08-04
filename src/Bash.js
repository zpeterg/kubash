import React, { Component } from 'react'
import styled from 'styled-components'
import {
  ActionSpan,
  HistoryLine,
  ActionInput,
  ActionLine,
  LoginSpan,
} from './Lines'
import { getResponse } from './kubash/index'

const BlackWrap = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  padding: 1em;
  text-align: left;
  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

class Bash extends Component {
  constructor() {
    super()
    this.state = {
      histories: [
        {
          text: ['Welcome to Kubash!'],
        },
      ],
      loginText: 'ubuntu@mycomputer: ',
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
    const { loginText, inputText, histories } = this.state
    histories.push({
      text: [`${loginText} ${inputText}`],
    })
    this.setState({
      histories,
    })
    this.callResponse()
  }
  handleClick() {
    this.actionInput.focus()
  }
  callResponse() {
    const { histories, inputText, state } = this.state
    const res = getResponse(inputText, state)
    histories.push({
      text: res.say,
    })
    this.setState({
      histories,
      inputText: '',
      state: res.state,
    })
  }
  componentDidMount() {
    this.callResponse()
    this.actionInput.focus()
  }
  render() {
    const { inputText, histories, loginText } = this.state
    return (
      <BlackWrap onClick={this.handleClick}>
        {histories.map((hx, i) => {
          return hx.text.map((txt, textI) => (
            <HistoryLine key={`${i}-${textI}`}>{txt}</HistoryLine>
          ))
        })}
        <ActionLine>
          <LoginSpan>{loginText}</LoginSpan>
          <ActionSpan>
            <form onSubmit={this.handleSubmit}>
              <ActionInput
                ref={input => {
                  this.actionInput = input
                }}
                value={inputText}
                onChange={this.handleChange}
              />
            </form>
          </ActionSpan>
        </ActionLine>
      </BlackWrap>
    )
  }
}

export default Bash
