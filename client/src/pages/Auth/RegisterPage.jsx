import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();

  const navigate = useNavigate()

  const onSubmitHandler = async (form) => {
    try {
      const {data} = await axios.post('/register', form,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (data) {
        navigate("/login")
      } else {
        console.log("Fehler");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='w-screen h-screen flex space-y-3 flex-col items-center justify-center relativ bg-gray-700 text-white p-10 md:p-40'>
{/*       <img
      src="https://townsquare.media/site/701/files/2017/08/dad.jpg"
      alt=""
      className='z-0 fixed w-full h-full object-cover opacity-30 object-center inset-0'
      /> */}
      <form className='z-20 space-y-3' onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className='text-3xl'>Register</h1>
        <input
        {...register('fullName', {required: true })}
        type="text"
        placeholder='Max Mustermann'
        />
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
        <Link to={`/login`} className='inline-flex'>
          Hast du bereits einen Account? Jetzt einlogen!
        </Link>
        <button type='submit' className='button'>Registrieren</button>
      </form>
    </div>
  )
}

export default RegisterPage