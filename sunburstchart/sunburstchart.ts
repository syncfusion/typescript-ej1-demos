/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var default_data: Array<Object> = [
    { Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup:"Executive",                         EmployeesCount : 50 },
	{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Marketing",                                                   EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 55 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 175},
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 70 },
	{ Category : "Employees", Country : "USA", JobDescription : "Management",                                                  EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Accounts",                                                    EmployeesCount : 60 },

	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 43 },
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 125},
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 60 },
	{ Category : "Employees", Country : "India",   JobDescription : "HR Executives",                                               EmployeesCount : 70 },
	{ Category : "Employees", Country : "India",   JobDescription : "Accounts",                                                    EmployeesCount : 45 },

	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Executive",                       EmployeesCount : 30 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Marketing",                                                   EmployeesCount : 50 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Management",                                                  EmployeesCount : 33 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Accounts",                                                    EmployeesCount : 55 },

	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 45 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 96 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 55 },
	{ Category : "Employees", Country : "UK",      JobDescription : "HR Executives",                                               EmployeesCount : 60 },
	{ Category : "Employees", Country : "UK",      JobDescription: "Accounts",                                                     EmployeesCount: 30  },

	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "France", JobDescription: "Marketing",                                                     EmployeesCount: 50  }
];

module sunburstcomponent {
    $(function () {
        var sunburstsample = new ej.SunburstChart($("#Sunburst"), {
            valueMemberPath: "EmployeesCount",
            levels: [
                {groupMemberPath: "Country"},
				{groupMemberPath: "JobDescription"},
				{groupMemberPath: "JobGroup"},
				{groupMemberPath: "JobRole"}
            ],
            dataSource: default_data,
            dataLabelSettings:{visible:true},
			tooltip:{visible:false},
			enableAnimation:false,
			size:{height:"600"},
			innerRadius:0.2,
            load: function () {
                var sender = $("#Sunburst").data("ejSunburstChart");
                var SunBurstTheme = (<any>window).themeStyle + (<any>window).themeColor + (<any>window).themeVarient;
                SunBurstTheme = SunBurstTheme.toString();
                if (SunBurstTheme.indexOf("dark") > -1 || SunBurstTheme.indexOf("contrast") > -1)
                    SunBurstTheme = "flatdark";
                else
                    SunBurstTheme = "flatlight";
                sender.model.theme = SunBurstTheme;
            },
			title:{text:"Employees Count"},
			zoomSettings:{enable:false},
			legend:{visible:true,position:'top'},
        });
    });
}