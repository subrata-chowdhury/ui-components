'use client';
import { useState } from "react";
import InputBox from "../stories/components/InputBox";

export default function Home() {
  const [error, setError] = useState<{
    username?: string;
    password?: string;
  }>({
    username: undefined,
    password: undefined,
  });
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let hasError = false;
    const { username, password } = loginData;

    if (username.length < 3) {
      setError(prev => ({ ...prev, username: 'Username must be at least 3 characters long' }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, username: undefined }));
    }

    if (password.length < 6) {
      setError(prev => ({ ...prev, password: 'Password must be at least 6 characters long' }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, password: undefined }));
    }

    if (!hasError) {
      window.location.href = '/dashboard';
    }
  };
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form className="flex flex-col gap-4 shadow-lg p-6 px-8 rounded-lg">
        <h2 className="text-xl font-semibold">Log In Form</h2>
        <InputBox
          label="Username"
          size="sm"
          variant="outlined"
          invalid={!!error.username}
          errorMessage={error.username}
          clearable={true}
          value={loginData.username}
          onChange={e => setLoginData(prev => ({ ...prev, username: e.target.value }))} />
        <InputBox
          label="Password"
          size="sm"
          variant="outlined"
          invalid={!!error.password}
          errorMessage={error.password}
          value={loginData.password}
          onChange={e => setLoginData(prev => ({ ...prev, password: e.target.value }))}
          type="password"
          passwordToggle={true} />
        <button className="bg-blue-500 text-white py-1.5 px-3 mx-auto rounded hover:bg-blue-600 transition cursor-pointer text-sm font-semibold" onClick={submitHandler}>
          Log in
        </button>
      </form>
    </div>
  );
}
