import { User } from '../types/User';

function About({ user }: { user: User }) {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center">
      <div>
        <img
          src={user?.avatar}
          alt={`User ${user.name} Avatar`}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div>
        <div className="text-2xl font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}

export default About;
