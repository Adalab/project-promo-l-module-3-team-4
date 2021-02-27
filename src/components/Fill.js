import React from "react";
import "../stylesheets/layout/form/_fill.scss";


function Fill (props){

 
    return (
      <div className="fill__box collapsable__content">
        <label className="fill__box--label name" htmlFor="Name">
          Nombre Completo
        </label>
        <input
          value ={props.name}
          onChange={props.handleText}
          className="fill__box--input js-input-name js-input-text"
          placeholder="Ej: Sally Jill"
          type="text"
          id="name"
          name="name"
          required
        />
        <label className="fill__box--label" htmlFor="job">
          Puesto
        </label>
        <input
          value ={props.job}
          onChange={props.handleText}
          className="fill__box--input job js-input-job js-input-text"
          placeholder="Ej: Front-end unicorn"
          type="text"
          id="job"
          name="job"
          required
        />
        <label className="fill__box--label imgLabel" htmlFor="photo">
          Imagen de perfil
        </label>
        <div className="addImage">
          <button
            className="js__profile-trigger fill__box--input buttonImg"
            type="button"
          >
            Añadir imagen
          </button>
          <input
            
            className="js__profile-upload-btn buttonInput"
            type="file"
            id="photo"
            name="photo"
            required
          />
          <div className="js__profile-preview preview" />
        </div>
        <label className="fill__box--label" htmlFor="email">
          Email
        </label>
        <input
          value ={props.email}
          onChange={props.handleText}
          className="fill__box--input js-input-email js-input-text"
          placeholder="Ej: sally-hill@gmail.com"
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label className="fill__box--label" htmlFor="phone">
          Teléfono
        </label>
        <input
          value ={props.phone}
          onChange={props.handleText}
          className="fill__box--input js-input-phone js-input-text"
          placeholder="Ej:+34 666666666"
          type="tel"
          id="phone"
          name="phone"
          pattern="^[0-9]{9}$"
          required
        />
        <label className="fill__box--label" htmlFor="linkedin">
          Linkedin
        </label>
        <input
          value ={props.linkedin}
          onChange={props.handleText}
          className="fill__box--input js-input-linkedin js-input-text"
          placeholder="Ej: linkedin.com/in/sally.hill"
          type="text"
          id="linkedin"
          name="linkedin"
        />
        <label className="fill__box--label" htmlFor="github">
          Github
        </label>
        <input
          value ={props.github}
          onChange={props.handleText}
          className="fill__box--input js-input-github js-input-text"
          placeholder="Ej: @sally-hill"
          type="text"
          id="github"
          name="github"
        />
      </div>
  );
  
}

export default Fill;
