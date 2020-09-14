import React from 'react';
// validation du type de chaque prop : si la valeur ne correspond pas à ce qui est
// attendu, il y a un warning dans la console
// https://fr.reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';


// import du style
import './title.scss';

// Sass : CSS avec des superpouvoirs
// https://sass-lang.com/guide

// const Title = () => {
//   return (
//     <div>
//       Composant Title
//     </div>
//   );
// };

// une seule instruction qui est un return : je peux omettre le return et {}
// const Title = () => (
//   <div>
//     Composant Title
//   </div>
// );

const Title = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="title">
    <img
      className="title-image"
      alt=""
      src={thumbnail}
    />
    <div className="title-content">
      <h1 className="h1">{title}</h1>
      <p className="info">{author} - {difficulty}</p>
    </div>
  </header>
);

Title.propTypes = {
  // la valeur fournie pour la prop "title" doit être une chaîne de caractères, et
  // elle est obligatoire
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Title;
