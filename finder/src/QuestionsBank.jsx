import daVinci from './images/daVinci.jpg'
import johannes from './images/johannes.jpg'
import picasso from './images/picasso.jpg'
import salvador from './images/salvador.jpg'
import vincent from './images/vincent.jpg'
 
const qBank = [
    {
        id: 1,
        img: daVinci,
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Johannes Vermeer"],
        answer: "Leonardo da Vinci",
    },
    {
        id: 2,
        img: johannes,
        options: ["Pablo Picasso", "Frida Kahlo", "Henri Matisse", "Johannes Vermeer"],
        answer: "Johannes Vermeer",
    },
    {
        id: 3,
        img: picasso,
        options: ["Georgia O'Keeffe", "Edward Hopper", "Pablo Picasso", "Paul Cézanne",],
        answer: "Pablo Picasso"
    },
    {
        id: 4,
        img: salvador,
        options: ["Rembrandt van Rijn", "Salvador Dalí", "Frida Kahlo", "Diego Rivera"],
        answer: "Salvador Dalí"
    },
    {
        id: 5,
        img: vincent,
        options: ["Jackson Pollock", "Leonardo da Vinci", "Vincent van Gogh", "Gustav Klimt"],
        answer: "Vincent van Gogh"
    },
]

export default qBank;