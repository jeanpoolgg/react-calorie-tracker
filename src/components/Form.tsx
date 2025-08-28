import { useState, type ChangeEvent } from "react"
import { categories } from "../data/categories"
import type { Activity, Category } from "../types"

export const Form = () => {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    });

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.value);
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submit...');
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow p-10 rounded-lg" >
            <div className="grid grid-cols-1 gap-3" >
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select value={activity.category} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg w-full" id="category">
                    {
                        categories.map((category: Category) => (
                            <option key={category.id} value={category.id} >{category.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input value={activity.name} onChange={handleChange} type="text" id="name" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta" />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorías:</label>
                <input value={activity.calories} onChange={handleChange} type="number" id="calories" className="border border-slate-300 p-2 rounded-lg" placeholder="Calorías. ej. 300 o 500" />
            </div>

            <input disabled={!isValidActivity()} type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold disabled:opacity-10 uppercase text-white cursor-pointer" value={activity.category === 1? 'Guardar comida' : 'Guardar ejercicio'}  />
        </form>
    )
}
