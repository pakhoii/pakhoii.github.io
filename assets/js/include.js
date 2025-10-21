async function loadTemplate(selector, file,templateID) {
    // Select the templete based on its id
    const container = document.querySelector(selector)
    
    // Fetch the file content and change to string 
    const response = await fetch(file)
    const html = await response.text()

    // Create tempDiv to read the templete
    // tempDiv is now temporarily stored in the memory
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html.trim()

    // Extract exactly the templete with the id=templeteID
    const template = tempDiv.querySelector(`#${templateID}`);

    // if (!template) {
    //     console.error(`Template #${templateID} not found in ${file}`);
    //     return;
    // }
    
    // Clone the content and plug into the container
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);   

    // console.log("Loaded")
}