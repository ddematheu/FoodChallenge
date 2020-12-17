import CSS from 'csstype';

export const startStyle: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    backgroundImage: "url(" + "image1.jpg" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    paddingTop: '40vh'
}

export const buttonDivStyle: CSS.Properties = {
    marginTop: '2.5vh',
    marginRight: '40vw',
    marginLeft: '40vw',
    maxWidth: '20vw',
    minWidth: '100px',
}

export const buttonStyle: CSS.Properties = {
    width: '100%',
    borderRadius: '3px',
    border: '2px solid blue',
    color: 'blue',
    padding: '0.25em 1em',
    fontSize: '30px',
    lineHeight: '35px',
}

export const titleStyle: CSS.Properties = {
    marginBottom: '2.5vh',
    marginRight: '10vw',
    marginLeft: '10vw',
    maxWidth: '80vw',
    minWidth: '500px',
    color: 'black',
    fontSize: '60px',
    lineHeight: '65px',
    textAlign: "center"
}
