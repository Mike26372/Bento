import List from '../components/List/List';
import NewsFeed from '../components/NewsFeed/NewsFeed.js';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails';
import StickyNotes from '../components/StickyNotes/StickyNotes';
import Modal from '../components/Modal/Modal';
import LatLong from '../components/LatLong/LatLong';
import DefaultModule from '../components/DefaultModule/DefaultModule';
import PhotoPrompt from '../components/PhotoPrompt/PhotoPrompt';

var moduleList = {
  'List': List,
  'NewsFeed': NewsFeed,
  'Hacker News': NewsFeed,
  'Weather': WeatherDetails,
  'WeatherDetails': WeatherDetails,
  'StickyNotes': StickyNotes,
  'Sticky Note': StickyNotes,
  'LatLong': LatLong,
  'Clock': LatLong,
  'One Photo Per Day': PhotoPrompt
};

export default moduleList;