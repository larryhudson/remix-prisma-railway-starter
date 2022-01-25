import { Form, useLoaderData, Link, useTransition, useLocation, redirect } from "remix"
import { db } from "~/utils/db.server"

export const loader = async () => {
    const people = await db.person.findMany()

    return {
        people
    }

}

export const action = async ({request}) => {
    const formData = await request.formData();
    console.log(formData)

    switch (request.method) {
        case 'POST':
            const name = formData.get('name')

            const created = await db.person.create({
                data: {
                    name
                }
            })

            return created

        case 'DELETE':
            const id = formData.get('id')
            const deleted = await db.person.delete({
                where: {
                    id
                }
            })
            return redirect('/people')
    }
}

export default function People() {
    const loaderData = useLoaderData()
    const people = loaderData?.people

    const transition = useTransition()
    const state = transition.state
    const creating = state === 'submitting'

    let location = useLocation()

    return <div>
        <header>
        <h1>People</h1>
        </header>
        <main>
            {people && (
                <ul>
                    {people.map(person => (
                        <li key={person.id}><Link to={`./${person.id}`}>{person.name}</Link></li>
                    ))}
                </ul>
            )}

        </main>

        <Form key={location.key} method="post">
            <input type="hidden" name="_action" value="create" />
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <button disabled={creating}>{creating ? 'Adding' : 'Add'}</button>
        </Form>
        
    </div>
}