import React from 'react'
import ContentBox from './Components/ContentBox/contentBox.jsx'
import comps from './Components/U-Components/u-components.jsx'
import styles from './sass/Apps.scss'

const About = () => {
  return (
    <section>
      <ContentBox Class="intro" Margin={'0 0 30px'}>
        <comps.Title Color={styles.conColor} Class="index_header_in">
          {'About Tom'}
        </comps.Title>
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Mauris in aliquam sem fringilla ut. Urna neque viverra justo nec ultrices dui. Sed turpis tincidunt id aliquet risus feugiat. Tempor orci dapibus ultrices in iaculis nunc sed. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Sed velit dignissim sodales ut eu. Erat velit scelerisque in dictum non consectetur. Mus mauris vitae ultricies leo integer. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Habitant morbi tristique senectus et. Viverra orci sagittis eu volutpat. A iaculis at erat pellentesque adipiscing commodo elit.'
          }
        </p>
      </ContentBox>
      <ContentBox
        Class="intro"
        Margin={'0 0 30px'}
        Background={'linear-gradient(306deg, #6100ff 30%, #ff2643 125%)'}
      >
        <p>
          {
            'Suspendisse potenti nullam ac tortor vitae. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Tellus at urna condimentum mattis. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Tellus orci ac auctor augue mauris. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Sit amet commodo nulla facilisi. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices eros in cursus turpis massa.'
          }
        </p>
      </ContentBox>
      <ContentBox
        Class="intro"
        Margin={'0 0 30px'}
        Background={
          'linear-gradient(306deg, rgb(97, 0, 255) 57%, rgb(255, 38, 67) 150%)'
        }
      >
        <p>
          {
            'A diam sollicitudin tempor id eu. Et netus et malesuada fames ac turpis. Nibh tellus molestie nunc non blandit massa enim nec dui. Eget dolor morbi non arcu risus quis varius quam. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Velit aliquet sagittis id consectetur purus ut. Faucibus scelerisque eleifend donec pretium. In mollis nunc sed id semper risus. Accumsan lacus vel facilisis volutpat est velit. Urna duis convallis convallis tellus id interdum.'
          }
        </p>
      </ContentBox>
    </section>
  )
}

export default About
