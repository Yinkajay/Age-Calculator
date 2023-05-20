import { useState } from "react"
import buttonImage from '../../assets/images/icon-arrow.svg'

const BirthdayForm = (props) => {
    const [birthday, setBirthday] = useState({
        day: '',
        month: '',
        year: ''
    })
    const [validDay, setValidDay] = useState(true)
    const [validMonth, setValidMonth] = useState(true)
    const [validYear, setValidYear] = useState(true)


    function getInvalidField(year, month, day) {
        const date = new Date(year, month - 1, day);

        // Check year
        if (date.getFullYear() !== year) {
            return 'year';
        }

        // Check month
        if (date.getMonth() !== month - 1) {
            return 'month';
        }

        // Check day
        if (date.getDate() !== day) {
            return 'day';
        }

        // Date is valid
        return null;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        if (getInvalidField(birthday.year, birthday.month, birthday.day) === 'year') {
            setValidYear(false)
        } else if (getInvalidField(birthday.year, birthday.month, birthday.day) === 'month') {
            setValidMonth(false)
        } else if (getInvalidField(birthday.year, birthday.month, birthday.day) === 'day') {
            setValidDay(false)
        }

        if (!birthday.day || !birthday.month || !birthday.year) {
            setValidDay(false)
            setValidMonth(false)
            setValidYear(false)
            return
        }
        console.log(birthday)

        props.onSubmitBirthdate(birthday)
    }

    return (
        <section>
            <form onSubmit={formSubmitHandler} className="birthday-form">
                <div className="form-inputs">
                    <div className="form-input">
                        <label htmlFor="">
                            DAY
                        </label>
                        <input type="number" value={birthday.day} onChange={(e) => setBirthday({
                            ...birthday, day: +e.target.value
                        })} placeholder="DD" />
                        {!validDay && <p>Must be a valid day</p>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="">
                            MONTH
                        </label>
                        <input type="number" value={birthday.month} onChange={(e) => setBirthday({
                            ...birthday, month: +e.target.value
                        })} placeholder="MM" />
                        {!validMonth && <p>Must be a valid month</p>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="">
                            YEAR
                        </label>
                        <input type="number" value={birthday.year} onChange={(e) => setBirthday({
                            ...birthday, year: +e.target.value
                        })} placeholder="YYYY" />
                        {!validYear && <p>Must be in the past</p>}
                    </div>
                </div>
                <button type="submit">
                    <img src={buttonImage} alt="calculate-button" />
                </button>
                <hr />
            </form>
        </section >
    )
}

export default BirthdayForm
