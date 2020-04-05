import { SET_PDF } from '../../actions/z-names'
import PDF from '../../../images/TestPDF.pdf'

const structure = {
  option: false,
  clazz: false,
  pdfData: [
    {
      index: 1,
      title: 'Resume',
      search: 'http://xavierthe3rd.epizy.com/ArtDirectory/PaperResume.pdf',
      name: 'Test Resume File Here',
      clazz: false
    },
    {
      index: 2,
      title: 'Portfolio',
      search: PDF,
      name: 'Test Resume File Here',
      clazz: false
    },
    {
      index: 3,
      title: 'Degrees',
      search: PDF,
      name: 'Test Resume File Here',
      clazz: false
    },
    {
      index: 4,
      title: 'Other',
      search: PDF,
      name: 'Test Resume File Here',
      clazz: false
    }
  ]
}

const setPdfs = (state = structure, action) => {
  switch (action.type) {
    case SET_PDF:
      return {
        ...state,
        pdfData: structure.index
      }
    default:
      return state
  }
}

export default setPdfs
