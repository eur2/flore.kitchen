import React, { useState } from 'react';
export default () => {
  const [isToggledOn, setToggle] = useState(false);
  const handleClick = () => setToggle(!isToggledOn);
  return (
    <div className="flex jc-center wrap w100">
      <button onClick={handleClick}>
        Livraison de repas {isToggledOn ? <span>Zenchef &times;</span> : null}
      </button>
      {isToggledOn ? (
        <div className="flex w100 wrap center">
          <a
            href="https://bookings.zenchef.com/shop?rid=354054"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3>La formule végétale 22€</h3>
              <h4>
                Rhubarbe rôtie,
                <br /> crème coco-cardamome,
                <br /> biscuit à l’avoine
              </h4>
              <h3>La formule omnivore 24€</h3>
              <h4>
                Rhubarbe rôtie,
                <br /> crème coco-cardamome,
                <br /> biscuit à l’avoine
              </h4>
              <p>
                Écrivez à commandesflore@gmail.com ou téléphonez au 0768686501
                pour donner toutes votre adresse, téléphone et infos nécessaires
                à votre livraison (allergies, demande spécifiques...) Votre
                addition comprend une participation de 1€ reversée à
                l'association Ernest qui finance l'aide alimentaire à Paris
              </p>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};
