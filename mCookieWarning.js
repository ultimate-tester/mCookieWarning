(function ($) {
    $.mCookieWarning = function (options) {
        var settings = $.extend({
            message: 'This site uses cookies!',
            agreeText: 'Close',
            declineText: 'Decline',
            moreInfoText: 'Learn More',
            declineLink: 'javascript://',
            moreInfoLink: 'javascript://',
            showDecline: false,
            showMoreInfo: true,
            cookieName: 'mCookie-accepted'
        }, options);

        var $messageWrapper = null;
        var $messageAgree = null;
        var $messageDecline = null;
        var $messageMoreInfo = null;

        var cookies = document.cookie.split(';');
        for (var i = 0; i != cookies.length; i++) {
            var cookie = cookies[i].split('=');
            if (cookie[0].trim() == settings.cookieName.trim()) {
                return false;
            }
        }

        $messageWrapper = $('<div id="mCookie-warning"></div>').prependTo($('body'));
        $messageWrapper.html(settings.message);

        if (settings.showMoreInfo == true) {
            $messageMoreInfo = $('<a id="mCookie-warning-info" href="javascript://"></a>').appendTo($messageWrapper);
            $messageMoreInfo.text(settings.moreInfoText);
            $messageMoreInfo.attr('href', settings.moreInfoLink);
        }

        $messageAgree = $('<a id="mCookie-warning-agree" href="javascript://"></a>').appendTo($messageWrapper);
        $messageAgree.text(settings.agreeText);

        if (settings.showDecline == true) {
            $messageDecline = $('<a id="mCookie-warning-decline" href="javascript://"></a>').appendTo($messageWrapper);
            $messageDecline.text(settings.declineText);
            $messageDecline.attr('href', settings.declineLink);
        }

        $messageAgree.click(function () {
            document.cookie = settings.cookieName.trim() + '=true';
            $messageWrapper.fadeOut('fast');
        });
    };
}(jQuery));