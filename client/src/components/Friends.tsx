import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { get } from '../utils';

function Friends({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      const data = await get<User[]>(`/users/${id}/friends`);
      setLoading(false);
      setUsers(data);
    };

    fetchFriends();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>Friends</div>;
}

export default Friends;
