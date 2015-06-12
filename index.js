var customRules = 
//Array of GSoft CSS lint rules
[
    //Check space or indentation inside selector
    {
        //rule information
        id: "GSoft-selector-space",
        name: "Warning with space inside selectors",
        desc: "Don't use indentation or multiple space inside selectors",
        browsers: "All",

        //initialization
        init: function (parser, reporter) {
            "use strict";
            var rule = this;

            parser.addListener("startrule", function (event) {

                var selector,
                    i;

                for (i = 0; i < event.selectors.length; i++) {
                    selector = event.selectors[i];

                    if (/  +/.test(selector.text)) {
                        reporter.report("You have more than one space between in your selectors.", selector.line, selector.col, rule);
                    }
                }

            });
        }
    },
    //Check case of selector
    {
        //rule information
        id: "GSoft-selector-lowercase",
        name: "Normalize selectors name",
        desc: "Selectors must be in lower case",
        browsers: "All",

        //initialization
        init: function (parser, reporter) {
            "use strict";
            var rule = this;

            parser.addListener("startrule", function (event) {
                var selector,
                    i;

                for (i = 0; i < event.selectors.length; i++) {
                    selector = event.selectors[i];

                    if (/([A-Z])+/.test(selector.text)) {
                        reporter.report("You have upper case in selectors, change to lowercase.", selector.line, selector.col, rule);
                    }
                }

            });
        }
    },
    //Check Selector depth
    {
        //rule information
        id: "GSoft-selector-depth",
        name: "Warns against using too many selectors",
        desc: "The selectors specificity used are greater than 3 levels deep",
        browsers: "All",

        //initialization
        init: function (parser, reporter) {
            "use strict";
            var rule = this,
                limit = 3;

            parser.addListener("startrule", function (event) {
                var selectors = event.selectors,
                    selector,
                    selectorSpecificity,
                    i;

                for (i = 0; i < selectors.length; i++) {
                    selector = selectors[i];
                    selectorSpecificity = parseInt(selector.specificity.c, 10);

                    if (selectorSpecificity > limit) {
                        reporter.report("You have " + selectorSpecificity + " selectors, try keeping the number under " + limit + ".", selector.line, selector.col, rule);
                    }
                }
            });
        }
    }
];

module.exports = customRules;