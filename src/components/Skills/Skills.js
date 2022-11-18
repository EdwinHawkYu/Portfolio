import Badge from "react-bootstrap/Badge";

export default function Skills(){
  return(
    <div className="Skills">
      <h2>Skills</h2>
      <div className="container">
        <Badge className="skill-badge m-1">JavaScript</Badge>
        <Badge className="skill-badge m-1">HTML</Badge>
        <Badge className="skill-badge m-1">CSS</Badge>
        <Badge className="skill-badge m-1">React</Badge>
        <Badge className="skill-badge m-1">Django</Badge>
        <Badge className="skill-badge m-1">MongoDB</Badge>
        <Badge className="skill-badge m-1">PostgreSQL</Badge>
        <br/>
        <Badge className="skill-badge m-1">Express.js</Badge>
        <Badge className="skill-badge m-1">Node.js</Badge>
        <Badge className="skill-badge m-1">Bootstrap</Badge>
        <Badge className="skill-badge m-1">JSON</Badge>
        <Badge className="skill-badge m-1">Python</Badge>
        <Badge className="skill-badge m-1">Git</Badge>
        <Badge className="skill-badge m-1">GitHub</Badge>
      </div>
    </div>
  )
}