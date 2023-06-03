"use client"


export default function OnSubmit() {

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(event.target.A.value)
        console.log(event.target.B.value)

        const result = await SUM(event.target.A.value, event.target.B.value)
        console.log(result)
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <input type="number" placeholder="A" name="A" />
                <input type="number" placeholder="B" name="B" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


async function SUM(A, B) {
    const response = await fetch('./calculation',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ A, B })
        })
        console.log(response);
    const result = await response.json()
    return result

}