import { useEffect, useState } from 'react';
import { Feed } from '../types/User';
import { get } from '../utils';

function Feeds({ category }: { category: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      const data = await get<Feed[]>(`/articles/${category}`);

      setLoading(false);
      setFeeds(data);
    };
    fetchFeeds();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Your Feeds</h2>
      <div className="flex flex-col py-4 gap-2">
        {feeds.map((feed) => (
          <div key={feed.id}>
            <h3>{feed.title}</h3>
            <p className="text-xs text-slate-600">{feed.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feeds;
