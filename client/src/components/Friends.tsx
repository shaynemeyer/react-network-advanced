import React, { Suspense } from 'react';
import { User } from '../types/User';

const Friend = React.lazy(() => import('./Friend.tsx'));

function Friends({ users = [] }: { users: User[] }) {
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users?.map((user) => (
          <Suspense key={user.id} fallback={<div>Loading...</div>}>
            <Friend user={user} key={user.id} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default Friends;
