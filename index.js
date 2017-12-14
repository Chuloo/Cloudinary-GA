var cl = cloudinary.Cloudinary.new({cloud_name:'chuloo', secure:true})

//instantiate the video player
 var myPlayer = cl.videoPlayer('cl-vp',{
     loop:true,
     controls:true,
     autoplay:true,
     analytics:true
 })

 myPlayer.source('merry-christmas', {info:{ title: 'Little Drummer Boy', subtitle:'Pentatonix'}})
