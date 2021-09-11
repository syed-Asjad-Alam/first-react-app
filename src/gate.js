

const Gate = ({isOpen}) => {
    return <div style={{color: "Red", fontWeight: "bold" }}>{isOpen === false ? "closed" : "open"}</div>;
}

export default Gate;