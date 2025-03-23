import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { get } from '../utils';
import Friends from './Friends';
import Feeds from './Feeds';

function Profile({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const [user, setUser] = useState<User | undefined>();
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserAndFriends = async () => {
      try {
        setLoading(true);
        const [user, friends] = await Promise.all([
          get<User>(`/users/${id}`),
          get<User[]>(`/users/${id}/friends`),
        ]);
        setUser(user);
        setFriends(friends);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndFriends();
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
      <Friends key={user?.id} users={friends} />
      {user && <Feeds category={user.interests[0]} />}
    </div>
  );
}

export default Profile;
