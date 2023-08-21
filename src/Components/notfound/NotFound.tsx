import React from "react";
import {NotFoundMessage, StatusCode, Message, ReturnButton} from './style'
import { Link } from "react-router-dom";

const NotFoundComponent = () => {

    return (
      <NotFoundMessage>
        <StatusCode>404</StatusCode>
        <Message>Oops! Página não encontrada.</Message>
        <Link to='/'><ReturnButton>Voltar para a página inicial</ReturnButton></Link>
      </NotFoundMessage>
    );
  };
  
  export default NotFoundComponent;