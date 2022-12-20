export default function ButtonBar ({handleIterate}) {

    return (
        <div className="btn-group">
            <button value={-5} className="btn" onClick={handleIterate}>Way Back</button>
            <button value={-1} className="btn" onClick={handleIterate}>Back</button>
            <button value={1} className="btn" onClick={handleIterate}>Next</button>
            <button value={5} className="btn" onClick={handleIterate}>Big Next</button>
        </div>
    )
}