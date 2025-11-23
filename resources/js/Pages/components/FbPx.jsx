import { useEffect } from "react";

const FacebookPixel = ({ pixelId }) => {
    useEffect(() => {
        if (!pixelId) return;

        // Facebook Pixel Base Code
        !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
        );

        // Initialize Pixel
        window.fbq("init", pixelId);

        // Track PageView (Automatic)
        window.fbq("track", "PageView");
    }, [pixelId]);

    return null; // This component doesn't render anything
};

export default FacebookPixel;
