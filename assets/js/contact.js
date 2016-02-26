$(function () {
    $('form[name="contact"]').submit(function () {
        $('.errors').remove();

        var type = $('label[for="quotation"]');
        var user = $('input[name="user"]');
        var mail = $('input[name="mail"]');
        var message = $('textarea[name="message"]');

        $.post(
            $(this).attr('action'),
            $(this).serialize(),
            function (data) {
                if (data.valid) {
                    $('form[name="contact"]').after('<p>Votre message a bien été envoyé.</p>');
                }
                else {
                    if (data.type) {
                        type.after(data.type);
                    }
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
