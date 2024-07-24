import project1img from "../../assets/guitartunerimg.png"
import project2img from "../../assets/STmanageappimg.png"
import project3img from "../../assets/BMHimg.png"

const projects = [
  {
    href: 'https://github.com/AndreaA33/Guitar-tuning-software',
    className: 'project1',
    imgSrc: project1img,
    title: 'Guitar tuning project',
    description: 'A guitar tuner built using python and several libraries such as blablabla',
    languages: ['Python']
  },
  {
    href: 'https://github.com/AndreaA33/Screen-Time-Management-App',
    className: 'project2',
    imgSrc: project2img,
    title: 'Screen time management app',
    description: 'An iOS app designed to help you manage and take control of your family\'s screen time, by allowing them to make more mindful and productive use of your devices',
    languages: ['React Native', 'JavaScript', 'Expo Go']
  },
  {
    href: 'https://github.com/AndreaA33/Birmingham-Motor-Hub',
    className: 'project1',
    imgSrc: project3img,
    title: 'Birmingham Motor Hub',
    description: 'A motor hub built using TypeScript and CSS',
    languages: ['TypeScript', 'CSS']
  }
];

export default projects;