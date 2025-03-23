import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { get } from '../utils';
import Friends from './Friends';

function Profile({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await get<User>(`/users/${id}`);
        setUser(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      {user && user.name}
      <Friends id={id} />
    </div>
  );
}

export default Profile;
