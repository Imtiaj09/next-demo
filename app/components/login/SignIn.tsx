'use client';

import router from 'next/router';
import { useState } from 'react';

function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(name, password)
//     try {
//       const res = await fetch('https://thingsally.com/api/usermanager/loginuser', {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({ name, password })
//       });

//       if (!res.ok) {
//         const { error } = await res.json();
//         throw new Error(error || 'Failed to log in');
//       }

      
//       router.push('https://www.google.com/');
//     } catch (error) {
//       setError(error.massage);
//     //   setError(error as string);
//     }
//   };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name, password)
        fetch('https://thingsally.com/api/usermanager/loginuser',{
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        }).then(res => res.json())
        .then(error => console.log(error))
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Sign in to your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500">{error}</div>
          )}
          <div>
            <label htmlFor="name" className="block font-medium">
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
