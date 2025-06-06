import HeartSVG from "./HeartSVG";
const colors=[
     '#b8e3f5',
    '#f5b8e4',
    '#b8f5b9',
    '#f5f3b8',
    '#e3b8f5',
    '#fffcf2'
]
const CandyColorHeart=(props)=>{
    const randomcolor=colors[Math.floor(Math.random()*colors.length)];
    return(
        <div className='heart'>
            <div className='heart_img'>
                <HeartSVG  col={randomcolor}/>
                 <p className='heart_message'>{props.msg}</p>
            </div>
           
        </div>
    );
};
export default CandyColorHeart;