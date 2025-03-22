import Profile from './components/Profile';

function App() {
  return (
    <div className="max-w-3xl m-auto my-4 text-slate-800">
      <h1 className="text-3xl py-4 mb-4 tracking-wider font-bold">Profile</h1>
      <div>
        <Profile id="ul" />
      </div>
    </div>
  );
}

export default App;
