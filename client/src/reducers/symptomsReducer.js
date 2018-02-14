import { FETCH_SYMPTOMS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SYMPTOMS:
      const symptoms = {
        'Waste Burning': ['Bad smell in the streets', 'Risk of fire'],
        'Water Pollution': [
          'Sewage is overflooding',
          'Bad smells coming from sewage'
        ],
        Noise: [
          'Loud construction noise even late at night',
          "Kids can't sleep because of noise"
        ],
        'Waste Disposal': [
          'No room to park because of the garbage',
          'Not enough garbage collection'
        ],
        'Air Pollution': [
          'Can not breathe because of the dust',
          'Need to wear masks'
        ],
        'Bad Infrastructures': [
          'Roads are dangerous because of holes',
          'I got injured'
        ]
      };

      return Object.values(symptoms[action.payload]);
    default:
      return state;
  }
};
