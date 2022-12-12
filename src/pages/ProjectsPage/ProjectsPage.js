import { Link } from "react-router-dom";
import ProjectLink from "../../components/ProjectLink/ProjectLink";
import { useSelector } from "react-redux";
import s from './ProjectPage.module.scss';

export default function ProjectsPage() {
    const data = useSelector(state => state.data);

    const projects = data.map(project => (
        <Link to={`/${project.id}`} id={project.id} key={project.id} className={s.link}>
            <ProjectLink title={project.name}/>
        </Link>
    ))

    return  (
        <div className={s.container}>
           {projects}     
        </div>
    )
}