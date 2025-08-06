import { use } from 'react';
import { UserContext } from '@/09-useContext/context/UserContextDefinition';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Page about me</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {/* //? User profile if there is an acti ve session */}
        {isAuthenticated && (
          <Link
            to="/profile"
            className="hover:text-blue-500 underline text-2xl"
          >
            Profile
          </Link>
        )}
        {/* Login Logout */}
        {isAuthenticated ? (
          <Button variant="destructive" className="mt-4" onClick={logout} />
        ) : (
          <Link to="/login" className="hover:text-blue-500 underline text-2xl">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
