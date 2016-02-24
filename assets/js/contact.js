$(function () {
    $('form[name="contact"]').submit(function () {
        $('.errors').remove();

        var user = $(this).find(':text[name="user"]');
        var mail = $(this).find('input[name="mail"]');
        var message = $(this).find('textarea[name="message"]');

        $.post(
            $(this).attr('action'),
            $(this).serialize(),
            function (data) {
                if (data.valid) {
                    // If form ok
                }
                else {
                    if (data.user) {
                        user.after(data.user);
                    }
                    if (data.mail) {
                        mail.after(data.mail);
                    }
                    if (data.message) {
                        message.after(data.message);
                    }
                }
            }, 'json');

        return false;
    });
});
