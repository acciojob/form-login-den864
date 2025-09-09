function getFormvalue(event) {
    //Write your code here
    event.preventDefault();

    const form=document.getElementById("form1");
    const data=new FormData(form);

    const fname=data.get("fname").trim();
    const lname=data.get("lname").trim();

    if(!fname || !lname) return;

    alert(`${fname} ${lname}`);
}

