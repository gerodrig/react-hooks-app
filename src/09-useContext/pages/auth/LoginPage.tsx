import React, { use, useState } from 'react';
import { UserContext } from '@/09-useContext/context/UserContextDefinition';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LoginPage = () => {
  const { login } = use(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userId);

    if (!result) {
      toast.error('User not found');
      return;
    }

    navigation('/profile');
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Start Session</h1>
      <hr />

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-10">
        <Input
          type="number"
          placeholder="Enter user Id"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Button className="bg-blue-500" type="submit">
          Login
        </Button>
      </form>

      <Link to="/about">
        <Button className="bg-gray-300 opacity-80" variant="ghost">
          Go to Home Page
        </Button>
      </Link>
    </div>
  );
};
