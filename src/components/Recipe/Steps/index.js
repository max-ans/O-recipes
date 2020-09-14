import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

// je veux transformer chacun des éléments de steps en li

/*
https://fr.reactjs.org/docs/lists-and-keys.html#keys
https://fr.reactjs.org/docs/rendering-elements.html
key : prop spéciale qui permet à l'algorithme de réconciliation de React de
repérer chaque élément pour faire le diff entre le DOM virtuel et le DOM réel.
Nécessaire quand on a plusieurs éléments du même type qui sont frères (ici les li).
La valeur de key doit être unique et stable dans le temps => idéalement on utilise
un id, si on n'a pas d'id la valeur peut convenir, mais on n'utilise surtout pas
l'index d'un tableau
*/

const Steps = ({ steps }) => (
  <ol className="steps">
    {steps.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ol>
);

Steps.propTypes = {
  // tableau de chaîne de caractères
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
