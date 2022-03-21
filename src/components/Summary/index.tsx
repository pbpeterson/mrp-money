import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import totalImg from "../../assets/dollar.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entrada" />
        </header>
        <strong>R$11,224</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saída" />
        </header>
        <strong>- R$2,000</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$9,224</strong>
      </div>
    </Container>
  );
}
