const Footer = () =>{

    const footerStyle={
        padding: "11px",
        width: "100%",
        color: "lightgreen",
        textAlign: "center",
        background: "rgb(18 18 70)",
        marginTop: "33px",
        position: "absolute",
        // top: "100%",
        left: "0px",
        margin: "180px 0 auto 0"
    }

    return(
        <div style={ footerStyle }>
            <a href="" ></a>
            developed by giuseppe tarallo  :: &nbsp;
                            <a href="mailto:tarallo.giuseppe@libero.it">✉️</a>&nbsp;::&nbsp; 
                            <a href="https://www.dev-ita.it" target='_blank'>💻</a>&nbsp;::&nbsp;  
                            <a href="https://github.com/pippo-github" target='_blank'>📄</a>&nbsp;::&nbsp;-==- London 2022 -==-  
        </div>
    )
}


export default Footer;