import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1173749645224361984/lln-OT8r_400x400.jpg"
          alt="Meow Mewo"
        />
        <div>
          <strong>Meow Meow</strong>
          <span>Mewtimeowtica</span>
        </div>
      </header>

      <p>
        Meemwo weiwqmed eqwoiej wqe owqiejd qwoie wqoed qwedqwe wq e.
        <br /> <br />
        Mewo meow? Mewiq ejdwq emiqweqmwi ewqe wqoe pwqked. T Erdwq.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
      <button></button>
    </article>
  );
};

export default TeacherItem;
