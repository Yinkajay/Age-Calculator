import { useState } from "react"

const BirthdayForm = (props) => {
    const [birthday, setBirthday] = useState({
        day: '',
        month: '',
        year: ''
    })

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (!birthday.day || !birthday.month || !birthday.year) return
            console.log(birthday)
        props.onSubmitBirthdate(birthday)
    }

    return (
        <section>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <div>
                        <label htmlFor="">
                            DAY
                        </label>
                        <input type="number" value={birthday.day} onChange={(e) => setBirthday({
                            ...birthday, day: +e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="">
                            MONTH
                        </label>
                        <input type="number" value={birthday.month} onChange={(e) => setBirthday({
                            ...birthday, month: +e.target.value
                        })} />
                    </div>
                    <div>
                        <label htmlFor="">
                            YEAR
                        </label>
                        <input type="number" value={birthday.year} onChange={(e) => setBirthday({
                            ...birthday, year: +e.target.value
                        })} />
                    </div>
                </div>
                <button>Calculate</button>
            </form>
        </section >
    )
}

export default BirthdayForm
