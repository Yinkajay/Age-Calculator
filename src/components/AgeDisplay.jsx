import { useState } from "react"
import BirthdayForm from "./BirthdayForm"

const AgeDisplay = () => {
    const [years, setYears] = useState('--')
    const [months, setMonths] = useState('--')
    const [days, setDays] = useState('--')

    const calcBirthday = (birthdate) => {
        let { day, month, year } = birthdate

        const birthDate = new Date(`${year},${month},${day}`)
        console.log(birthDate)

        const today = new Date()
        console.log(today)

        const timeDiff = today.getTime() - birthDate.getTime();

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const millisecondsPerMonth = 30.44 * millisecondsPerDay;
        const millisecondsPerYear = 365.25 * millisecondsPerDay;


        setYears(Math.floor(timeDiff / millisecondsPerYear))
        setMonths(Math.floor((timeDiff % millisecondsPerYear) / millisecondsPerMonth));
        setDays(Math.round(((timeDiff % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay));

    }
    return (
        <div className="display-card">
            <BirthdayForm onSubmitBirthdate={calcBirthday} />
            <section>
                <h1> <span className="date-field">{years}</span> years</h1>
                <h1><span className="date-field">{months}</span> months</h1>
                <h1><span className="date-field">{days}</span> days</h1>
            </section>
        </div>
    )
}

export default AgeDisplay


// const birthday = new Date(`${year},${month},${day}`)
// console.log(birthday)
// const birthdayFrom1970 = birthday.getTime()
// console.log(birthdayFrom1970)

// const today = new Date()
// console.log(today)
// const todayFrom1970 = today.getTime()
// console.log(todayFrom1970)
// const timeSinceBirthday = todayFrom1970 - birthdayFrom1970
// console.log(timeSinceBirthday)

// const yearsSinceBirthday = Math.floor(timeSinceBirthday / 31556952000)
// console.log(yearsSinceBirthday)
// setYears(yearsSinceBirthday)

// const remainingMonths = timeSinceBirthday % 31556952000
// console.log(remainingMonths)
// const monthsSinceBirthday = (remainingMonths / 2629746000)
// console.log(Math.floor(monthsSinceBirthday))
// setMonths(Math.floor(monthsSinceBirthday))

// const remainingDays = remainingMonths % 2629746000
// console.log(remainingDays)
// const daysSinceBirthday = remainingDays / 86400000
// console.log(daysSinceBirthday)
// setDays(Math.ceil(daysSinceBirthday))