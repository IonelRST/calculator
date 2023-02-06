import './App.css'
import React, { useState } from 'react'

function App () {
  const [firstOperand, setFirstOperand] = useState('')
  const [secondOperand, setSecondOperand] = useState('')
  const [operator, setOperator] = useState('')

  //handle click when numeric pad is pressed
  const handleNumeric = value => {
    if (firstOperand === '') {
      setFirstOperand(value)
    } else if (operator === '') {
      let currentString = firstOperand + value
      if (Number(currentString) === 0) return
      setFirstOperand(currentString)
    } else if (secondOperand === '') {
      setSecondOperand(value)
    } else {
      let currentString = secondOperand + value
      if (Number(currentString) === 0) return
      setSecondOperand(currentString)
    }
  }

  //handle click when operators are pressed
  const displayOperator = value => {
    //if first operand does not exist
    if (firstOperand === '') return
    //if second operand does not exist
    if (secondOperand !== '') {
      compute()
      setOperator(value)
    } else {
      //if there are first operand exist and second does not
      if (Number(firstOperand) === 0) return
      setOperator(value)
    }
  }

  //clear al variables
  const clear = () => {
    setOperator('')
    setFirstOperand('')
    setSecondOperand('')
  }

  //hancle click on dot
  const displayDot = () => {
    if (operator === '') {
      //if there is a '.' we will not display another one
      if (firstOperand.slice(-1) === '.' || firstOperand.includes('.')) return
      //if it is the first thing we do with
      if (firstOperand === '') {
        setFirstOperand('0.')
      } else {
        let currentString = firstOperand + '.'
        setFirstOperand(currentString)
      }
    } else {
      //if there is a '.' we will not display another one
      if (secondOperand.slice(-1) === '.' || secondOperand.includes('.')) return
      //if it is the first thing we do with
      if (secondOperand === '') {
        setSecondOperand('0.')
      } else {
        let currentString = secondOperand + '.'
        setSecondOperand(currentString)
      }
    }
  }

  //handle compute
  const compute = () => {
    if (firstOperand !== '' && operator !== '' && secondOperand !== '') {
      switch (operator) {
        case '+':
          setFirstOperand(Number(firstOperand) + Number(secondOperand))
          setSecondOperand('')
          setOperator('')
          break
        case '-':
          setFirstOperand(Number(firstOperand) - Number(secondOperand))
          setSecondOperand('')
          setOperator('')
          break
        case '*':
          setFirstOperand(Number(firstOperand) * Number(secondOperand))
          setSecondOperand('')
          setOperator('')
          break
        case '/':
          setFirstOperand(Number(firstOperand) / Number(secondOperand))
          setSecondOperand('')
          setOperator('')
          break
        default:
          break
      }
    }
  }

  return (
    <div className='calculator-container'>
      <div id='display' className='item display'>
        <p className='expression'>
          {firstOperand === '' ? 0 : firstOperand + operator + secondOperand}
        </p>
      </div>
      <button id='clear' className='item ac' value='AC' onClick={clear}>
        AC
      </button>
      <button
        id='divide'
        className='item divide'
        value='/'
        onClick={e => displayOperator(e.target.value)}
      >
        /
      </button>
      <button
        id='multiply'
        className='item multiply'
        value='*'
        onClick={e => displayOperator(e.target.value)}
      >
        X
      </button>
      <button
        id='seven'
        className='item number'
        value='7'
        onClick={e => handleNumeric(e.target.value)}
      >
        7
      </button>
      <button
        id='eight'
        className='item number'
        value='8'
        onClick={e => handleNumeric(e.target.value)}
      >
        8
      </button>
      <button
        id='nine'
        className='item number'
        value='9'
        onClick={e => handleNumeric(e.target.value)}
      >
        9
      </button>
      <button
        id='subtract'
        className='item'
        value='-'
        onClick={e => displayOperator(e.target.value)}
      >
        -
      </button>
      <button
        id='four'
        className='item number'
        value='4'
        onClick={e => handleNumeric(e.target.value)}
      >
        4
      </button>
      <button
        id='five'
        className='item number'
        value='5'
        onClick={e => handleNumeric(e.target.value)}
      >
        5
      </button>
      <button
        id='six'
        className='item number'
        value='6'
        onClick={e => handleNumeric(e.target.value)}
      >
        6
      </button>
      <button
        id='add'
        className='item'
        value='+'
        onClick={e => displayOperator(e.target.value)}
      >
        +
      </button>
      <button
        id='one'
        className='item number'
        value='1'
        onClick={e => handleNumeric(e.target.value)}
      >
        1
      </button>
      <button
        id='two'
        className='item number'
        value='2'
        onClick={e => handleNumeric(e.target.value)}
      >
        2
      </button>
      <button
        id='three'
        className='item number'
        value='3'
        onClick={e => handleNumeric(e.target.value)}
      >
        3
      </button>
      <button id='equals' className='item equals' value='=' onClick={compute}>
        =
      </button>
      <button
        id='zero'
        className='item zero'
        value='0'
        onClick={e => handleNumeric(e.target.value)}
      >
        0
      </button>
      <button id='decimal' className='item dot' value='.' onClick={displayDot}>
        .
      </button>
    </div>
  )
}

export default App
