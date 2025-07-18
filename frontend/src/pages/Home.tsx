import { useState } from "react";
import TextBox from "../components/TextBox";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Thông tin cá nhân</h1>
      <TextBox
        label="Họ và tên"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="fullname"
        required
        className="w-1/2 focus:ring-emerald-500"
      />
      <p className="mt-2 text-sm text-gray-600">Bạn đã nhập: {name}</p>
    </div>
  );
}
