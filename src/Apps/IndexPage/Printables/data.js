
const Data= ()=> {
    let pdf = localStorage.getItem('pdf');
    const heading = 'Printed Documents'
    const options = [ 
        {
            index: 1,
            title: 'Resume',
            search: pdf,
            name: 'Test Resume File Here'
        },
        {
            index: 2,
            title: 'Portfolio',
            search: pdf,
            name: 'Test Resume File Here'
        },
        {
            index: 3,
            title: 'Degrees',
            search: pdf,
            name: 'Test Resume File Here'
        },
        {
            index: 4,
            title: 'Other',
            search: pdf,
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