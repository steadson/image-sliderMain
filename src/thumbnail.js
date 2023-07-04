import image from "./image.js";

const Thumbnail=(props)=>{
    const handleThumb= (index) => {
        props.handlethumb(index);
      };
    return(
        <>
        <div style={{
            display:'flex',
        }} className="thumbnail">{image.map((images, index)=>{
           return  <img style={{
            width:'40px',
            marginRight:'2px'
        }}   src={images} key={index} alt={`Thumbnail ${index}`} onClick={()=>handleThumb(index)} />
        })}</div>
        
        </>
    )
}
export default Thumbnail;