import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleLogin = async () => {
    // 👇 Giả lập xác thực
    if (username === "manager") {
      navigate("/manager");
    } else if (username === "receptionist") {
      navigate("/receptionist");
    } else {
      alert("Tài khoản không hợp lệ");
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-md h-max">
        <h2 className="text-neutral-600 text-2xl font-black mb-6 text-center">
          Login Page
        </h2>

        <input
          type="text"
          placeholder="Account"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full text-neutral-600 font-semibold p-2 mb-4 rounded-xl border-2 border-neutral-600"
        />

        <div className="relative w-full mb-4">
          <input
            type={passwordVisibility ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-neutral-600 font-semibold p-2 pr-10 rounded-xl border-2 border-neutral-600"
          />

          <button
            type="button"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500 focus:outline-none"
          >
            {passwordVisibility ? (
              <EyeIcon className="w-5 h-5 text-neutral-500" />
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-neutral-500" />
            )}
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-neutral-600 text-white py-2 mb-4 rounded-xl transition"
        >
          Login
        </button>

        <h6 className="text-zinc-400 text-sm text-center">
          forget your account?
        </h6>
      </div>
    </div>
  );
}
