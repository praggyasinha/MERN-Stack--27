import './Marquee.css';
const Marquee = (props) => {
    console.log(props);
    return (
        <div className="marquee" style={props.style}>
            <p> {props.children}</p>
        </div>
    );
}
export default Marquee;
