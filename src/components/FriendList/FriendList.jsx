import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";
import { nanoid } from "nanoid";
export default function FriendList({ friends }) {
    return (
        <div >
            <ul className={styles.container}>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <li key={nanoid()}>
                        <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} />
                    </li>

                ))}
            </ul>
        </div>
    );
}
