export default function Gallery ({objectImg, title, artist}) {
    return (
        <div style={{'width': '100%'}}>
            <img src={objectImg} 
                width={500}
                height={500}
                alt={title} />
            <p>{artist}</p>
        </div>
    )
}