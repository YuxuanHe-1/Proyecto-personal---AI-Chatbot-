export async function post(content){
    const response = await fetch("http://127.0.0:8083", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({"task_name":content})
    });
    return await response.json()
}