import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  const isMobile = window.innerWidth <= 600; // check if the device is a smartphone or tablet

  return (
    <>
      {
        props.features.map((feature, key) =>
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div>
                <img src={feature.img} alt="" className="img-fluid d-block mx-auto" width='350px'/>
              </div>
            </Col>
            {
              !isMobile && ( // only render the title and description if the device is not a smartphone or tablet
                <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
                  <div>
                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                  </div>
                </Col>
              )
            }
          </Row>
        )
      }
    </>
  );
}

const Feature = () => {
const features = [
    {id : 1, img : "/assets/Medikamentwahl.png", title : "Auswahl des Medikaments", desc : "Wählen Sie ein Medikament aus dem Drop-Down Menu, oder geben Sie die Werte einfach selber ein"},
    {id : 4, img : "/assets/Hwz.png", title : "Halbwertszeit", desc : "Wählen Sie Halbwertszeit in Stunden aus oder nutzen Sie automatische Befüllung"},
    {id : 1, img : "/assets/Verabreichungsintro.png", title : "Verabreichung", desc : "In welchen Abständen verabreichen Sie die Medikation?"},
	{id : 4, img : "/assets/Konzentration.png", title : "Gemessene Konzentration", desc : "Wie hoch war die Konzentration im Blut ('Spiegel') zum Zeitpunkt der Messung?"},
	{id : 1, img : "/assets/Zeiten.png", title : "Eintragen der Daten", desc : "Tragen Sie die Zeiten ein. Achten Sie darauf, dass die Chronologie gewahrt bleibt!"}
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Funktionsweise</span></h3>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;