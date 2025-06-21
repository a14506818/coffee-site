import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("表單送出（可串接 Formspree 或自建 API）");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="姓名"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="留言內容"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        送出
      </button>
    </form>
  );
}
