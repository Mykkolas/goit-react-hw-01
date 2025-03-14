import stylesFriends from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <div className={stylesFriends.container}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <div key={id} className={stylesFriends.friendItem}>
                    <img src={avatar} alt={name} width="48" />
                    <p>{name}</p>
                    <p className={isOnline ? stylesFriends.online : stylesFriends.offline}>
                        {isOnline ? "Online" : "Offline"}
                    </p>
                </div>
            ))}
        </div>
    );
}
