import { SET_SPECIAL } from '../../actions/z-names'
import LightBulb from '../../../images/LightBulb.svg'
import CodePad from '../../../images/CodePad.svg'
import DigitalPen from '../../../images/DigitalPen.svg'
import Pencil from '../../../images/Pencil.svg'

const structure = {
  specData: [
    {
      index: 1,
      title: 'Creativity',
      image: LightBulb,
      para:
        'I provide creativity that breaks the box of thought, where my ideas can expand on basic concepts and find new and exciting ways to present even the most basic of information.'
    },
    {
      index: 2,
      title: 'Programing',
      image: CodePad,
      para:
        'I provide programming capabilities in both frontend and backend engineering with a knowledgable understanding of HTML, CSS, postCSS, SCSS, Javascript, React Redux, PHP and Python.'
    },
    {
      index: 3,
      title: 'Digital Art',
      image: DigitalPen,
      para:
        'With experience in digital art programs from Adobe programs to Sketch, my expertise provides a thorough execution in use to create stunning digital artwork.'
    },
    {
      index: 4,
      title: 'Fine Art',
      image: Pencil,
      para:
        'Providing excellence in fine-art skills from illustration to shading and even sculpting, my skillset can carry an idea on paper without the use of technology.'
    }
  ]
}

const special = (state = structure, action) => {
  switch (action.type) {
    case SET_SPECIAL:
      return {
        ...state,
        specData: structure.specData
      }
    default:
      return state
  }
}

export default special
