export default async function UserList()
{
    const response = await fetch("http://127.0.0.1:8000/api/divisions");

    return response.json();
}