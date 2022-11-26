import s from './_ProjectLink.module.scss';


export default function ProjectLink({title}) {
    return (
        <div className={s.block}>
            <p className={s.text}>{title}</p>
        </div>
    )
}