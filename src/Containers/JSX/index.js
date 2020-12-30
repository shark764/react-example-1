import React, { useState } from 'react';
import { users } from '../../utils';
import Child from './Child';
import ConditionalRendering from './ConditionalRendering';
import User from './User';
import Wrapper from './Wrapper';

function Fruit({ value }) {
  return (
    <div
      key={value}
      style={{
        display: 'inline',
        margin: 15,
        border: '1px solid salmon',
        borderRadius: 8,
        padding: 6,
      }}
    >
      {value}
    </div>
  );
}

function JSX() {
  const [children, setChildren] = useState([1, 4, 7]);
  const animals = ['bear', 'chicken', 'wolf', 'cow', 'dinasour'];
  const fruits = ['apple', 'banana', 'pear', 'coconut'];

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setChildren((prevChildren) => [...prevChildren, event.target.value]);
    }
  };

  const onRemove = (value) => {
    console.log('element to remove', value);
    setChildren((prevChildren) => prevChildren.filter((item) => item !== value));
  };

  return (
    <div>
      <span>
        Hello!
        {' '}
        {' '}
        {2 + 2}
      </span>

      {animals.map((item) => (
        <div key={item} style={{ display: 'inline', margin: 15 }}>
          <span>{item}</span>
        </div>
      ))}

      <hr />
      {fruits.map((item) => <Fruit key={item} value={item} />)}

      <hr />

      {users.map((item) => <User key={item.email} value={item} />)}

      <hr />

      <Wrapper value="hello world" />

      <Wrapper value="Where is my child?" style={{ color: 'orange' }}>
        <Child value={1} />
        <Child value={2} />
      </Wrapper>

      <Wrapper value="3 children" style={{ color: 'lightblue' }}>
        <Child value={3} />
        <Child value={4} />
        <Child value={5} />
      </Wrapper>

      <Wrapper
        value="list of children from state"
        style={{ color: 'lightgreen' }}
      >
        {children.map((item) => <Child key={item} value={item} onRemove={onRemove} />)}

        <input type="number" name="" id="" onKeyDown={handleKeyDown} />
      </Wrapper>

      <ConditionalRendering />
    </div>
  );
}

export default JSX;
