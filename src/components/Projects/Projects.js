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
            <Card.Text className="text-justify">
              Classic board game created using JavaScript, HTML, and CSS as a browser-based game.
              All the pieces on the board is manipulated using DOM and stored in each cell element. All player moves are recorded on the side of the browser which can be referred to at all stages of the game.
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
            <Card.Text className="text-justify">
              MEN stack web application to post different climbing recommendations and allows for users to leave reviews.
              Google Oauth is implemented in this application for easy user access and retention of information.
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
            <Card.Text className="text-justify">
              An Instagram clone that allows for similar functionalities such as posting pictures for other users to see, ability to follow users of interest, liking and commenting on other users posts, and the feature to explore different images on the website using keywords.
              All images are stored using Amazon's AWS S3 and all images pulled onto the explore page is using the Unsplash API.
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
            <Card.Text className="text-justify">
            A solution to the needs of parents and healthcare individuals that are looking for swimming, aquatic leadership courses, or first aid classes. Aquapedia is a MERN stack web application that allows companies to post course details such as prices and location for all users to see.
            </Card.Text>
            <a href="https://aquapedia-toronto.herokuapp.com/" class="btn btn-primary btn-lg">Live Demo!</a>
          </Card.Body>
        </Card>
        </div>
      </div>  
    </div>
  )
}