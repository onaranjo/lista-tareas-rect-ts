import { Tarea } from "./Tarea"

type Props = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: Props) => {
    return (
        <div className="taskList">
            {
                listaTareas.map((t, i) => (
                    <Tarea key={i} tarea={t} borrarTarea={() => borrarTarea(i)}></Tarea>
                )
                )
            }
        </div>
    )
}