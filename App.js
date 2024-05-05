import './App.css'
import Welcome from './components/BannerCardItem/index.js'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
    padding: 'pd',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
    padding: 'pd',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
    padding: 'pd',
  },
]

const App = () => (
  <div className="container">
    <ul>
      {bannerCardsList.map(each => (
        <Welcome details={each} key={each.id} />
      ))}
    </ul>
  </div>
)

export default App
