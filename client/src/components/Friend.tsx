import { User } from '../types/User';
import Brief from './Brief';
import React, { Suspense } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const UserDetailCard = React.lazy(() => import('./UserDetailCard'));

function Friend({ user }: { user: User }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <Brief user={user} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetailCard id={user.id} />
          </Suspense>
        </>
      </PopoverContent>
    </Popover>
  );
}

export default Friend;
