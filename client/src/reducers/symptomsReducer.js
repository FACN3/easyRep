import { FETCH_SYMPTOMS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SYMPTOMS:
      const symptoms = {
        'Waste Burning': [
          'Bad smell in the streets',
          'Risk of fire',
          'Causing air pollution',
          'Causing difficulty in breathing',
          'Spreading chemicals that damages the environment and health'
        ],
        'Water Pollution': [
          'Sewage is overflooding',
          'Bad smells coming from sewage',
          "It's killing animals and/or making them sick",
          "It's causing diseases and viruses"
        ],
        'Noise Pollution': [
          'Causing headaches',
          'Loud construction noise even late at night',
          "Kids can't sleep because of noise",
          "Can't concentrate on what I am doing",
          "It's Making people shout",
          'Causing hearing loss',
          'Causing high stress level'
        ],
        'Waste Disposal': [
          'No room to park because of the garbage',
          'Not enough garbage collection',
          "It's Causing bad smell",
          "It's causing pollution"
        ],
        'Air Pollution': [
          'Can not breathe because of the dust',
          'Need to wear masks',
          'Getting dirty',
          'Eyes watering',
          'Bad smell in the air'
        ],
        'Bad Infrastructures': [
          'Roads are dangerous because of holes',
          'I got injured',
          'Pothole damanging tires and vehicles',
          'putting lives in danger'
        ]
      };

      return Object.values(symptoms[action.payload]);
    default:
      return state;
  }
};
