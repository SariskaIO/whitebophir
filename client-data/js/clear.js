window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data! 
    if (event.origin.startsWith('https://meet.dev.sariska.io') || event.origin.startsWith('https://meet.sariska.io')) { 
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data); 
       let canvas  = document.getElementById("canvas")
       const context = canvas.getContext('2d');
       context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        // The data was NOT sent from your site! 
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return; 
    } 
}); 
