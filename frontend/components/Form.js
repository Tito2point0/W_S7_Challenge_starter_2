import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'

// Here are the validation errors you will use with your Yup schema.
const validationErrors = {
  fullNameTooShort: 'full name must be at least 3 characters', // excluding whitespace padding (Use .trim() in Yup!)
  fullNameTooLong: 'full name must be at most 20 characters',
  sizeIncorrect: 'size must be S or M or L'
}

// Here you will create your form schema. Implement the requirements seen in the `validationErrors` above.

// This array could help you construct your checkboxes using .map in the JSX.
const toppings = [
  { topping_id: '1', text: 'Pepperoni' },
  { topping_id: '2', text: 'Green Peppers' },
  { topping_id: '3', text: 'Pineapple' },
  { topping_id: '4', text: 'Mushrooms' },
  { topping_id: '5', text: 'Ham' },
]

export default function Form() {
  return (
    <form>
      <h2>Order Your Pizza</h2>
      <div className='success'>Pizza on the way.</div>
      <div className='failure'>Something went wrong.</div>

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input placeholder="Type full name" id="fullName" type="text" />
        </div>
        <div className='error'>full name bad</div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select id="size">
            <option value="">----Choose Size----</option>
          </select>
        </div>
        <div className='error'>size bad</div>
      </div>

      <div className="input-group">
        <label>
          <input
            name="1"
            type="checkbox"
          />
          Pepperoni<br />
        </label>
      </div>
      <input type="submit" />
    </form>
  )
}
