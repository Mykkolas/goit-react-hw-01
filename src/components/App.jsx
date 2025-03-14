// src/components/App.jsx
import userData from "../userData.json"
import friendsData from "../friends.json"
import transactions from "../transactions.json"
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Profile from "./Profile/Profile";
export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <ul>
        <li>
          <FriendList
            friends={friendsData}
          />
        </li>
      </ul>
      <>
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
}
