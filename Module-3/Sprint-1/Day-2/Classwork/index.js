function CreateData() {
    fetch("https://https://students-fdace-default-rtdb.asia-southeast1.firebasedatabase.app/students.json", {
        method: "POST",
        body: JSON.stringify({
            name: "John Doe",
            rollno: "1",
        })
    })
    .then((res) => res.json())
    .then((data) => console.log("Data is add", data));
}
function GetData() {

}
function UpdateData() {

}
function DeleteData() {
}
