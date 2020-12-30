import React from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { gorestToken } from '../../../utils';

function FormRow() {
  const { register, handleSubmit, formState } = useForm({});

  const onSubmit = (values) => {
    console.log('values submitted', values);

    Axios.post('https://gorest.co.in/public-api/users', values, {
      headers: {
        Authorization: `Bearer ${gorestToken}`,
      },
    })
      .then(({ data: { data } }) => {
        console.log('Register inserted successfully', data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" placeholder="name..." ref={register} />

      <input type="email" name="email" placeholder="email..." ref={register} />

      <select name="gender" ref={register}>
        <option value="">gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select name="status" ref={register}>
        <option value="">status...</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit" disabled={formState.isSubmitting}>
        Send
        {' '}
        <i className="fa fa-paper-plane" />
      </button>
    </form>
  );
}

export default FormRow;
