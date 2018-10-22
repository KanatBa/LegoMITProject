var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "Should verify title|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00e1007c-0034-00be-00a2-00ab005e00a2.png",
        "timestamp": 1540219406364,
        "duration": 32
    },
    {
        "description": "should verify and list site map list|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\002c005e-00aa-00fb-001d-0086005a00fe.png",
        "timestamp": 1540219407244,
        "duration": 92
    },
    {
        "description": "should click Shop tag and Check|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0031009a-006d-007b-0064-00fc00aa0084.png",
        "timestamp": 1540219408158,
        "duration": 2822
    },
    {
        "description": "should verify 5 images displayed in mainstage|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0062001b-009d-00e2-00e2-006800e500c9.png",
        "timestamp": 1540219411888,
        "duration": 34
    },
    {
        "description": "should display Video in main page and run 5s|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0077007b-0051-0032-0016-00a5007900a6.png",
        "timestamp": 1540219412773,
        "duration": 5308
    },
    {
        "description": "should check display top menu items and verify for each|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00a9000d-005d-0087-00fe-0071003900d6.png",
        "timestamp": 1540219419359,
        "duration": 356
    },
    {
        "description": "List countries and drop down and Verify|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00f80096-005f-0028-00b1-00a6000800c7.png",
        "timestamp": 1540219420832,
        "duration": 845
    },
    {
        "description": "Verify Web site changes language Italian and get Back to English|Home Page Lego",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00790061-0005-005c-0094-0026007b0038.png",
        "timestamp": 1540219422141,
        "duration": 24693
    },
    {
        "description": "Should see lego icon on Header|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00c700ec-00c2-0004-00ae-000800c700ce.png",
        "timestamp": 1540219451960,
        "duration": 50
    },
    {
        "description": "Should see “Shop”, “Products”, “Support”, “Games”, “Lego Life” an “Videos” on Header|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00a0005d-0021-0041-0078-000a00780008.png",
        "timestamp": 1540219452587,
        "duration": 160
    },
    {
        "description": "Should see “For Kids”, search box and account dropdown menu on Header|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00330015-008a-0072-00ce-003c00a00001.png",
        "timestamp": 1540219453292,
        "duration": 101
    },
    {
        "description": "Should see “Customer Service”, “About Us”, “Parents”, “Educators”, “ Attractions” and below links of them on footer|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0054006f-00db-0044-00ff-005a00f10004.png",
        "timestamp": 1540219453935,
        "duration": 139
    },
    {
        "description": "Should see “Privacy Policy”, “Cookies”, “ Terms of Use” links and below text on footer|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008d00e7-0057-0078-0015-004c00cc0049.png",
        "timestamp": 1540219454604,
        "duration": 100
    },
    {
        "description": "Should see Language selection button on footer|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008800c8-0064-002e-008e-0051002a008c.png",
        "timestamp": 1540219455226,
        "duration": 38
    },
    {
        "description": "Should see “Privacy Policy” and “Cookies”, buttons on right bottom of the page|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00aa008c-003a-00c9-009c-00b000fa00b8.png",
        "timestamp": 1540219455800,
        "duration": 56
    },
    {
        "description": "Should change the language|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00e30060-004f-00ff-002b-00d40074000a.png",
        "timestamp": 1540219456407,
        "duration": 138
    },
    {
        "description": "Should be 26 different languages|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\004e0005-00fa-00b2-0042-0062008100df.png",
        "timestamp": 1540219457117,
        "duration": 1
    },
    {
        "description": "Should see there is Korean|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00fd00b7-006f-0032-002c-006600b50094.png",
        "timestamp": 1540219457577,
        "duration": 28
    },
    {
        "description": "Should choose the Korean|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\002200df-0010-00e0-0004-00a000de00d8.png",
        "timestamp": 1540219458055,
        "duration": 1503
    },
    {
        "description": "Should see that language changed as Korean|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00c600f8-0083-0058-00b5-007b00cb00f3.png",
        "timestamp": 1540219460075,
        "duration": 29
    },
    {
        "description": "Should NOT see there is “Georgian”|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ae0070-002d-0011-007e-007b00660087.png",
        "timestamp": 1540219460621,
        "duration": 345
    },
    {
        "description": "Should see “Themes” section|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\005000db-000a-008e-00f7-005d00b2000a.png",
        "timestamp": 1540219461442,
        "duration": 2005
    },
    {
        "description": "Should see “See More” button on the “Themes” section and click|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\006d00bc-00a4-0024-006b-00b900370057.png",
        "timestamp": 1540219464002,
        "duration": 1635
    },
    {
        "description": "Should see “LEGO Scooby-Doo” option and click|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00850019-00ef-00e0-0050-0046005f0037.png",
        "timestamp": 1540219466766,
        "duration": 1655
    },
    {
        "description": "Should see “LEGO Scooby-Doo Velma’s Discovery”video and click|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841 46:45636 \"Error: [$injector:unpr] Unknown provider: legoidProvider \\u003C- legoid \\u003C- viewsService \\u003C- legoViewsCounterDirective\\nhttp://errors.angularjs.org/1.2.31/$injector/unpr?p0=legoidProvider%20%3C-%20legoid%20%3C-%20viewsService%20%3C-%20legoViewsCounterDirective\\n    at https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:636\\n    at https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:15613\\n    at Object.n [as get] (https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:14875)\\n    at https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:15708\\n    at n (https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:14875)\\n    at Object.r [as invoke] (https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:15159)\\n    at https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:15726\\n    at n (https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:14875)\\n    at Object.r [as invoke] (https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:15159)\\n    at https://www.lego.com/r/www/r/portals/dist/wmp.js?l.r=2841:47:19881\"",
                "timestamp": 1540219469327,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0033008a-00dc-00ae-00f7-00c000b40066.png",
        "timestamp": 1540219468993,
        "duration": 751
    },
    {
        "description": "Should click play button of the video and watch the video|Videos Page|Videos Page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://www.lego.com/mediaplayerassets/2.2.3/scripts/mediaplayer.min.js 11:24983 \"VIDEOJS:\" \"WARN:\" \"Problem encountered with the current HLS playlist. Aborted early because there isn't enough bandwidth to complete the request without rebuffering. Switching to another playlist.\"",
                "timestamp": 1540219476193,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.lego.com/mediaplayerassets/2.2.3/scripts/mediaplayer.min.js 11:24983 \"VIDEOJS:\" \"WARN:\" \"Problem encountered with the current HLS playlist. Aborted early because there isn't enough bandwidth to complete the request without rebuffering. Switching to another playlist.\"",
                "timestamp": 1540219476193,
                "type": ""
            }
        ],
        "screenShotFile": "images\\008300b2-00fe-0055-0032-002d00e800f4.png",
        "timestamp": 1540219471026,
        "duration": 5160
    },
    {
        "description": "should navigate to login page and be logged in|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219478297,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219478335,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219479377,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219479377,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219479377,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219483156,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.lego.com/r/www/r/globalnavigationservices/api/v2/global/scripts/en-us/LEGO.LEGOID3/www?l.r2=1.0.0.437 45:174888 Uncaught ReferenceError: url is not defined",
                "timestamp": 1540219487240,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.lego.com/r/www/r/globalnavigationservices/api/v2/global/scripts/en-us/LEGO.LEGOID3/www?l.r2=1.0.0.437 45:174888 Uncaught ReferenceError: url is not defined",
                "timestamp": 1540219487241,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003b0006-0088-0045-004a-007b000300ff.png",
        "timestamp": 1540219476696,
        "duration": 10537
    },
    {
        "description": "should display pop-up message if Username & Password inputs are empty|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219487664,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219487747,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219488418,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219488418,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219488447,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219492570,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009700a2-0097-002e-0029-00bb0075000f.png",
        "timestamp": 1540219487572,
        "duration": 5208
    },
    {
        "description": "should validate \"Having trouble logging in\" link is shown and window pop-ups|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219493243,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219493564,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219493886,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219493891,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219493894,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003e002a-0038-00fd-00a8-000c00f2005b.png",
        "timestamp": 1540219493103,
        "duration": 1043
    },
    {
        "description": "should validate resetting Username when email address is provided|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219494606,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219494641,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219495282,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219495282,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219495284,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219497874,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00080001-001d-009d-0028-00dd00000073.png",
        "timestamp": 1540219494473,
        "duration": 10877
    },
    {
        "description": "should validate resetting Password when email address is provided|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219505881,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219505915,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219509095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219509095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219509095,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219509096,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003000e0-0002-00c4-00b0-00e8009d0093.png",
        "timestamp": 1540219505733,
        "duration": 11785
    },
    {
        "description": "should validate error message if email is not provided for \"Forgot username\" and \"Submit\" clicked|Login page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219518011,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219518053,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219518644,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219518644,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219518653,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219524007,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00110022-003f-00b8-0098-0060000d0020.png",
        "timestamp": 1540219517853,
        "duration": 15373
    },
    {
        "description": "should list all the labels|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219533576,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219533599,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/register/?returnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Df1704b3e77734134b9a3872a8a9d0e4c%26nonce%3D52d5c9c808cb4367a680698bb27e95ab%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-b.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219534373,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/register/?returnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Df1704b3e77734134b9a3872a8a9d0e4c%26nonce%3D52d5c9c808cb4367a680698bb27e95ab%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-r.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219534377,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://identity.lego.com/en-US/register/?returnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Df1704b3e77734134b9a3872a8a9d0e4c%26nonce%3D52d5c9c808cb4367a680698bb27e95ab%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue - Access to font at 'https://www.lego.com/r/www/r/globalnavigationservices/content/font/ubuntu/fonts/ubuntu-m.woff2?l.r2=1.0.0.437' from origin 'https://identity.lego.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.lego.com' that is not equal to the supplied origin.",
                "timestamp": 1540219534377,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "javascript - The resource https://identity.lego.com/config.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.",
                "timestamp": 1540219537314,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000000d8-003f-0021-0021-00e9000c0091.png",
        "timestamp": 1540219537309,
        "duration": 2
    },
    {
        "description": "should require Email Address|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\001e00e6-00bc-007e-004c-00e200010040.png",
        "timestamp": 1540219537637,
        "duration": 2024
    },
    {
        "description": "should require Password |Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00f60080-00bf-009a-00c5-00c4005300f9.png",
        "timestamp": 1540219539975,
        "duration": 2238
    },
    {
        "description": "should require at least 10 characters for password|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00b10044-0095-0004-005f-003b006000cc.png",
        "timestamp": 1540219542534,
        "duration": 2256
    },
    {
        "description": "should require Password |Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00b00090-00f0-0000-00c4-0022006e0090.png",
        "timestamp": 1540219545134,
        "duration": 20
    },
    {
        "description": "should require at least 10 characters for password|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00330068-00d8-0001-00be-005b00f90036.png",
        "timestamp": 1540219545488,
        "duration": 2351
    },
    {
        "description": "should require Date of Birth |Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\003d00b4-009d-0095-00a9-002c00f70068.png",
        "timestamp": 1540219548159,
        "duration": 2227
    },
    {
        "description": "should require Country |Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008600a0-0056-0064-00f5-002c0089008c.png",
        "timestamp": 1540219550689,
        "duration": 4215
    },
    {
        "description": "should require the checkbox for accepting terms and conditions |Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00310023-00ed-003a-0063-00ca004e00e7.png",
        "timestamp": 1540219555212,
        "duration": 3079
    },
    {
        "description": "should navigate to Account Login page from Create User Account page|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00bd00ac-0043-0043-006b-005a00f400be.png",
        "timestamp": 1540219558595,
        "duration": 6115
    },
    {
        "description": "should navigate to help page|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00150032-00dd-00e4-0068-0060000800f5.png",
        "timestamp": 1540219565028,
        "duration": 4227
    },
    {
        "description": "should display the image at the end of the page|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00e2000a-00a1-0017-0007-00c100dd00e7.png",
        "timestamp": 1540219569580,
        "duration": 24
    },
    {
        "description": "should check \"Next\" button|Create Account",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00670097-006b-002f-00fc-0047001200d3.png",
        "timestamp": 1540219569915,
        "duration": 16
    },
    {
        "description": "3_should display and click on \"Exclusives|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\0067002a-003e-00e8-00a4-004b00e600a9.png",
        "timestamp": 1540219574885,
        "duration": 4264
    },
    {
        "description": "4_should click \"PRICE\" and select \"$75 - $100 [4]\"|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\004c005b-0073-00ae-00ab-006a002e0023.png",
        "timestamp": 1540219579557,
        "duration": 8343
    },
    {
        "description": "5_should display all the pruducts and click on a product|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00dd0094-009a-0059-00b5-00bf00e60081.png",
        "timestamp": 1540219588290,
        "duration": 133
    },
    {
        "description": "6_should click on a specific product|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00e600c5-007e-0090-005c-007b003d003a.png",
        "timestamp": 1540219588797,
        "duration": 4400
    },
    {
        "description": "7_should click on \"Search\" Area and Write a product name|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00da0022-0030-001e-006d-00a2001600f0.png",
        "timestamp": 1540219593584,
        "duration": 6475
    },
    {
        "description": "8_should click on next to show other images of the product and should click on \"ADD TO BAG\" button|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00a700e5-0034-0089-0054-0081006100db.png",
        "timestamp": 1540219600425,
        "duration": 3841
    },
    {
        "description": "9_should show an error message if item cannot be found|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://assets.adobedtm.com/bc928b1e6821ba625e3dc7312b1fa0cab554947d/scripts/satellite-58d1858464746d3972008d90.js 24:2 Uncaught ReferenceError: adobe is not defined",
                "timestamp": 1540219604887,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00df0055-00bb-009d-00f0-003e00740012.png",
        "timestamp": 1540219604652,
        "duration": 3471
    },
    {
        "description": "10_should click on \"MY BAG\" and Edit/ Checkout|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://assets.adobedtm.com/bc928b1e6821ba625e3dc7312b1fa0cab554947d/scripts/satellite-58c0707364746d482f001829.js 20:0 Uncaught ReferenceError: adobe is not defined",
                "timestamp": 1540219613698,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00790045-00fc-00b2-00a0-00ba00ec0068.png",
        "timestamp": 1540219608483,
        "duration": 5185
    },
    {
        "description": "11_should remove a product from the cart|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\003a004b-005f-00d3-0057-000500bf00c1.png",
        "timestamp": 1540219614043,
        "duration": 4152
    },
    {
        "description": "12_should display and click on Checkout|Shop Page functionalities of Lego.com",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00290036-00dd-001c-0021-001900d000b9.png",
        "timestamp": 1540219618567,
        "duration": 3074
    },
    {
        "description": "AC_1.1:should display LEGO® LIFE link on main page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219630111,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219632139,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219634144,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219636149,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219638108,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219640109,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009b00cb-0097-00dd-0002-00190041009c.png",
        "timestamp": 1540219621949,
        "duration": 18251
    },
    {
        "description": "AC_1.2:should navigate to LEGO® LIFE page from main page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219642898,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000b00d6-000c-0094-0080-0048003f0019.png",
        "timestamp": 1540219640621,
        "duration": 2284
    },
    {
        "description": "AC_2.1:should display LEGO® LIFE App link on LEGO® LIFE page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219645398,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00a00030-002c-0067-00bd-004200650044.png",
        "timestamp": 1540219643326,
        "duration": 2116
    },
    {
        "description": "AC_2.2:should display active color of LEGO® LIFE App link LEGO® LIFE page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219646971,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00180066-009a-007b-00d0-00a700850043.png",
        "timestamp": 1540219645874,
        "duration": 2142
    },
    {
        "description": "AC_2.3:should display \"Download on the Apple App Store\" button on LEGO® LIFE page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219651723,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b8002c-006b-0080-0056-00cf001100b9.png",
        "timestamp": 1540219648459,
        "duration": 3298
    },
    {
        "description": "AC_2.4:should click \"Download on the Apple App Store\" app link and navigate to Apple App Store|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219654387,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219655384,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://web-experience.itunes.apple.com/assets/vendor-be924f4b8cd6597fc0b21839baf2881d.js 8242:47 \"Metrics config: No config provided via delegate or fetched via init(), using default/cached config values.\"",
                "timestamp": 1540219658504,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://web-experience.itunes.apple.com/assets/vendor-be924f4b8cd6597fc0b21839baf2881d.js 8242:47 \"Metrics config: No config provided via delegate or fetched via init(), using default/cached config values.\"",
                "timestamp": 1540219658507,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://itunes.apple.com/gb/app/lego-life-videos-challenges/id1140466898?l=da&ls=1&mt=8 - Refused to load manifest from 'https://apps.mzstatic.com/content/static-config/android/manifest.json' because it violates the following Content Security Policy directive: \"default-src 'none'\". Note that 'manifest-src' was not explicitly set, so 'default-src' is used as a fallback.\n",
                "timestamp": 1540219659353,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002300b9-000e-00f5-00dc-00e9000e000f.png",
        "timestamp": 1540219652195,
        "duration": 7355
    },
    {
        "description": "AC_2.5:should display \"GET IT ON Google Play\" on LEGO® LIFE page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219663318,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00210011-0034-0087-0069-001700b50034.png",
        "timestamp": 1540219660627,
        "duration": 2730
    },
    {
        "description": "AC_2.6:should click \"GET IT ON Google Play\" app link and navigate to Google Play Store|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219665945,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219666927,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004400b5-00e6-0008-0010-007d008200cf.png",
        "timestamp": 1540219663807,
        "duration": 5786
    },
    {
        "description": "AC_2.7:should display \"Available at amazon\" on LEGO® LIFE page|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219671677,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00990066-0057-0045-006c-003800d30034.png",
        "timestamp": 1540219670011,
        "duration": 2749
    },
    {
        "description": "AC_2.8:should click \"Available at amazon\" app link and navigate to Amazon App Store|US_1: LEGO®Life App Navigation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219675267,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.amazon.com/LEGO%C2%AE-Life-Create-share-discover/dp/B01N4RZJTS/ 6556 Mixed Content: The page at 'https://www.amazon.com/LEGO%C2%AE-Life-Create-share-discover/dp/B01N4RZJTS/' was loaded over HTTPS, but requested an insecure image 'http://g-ecx.images-amazon.com/images/G/01/columbo/images/pumpkin/offsite-link-icon._CB263628780_.gif'. This content should also be served over HTTPS.",
                "timestamp": 1540219676795,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/ClientSideMetricsAUIJavascript@jserrorsForester.0acd236281a4d93774c265b3bec043f2087a43c2._V2_.js 3:270 \"Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): {\\\"m\\\":\\\"[CSM] Insecure content detected img : http://g-ecx.images-amazon.com/images/G/01/columbo/images/pumpkin/offsite-link-icon._CB263628780_.gif\\\",\\\"csm\\\":\\\"v5 ueLogError stack\\\",\\\"logLevel\\\":\\\"WARN\\\",\\\"attribution\\\":\\\"//*[@id='masTechnicalDetails-btf']/DIV[3]/A/IMG\\\",\\\"pageURL\\\":\\\"https://www.amazon.com/LEGO%C2%AE-Life-Create-share-discover/dp/B01N4RZJTS/\\\",\\\"s\\\":[\\\"N/A\\\"],\\\"t\\\":6651}\" Object",
                "timestamp": 1540219682687,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0071008a-0041-0080-0083-008800190079.png",
        "timestamp": 1540219673196,
        "duration": 10637
    },
    {
        "description": "AC_1.1: should display \"Magazine\" link on LegoLife page|US_2: Email Sign Up",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219687484,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219688470,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219690463,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219692475,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219694481,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219696463,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007600cd-0034-0044-0065-001e007d00eb.png",
        "timestamp": 1540219684217,
        "duration": 13304
    },
    {
        "description": "AC_1.2: should navigate to registration when \"Magazine\" link is clicked|US_2: Email Sign Up",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://lc-www-live-s.legocdn.com/r/www/r/mediaplayer/en-US/services/mediaplayerapi.ashx?t=636495274250000000 0:12056 \"https://identity.lego.com - not allowed message access\"",
                "timestamp": 1540219699187,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/profile-e1b64dfd782fd3390e8d.min.js 15 A preload for 'https://identity.lego.com/config.json' is found, but is not used because the request credentials mode does not match. Consider taking a look at crossorigin attribute.",
                "timestamp": 1540219711299,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00930079-0059-0013-00bb-009700bd001b.png",
        "timestamp": 1540219697963,
        "duration": 13383
    },
    {
        "description": "should be displayed \"send email\" and \" chat now\" button|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://identity.lego.com/scripts/npm.yuki-createjs-e1b64dfd782fd3390e8d.min.js 83 The Web Audio autoplay policy will be re-enabled in Chrome 71 (December 2018). Please check that your website is compatible with it. https://goo.gl/7K7WLu",
                "timestamp": 1540219711373,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000d00c6-00f4-0011-00af-005c00100019.png",
        "timestamp": 1540219711798,
        "duration": 17234
    },
    {
        "description": "should be displayed field text |shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\007700de-002a-0026-005b-0027005d003a.png",
        "timestamp": 1540219729536,
        "duration": 5170
    },
    {
        "description": "should click \"send email\" button|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00620069-00b5-0067-006d-0027003800f5.png",
        "timestamp": 1540219735166,
        "duration": 5135
    },
    {
        "description": "should verify label names|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00290077-0041-0015-0082-00740038002f.png",
        "timestamp": 1540219740782,
        "duration": 6986
    },
    {
        "description": "should accept maximum 3 digit ,doesnot shown error message|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00d2007b-00d2-00cb-0036-0058008600a2.png",
        "timestamp": 1540219748216,
        "duration": 13315
    },
    {
        "description": "should be red ,color of the label,if input letters,more than 3 numbers,special charactersor empty,|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\004d008e-0084-0028-0003-00ff002900a2.png",
        "timestamp": 1540219762031,
        "duration": 7150
    },
    {
        "description": "should select dropdown|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00640006-0058-00ba-00a8-002c00c6007e.png",
        "timestamp": 1540219769638,
        "duration": 7052
    },
    {
        "description": "should be enabled 'next button' with valid input|shoud send an email in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008a0061-00e2-00a4-0030-004800f400a1.png",
        "timestamp": 1540219777134,
        "duration": 11902
    },
    {
        "description": "should count general topics|shoud choose a topic in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\007c0007-009f-00dd-001a-002c00e2001e.png",
        "timestamp": 1540219791418,
        "duration": 2020
    },
    {
        "description": "should choose spesifc topic and should go to the another page|shoud choose a topic in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\0034000e-00e7-008c-001d-00c3001c0098.png",
        "timestamp": 1540219793872,
        "duration": 2124
    },
    {
        "description": "should be displayed error mesage without any comment inside text area|shoud choose a topic in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00f700ee-00ef-00b9-00a0-0032005b00c6.png",
        "timestamp": 1540219796481,
        "duration": 4120
    },
    {
        "description": "should fill out text area for clicking next button|shoud choose a topic in support page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00e20098-0046-0077-00ae-002400ba00b0.png",
        "timestamp": 1540219801013,
        "duration": 6253
    },
    {
        "description": "1.  Should Games link on the navigation bar be displayed and takes user to Games page|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\005700b6-0003-0078-00b8-00af00830095.png",
        "timestamp": 1540219821069,
        "duration": 2925
    },
    {
        "description": "2.  Should all the links are displayed on navigation bar|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ee0001-0021-0017-0048-008b00cb0015.png",
        "timestamp": 1540219824590,
        "duration": 984
    },
    {
        "description": "3.  Should all the links on the navigation bar navigate to the correct pages|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00fe00b5-0057-00a3-00a7-0067006000a6.png",
        "timestamp": 1540219826146,
        "duration": 3822
    },
    {
        "description": "4.  Should Web Games page path displayed on the page|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00140075-00f2-005e-0016-006d008a00d5.png",
        "timestamp": 1540219830625,
        "duration": 4488
    },
    {
        "description": "5.  Should all displayed games have titles.|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00af00b7-0087-00b7-009f-005d002300ed.png",
        "timestamp": 1540219835719,
        "duration": 4173
    },
    {
        "description": "6.  Should all Web Games diplayed subtitles |Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\001500c8-00dc-001c-0038-0081006d005a.png",
        "timestamp": 1540219840457,
        "duration": 1125
    },
    {
        "description": "7.  Should all Web Games have images|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008500d3-00e9-009d-0092-007a00450010.png",
        "timestamp": 1540219842193,
        "duration": 4176
    },
    {
        "description": "8.  Should Mobile Apps page path displayed on the page|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\001d00ce-0025-007f-0087-007b00580037.png",
        "timestamp": 1540219846963,
        "duration": 6918
    },
    {
        "description": "9.  Should all displayed Mobile Apps have titles.|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\000d0070-00c3-00d2-007b-002600ba0061.png",
        "timestamp": 1540219854467,
        "duration": 4578
    },
    {
        "description": "10. Should all Mobile Apps diplayed subtitles|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\000c0051-005f-00d9-004f-009800730064.png",
        "timestamp": 1540219859646,
        "duration": 1643
    },
    {
        "description": "11. Should all Web Games have images|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00df0016-006f-00b2-0087-0051002500e8.png",
        "timestamp": 1540219861892,
        "duration": 4231
    },
    {
        "description": "12. Should check more button displayed|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images\\00d0000a-00a6-00d8-00c1-000100b200dd.png",
        "timestamp": 1540219866687,
        "duration": 3661
    },
    {
        "description": "13. Should Video Games page path displayed on the page|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\005100cb-0042-0095-006b-006b00ad0000.png",
        "timestamp": 1540219870981,
        "duration": 5566
    },
    {
        "description": "14. Should all displayed Mobile Apps have titles.|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008f00e1-0037-0088-00bf-006c000c00a3.png",
        "timestamp": 1540219877173,
        "duration": 4093
    },
    {
        "description": "15. Should all Mobile Apps diplayed subtitles|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ce00b0-007b-0012-000f-00a400a20009.png",
        "timestamp": 1540219881892,
        "duration": 1466
    },
    {
        "description": "16. Should all Web Games have images|Logo.com Games Page Automation",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 30828,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008a0073-0000-0030-008c-004b003b0021.png",
        "timestamp": 1540219883988,
        "duration": 2953
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
