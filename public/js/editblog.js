const nickname = localStorage.getItem('nickname')

function onSubmit(form, e) {
    e.preventDefault();

    console.log(form.elements.image.files[0]);


    let sendData = new FormData();
    sendData.append("_id", form.elements._id.value)
    sendData.append("title", form.elements.title.value)
    sendData.append("description", form.elements.description.value)
    sendData.append("category", form.elements.category.value)
    sendData.append("image", form.elements.image.files[0])
    
    form.elements.tags.forEach(tag => {

        if(tag.checked) {
            sendData.append("tags[]", tag.value)
        }

    })

    axios({
        
        url: "/api/blogs/" + form.elements._id.value, 
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data: sendData
    
    }).then(res => {
        location.replace("/profile/" + nickname)
    })
}