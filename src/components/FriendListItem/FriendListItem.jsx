import stylesFriends from "../FriendListItem/FriendListItem.module.css"


export default function FriendListItem({ id, avatar, name, isOnline }) {
    return (
        <div key={id} className={stylesFriends.friendItem}>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p className={isOnline ? stylesFriends.online : stylesFriends.offline}>
                {isOnline ? "Online" : "Offline"}
            </p>

        </div>
    )
}