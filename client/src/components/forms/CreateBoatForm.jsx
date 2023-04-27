import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { closeModal } from "../../../redux/slices/uiSlice"
import { toast } from "react-hot-toast"

const CreateBoatForm = () => {
  const { register, reset, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (form) => {
    const { data } = await axios.post("/boat", form, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    dispatch(closeModal())
    toast.success('Dein neues Boat wurde erfolgreich erstellt!')
    reset()
  };
  return (
    <form
      className="w-full flex flex-col space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title eingeben"
          {...register("title", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="description">Title</label>
        <textarea
          type="text"
          name="description"
          placeholder="Beschreibung eingeben"
          {...register("description", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="price">Preis pro Tag</label>
        <input
          defaultValue={50}
          type="number"
          name="price"
          {...register("price", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Bild URL</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Bild URL eingeben"
          {...register("imageUrl", { required: true })}
        />
      </div>
      <button type="submit" className="button">
        Erstellen
      </button>
    </form>
  );
};

export default CreateBoatForm;
