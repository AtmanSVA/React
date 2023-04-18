import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://640ea6214ed25579dc38ea2f.mockapi.io/forms')
        alert('Заявка отправлена')
        console.log(data)
    };
  
    console.log(watch("example")); 
  return (
    <div>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратную связь</h1>
        
        <div className='input-group mb-3'>
            <input
            {...register('lastName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.lastName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.lastName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}
        
        <div className='input-group mb-3'>
            <input
            {...register('firstName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.firstName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.firstName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3'>
            <input
            {...register('Patronymic', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Отчество'/>
        </div>
        {errors?.Patronymic?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.Patronymic?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.Patronymic?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

<div className='input-group mb-3'>
            <input
            {...register('email', {
                required: true,
                maxLength:50,
                pattern: /^[0-9A-Za-z@-_.]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='email'/>
        </div>
        {errors?.email?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.email?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.email?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}
        
        <div>
          <input className='btn btn-outline-primary' type="submit" />
        </div>
        </form>
    </div>
  )
}

export default Form