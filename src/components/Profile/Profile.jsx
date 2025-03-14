import styles from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return <div className={styles.container}>
        <div>
            <img
                src={image}
                alt={name}
                className={styles.image_img}
            />
            <p>{name}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>

        <ul className={styles.stats_list} >
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>

}