import {AboutSectionWrapper, DoubtsFormSection, HeroContent, HeroWrapper, RegisterSectionWrapper, SectionCardsWrapper, SectionTitle} from "./style";
import Header from "../../Components/header/Header";
import Button from "../../Components/buttonHeader/Button";

import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

import studentsImage from "../../assets/students-img.png";
import codeGirl from "../../assets/codegirl.png";

interface iFormContact {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const {
    handleSubmit,
    reset,
    register,
    formState: {errors},
  } = useForm<iFormContact>();

  function onSubmit(data: iFormContact) {
    console.log(data);
    toast.success("Formulário enviado com sucesso!", {
      position: "top-center",
      theme: "dark",
    });
    reset();
  }

  return (
    <>
      <Header />
      <HeroWrapper>
        <HeroContent>
          <h1>
            DBCursos<span>Tech</span>
          </h1>
          <div>
            <p>
              O caminho <span>inteligente</span>
            </p>
            <p>
              para a sua <span>excelência</span> em TI!
            </p>
          </div>
        </HeroContent>
      </HeroWrapper>
      <SectionCardsWrapper>
        <SectionTitle>Diferenciais da DBCursos Tech</SectionTitle>
      </SectionCardsWrapper>
      <RegisterSectionWrapper>
        <img src={studentsImage} alt="Imagem ilustrativa de 5 pessoas se formando em um curso" />
        <div>
          <h3>É fácil começar a aprender</h3>
          <p>Com a DBCursosTech, você aprende do melhor jeito. Faça já sua matrícula!</p>
          <Button>Inscreva-se</Button>
        </div>
      </RegisterSectionWrapper>
      <AboutSectionWrapper>
        <SectionTitle>Sobre a instituição</SectionTitle>
        <div className="about-container">
          <div className="about-content">
            <h3>Sobre a DBCursos Tech</h3>
            <p>
              Bem-vindo à DBCursos Tech, sua porta de entrada para o mundo da educação e inovação tecnológica. Somos mais do que apenas uma
              instituição de ensino - somos apaixonados por capacitar indivíduos para que alcancem o sucesso em um cenário digital em constante
              evolução.
            </p>
          </div>
          <div className="about-content">
            <h3>Nossa Missão</h3>
            <p>
              Na DBCursos Tech, nossa missão é simples, mas poderosa: fornecer a você as habilidades, conhecimentos e confiança necessários para
              prosperar na era digital. Acreditamos que a tecnologia pode transformar vidas e impulsionar carreiras, e estamos empenhados em tornar
              essa transformação acessível a todos.
            </p>
          </div>
          <div className="about-content">
            <h3>Excelência em Educação</h3>
            <p>
              Nossos cursos são cuidadosamente elaborados por especialistas do setor e instrutores altamente qualificados, garantindo que você receba
              uma educação de alta qualidade e relevante. Independentemente de você ser um iniciante curioso ou um profissional em busca de
              atualização, nossos programas foram projetados para atender às suas necessidades.
            </p>
          </div>
        </div>
      </AboutSectionWrapper>
      <DoubtsFormSection>
        <div>
          <img
            src={codeGirl}
            alt="Imagem ilustrativa de uma mulher usando o computador, com alguns quadros referentes a computação e linguagens de texto, esilo e programação"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <SectionTitle>Ficou com alguma dúvida?</SectionTitle>
            <input type="text" placeholder="Seu nome" id="name" {...register("name", {required: true})} />
            <input type="email" placeholder="Seu email" id="email" {...register("email", {required: true})} />
            <textarea placeholder="Mensagem" id="message" {...register("message", {required: true})} />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </DoubtsFormSection>
    </>
  );
}
