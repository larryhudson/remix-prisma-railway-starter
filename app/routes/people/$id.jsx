import { Form, useLoaderData, useTransition, Link, redirect, useActionData } from "remix"
import { db } from "~/utils/db.server"

export const loader = async ({params}) => {
    const person = await db.person.findUnique({where: {id: params.id}})

    return {
        person
    }

}

export const action = async ({request, params}) => {

    const formData = await request.formData();
    const description = formData.get('description')

    switch (request.method) {
        case 'DELETE':
            await db.person.delete({
                where: {
                    id: params.id
                }
            })
            return redirect('/people')
        case 'PATCH':
            await db.person.update({
                data: {
                    description
                },
                where: {
                    id: params.id
                }
            })
            return 'Updated description'
    }
    console.log(request.method)
    }

export default function People() {
    const loaderData = useLoaderData()
    const person = loaderData?.person
    
    const transition = useTransition()
    const method = transition.submission?.method
    const deleting = method === 'DELETE'
    const updating = method === 'PATCH'

    let message = useActionData()

    return <div>
        <header>
        <h1>{person.name}</h1>
        <p><Link to="/people">Back to people list</Link></p>
        </header>
        <main>

        <h2>Description</h2>

        <Form method="patch">

        <label>
            Description:<br />
            <textarea name="description" defaultValue={person.description}></textarea><br />
        </label>

        <button disabled={updating}>{updating ? 'Saving...' : 'Save'}</button>

        <span>{message ? message : '' }</span>

        </Form>

        <h2>Delete</h2>

        <Form method="delete">
            <button disabled={deleting}>{deleting ? 'Deleting...' : 'Delete'}</button>
        </Form>

        </main>
        
    </div>
}