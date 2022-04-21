async function getData(){
    try {
        const response = await fetch(`https://full-stack-deployment-test.herokuapp.com/`);
        const data = await response.json();
        const {first_name, surname } = data;
        let firstNameOutput = document.createElement("h3");
        firstNameOutput.textContent = first_name + " " + surname;
        document.getElementById("output").appendChild(firstNameOutput);
        return data;
      } catch (err) {
        console.warn(err);
      }
}