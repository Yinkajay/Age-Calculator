import { useState } from "react"
import BirthdayForm from "./BirthdayForm"

const AgeDisplay = () => {
    const [years, setYears] = useState('--')
    const [months, setMonths] = useState('--')
    const [days, setDays] = useState('--')

    const calcBirthday = (birthdate) => {
        console.log(birthdate)
        let { day, month, year } = birthdate
        // month = month - 1
        const birthday = new Date(`${year},${month},${day}`)
        console.log(birthday)
        const birthdayFrom1970 = birthday.getTime()
        console.log(birthdayFrom1970)

        const today = new Date()
        console.log(today)
        const todayFrom1970 = today.getTime()
        console.log(todayFrom1970)
        const timeSinceBirthday = todayFrom1970 - birthdayFrom1970
        console.log(timeSinceBirthday)

        const yearsSinceBirthday = Math.floor(timeSinceBirthday / 31556952000)
        console.log(yearsSinceBirthday)
        setYears(yearsSinceBirthday)

        const remainingMonths = timeSinceBirthday % 31556952000
        console.log(remainingMonths)
        const monthsSinceBirthday = (remainingMonths / 2629746000)
        console.log(Math.floor(monthsSinceBirthday))
        setMonths(Math.floor(monthsSinceBirthday))

        const remainingDays = remainingMonths % 2629746000
        console.log(remainingDays)
        const daysSinceBirthday = remainingDays / 86400000
        console.log(daysSinceBirthday)
        setDays(Math.ceil(daysSinceBirthday))


    }
    return (
        <div>
            <BirthdayForm onSubmitBirthdate={calcBirthday} />
            <section>
                <h1>{years} years</h1>
                <h1>{months} months</h1>
                <h1>{days} days</h1>
            </section>
        </div>
    )
}

export default AgeDisplay
