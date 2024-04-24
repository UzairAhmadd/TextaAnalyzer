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
     const cleartext =() =>{
         console.log(text);
         let newtext='';
         setext(newtext)
        
    }
    
    const handleOnChange =(event) =>{
        console.log("On Change");
         setext(event.target.value)
    }
    const [text, setext] = useState("Enter your Text");

    return (
        <>
       <div style={{background: props.mode ==='dark'?'grey':'white'}}>
        <div>
            <h1 style={{color: props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
                    
                    rows={8}
                    defaultValue={""}
                />
            </div>
            <button className="btn btn-primary  mx-1"
              onClick={handleupclick}
             >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1"
              onClick={lowercase}
             >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1"
              onClick={removespaces}
             >Remove Spaces</button>
            <button className="btn btn-primary mx-1"
              onClick={cleartext}
             >Clear Text</button>
        </div>
        <div className='container my-3'   style={{backgroundColor: props.mode ==='dark'?'grey':'white'}}>
            <h1 style={{color: props.mode ==='dark'?'white':'black'}}>Your Text Summary</h1>
            <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>

        </div>
        </div> 
            </>
    )
}
