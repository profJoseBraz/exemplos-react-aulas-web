import './MyInput.css'

interface Props{
    type: string;
    placeholder?: string;
    bgColor?:string;
}

function MyInput(props : Props){
    return(
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        style={{backgroundColor: `${props.bgColor}`}}/>
    );
}

export default MyInput