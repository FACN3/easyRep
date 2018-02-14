import airPollution from '../icons/1.png';
import waterPollution from '../icons/2.png';
import wasteDisposal from '../icons/3.png';
import badInfra from '../icons/4.png';

export default function() {
  return [
    {
      name: 'Waste Disposal',
      icon: wasteDisposal,
      alt: 'Waste Burning icon'
    },
    {
      name: 'Air Pollution',
      icon: airPollution,
      alt: 'Air Pollution icon'
    },
    {
      name: 'Water Pollution',
      icon: waterPollution,
      alt: 'Water Pollution icon'
    },
    {
      name: 'Bad Infrastructures',
      icon: badInfra,
      alt: 'Bad Infrastructures icon'
    },
    {
      name: 'Waste Burning',
      icon: '',
      alt: 'Waste Burning icon'
    },
    {
      name: 'Noise',
      icon: '',
      alt: 'Noise icon'
    }
  ];
}
