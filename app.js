let wrapper = document.querySelector('#wrapper')
const seasonNow = ['winter', 'spring', 'summer', 'autumn']
const element = wrapper


class Seasons
{
  constructor(currentSeason) {
    this.months = 12
    this.year = 2022
    this.seasonNow = currentSeason
    this.season = function () {
      alert(currentSeason + ' - прекрасное время года')
    }

    function wrapperBg() {
        if (currentSeason == seasonNow[0]) {
        element.classList.add('winterBg','wrapper')
      } else if (currentSeason == seasonNow[1]) {
        element.classList.add('springBg','wrapper')
      } else if (currentSeason == seasonNow[2]) {
        element.classList.add('summerBg','wrapper')
      } else if (currentSeason == seasonNow[3]) {
        element.classList.add('autumnBg','wrapper')
      }
      } 
    wrapperBg()
  }
}

const currentSeason = new Seasons(getRandomSeasonNow())

currentSeason.ThisSeason = function () {
  console.log(this)
}

currentSeason.ThisSeason()
currentSeason.season()

function getRandomSeasonNow() {
  return seasonNow[Math.floor(Math.random() * seasonNow.length)]
}