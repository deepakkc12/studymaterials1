// adding divs in circle path.....................................

            // creating 60 div elements....................

            for(let i=0; i<60; i++){
                var ndiv=$('<div>').attr('id', `mark${i}`).attr('class','mark')
                $('.clock').append(ndiv)
            }
            //   adding more width and height to main divs ..............................
            var x=-5;
            for(let i=0;i<12;i++){
                x+=5;
                $(`#mark${x}`).css({
                    'width': '15px',
                    'height':' 4px',
                    'borderRadius':'5px'
                })
            }
               //  making the positions in circle path.......................
        
                    function cos(theta) {
                            return Math.cos(theta);
                        }
        
                    function sin(theta) {
                        return Math.sin(theta);
                        }
                        
                var deg=264;
                for(let i=0; i<60; i++){
                    deg+=6;
                    var rad = deg * Math.PI / 180;
                    x_axis=143+140*cos(rad);
                    y_axis=148+140*sin(rad);
                    $(`#mark${i}`).css({
                        'top':`${y_axis}px`,
                        'left':`${x_axis}px`,
                        'transform':`rotate(${deg}deg)`
                    })
                }
        //  finding the present time...................................

        var nowSec=(new Date).getSeconds();        
        var nowMinute=(new Date).getMinutes();
        var nowHour=(new Date).getHours();
        
        // making seconds hand rotate.............................
                var sec_position=nowSec*6-90;
               function second(){
                    sec_position+=6;
                    $('#minute').css({
                        'transform':`rotate(${sec_position}deg)`
                    })
               }
        // making minutes hand rotating..................................
               var min_position=nowMinute*6-90;
               function minute(){
                    min_position+=0.1;
                    $('#hr').css({
                        'transform': `rotate(${min_position}deg)`
                    })
               }
        // making hours hand rotating...................................
               var hr_position=nowHour*30-90+(30*(nowMinute/60));
               function hour(){
                hr_position+=0.5;
                $('.hour1').css({
                    'transform':`rotate(${hr_position}deg)`
                })
               }


              
        // calling all functions......................................
           $(function(){
                hour();
                second();
                minute();
                setInterval(second, 1000);
                setInterval(minute,1000);
                setInterval(hour,60000);
               });
