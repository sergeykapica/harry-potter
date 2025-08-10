'use client';

import { createRequest } from '@/app/lib/actions';
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="button-2 cursor-pointer"
      disabled={pending}
    >
      {pending ? "Отправка..." : "Отправить"}
    </button>
  );
}

export default function CreateRequestForm() {

  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    await createRequest(formData);
    setSuccessMessage("✅ Сообщение успешно отправлено!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }

  return (
    <form className="grid grid-cols-2 gap-5" action={handleSubmit}>
        <div>
        <input type="text" name="first_name" placeholder="Имя" className="w-full h-[36px] px-3 bg-transparent border-b border-grey-2/50 outline-0 focus:border-yellow-1 placeholder-grey-2/50" required/>
        </div>
        <div>
        <input type="text" name="last_name" placeholder="Фамилия" className="w-full h-[36px] px-3 bg-transparent border-b border-grey-2/50 outline-0 focus:border-yellow-1 placeholder-grey-2/50" required/>
        </div>
        <div className="col-span-2">
        <input type="email" name="email" placeholder="Email" className="w-full h-[36px] px-3 bg-transparent border-b border-grey-2/50 outline-0 focus:border-yellow-1 placeholder-grey-2/50" required/>
        </div>
        <div className="col-span-2">
        <textarea name="message" placeholder="Сообщение" rows={5} className="w-full px-3 py-2 bg-transparent border-b border-grey-2/50 outline-0 focus:border-yellow-1 placeholder-grey-2/50 resize-none" required></textarea>
        </div>
        <div className="col-span-2 flex justify-between gap-5">
            <SubmitButton/>
            {successMessage && (
                <p className="mt-4 text-green-600">{successMessage}</p>
            )}
        </div>
    </form>
  );
}