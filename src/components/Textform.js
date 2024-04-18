import React,{useState} from 'react'

export default function Textform(props) {
     const handleupclick =() =>{
         console.log(text);
         let newtext=text.toUpperCase();
         setext(newtext)
         newtext="";
    }
     const lowercase =() =>{
         console.log(text);
         let newtext=text.toLowerCase();
         setext(newtext)
        
    }
     const removespaces =() =>{
         console.log(text);
         let newtext=text.replaceAll(' ','');
         setext(newtext)
        
    }
    
    const handleOnChange =(event) =>{
        console.log("On Change");
         setext(event.target.value)
    }
    const [text, setext] = useState("Enter your Text");

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={handleOnChange}
                    rows={8}
                    defaultValue={""}
                />
            </div>
            <button className="btn btn-primary"
              onClick={handleupclick}
             >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3"
              onClick={lowercase}
             >Convert to LowerCase</button>
            <button className="btn btn-primary"
              onClick={removespaces}
             >Remove Spaces</button>
        </div>
    )
}
