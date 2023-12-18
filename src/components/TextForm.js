import React, { useState } from 'react'
import somestyle from './somestyle';


export default function TextForm(props) {


    const convertupcase = () => {
        // console.log("clicked")
        let newText = Text.toUpperCase();
        SetText(newText)


    }

    const convertlowcase = () => {
        // console.log("clicked")
        let newText = Text.toLowerCase();
        SetText(newText)


    }
    const convertclear = () => {
        // console.log("clicked")
        let newText = " "
        SetText(newText)


    }
    const [Text, SetText] = useState('enter a name')
    // const [btncolor, setbtncolor] = useState("change red")
    // const convertcolor = () => {
    //     if (Text.color == 'blue') {
    //         SetText({
    //             color: 'red',
    //             border: 1
    //         })
    //         setbtncolor('change Black')

    //     }

    //     else {
    //         SetText({
    //             color: 'blue'
    //         })
    //         setbtncolor('change red')

    //     }


    // }
    const HandelOnChange = (event) => {
        // console.log("clicked on change")
        SetText(event.target.value);

    }






    return (

        <>
            <div>
                <div className="mb-3 container-fluid">
                    <h1>{props.header}</h1>
                    <textarea className="form-control my-2" value={Text} onChange={HandelOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertupcase} >convert to uppercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertlowcase} >convert to lowercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertclear} >clear</button>
                </div>
              </div>
              <div className="container-fluid">
                {/* <p>{Text.split(" ").length} words and {Text.length} is characters </p> */}
            </div>
        </>
    )


}
