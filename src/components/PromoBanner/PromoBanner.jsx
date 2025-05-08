import { useEffect } from 'react';
import AOS from 'aos';
import './PromoBanner.css';

export default function PromoBanner(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false })
    }, [])

    return (
        <section className={`promobanner container my-5 ${props.className && props.className}`} data-aos="fade-up">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            {props.button &&
                <button type="button" className='btn btn-primary' onClick={props.button.onClick}>
                    {props.button.text}
                </button>
            }
        </section>
    )
}
