import React from 'react';

// shallow ca permet de faire un rendu d'un composant,
// sans faire le rendu des sous composants
import { shallow } from 'enzyme';

import { expect } from 'chai';

import RecipeSmall from 'src/components/Home/RecipeSmall';

// on importe Link car on en a besoin pour le
// test de RecipeSmall
import { Link } from 'react-router-dom';

// only signifie seulement ce test a effectuer.
describe.only('<RecipeSmall />', () => {
  it('Uses information given as props', () => {
    const testTitle = 'Pizza au fromage';
    const slug = 'pizza-au-fromage';

    const wrapper = shallow(
      <RecipeSmall
        title={testTitle}
        thumbnail="img01.png"
        difficulty="facile"
      />,
    );

    // vérifier que ma props title est utilisé pour le H2
    // récuperer les H2
    const elementH2 = wrapper.find('h2');
    // je vais vérifié que je n'ai qu'un élément h2 par component
    expect(elementH2).to.have.lengthOf(1);

    // je vais vouloir vérifier le contenu
    expect(elementH2.text()).to.equal(testTitle);

    // Vérifier que la props title est utilisé pour le
    // le composant <Link />
    // rechercher les instances du composant Link
    const linkComponents = wrapper.find(Link);
    expect(linkComponents).to.have.lengthOf(1);

    // vérification de la props "to" qui vaut normalement
    // "recipe/ slugger(du titre de la rectte)"
    expect(linkComponents.props()).to.have.property('to', `/recipe/${slug}`);
  });
});
