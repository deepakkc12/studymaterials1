// making the input field null while focusing........................

    $('#list_entered').focus(function(){
        $('#list_entered').val("")
    })

// adding tasks with in a div consist of a custom checkbox and a delete button................

    $('#add').click(function(){
        var task_box="<div class='list'>" +
                        "<div class='contents'>" +
                        "<div class='checkbox'><span>&#x2713;</span></div>" +
                        "<label class='to_do'></label>" +
                        "</div>" +
                        "<div class='delete'>" +
                        "<div class='cross one'></div>" +
                        "<div class='cross two'></div>" +
                        "</div>" +
                        "</div>";
        var task=$('#list_entered').val();
        if(task!=='Enter your task....'  && task!==""){
            $('#whole_list').append(task_box)
            var lastList = $('#whole_list').children('.list').last();
            lastList.find('label').text(task);
        };  
        $('#list_entered').val("Enter your task....") 
    })

// making the check box with a tick sign and adding a line through on the label..................

    $('#whole_list').on('click','.checkbox',function(){
        $(this).find('span').toggle()
        if ($(this).find('span').is(':visible')) {
        $(this).parent().find('label').addClass('line');
    } else {
        $(this).parent().find('label').removeClass('line');
    }
    });

// making the delete button functioning........................

    $('#whole_list').on('click', '.delete', function() {
         $(this).closest('.list').remove();
    });