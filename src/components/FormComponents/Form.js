import React from 'react'

export const Form = () => {
    return (
        <div className = ' pad-1 '>

            <form
                className = ' pad-x-1 '
            >

                <input 
                    className = ' ui_input margin-bot-1 '
                    placeholder = 'First Name'
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    placeholder = 'Last Name'
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    placeholder = 'Address Name'
                />
                <input 
                    className = ' ui_input margin-bot-1 '
                    placeholder = 'SSN'
                />

                <div className = ' form_cta-container pad-top-1 '>
                    <button
                        className = ' buttons_secondary margin-end-1 '
                    >
                        Reset
                    </button>
                    <button
                        className = ' buttons_main '
                    >
                        Enviar
                    </button>
                </div>

            </form>

        </div>
    )
}
