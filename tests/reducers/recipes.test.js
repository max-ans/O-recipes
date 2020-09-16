// on import la syntaxe chai
import { should } from 'chai';
import reducerRecipes from 'src/reducers/recipes';

// spécificité de le fonction should :
// il faut l'éxecuter un premier fois pour pouvoir l'utiliser
should();

// describe :
// ca decrit un bloc de test(on peut les imbriquer), 2 paramètre:
// - un texte qui decrit le bloc,
// - la callback qui permet d'exécuter les test pour ce bloc
describe('reducer for recipes', () => {
  // it décrit un cas de test (une ou plusieurs assertions), 2 paramètres:
  // - un texte qui décrit le cas de test
  // - la callbackqui permet d'exécuter les tests pour ce cas
  it('is a function', () => {
    // assertions
    reducerRecipes.should.be.a('function');
  });
});
