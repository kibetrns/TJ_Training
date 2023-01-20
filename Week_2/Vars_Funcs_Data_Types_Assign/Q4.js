function addAPropertyToObject(publishedOnDateObject) {

   

    const obj = { 
        author: 'Suzanne Collins', 
        title:  'Mockingjay: The Final Book of The Hunger Games',  
        readingStatus: false
    } 
    try {
        obj.published_on = publishedOnDateObject
        console.log(obj)
    } catch (error) {
        console.error(error)
    }
}