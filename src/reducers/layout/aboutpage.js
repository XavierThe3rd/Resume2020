import { SET_ABOUT_DATA } from '../../actions/z-names'
import MugShot from '../../../images/MugShot.jpg'
import Qintel from '../../../images/QintelLogo.png'

const structure = {
  aboutData: {
    mugshot: MugShot,
    titleHistory: 'Who Am I?',
    history: [
      {
        para:
          'My name is Thomas Xavier Grasso the 3rd, and my story starts out of high school, where I was a welder who attended Pittsburgh Technical Institute for training and then worked for two companies, one manufacturing structural steel, the other trailers. After spending two years in the field, I sought after a new challenge to get a real education where a restarted as an engineering student at Butler County Community College... which lasted for around a year after realizing  I hated it. I wanted to learn something that was more hands on but still technically challenging . I also wanted to learn something where I could express my creativity. There began my new college career as a graphic designer where I learned to channel that creativity into productivity all while teaching myself a new type of engineering, software engineering. Teaching myself this new skill was a challenge at first, relying on a close friend of mine to get me through the basic hurdles of understanding the front end with HTML and CSS followed by SCSS, basic JavaScript syntax, and finally  the back end with good old PHP. '
      },
      {
        para:
          'After my first two semesters as a graphic designer, I was accepted as an unpaid Intern at a company known as Qintel over the summer of 2019. This began the bulk of my learning were I interned during the week, dove deeper into the front at night, and worked on the weekends to make ends meet. With the summer at its end and the new semester on the horizon, Qintel decided to keep me on part time this time paid ending my days of minimum pay. At this point, I was fluent enough in front end development to begin learning new types of code where I sought after learning React for my front end teachings, and python for my back end teachings.'
      },
      {
        para:
          'Here I am today, where since the end of the summer of 2019, I am now a refined graphic designer from both educational and work related experience, and a fluent front end developer with a well understanding of the backend. My current skill set is vast and constantly growing and I look forward to growing those skills for your company.'
      }
    ],
    internlogo: Qintel,
    titleIntern: 'Internship',
    internship: [
      {
        para:
          'A once in a life time opportunity was found when I was given the chance to intern for the worlds leading cyber security company. As a graphic designer, I learned several skills within the field of graphic design working with a small design team of roughly four people. What started as a summer unpaid internship in 2019 has transitioned into a paid internship that still continues to this day.'
      },
      {
        para:
          'To the company, I provided several services including, merchandise design, report design, brochure design an UX/UI design. I have also through this company aquired several skills with both react and python where in house programming projects were assigned to me for the company to use in order to provide new tools that could be utilized for my fellow co-workers.'
      }
    ]
  }
}

const about = (state = structure, action) => {
  switch (action.type) {
    case SET_ABOUT_DATA:
      return {
        ...state,
        aboutData: structure.aboutData
      }

    default:
      return state
  }
}

export default about
