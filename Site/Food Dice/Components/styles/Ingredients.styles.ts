import CSS from 'csstype';

export const challengeTitleStyle: CSS.Properties = {
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

export const challengeStyle: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    backgroundImage: "url(" + "image1.jpg" + ")",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    paddingTop: '40vh'
}

export const ingredientsStyle: CSS.Properties = {
    backgroundColor: 'white',
    float: 'left',
    width: '100%',
    color: 'blue',
    padding: '0.25em 0.5em',
    fontSize: '25px',
    lineHeight: '27px',
    borderRadius: '3px',
    border: '2px solid blue',
    textAlign: 'center',
    boxSizing: "border-box",
    MozBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    marginRight: '0.25vw',
    marginBottom: '1vh'
}

export const ingredientAreaStyle: CSS.Properties = {
    marginTop: '2.5vh',
    marginRight: '20vw',
    marginLeft: '20vw',
    maxWidth: '60vw',
    minWidth: '100px',
    color: 'blue',
    height: '20vh',
    WebkitColumnCount: 3,
    WebkitColumnGap: '0.25vw',
    MozColumnCount: 3,
    MozColumnGap: '0.25vw',
    columnCount: 3,
    columnGap: '0.25vw',
}

export const buttonDivStyle: CSS.Properties = {
    height: '100px',
    marginTop: '2.5vh',
    marginRight: '37.5vw',
    marginLeft: '37.5vw',
    maxWidth: '25vw',
    minWidth: '100px',
}

export const backButtonStyle: CSS.Properties = {
    float: 'left',
    width: '10vw',
    background: 'white',
    borderRadius: '3px',
    border: '2px solid red',
    color: 'red',
    padding: '0.25em 1em',
    fontSize: '30px',
    lineHeight: '35px',
    marginRight: '1vw'
}

export const nextButtonStyle: CSS.Properties = {
    float: 'left',
    width: '10vw',
    background: 'white',
    borderRadius: '3px',
    border: '2px solid green',
    color: 'green',
    padding: '0.25em 1em',
    fontSize: '30px',
    lineHeight: '35px',
    marginRight: '1vw'
}