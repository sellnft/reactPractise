import './App.css';
import Greeting from './Greeting';
import TaskList from './TaskList';
import UserCard from './UserCard';
import UserCardEgor from './UserCardEgor';
import UserCardSavva from './UserCardSavva';

function App() {
  return (
    <div className="App">
      <Greeting />
      <UserCard 
      name="Александр Михайлович" 
      role="EarthOwnerHell"
      avatarURL="https://i.pinimg.com/236x/a9/3c/b4/a93cb4e0316ef9c4db83846550ff4deb.jpg"
      isOnline={true}
      />
      <UserCardSavva
      name="Савва Сергеевич"
      role="CEO"
      avatarURL="https://i.pinimg.com/736x/b1/0f/17/b10f17228bdc373bc8a4fe6b7a40edd1.jpg"
      isOnline={false}
      />
      <UserCardEgor
      name="Егор Казанцев"
      role="EgorBabay"
      avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgcq44rU-PMf8Q7ykdeUHL9UOKXtryYYcmA&s"
      isOnline={true}
      />
      <TaskList />
    </div>
  );
}

export default App;