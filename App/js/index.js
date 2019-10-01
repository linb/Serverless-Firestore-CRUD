xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"con_update")
                .setLeft("30em")
                .setTop("10.833333333333334em")
                .setWidth("22.5em")
                .setCaption("Update")
                .setToggleBtn(false)
            );
            
            host.con_update.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iKey")
                .setName("key")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("5.833333333333333em")
                .setTop("0.5em")
                .setWidth("15em")
            );
            
            host.con_update.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iValue")
                .setName("value")
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("3em")
                .setWidth("15em")
            );
            
            host.con_update.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btnU")
                .setName("updateButton")
                .setDesc("to trigger update function")
                .setDisabled(true)
                .setLeft("5.833333333333333em")
                .setTop("5.833333333333333em")
                .setWidth("15em")
                .setCaption("Update")
                .onClick([
                    {
                        "desc":"get Id",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{page.treegrid.getActiveRow()}",
                            "temp",
                            "row",
                            ""
                        ],
                        "method":"getActiveRow",
                        "redirection":"other:callback:call",
                        "event":1
                    },
                    {
                        "desc":"get data",
                        "type":"control",
                        "target":"con_update",
                        "args":[
                            "{page.con_update.getFormValues()}",
                            "temp",
                            "data"
                        ],
                        "method":"getFormValues",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"call update API",
                        "type":"module",
                        "target":"module_firestoreservice1",
                        "args":[
                            "{page.module_firestoreservice1.updateDoc}",
                            "none",
                            "",
                            "",
                            "tableDemo",
                            "{temp.data}",
                            "{temp.row.id}"
                        ],
                        "method":"$Functions.updateDoc",
                        "event":1,
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            host.con_update.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label23")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("4.166666666666667em")
                .setCaption("key")
            );
            
            host.con_update.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label24")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("4.166666666666667em")
                .setCaption("value")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"con_create")
                .setLeft("30em")
                .setTop("22.5em")
                .setWidth("22.5em")
                .setCaption("Create")
                .setToggleBtn(false)
            );
            
            host.con_create.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iKey2")
                .setName("key")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("0.5em")
                .setWidth("15em")
            );
            
            host.con_create.append(
                xui.create("xui.UI.Input")
                .setHost(host,"iValue2")
                .setName("value")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("3em")
                .setWidth("15em")
            );
            
            host.con_create.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"btnC")
                .setName("createButton")
                .setDesc("to trigger create function")
                .setLeft("5.833333333333333em")
                .setTop("5.833333333333333em")
                .setWidth("15em")
                .setCaption("Add a new row")
                .onClick([
                    {
                        "desc":"check form first",
                        "type":"control",
                        "target":"con_create",
                        "args":[
                            "{page.con_create.checkValid()}"
                        ],
                        "method":"checkValid",
                        "event":1,
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"get data from form",
                        "type":"control",
                        "target":"con_create",
                        "args":[
                            "{page.con_create.getFormValues()}",
                            "temp",
                            "data"
                        ],
                        "method":"getFormValues",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"call create API",
                        "type":"module",
                        "target":"module_firestoreservice1",
                        "args":[
                            "{page.module_firestoreservice1.createDoc}",
                            "none",
                            "",
                            "createDoc",
                            "tableDemo",
                            "{temp.data}"
                        ],
                        "method":"$Functions.createDoc",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            host.con_create.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label3")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("4.166666666666667em")
                .setCaption("key")
            );
            
            host.con_create.append(
                xui.create("xui.UI.Label")
                .setHost(host,"label4")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("4.166666666666667em")
                .setCaption("value")
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setSpaceUnit("px")
                .setLeft("170px")
                .setTop("10px")
                .setWidth("326px")
                .setHeight("80px")
                .setHtml("<div style=\"text-align: center;\">\n    <font size=\"3\">\n        CrossUI Firestore CRUD\n    </font>\n</div>\n<div style=\"text-align: center;\">\n    <font size=\"3\">\n        <br>\n    </font>\n</div>\n<div style=\"text-align: center;\">\n    <font size=\"3\">\n        Codeless &amp; Serverless</font></div>\n")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setLeft("4.166666666666667em")
                .setTop("8.333333333333334em")
                .setWidth("21.666666666666668em")
                .setHeight("24.166666666666668em")
            );
            
            host.block3.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"treegrid")
                .setDesc("to list all records")
                .setDirtyMark(false)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"key",
                        "caption":"Key",
                        "flexSize":true,
                        "width":"6.666666666666667em",
                        "type":"label",
                        "_cells":{ },
                        "_serialId":"-h_a",
                        "_colWidth":"7.083333333333333em",
                        "_cellWidth":"6.666666666666667em",
                        "_hcellheight":"2em",
                        "_region":2
                    },
                    {
                        "id":"value",
                        "caption":"Value",
                        "flexSize":true,
                        "width":"13.333333333333334em",
                        "type":"label",
                        "_cells":{ },
                        "_serialId":"-h_b",
                        "_colWidth":"14.083333333333334em",
                        "_cellWidth":"13.333333333333334em",
                        "_hcellheight":"2em",
                        "_region":2
                    }
                ])
                .afterRowActive([
                    {
                        "desc":"enable update button",
                        "type":"control",
                        "target":"btnD",
                        "args":[ ],
                        "method":"enable"
                    },
                    {
                        "desc":"enable delete button",
                        "type":"control",
                        "target":"btnU",
                        "args":[ ],
                        "method":"enable"
                    },
                    {
                        "desc":"fill form",
                        "type":"control",
                        "target":"con_update",
                        "args":[
                            "{page.treegrid.getRowMap()}"
                        ],
                        "method":"setFormValues"
                    }
                ])
            );
            
            host.block3.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block23")
                .setDock("top")
                .setLeft("9.166666666666666em")
                .setTop("1.6666666666666667em")
                .setHeight("2.5em")
                .setBorderType("none")
            );
            
            host.xui_ui_block23.append(
                xui.create("xui.UI.Span")
                .setHost(host,"xui_ui_span8")
                .setLeft("7.5em")
                .setTop("0.5833333333333334em")
                .setWidth("8.333333333333334em")
                .setHeight("1.4166666666666667em")
                .setHtml("Key/Value Pairs")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"btnD")
                .setName("deleteButton")
                .setDesc("to trigger delete function")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("30em")
                .setTop("8.333333333333334em")
                .setWidth("22.5em")
                .setCaption("Delete the active row")
                .onClick([
                    {
                        "desc":"get active row",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{page.treegrid.getActiveRow()}",
                            "temp",
                            "row"
                        ],
                        "method":"getActiveRow",
                        "redirection":"other:callback:call",
                        "event":1
                    },
                    {
                        "desc":"call delete API",
                        "type":"module",
                        "target":"module_firestoreservice1",
                        "args":[
                            "{page.module_firestoreservice1.deleteDoc}",
                            "none",
                            "",
                            undefined,
                            "tableDemo",
                            "{temp.row.id}"
                        ],
                        "method":"$Functions.deleteDoc",
                        "redirection":"other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("8.583333333333334em")
                .setTop("38.583333333333336em")
                .setCaption("[ Click here to see the tutorial ]")
                .setHref("https://www.slideshare.net/secret/1CHKWiJxZyz2g7")
                .setTarget("_blank")
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link2")
                .setLeft("5.833333333333333em")
                .setTop("35.833333333333336em")
                .setCaption("[ Click here to get the source code ]")
                .setHref("https://github.com/linb/Serverless-Firestore-CRUD")
                .setTarget("_blank")
            );
            
            append(
                xui.create("Module.FirestoreService", "xui.Module")
                .setHost(host,"module_firestoreservice1")
                .setEvents({
                    "onFirebaseLogin":[
                        {
                            "desc":"Call listDocs API",
                            "type":"module",
                            "target":"module_firestoreservice1",
                            "args":[
                                "{page.module_firestoreservice1.listDocs}",
                                undefined,
                                undefined,
                                "listDocs",
                                "tableDemo",
                                undefined,
                                "100"
                            ],
                            "method":"$Functions.listDocs",
                            "redirection":"other:callback:call"
                        }
                    ],
                    "onDocsList":[
                        {
                            "desc":"refresh grid",
                            "type":"page",
                            "target":"App",
                            "args":[
                                "{page.functions.refreshGrid}",
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method":"functions.refreshGrid",
                            "redirection":"other:callback:call"
                        }
                    ],
                    "onDocCreate":[
                        {
                            "desc":"clear form",
                            "type":"control",
                            "target":"con_create",
                            "args":[ ],
                            "method":"formClear"
                        },
                        {
                            "desc":"add row",
                            "type":"control",
                            "target":"treegrid",
                            "args":[
                                "{args[2]}",
                                null,
                                null,
                                true
                            ],
                            "method":"insertMapRows"
                        },
                        {
                            "desc":"active row",
                            "type":"control",
                            "target":"treegrid",
                            "args":[
                                "{args[3]}",
                                ""
                            ],
                            "method":"setActiveRow",
                            "timeout":300,
                            "resetid":""
                        }
                    ],
                    "onDocUpdate":[
                        {
                            "desc":"update row",
                            "type":"control",
                            "target":"treegrid",
                            "args":[
                                "{page.treegrid.setRowMap()}",
                                undefined,
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method":"setRowMap",
                            "redirection":"other:callback:call"
                        }
                    ],
                    "onDocDelete":[
                        {
                            "desc":"remove row",
                            "type":"control",
                            "target":"treegrid",
                            "args":[ ],
                            "method":"removeRows"
                        },
                        {
                            "desc":"try to active first row",
                            "type":"control",
                            "target":"treegrid",
                            "args":[
                                "{0}"
                            ],
                            "method":"setActiveRow",
                            "timeout":300,
                            "resetid":""
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }, 
        functions:{
            "refreshGrid":{
                "desc":"",
                "params":[
                    {
                        "id":"list",
                        "type":"Array",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"Clear all rows",
                        "type":"control",
                        "target":"treegrid",
                        "args":[ ],
                        "method":"removeAllRows"
                    },
                    {
                        "desc":"Add rows",
                        "type":"control",
                        "target":"treegrid",
                        "args":[
                            "{page.treegrid.setRawData()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"setRawData",
                        "redirection":"other:callback:call"
                    }
                ]
            }
        },
        events:{
            "onReady":[
                {
                    "desc":"Action 1",
                    "type":"module",
                    "target":"module_firestoreservice1",
                    "args":[
                        "{page.module_firestoreservice1.ensureFirebaseAuth}"
                    ],
                    "method":"$Functions.ensureFirebaseAuth",
                    "redirection":"other:callback:call"
                }
            ]
        }
    }
});