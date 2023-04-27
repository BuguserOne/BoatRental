import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { closeSidebar, selectSidebar } from "../../../redux/slices/uiSlice"
import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../../redux/slices/userSlice'
import axios from 'axios'

const Sidebar = () => {
    const sidebar = useSelector(selectSidebar)
    const user = useSelector(selectUser)
    const  dispatch = useDispatch()

    const navigate = useNavigate();

    const logoutHandler = async () => {
        await axios.post('/logout')
        dispatch(setUser({}))
        navigate('/')
    };


    return (
        <>
            <div
                onClick={() => dispatch(closeSidebar())}
                className={`${
                    sidebar ? "fixed inset-0 bg-gray-900 z-40 bg-opacity-50" : "hidden"
                }`}
            ></div>
            <div
                className={`${
                    sidebar ? "-translate-x-0" : "-translate-x-full"
                } h-screen bg-gradient-to-r from-slate-900 to-slate-700 border-r shadow-lg border-gray-600 text-gray-200 flex flex-col fixed top-0 bottom-0 left-0 w-2/4 md:w-2/5 px-5 py-3 transition-all z-50`}
            >
                <div className='flex items-center justify-between'>
                    {user?.email && <p className='text-xs'>Willkommen, {user?.email} </p>}
                    <button
                        className='rounded-full border bg-gray-500 p-2'
                        onClick={() => dispatch(closeSidebar())}
                    >
                        <AiOutlineClose className='h-5 w-5 text-white' />
                    </button>
                </div>
                <div className='flex flex-col mt-5 space-y-3 h-full justify-between'>
                    <div className='flex flex-col space-y-3'>
                        <button
                            className='button bg-purple-500'
                            onClick={() => {
                                dispatch(closeSidebar());
                                navigate('/');
                            }}
                        >
                            Home
                        </button>
                        <button
                            className='button bg-purple-400'
                            onClick={() => {
                                dispatch(closeSidebar());
                                navigate('/account');
                            }}
                        >
                            Account
                        </button>
                    </div>
                    {Object.keys(user).length === 0 ? (
                        <div className='space-y-3 flex flex-col'>
                            <button
                                onClick={() => {
                                    dispatch(closeSidebar());
                                    navigate('/login');
                                }}
                                className='button bg-purple-500'
                            >
                                Einloggen
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(closeSidebar());
                                    navigate('/registrieren');
                                }}
                                className='button bg-purple-400'
                            >
                                Registrieren
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(closeSidebar());
                                logoutHandler();    
                            }}
                            className='button bg-red-400'
                        >
                            Ausloggen
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Sidebar
