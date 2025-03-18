import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Importar as folhas de estilo
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles.css';
    document.head.appendChild(link);

    // Importar as fontes
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    // Adicionar o script
    const script = document.createElement('script');
    script.src = '/script.js';
    script.defer = true;
    document.body.appendChild(script);

    // Limpeza quando o componente for desmontado
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <div className="logo-icon"></div>
                    <h1>Trilha de Certificações</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#desenvolver">Desenvolvedor</a></li>
                        <li><a href="#administrador">Administrador</a></li>
                        <li><a href="#arquiteto">Arquiteto</a></li>
                        <li><a href="#dados">Dados & IA</a></li>
                        <li><a href="#outros">Outras Trilhas</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="badge">Certificações</span>
                    <h2>Sua jornada de aprendizado começa aqui</h2>
                    <p>Acompanhe as trilhas de certificação e avance em sua carreira profissional</p>
                    <a href="#desenvolver" className="btn primary">Começar agora</a>
                </div>
                <div className="hero-image">
                    <div className="hero-image-inner"></div>
                </div>
            </div>
        </div>
      </section>

      <main className="certification-path">
        <div className="path-line" id="path-progress"></div>

        <section id="desenvolver" className="path-section">
            <div className="container">
                <div className="path-header">
                    <span className="badge">Trilha 1</span>
                    <h2>Desenvolvedor</h2>
                    <p>Crie aplicativos e soluções utilizando tecnologias da Microsoft</p>
                </div>

                <div className="certification-list">
                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-900</h3>
                            <p>Azure Fundamentals</p>
                            <p className="cert-description">Introdução ao Azure com conceitos de nuvem e serviços básicos</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon power"></div>
                        <div className="cert-content">
                            <h3>PL-900</h3>
                            <p>Power Platform Fundamentals</p>
                            <p className="cert-description">Noções básicas sobre Power Platform</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-204</h3>
                            <p>Azure Developer Associate</p>
                            <p className="cert-description">Desenvolvimento na nuvem</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon power"></div>
                        <div className="cert-content">
                            <h3>PL-400</h3>
                            <p>Power Platform Developer Associate</p>
                            <p className="cert-description">Criação de apps com Power Platform</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon ms365"></div>
                        <div className="cert-content">
                            <h3>MS-600</h3>
                            <p>Microsoft 365 Developer Associate</p>
                            <p className="cert-description">Desenvolvimento para Microsoft 365</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="administrador" className="path-section">
            <div className="container">
                <div className="path-header">
                    <span className="badge">Trilha 2</span>
                    <h2>Administrador</h2>
                    <p>Gerencie infraestrutura de TI, incluindo nuvem e soluções Microsoft</p>
                </div>

                <div className="certification-list">
                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-900</h3>
                            <p>Azure Fundamentals</p>
                            <p className="cert-description">Introdução ao Azure com conceitos de nuvem</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon ms365"></div>
                        <div className="cert-content">
                            <h3>MS-900</h3>
                            <p>Microsoft 365 Fundamentals</p>
                            <p className="cert-description">Introdução ao Microsoft 365</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-104</h3>
                            <p>Azure Administrator Associate</p>
                            <p className="cert-description">Administração do Azure</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon windows"></div>
                        <div className="cert-content">
                            <h3>MD-100 + MD-101</h3>
                            <p>Modern Desktop Administrator Associate</p>
                            <p className="cert-description">Gerenciamento de dispositivos Windows</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon teams"></div>
                        <div className="cert-content">
                            <h3>MS-700</h3>
                            <p>Teams Administrator Associate</p>
                            <p className="cert-description">Administração do Microsoft Teams</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="arquiteto" className="path-section">
            <div className="container">
                <div className="path-header">
                    <span className="badge">Trilha 3</span>
                    <h2>Arquiteto</h2>
                    <p>Construa soluções de TI complexas e escaláveis</p>
                </div>

                <div className="certification-list">
                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-900</h3>
                            <p>Azure Fundamentals</p>
                            <p className="cert-description">Introdução ao Azure com conceitos de nuvem</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon ms365"></div>
                        <div className="cert-content">
                            <h3>MS-900</h3>
                            <p>Microsoft 365 Fundamentals</p>
                            <p className="cert-description">Introdução ao Microsoft 365</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-303</h3>
                            <p>Azure Architect Associate</p>
                            <p className="cert-description">Arquitetura do Azure</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon windows"></div>
                        <div className="cert-content">
                            <h3>MD-100 + MD-101</h3>
                            <p>Modern Desktop Administrator Associate</p>
                            <p className="cert-description">Gerenciamento de dispositivos Windows</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon teams"></div>
                        <div className="cert-content">
                            <h3>MS-700</h3>
                            <p>Teams Administrator Associate</p>
                            <p className="cert-description">Administração do Microsoft Teams</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="dados" className="path-section">
            <div className="container">
                <div className="path-header">
                    <span className="badge">Trilha 4</span>
                    <h2>Dados & IA</h2>
                    <p>Desenvolva soluções de dados e inteligência artificial</p>
                </div>

                <div className="certification-list">
                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-900</h3>
                            <p>Azure Fundamentals</p>
                            <p className="cert-description">Introdução ao Azure com conceitos de nuvem</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon ms365"></div>
                        <div className="cert-content">
                            <h3>MS-900</h3>
                            <p>Microsoft 365 Fundamentals</p>
                            <p className="cert-description">Introdução ao Microsoft 365</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-303</h3>
                            <p>Azure Architect Associate</p>
                            <p className="cert-description">Arquitetura do Azure</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon windows"></div>
                        <div className="cert-content">
                            <h3>MD-100 + MD-101</h3>
                            <p>Modern Desktop Administrator Associate</p>
                            <p className="cert-description">Gerenciamento de dispositivos Windows</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon teams"></div>
                        <div className="cert-content">
                            <h3>MS-700</h3>
                            <p>Teams Administrator Associate</p>
                            <p className="cert-description">Administração do Microsoft Teams</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="outros" className="path-section">
            <div className="container">
                <div className="path-header">
                    <span className="badge">Trilha 5</span>
                    <h2>Outras Trilhas</h2>
                    <p>Explore outras áreas de certificação</p>
                </div>

                <div className="certification-list">
                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-900</h3>
                            <p>Azure Fundamentals</p>
                            <p className="cert-description">Introdução ao Azure com conceitos de nuvem</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon ms365"></div>
                        <div className="cert-content">
                            <h3>MS-900</h3>
                            <p>Microsoft 365 Fundamentals</p>
                            <p className="cert-description">Introdução ao Microsoft 365</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon azure"></div>
                        <div className="cert-content">
                            <h3>AZ-303</h3>
                            <p>Azure Architect Associate</p>
                            <p className="cert-description">Arquitetura do Azure</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon windows"></div>
                        <div className="cert-content">
                            <h3>MD-100 + MD-101</h3>
                            <p>Modern Desktop Administrator Associate</p>
                            <p className="cert-description">Gerenciamento de dispositivos Windows</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>

                    <div className="certification-item" data-aos="fade-up">
                        <div className="cert-icon teams"></div>
                        <div className="cert-content">
                            <h3>MS-700</h3>
                            <p>Teams Administrator Associate</p>
                            <p className="cert-description">Administração do Microsoft Teams</p>
                            <a href="#" className="btn secondary">Ver cursos dessa certificação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>Pronto para começar sua jornada?</h2>
                    <p>Explore as trilhas de certificação e avance na sua carreira profissional</p>
                    <a href="#desenvolver" className="btn primary">Iniciar agora</a>
                </div>
            </div>
        </section>
      </main>

      <footer>
          <div className="container">
              <div className="footer-content">
                  <div className="footer-logo">
                      <div className="logo-icon"></div>
                      <h2>Trilha de Certificações</h2>
                  </div>
                  <div className="footer-links">
                      <div className="footer-column">
                          <h3>Trilhas</h3>
                          <ul>
                              <li><a href="#desenvolver">Desenvolvedor</a></li>
                              <li><a href="#administrador">Administrador</a></li>
                              <li><a href="#arquiteto">Arquiteto</a></li>
                              <li><a href="#dados">Dados & IA</a></li>
                              <li><a href="#outros">Outras Trilhas</a></li>
                          </ul>
                      </div>
                      <div className="footer-column">
                          <h3>Recursos</h3>
                          <ul>
                              <li><a href="#">Centro de Treinamento</a></li>
                              <li><a href="#">Guias de Estudo</a></li>
                              <li><a href="#">Simulados</a></li>
                              <li><a href="#">Comunidade</a></li>
                          </ul>
                      </div>
                      <div className="footer-column">
                          <h3>Contato</h3>
                          <ul>
                              <li><a href="#">Suporte</a></li>
                              <li><a href="#">Feedback</a></li>
                              <li><a href="#">Perguntas Frequentes</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <p>&copy; 2023 Certificações. Todos os direitos reservados.</p>
              </div>
          </div>
      </footer>
    </>
  );
};

export default Index;
