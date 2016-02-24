$(function () {
    $('form[name="contact"]').submit(function () {
        $('.errors').remove();

        var user = $(this).find(':text[name="user"]');
        var mail = $(this).find(':password[name="mail"]');
        var message = $(this).find('textarea[name="message"]');

        $.post(
            $(this).attr('action'),
            $(this).serialize(),
            function (data) {
                if (data.valid) {
                    // If form ok
                }
                else {
                    // If not
                }
            }, 'json');

        return false;
    });
});
