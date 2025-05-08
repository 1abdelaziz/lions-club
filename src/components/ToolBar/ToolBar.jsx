import AOS from 'aos';
import './ToolBar.css';
import { useEffect } from 'react';

export default function ToolBar(props) {
    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, [])

    return (
        <div className="toolbar container my-4" data-aos="fade-up">
            <div className="buttons-container">
                {props.buttons && props.buttons.map((button, index) => 
                    <button 
                        key={index}
                        type="button" 
                        className={`btn btn-outline-primary mx-1 ${button.selected && "selected"}`}
                        onClick={button.onSelect}
                    >
                        {button.text}
                    </button>
                )}
            </div>
            {props.search &&
                <input
                    type="search"
                    onChange={props.search.onChange}
                    name={props.search.name}
                    className='form-control mb-1'
                    id={props.search.id}
                    placeholder={props.search.placeholder}
                />
            }   
        </div>
    )
}