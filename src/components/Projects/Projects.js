import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './Projects.css'

export default function Projects(){
  return(
    <div className="projects">
      <h2>Projects</h2>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
        <Card className="shadow m-2" style={{ width: '24rem' }}>
          <Card.Img variant="top" src="https://www.chess.com/bundles/web/images/web/board-puzzles.4a54c49f.png" />
          <Card.Body>
            <Card.Title>
              Chess
            </Card.Title>
            <Card.Text>
              Chess Text
            </Card.Text>
            <a href="https://edwinhawkyu.github.io/Chess/" class="btn btn-primary btn-lg">Live Demo!</a>
          </Card.Body>
        </Card> 
        </div>

        <div className="d-flex justify-content-center">
        <Card className="shadow m-2" style={{ width: '24rem' }}>
          <Card.Img variant="top" src="https://imgur.com/0GALaAx.png" />
          <Card.Body>
            <Card.Title>
              Boulder Here!
            </Card.Title>
            <Card.Text>
              Boulder Here! Text
            </Card.Text>
            <a href="https://boulder-here.herokuapp.com/" class="btn btn-primary btn-lg">Live Demo!</a>
          </Card.Body>
        </Card>        
        </div>

        <div className="d-flex justify-content-center">
        <Card className="shadow m-2" style={{ width: '24rem' }}>
          <Card.Img variant="top" src="https://imgur.com/WjN6Mwh.png" />
          <Card.Body>
            <Card.Title>
              Pictogram
            </Card.Title>
            <Card.Text>
              Pictogram Text
            </Card.Text>
            <a href="https://pictogram-webapp.herokuapp.com/" class="btn btn-primary btn-lg">Live Demo!</a>
          </Card.Body>
        </Card>
        </div>

        <div className="d-flex justify-content-center">
        <Card className="shadow m-2" style={{ width: '24rem' }}>
          <Card.Img variant="top" src="https://imgur.com/ddTB927.png" />
          <Card.Body>
            <Card.Title>
              Aquapedia
            </Card.Title>
            <Card.Text>
              Aquapedia Text
            </Card.Text>
            <a href="https://aquapedia-toronto.herokuapp.com/" class="btn btn-primary btn-lg">Live Demo!</a>
          </Card.Body>
        </Card>
        </div>
      </div>  
    </div>
  )
}