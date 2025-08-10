
let screenWidth = window.innerWidth;

$(function () {
    var reportContainer = $("#report-container").get(0);

    // Initialize iframe for embedding report
    powerbi.bootstrap(reportContainer, { type: "report" });

    var models = window["powerbi-client"].models;

    function loadReport(screenWidth) {
        $.ajax({
            type: "GET",
            url: "/getembedinfo",
            dataType: "json",
            success: function (data) {

                var reportLoadConfig = {
                    type: "report",
                    tokenType: models.TokenType.Embed,
                    permissions: models.Permissions.All,
                    settings: {
                        layoutType: screenWidth <= 932 ? models.LayoutType.MobilePortrait : models.LayoutType.Master,
                        background: models.BackgroundType.Transparent,
                        filterPaneEnabled: false,
                        navContentPaneEnabled: false
                    }
                };

                let userAgent = navigator.userAgent.toLowerCase();            
                console.log(userAgent);

                let embedData = $.parseJSON(JSON.stringify(data));
                reportLoadConfig.accessToken = embedData.accessToken;
                reportLoadConfig.embedUrl = embedData.reportConfig[0].embedUrl;
                console.log(screenWidth);
                
                powerbi.reset(reportContainer);
                let report = powerbi.embed(reportContainer, reportLoadConfig);
                
                // Store report globally for refreshing
                window.powerBIReport = report;

                report.on("loaded", function () {
                    console.log("Report load successful");
                });

                report.on("rendered", function () {
                    console.log("Report render successful");
                });

                report.on("error", function (event) {
                    console.error("Error:", event.detail);
                });
            },
            error: function (err) {
                let errorContainer = $(".error-container");
                $(".embed-container").hide();
                errorContainer.show();
                let errMessageHtml = "<strong>Error Details:</strong><br/>" + $.parseJSON(err.responseText)["errorMsg"];
                errorContainer.html(errMessageHtml.split("\n").join("<br/>"));
            }
        });
    }

    // Load the report initially
    loadReport(screenWidth);

    // Refresh report on screen size change
    $(window).on("resize", function () {
        let newScreenWidth = window.innerWidth;
        if ((newScreenWidth <= 932 && screenWidth > 932) || (newScreenWidth > 932 && screenWidth <= 932)) {
            screenWidth = newScreenWidth;
            console.log("🔄 Screen size changed, reloading report...");
            loadReport(screenWidth);
        }
        // if (newScreenWidth <= 932 && screenWidth > 932) {
        //     screenWidth = newScreenWidth;
        //     console.log("🔄 Screen size changed, reloading report...");
        //     loadReport(screenWidth);
        // } else if (newScreenWidth > 932 && screenWidth <= 932) {
        //     screenWidth = newScreenWidth;
        //     console.log("🔄 Screen size changed, reloading report...");
        //     loadReport(screenWidth);
        // }
    });
});
