seajs.use(['$', 'confirmbox'], function($, Confirmbox) {
    
    $(function() {

        // your js code here
        // such as
        new Confirmbox({
            trigger: '#test',
            content: 'opened a dialog.'
        });

    });

});
