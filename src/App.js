import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FriendList/FriendList";

import data from "./components/Statistics/data.json";
import user from "./components/Profile/user.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
