import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";


type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  number:string
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      console.log('Response received')
      if (res.status == 200) {
        console.log('Response succeeded!')
      }
    })
    toast.success("اطلاعات شما با موفقیت ثبت شد در اسرع وقت با شما تماس خواهیم گرفت.",
    {
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#333',
        direction:'rtl',
      },
      duration: 8000,
    }
    );
    
    reset();
  }

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 mt-20">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#FF821E]/80 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#FF821E] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+989103753764</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#FF821E] h-7 w-7 animate-pulse" />
            <p className="text-2xl">work.arashhosseini@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#FF821E] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Tehran, Vanak sq, Kish Street, Iran</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-6 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name",{ required: "This is required." })}
              placeholder="Name *"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email",{ required: "This is required.",pattern: /^\S+@\S+$/i })}
              placeholder="Email *"
              className="contactInput"
              type="email"
            />
            
          </div>
          <input
              {...register("number", {required: true, minLength: 6, maxLength: 12,pattern: /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/})}
              placeholder="Mobile Number *"
              className="contactInput"
              type="text"
            />
          <textarea
            {...register("message",{ required: "This is required." })}
            placeholder="Message *"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#FF821E]/70 hover:bg-[#FF821E]/90 drop-shadow-[0px_0px_4px_#FF821E] py-4 md:py-5 px-10 rounded-md text-white text-xl lg:text-2xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
