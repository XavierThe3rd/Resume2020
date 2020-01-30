const Data= ()=> {
    const heading = 'Providing Skills In...'
    let specData = [
        {
            index: 1,
            title: "Creativity",
            image: "../images/LightBulb.svg",
            para: "With acurate creative thinking skills, I can carry an idea for your company and make it into an acurate, eliquent reality with several realities to choose from."
        },
        {
            index: 2,
            title: "Programing",
            image: "../images/CodePad.svg",
            para: "Programming capabilities that are both adiquet and versitile with a knowledgable undestanding of html, scss, javascript, php, python and react."
        },
        {
            index: 3,
            title: "Digital Art",
            image: "../images/DigitalPen.svg",
            para: "With experience in digital art programs from adobe programs to sketch to figma, my expertiece provides a thorough execution in use to create stunning digital artwork."
        },
        {
            index: 4,
            title: "Fine Art",
            image: "../images/Pencil.svg",
            para: "Providing excelence in fine art skills from illustration to shading and even sculpting, my skillset can carry an idea on paper without the use of technology."
        },
    ]
    return{
        specData : specData,
        heading : heading
    }
}
let get = new Data()

export default get


