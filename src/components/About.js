import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white'
    // })

    let myStyle ={
        color: props.mode==='dark' ? 'white' : '#042743',
        backgroundColor: props.mode==='dark' ? 'rgb(36 74 104)' : 'white',
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color==='black')
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    return (
        <div className=''>
            <h3 style={{color: props.mode==='dark' ? 'white' : '#042743'}}>About Us</h3>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character and word counter tool and able to chage lowercase to Uppercase and vice-versa. It will copy the text, remove extra space and preview the text and has a dark and light mode facility also.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Comatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word and character counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
        </div>
        <div class="form-check form-switch">
        <input class="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
        </div> */}
        </div>
    )
}
