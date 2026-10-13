import { useEffect, useState } from "react";

const TextComponent = () => {
    const [text, setText] = useState("")
    const [displayText, setDisplayText] = useState("")

  /*
    useEffect
    allows us to write a callback function that runs whenever a variable changes

    useEffect(() => {
    
    },[dependency])

    the callback function is the function we want to run

    the dependency array takes in any amount of variables.  whenever changes are made to any of those variables, the callback function will execute.  (callback function is dependent on those variables)

    useEffect will ALWAYS run the callback function when the component is initially rendered

    if the dependency array is empty, the callback function will only run once when the component is first rendered.  This is useful if you need a function to run exactly once when the component is rendered

    you are allowed to have multiple useEffects with their own dependency arrays in the same component

  */

      useEffect(() => {
    console.log("Initial Render");
  }, []);

    useEffect(()=>{
            // our function is always going to run on initial render, but we can add conditional logic to prevent the contents of that function from running immediately
        if(displayText !== ""){
console.log(`Display Text: ${displayText}`)}
    // do not change the state of one of your dependency array variables inside its respective useEffect.  This will create an infinite loop
    // setDisplayText(Math.random() * 10)  
}, [displayText, text])


    const handleSubmit = (event) => {
        event.preventDefault()

        setDisplayText(text);
        setText("")
    }

  return (
    <>
      <h2>Text: {displayText}</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Enter your text: </label>
            <input value={text} 
            onChange={(e) =>setText(e.target.value)}/>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default TextComponent;