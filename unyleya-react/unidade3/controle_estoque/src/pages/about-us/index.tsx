import Header from "../../components/header";
import './style.css';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="container-about">
        <h1>Nossa História</h1>
        <p>
          A <strong>UnyProducts</strong> nasceu de um sonho compartilhado por um grupo de apaixonados por tecnologia. Percebemos uma lacuna no mercado: a dificuldade de encontrar produtos eletrônicos de alta qualidade, com preços justos e, acima de tudo, com informações claras e transparentes. Foi então que decidimos criar uma plataforma onde a experiência de compra fosse simples, segura e informativa.
        </p>

        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é conectar você com o que há de mais inovador no mundo da tecnologia. Buscamos constantemente os melhores fornecedores e as últimas novidades, garantindo que você tenha acesso a um catálogo diversificado e atualizado. Queremos ser mais do que apenas uma loja virtual; queremos ser seu guia no universo tecnológico, oferecendo produtos que realmente fazem a diferença na sua vida.
        </p>

        <h2>Nossos Valores</h2>
        <ul>
          <li><strong>Inovação:</strong> Estamos sempre à frente, buscando as tendências e tecnologias que moldam o futuro.</li>
          <li><strong>Transparência:</strong> Acreditamos que a honestidade é a base de qualquer relação. Todas as informações sobre nossos produtos são detalhadas e acessíveis.</li>
          <li><strong>Qualidade:</strong> Trabalhamos apenas com fornecedores confiáveis e produtos que passam por rigorosos testes de qualidade.</li>
          <li><strong>Foco no Cliente:</strong> Sua satisfação é nossa prioridade. Oferecemos suporte rápido e eficiente para garantir a melhor experiência de compra.</li>
        </ul>

        <p>
          Junte-se a nós nesta jornada e descubra um novo jeito de comprar tecnologia.
        </p>
      </div>
    </div>
  )
};

export default AboutUs;