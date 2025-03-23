import { useEffect, useState } from 'react';
import { UserDetail } from '../types/User';
import { get } from '../utils';

import { Avatar, AvatarImage } from './ui/avatar';

function UserDetailCard({ id }: { id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<UserDetail | undefined>();

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      const data = await get<UserDetail>(`/users/${id}/details`);

      setLoading(false);
      setDetail(data);
    };
    fetchFeeds();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[300px] border-none bg-transparent">
      <div className="justify-between">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src={`https://i.pravatar.cc/150?u=${detail?.id}`} />
          </Avatar>
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {detail?.name}
            </h4>
            <p className="text-small tracking-tight text-default-500">
              {detail?.twitter}
            </p>
          </div>
        </div>
      </div>

      <p className="text-small pl-px text-default-500 mt-2">{detail?.bio}</p>

      <div className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-600 text-small">
            <a href={detail?.homepage}>{detail?.homepage}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailCard;
