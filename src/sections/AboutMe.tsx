import {
  CV_Eduardo,
  Divider01,
  arrow_forward,
  download_icon,
  moon,
  star,
} from "../assets/exports";
import ActionButton from "../components/ActionButton";

const AboutMe = () => {
  const years = new Date().getFullYear() - 2021;

  const downloadCV = () => {
    fetch(CV_Eduardo).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV Eduardo Casagrande.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="about"
      className="relative w-full bg-backgroundPrimary text-white "
    >
      <div className="flex w-full flex-wrap">
        {/* LEFT STAR DETAILS */}
        <div className="flex h-auto w-[30%] grow flex-col justify-center ">
          <div className="hidden flex-col px-2 py-12 md:flex lg:px-16 xxl:px-24">
            <img
              src={star}
              className="ml-11 max-w-[70px] self-start"
              alt="Estrela"
            />

            <img
              src={star}
              className="mt-12 hidden max-w-[72px] self-end xl:flex"
              alt="Estrela"
            />

            <img
              src={star}
              className="ml-6 mt-24 max-w-[32px] self-start"
              alt="Estrela"
            />

            <img
              src={star}
              className="mt-20 max-w-[34px] self-center"
              alt="Estrela"
            />

            <img
              src={star}
              className="mt-24 max-w-[21px] self-start "
              alt="Estrela"
            />

            <img
              src={star}
              className="mr-10 mt-10 hidden max-w-[30px] self-end xl:flex"
              alt="Estrela"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[90vw] grow flex-col items-center gap-14 pb-6 pt-12 md:w-[30%] ">
          <div className="flex flex-col text-center">
            <h1 className="text-4xl font-bold xs:text-5xl lg:text-7xl">
              Sobre mim
            </h1>
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              se quiser saber mais
            </h2>
          </div>

          <div className="flex max-w-[90vw] flex-col gap-6 text-center font-normal sm:max-w-xl">
            <p>
              Olá! Sou um estagiário de desenvolvimento web, focado em Frontend,
              construindo a parte visual de Websites e Aplicações Web mas sempre
              me aventurando pelo backend também! Dê uma olhada em alguns dos
              meus trabalhos na seção de{" "}
              <a href="#projects" className="font-bold text-primary">
                Projetos
              </a>
              !
            </p>

            <p>
              Adoro colaborar, ensinar e compartilhar um pouco do que aprendi ao
              longo dos meus {years} anos de experiência em Desenvolvimento Web,
              seja através de comunidades de devs ou até mesmo particularmente!
            </p>

            <div>
              <p>
                Me acompanhe também no{" "}
                <a
                  href="https://linkedin.com/in/educasagrande"
                  target="_blank"
                  className="font-bold text-primary"
                >
                  LinkedIn
                </a>{" "}
                e no{" "}
                <a
                  href="https://github.com/EduCsg"
                  target="_blank"
                  className="font-bold text-primary"
                >
                  GitHub
                </a>
                , onde sempre compartilho sobre Desenvolvimento Web e publico
                meus estudos e projetos!{" "}
              </p>

              <a
                href="https://github.com/educsg/Portfolio-V2"
                target="_blank"
                className="text-xs font-bold text-primary"
              >
                (inclusive esse aqui!)
              </a>
            </div>

            <p>
              Estou sempre aberto a novos desafios, onde eu possa contribuir,
              aprender e me desenvolver ainda mais! Caso tenha se interessado
              pelo meu conteúdo, é só me mandar uma mensagem clicando
              <a href="#contact" className="font-bold text-primary">
                {" "}
                aqui
              </a>
              !
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl font-semibold">Veja também meu CV!</h1>

            <div className="mt-2 flex flex-wrap justify-center gap-6">
              <div onClick={downloadCV}>
                <ActionButton
                  text="Baixar PDF"
                  icon={download_icon}
                  radius
                  color="primary"
                  externalLink
                  link="src/assets/documents/CV_Eduardo.pdf"
                />
              </div>

              <ActionButton
                text="Ver online"
                icon={arrow_forward}
                color="primary"
                link="https://www.figma.com/proto/gcIf4WKJTOYb8TixrWVyoD?page-id=0%3A1&type=design&node-id=0-1&t=NOe12ifK80pstnrT-0&scaling=min-zoom&starting-point-node-id=2%3A2"
                radius
                externalLink
              />
            </div>
          </div>
        </div>

        {/* RIGHT STAR AND MOON DETAILS */}
        <div className="flex h-auto w-[30%] grow flex-col justify-center ">
          <div className="hidden flex-col px-2 py-12 md:flex lg:px-8 xxl:px-20">
            <img
              src={star}
              className="mb-12 mr-8 max-w-[36px] self-end xl:mr-24"
              alt="Estrela"
            />

            <img
              src={star}
              className="ml-16 mt-6 hidden max-w-[58px] self-start xl:flex"
              alt="Estrela"
            />

            <img
              src={star}
              className="mt-40 max-w-[36px] self-start "
              alt="Estrela"
            />

            <img
              src={star}
              className="mr-0 mt-10 hidden max-w-[30px] self-end xl:mr-4 xl:flex"
              alt="Estrela"
            />

            <img
              src={moon}
              className="mr-20 mt-16 max-w-[130px] self-center"
              alt="Estrela"
            />
          </div>
        </div>
      </div>

      <img
        className="w-screen"
        src={Divider01}
        alt="Imagem divisória entre a seção de sobre mim e a seção de habilidades técnicas"
      />
    </section>
  );
};

export default AboutMe;
