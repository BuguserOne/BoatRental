import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'

const LoginPage = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();

  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false)

  const onSubmitHandler = async (form) => {
    try {
      const {data} = await axios.post('/login', form,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (data) {
        toast.success('Du hast dich erfolgreich eingeloggt.')
        setRedirect(true)
      }
    } catch (err) {
      toast.error('E-Mail Adresse oder Passwort sind nicht korrekt')
    }
  }

  if (redirect) {
    return <Navigate to={`/`} />
  }

  return (
    <div className='w-screen h-screen flex space-y-3 flex-col items-center justify-center relativ bg-gray-700 text-white p-10 md:p-40'>
{/*       <img
      src="https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5add91dc9b91c_rnq4gfh1ipq01__605.jpg"
      alt=""
      className='z-0 fixed w-full h-full object-cover opacity-30 object-center inset-0'
      /> */}
      <form className='z-20 space-y-3' onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className='text-3xl'>Login</h1>

        <input
        {...register('email', {required: true })}
        type="email"
        placeholder='E-Mail Adresse'
        />
        <input
        {...register('password', {required: true })}
        type="password"
        placeholder='Passwort'
        />
        <Link to={`/registrieren`} className='inline-flex'>
          Noch keinen Account? Jetzt registrieren!
        </Link>
        <button type='submit' className='button'>Einloggen</button>
      </form>
    </div>
  )
}

export default LoginPage