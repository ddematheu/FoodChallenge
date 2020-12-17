import CSS from 'csstype';

export const startStyle: CSS.Properties = {
    width: '100vw',
    height: '100vh',
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
    borderRadius: '30px',
    border: '2px solid black',
    color: 'white',
    padding: '0.25em 1em',
    fontSize: '30px',
    lineHeight: '35px',
    backgroundColor: 'hsl(120,100%,25%,0.9)',
}

export const titleStyle: CSS.Properties = {
    marginBottom: '2.5vh',
    marginRight: '20vw',
    marginLeft: '20vw',
    maxWidth: '60vw',
    minWidth: '500px',
    color: 'black',
    fontSize: '55px',
    lineHeight: '65px',
    textAlign: "center",
    fontWeight: 'bolder',
    backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
}
