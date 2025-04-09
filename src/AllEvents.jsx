function AllEvents(){
    //handleClick
    const handleClick = () => {
        console.log('button clicked');
    }
    //handleMouseEnter
    const handleMouseEnter = () => {
        console.log('mouse entered the button');
    }
    //handleMouseLeave
    const handleMouseLeave = () => {
        console.log('mouse left the button');
    }
    //handleFocus
    const handleFocus = () => {
        console.log('input focused');
    }
    //handleBlur
    const handleBlur = () => {
        console.log('input lost focus');
    }
    //handleChange
    const handleChange = (event) => {
        console.log('Input changed:', event.target.value);
    }
    //handleKeyDOwn
    const handleKeyDown = (event) => {
        console.log('Key Down:', event.key);
    }
    //handleKeyUp
    const handleKeyUp = (event) => {
        console.log('Key Up:', event.key);
    }
    return(
        <>
        <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        > Click or Hover over me </button>
         <br/>
         <input
         type="text"
         onFocus={handleFocus}
         onBlur={handleBlur}
         onChange={handleChange}
         onKeyDown={handleKeyDown}
         onKeyUp={handleKeyUp}
         placeholder="Type something"
         />
        </>
    )
 
}export default AllEvents