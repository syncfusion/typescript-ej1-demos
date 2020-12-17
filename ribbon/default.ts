/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"], fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"], action1 = ["New", "Clear"], action2 = ["Bold", "Italic", "Underline", "strikethrough", "superscript", "subscript", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Undo", "Redo"];
module RibbonComponent {
    $(function () {
        var sample = new ej.Ribbon($("#defaultRibbon"), {
            width: "100%",
            expandPinSettings: {
                toolTip: "Collapse the Ribbon"
            },
            collapsePinSettings: {
                toolTip: "Pin the Ribbon"
            },
            applicationTab: {
                 type: ej.Ribbon.ApplicationTabType.Menu, menuItemID: "ribbonmenu", menuSettings: { openOnClick: false }
            },
            tabs: [{
                id: "home", text: "HOME", groups: [{
                    text: "New", alignType: ej.Ribbon.AlignType.Rows, content: [{
                        groups: [{
                            id: "new",
                            text: "New",
                            toolTip: "New",
                            buttonSettings: {
                                contentType: ej.ContentType.ImageOnly,
                                imagePosition: ej.ImagePosition.ImageTop,
                                prefixIcon: "e-icon e-ribbon e-new",
                                click: "onClick"
                            }
                        }
                        ],
                        defaults: {
                            type: "button",
                            width: 60,
                            height: 70
                        }
                    }]
                },
                {
                        text: "Clipboard", alignType: ej.Ribbon.AlignType.Columns, content: [{
                            groups: [{
                                id: "paste",
                                text: "paste",
                                toolTip: "Paste",
                                splitButtonSettings: {
                                    contentType: ej.ContentType.ImageOnly,
                                    prefixIcon: "e-icon e-ribbon e-ribbonpaste",
                                    targetID: "pasteSplit",
                                    buttonMode: "dropdown",
                                    click: "onClick",
                                    arrowPosition: ej.ArrowPosition.Bottom
                                }
                            }
                            ],
                            defaults: {
                                type: "splitbutton",
                                width: 50,
                                height: 70
                            }
                        },
                        {
                             groups: [{
                                    id: "cut",
                                    text: "Cut",
                                    toolTip: "Cut",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        click: "onClick",
                                        prefixIcon: "e-icon e-ribbon e-ribboncut"
                                    }
                                },
                                    {
                                        id: "copy",
                                        text: "Copy",
                                        toolTip: "Copy",
                                        buttonSettings: {
                                            contentType: ej.ContentType.TextAndImage,
                                            click: "onClick",
                                            prefixIcon: "e-icon e-ribbon e-ribboncopy"
                                        }
                                    },
                                    {
                                        id: "clear",
                                        text: "Clear",
                                        toolTip: "Clear All",
                                        buttonSettings: {
                                            contentType: ej.ContentType.TextAndImage,
                                            click: "onClick",
                                            prefixIcon: "e-icon e-ribbon clearAll"
                                        }
                                    }],
                                     defaults: {
                                    type: "button",
                                    width: 60,
                                    isBig: false
                                }
                            }]
                },
                {
                        text: "Font", alignType: "rows", content: [{
                            groups: [{
                                id: "fontfamily",
                                toolTip: "Font",
                                dropdownSettings: {
                                    dataSource: fontfamily,
                                    text: "Segoe UI",
                                    select: "onClick",
                                    width: 150
                                }
                            },
                                {
                                    id: "fontsize",
                                    toolTip: "FontSize",
                                    dropdownSettings: {
                                        dataSource: fontsize,
                                        text: "1pt",
                                        select: "onClick",
                                        width: 65
                                    }
                                }],
                            defaults: {
                                type: "dropdownlist",
                                height: 28
                            }
                        },
                            {
                                groups: [{
                                    id: "bold",
                                    toolTip: "Bold",
                                    type: ej.Ribbon.Type.ToggleButton,
                                    toggleButtonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        defaultText: "Bold",
                                        activeText: "Bold",
                                        click: "onClick",
                                        defaultPrefixIcon: "e-icon e-ribbon bold",
                                        activePrefixIcon: "e-icon e-ribbon bold"
                                    }
                                },
                                    {
                                        id: "italic",
                                        toolTip: "Italic",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Italic",
                                            activeText: "Italic",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                                            activePrefixIcon: "e-icon e-ribbon e-ribbonitalic"
                                        }
                                    },
                                    {
                                        id: "underline",
                                        text: "Underline",
                                        toolTip: "Underline",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Underline",
                                            activeText: "Underline",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                                            activePrefixIcon: "e-icon e-ribbon e-ribbonunderline"
                                        }
                                    },
                                    {
                                        id: "strikethrough",
                                        text: "strikethrough",
                                        toolTip: "Strikethrough",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Strikethrough",
                                            activeText: "Strikethrough",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon strikethrough",
                                            activePrefixIcon: "e-icon e-ribbon strikethrough"
                                        }
                                    },
                                    {
                                        id: "superscript",
                                        text: "superscript",
                                        toolTip: "Superscript",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-superscripticon"
                                        }
                                    },
                                    {
                                        id: "subscript",
                                        text: "subscript",
                                        toolTip: "Subscript",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-subscripticon"
                                        }
                                    },
                                    {
                                        id: "fontcolor",
                                        text: "Font Color",
                                        toolTip: "Font Color",
                                        type: ej.Ribbon.Type.Custom,
                                        contentID: "fontcolor"
                                    },
                                    {
                                        id: "fillcolor",
                                        text: "Fill Color",
                                        toolTip: "Fill Color",
                                        type: ej.Ribbon.Type.Custom,
                                        contentID: "fillcolor"
                                    }
                                ],
                                defaults: {
                                    isBig: false
                                }
                            }]
                    },
                    {
                        text: "Alignment", alignType: ej.Ribbon.AlignType.Rows, content: [
                            {
                                groups: [{
                                    id: "bullet",
                                    text: "Bullet Format",
                                    toolTip: "Bullets",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-bullet"
                                    }
                                },
                                    {
                                        id: "number",
                                        text: "Number Format",
                                        toolTip: "Numbering",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-numbericon"
                                        }
                                    },
                                    {
                                        id: "textindent",
                                        text: "Indent",
                                        toolTip: "Text Indent",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-indent"
                                        }
                                    },
                                    {
                                        id: "textoudent",
                                        text: "Outdent",
                                        toolTip: "Text Outdent",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-outdent"
                                        }
                                    },
                                    {
                                        id: "sortascending",
                                        text: "Sort",
                                        toolTip: "Sort",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-sort"
                                        }
                                    },
                                    {
                                        id: "border",
                                        text: "Border",
                                        toolTip: "Border",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-border"
                                        }
                                    }],
                                defaults: {
                                    type: "button",
                                    isBig: false
                                }
                            },
                            {
                                groups: [{
                                    id: "alignleft",
                                    text: "JustifyLeft",
                                    toolTip: "Align Left",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignleft"
                                    }
                                },
                                    {
                                        id: "aligncenter",
                                        text: "JustifyCenter",
                                        toolTip: "Align Center",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon aligncenter"
                                        }
                                    },
                                    {
                                        id: "alignright",
                                        text: "JustifyRight",
                                        toolTip: "Align Right",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon alignright"
                                        }
                                    },
                                    {
                                        id: "justify",
                                        text: "JustifyFull",
                                        toolTip: "Justify",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon justify"
                                        }
                                    },
                                    {
                                        id: "uppercase",
                                        text: "Upper Case",
                                        toolTip: "Upper Case",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-uppercase"
                                        }
                                    },
                                    {
                                        id: "lowercase",
                                        text: "Lower Case",
                                        toolTip: "Lower Case",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-lowercase"
                                        }
                                    }],
                                defaults: {
                                    type: "button",
                                    isBig: false
                                }
                            }]
                    },
                    {
                        text: "Actions", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "undo",
                                text: "Undo",
                                toolTip: "Undo",
                                buttonSettings: {
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-undo"
                                }
                            },
                                {
                                    id: "redo",
                                    text: "Redo",
                                    toolTip: "Redo",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-redo"
                                    }
                                }
                            ],
                            defaults: {
                                type: "button",
                                width: 40,
                                height: 70
                            }
                        }]
                    },
                    {
                        text: "View", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "zoomin",
                                text: "Zoom In",
                                toolTip: "Zoom In",
                                buttonSettings: {
                                    width: 58,
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-zoomin"
                                }
                            },
                                {
                                    id: "zoomout",
                                    text: "Zoom Out",
                                    toolTip: "Zoom Out",
                                    buttonSettings: {
                                        width: 70,
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-zoomout"
                                    }
                                },
                                {
                                    id: "fullscreen",
                                    text: "Full Screen",
                                    toolTip: "Full Screen",
                                    buttonSettings: {
                                        width: 73,
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-fullscreen"
                                    }
                                }
                            ],
                            defaults: {
                                type: "button",
                                height: 70
                            }
                        }]
                    }]
            },{
                    id: "insert", text: "INSERT", groups: [{
                        text: "Tables", alignType: ej.Ribbon.AlignType.Columns, content: [{
                            groups: [{
                                id: "tables",
                                text: "Tables",
                                toolTip: "Tables",
                                buttonSettings: {
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-table"
                                }
                            }
                            ],
                            defaults: {
                                type: "button",
                                width: 50,
                                height: 70
                            }
                        }]
                    },
                        {
                            text: "Illustrations", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "pictures",
                                    text: "Pictures",
                                    toolTip: "Pictures",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-picture"
                                    }
                                },
                                    {
                                        id: "videos",
                                        text: "Videos",
                                        toolTip: "Videos",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-video"
                                        }
                                    },
                                    {
                                        id: "shapes",
                                        text: "Shapes",
                                        toolTip: "Shapes",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-shape"
                                        }
                                    },
                                    {
                                        id: "charts",
                                        text: "Charts",
                                        toolTip: "Charts",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-chart"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 56,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Comments", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "comments",
                                    text: "Comments",
                                    toolTip: "Comments",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-comment"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Text", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "text",
                                    text: "Text",
                                    toolTip: "Text",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-text",
                                        width: 50
                                    }
                                },
                                    {
                                        id: "datetime",
                                        text: "Date Time",
                                        toolTip: "DateTime",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-datetimenew"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Hyperlink", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "hyperlink",
                                    text: "Hyperlink",
                                    toolTip: "Hyperlink",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-hyperlink"
                                    }
                                }
                                ],
                                defaults: {
                                   type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Equation", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "equation",
                                    text: "Equation",
                                    toolTip: "Equation",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-equation"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 60,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Print Layout", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "printlayout",
                                    text: "Print Layout",
                                    toolTip: "Print Layout",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-printlayout"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 80,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Save", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "print",
                                    text: "Print",
                                    toolTip: "Print",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-print"
                                    }
                                },
                                    {
                                        id: "save",
                                        text: "Save",
                                        toolTip: "Save",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-save"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 50,
                                    height: 70
                                }
                            }]
                        }
                    ]
                }
            ],
            create: function createControl(args) {
                var ribbon = $("#defaultRibbon").data("ejRibbon");
                $("#fontcolor").ejColorPicker({ value: "#FFFF00", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fontcoloricon", select: colorHandler });
                $("#fillcolor").ejColorPicker({ value: "#FF0000", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fillcoloricon", select: colorHandler });
            }
        });
    });
}
function colorHandler(args:any) {
    (this._id.indexOf("fillcolor") != -1) ? $("#contenteditor").css('background-color', args.value) : document.execCommand('forecolor', false, args.value);
}
function onClick(args:any) {
    let val:any, prop = args.text;
    val = (ej.isNullOrUndefined(args.model.text)) ? args.model.activeText : args.model.text;
    if (action1.indexOf(val) != -1)
        $("#contenteditor").empty();
    else if (action2.indexOf(val) != -1)
        document.execCommand(val, false, null);
    else if (fontfamily.indexOf(prop) != -1)
        document.execCommand("FontName", false, prop);
    else if (fontsize.indexOf(prop) != -1)
        document.execCommand("FontSize", false, prop.replace("pt", ""));
    else
        $("#contenteditor").append("<p> Action: " + val + " Triggered </p>");
}