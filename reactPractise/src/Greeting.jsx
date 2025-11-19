function Greeting() {

    const userName = "Савва"
    const currentHour = new Date().getHours()
    const currentMinute = new Date().getMinutes()

    let timeOfDay
    if (currentHour < 12) {
        timeOfDay = "Доброе утро"
    } else if (currentHour < 18) {
        timeOfDay = "Добрый день"
    } else {
        timeOfDay = "Добрый вечер"
    }

    return (
        <div className="greeting">
            <h1>{timeOfDay}, {userName}!</h1>
            <p>Рады видеть вас в нашем приложении</p>
            <p>Точное время: {currentHour} часов {currentMinute} минут</p>
        </div>
    );
}

export default Greeting;