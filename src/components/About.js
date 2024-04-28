import React,{useState} from 'react'

export default function About(props) {
//     const [mystyle, setMyStyle] = useState({

//         color:'black',
//         background:'white',
//     })
//     const [btntext,setBtnText]=useState("Enable Dark Mode")
//     const toggleStyle = () => {
//     if(mystyle.color === 'black'){
//         setMyStyle({
//             color:'white',
//             background:'black',
//         })
//         setBtnText("Enable Light Mode")
//     }
//     else{
//         setMyStyle({
//             color:'black',
//             background:'white',
//         })
//         setBtnText("Enable Dark Mode")
//     }
// }
let mystyle={
    color:props.mode === 'dark'?'white':'#042743',
    backgroundColor:props.mode === 'dark'?'#042743':'white',
}

return (
    <div className='container mt-3 p-3' style={mystyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        style={mystyle}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
       <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body"style={mystyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently, Be it word, count, character count
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        style={mystyle}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={mystyle}>
       TextUtils is a free character counter tool that provides instant character count & word count stastics for a given text. TextUtils reports the number of words ans characters. Thus, it is suitable ofr writing text with word hcarcter limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        style={mystyle}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
       <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={mystyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, Excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
