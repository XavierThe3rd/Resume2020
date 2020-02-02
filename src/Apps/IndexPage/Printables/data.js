import PDF from '../../../../images/TestPDF.pdf'

const Data= ()=> {
    const heading = 'Printed Documents'
    const options = [ 
        {
            index: 1,
            title: 'Resume',
            search: PDF,
            name: 'Test Resume File Here'
        },
        {
            index: 2,
            title: 'Portfolio',
            search: PDF,
            name: 'Test Resume File Here'
        },
        {
            index: 3,
            title: 'Degrees',
            search: PDF,
            name: 'Test Resume File Here'
        },
        {
            index: 4,
            title: 'Other',
            search: PDF,
            name: 'Test Resume File Here'
        },
    ]
    return{
        options,
        heading
    }
}
let get = new Data()

export default get