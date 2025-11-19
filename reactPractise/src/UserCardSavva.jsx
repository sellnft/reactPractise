function UserCardSavva({ name, role, avatarURL, isOnline }) {
    return (
        <div className="user-card">
            <div className="avatar-section">
            <img src={avatarURL} alt={`Аватар ${name}`} />
            <p>Статус: {isOnline ? "online" : "offline"}</p>
            </div>
            <div className="user-info">
                <h1>{name}</h1>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default UserCardSavva