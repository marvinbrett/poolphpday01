import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.service_q3c1733,
            process.env.template_n0ks5h8,
            form.current,
            process.env.JcOTrw1AWmFbzz0yd
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );

        e.target.reset();

    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="messsage" />
            <input type="submit" value="Send" />
        </form>
    )
}

export default Email;