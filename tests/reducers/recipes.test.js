// on import la syntaxe chai
import { should } from 'chai';
import reducerRecipes from 'src/reducers/recipes';
import { saveRecipes } from 'src/actions/recipes';

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
  it('returns initial state', () => {
    // on veut faire une égalité en profondeur (vérifier chaque propriété) :
    // cad : on veut une égélité parfaite entre:
    // - l'objet qui est retourné par l'execution de reducerRecipes
    // - l'objet fourni en argument du equal
    const initialState = {
      recipes: [],
      loading: true,
    };
    reducerRecipes().should.deep.equal(initialState);
  });

  it('handles action SAVE_RECIPES', () => {
    // si on appelle la fonction avec une action SAVE_RECIPES, on
    // récupère un objet pour pour lequel loading est passé à false et
    // recipes est devenu action.recipes

    // on va avoir besoin de :
    // - une action SAVE_RECIPES
    // - un objet qui correspond au state avant l'éxecution
    // - un objet qui contient la valeur qu'on devrait avoiraprès la fonction

    // on déclare un faux state actuel: on mets les valeurs que l'on veut,
    // mais il faut que ce soit différent de résultat attendu après l'execution
    // du reducer
    const stateBefore = {
      recipes: [],
      loading: true,
    };

    // on va déclarer des fausses recette pour le payload de l'action
    const recipesData = [
      {
        id: 1,
        title: 'cébon',
      },
      {
        id: 2,
        title: 'cépobon',
      },
    ];

    // on crée un action en utilisant le action creator
    const action = saveRecipes(recipesData);

    // on prépare le résultat attendu
    const expectedResult = {
      recipes: recipesData,
      loading: false,
    };

    // on appelle le reducer en fournissant state actuel et action, et on
    // vérifie que le résultat est bien celui attendu
    reducerRecipes(stateBefore, action).should.deep.equal(expectedResult);
  });
});
