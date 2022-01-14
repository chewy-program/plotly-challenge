// 1. Use the D3 library to read in `samples.json`.

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function sample_set() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;
        var metadata = allData.metadata;
        var objects = Object.values(metadata)
        var selectOElement = d3.select("#selOption")
        objects.forEach(({ id }) => {

            var optionOElement = selectOElement.append("option");

            optionOElement.html(id);
            optionOElement.attr('value', id);
            optionOElement.attr("id", "optionID");
        });

    })
};
sample_set();
// 4. Display the sample metadata, i.e., an individual's demographic information.
function tableData() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;
        var metadata = allData.metadata
        var tbody = d3.select("tbody");
        // console.log(filteredObject)
        metadata.forEach(({ id, ethnicity, gender, age, location, bbtype, wfreq }) => {
            var row = tbody.append("tr");
            row.append("td").text(id);
            row.append("td").text(ethnicity);
            row.append("td").text(gender);
            row.append("td").text(age);
            row.append("td").text(location);
            row.append("td").text(bbtype);
            row.append("td").text(wfreq);

        });
    });
};
tableData();

function horibar() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;
        var sample_data = allData.samples;

        sample_data.forEach(({ sample_values, otu_ids, otu_labels }) => {

            var sv = sample_values;
            var otids = otu_ids;
            var otlabels = otu_labels;
            // Slice the first 10 objects for plotting
            slice_sv = sv.slice(0, 10)
            slice_otids = otids.slice(0, 10);
            sort_otids = slice_otids.sort(function (a, b) { return a - b })
            // Reverse the array due to Plotly's defaults
            reverse_otids = sort_otids.reverse();

            var bartrace = {
                x: sort_otids,
                y: slice_sv,
                xaxis: 'x1',
                yaxis: sv,
                text: otlabels,
                name: "Belly Button research",
                type: "bar",
                orientation: "h",
                marker: {
                    color: slice_sv,
                    colorscale: [['Picnic']],
                    cmin: 0,
                    cmax: 50,
                    opacity: 0.6,
                    gap: 5,
                    text: otlabels,
                    line: {
                        color: slice_sv,
                        colorscale: [["Viridis"]],
                        width: 5
                    }
                }
            };


            // place trace into object 
            var barChartData = [bartrace];

            // Apply the group bar mode to the layout
            var barLayout = {
                title: "Sample Data Belly Button research",
                xaxis: {
                    title: "Sample Value"
                },
                yaxis: {
                    title: "OTU ID",
                    text: sv,
                    dticks: 1
                },
                showticklabels: true,
                margin: {
                    l: 100,
                    r: 100,
                    t: 100,
                    b: 100
                },
                bargap: 100
            };

            // Render the plot to the div tag with id "plot"
            Plotly.newPlot("plot-container plotly", barChartData, barLayout);
        });
    })
}

function bubble() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;

        var sample_data = allData.samples;

        sample_data.forEach(({ sample_values, otu_ids, otu_labels }) => {

            var sv = sample_values;
            var desired_maximum_marker_size = 40;
            var otids = otu_ids;

            var otlabels = otu_labels;
            // Reverse the array due to Plotly's defaults
            var parsed_otids = parseFloat(otids);
            var parsed_sv = parseFloat(sv);
            var sizeref = (parsed_otids ** parsed_sv) / (desired_maximum_marker_size ** 2)
            // 3. Create a bubble chart that displays each sample.

            // * Use `otu_ids` for the x values.
            var bubbletrace = {
                x: otids,
                y: sv,
                mode: 'markers',
                text: [[otlabels]],

                marker: {
                    color: sv,
                    colorscale: [['Earth']],
                    cmin: 0,
                    cmax: 50,
                    size: otids,
                    sizeref: sizeref,
                    sizemode: 'area'

                },
            };

            // place trace into object 
            var bubbleData = [bubbletrace];
            // * Use `sample_values` for the y values.

            // * Use `sample_values` for the marker size.
            var bubbleLayout = {
                title: 'Sample Size',
                showlegend: false,
                xaxis: { title: "OTU ID" },
                yaxis: { title: "Sample Values" },
                height: 600,
                width: 900,
            };
            Plotly.newPlot("bubble-container plotly", bubbleData, bubbleLayout);
            // * Use `otu_ids` for the marker colours.

            // * Use `otu_labels` for the text values.

            // ![Bubble Chart](Images/bubble_chart.png)
        });
    })
}
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};

function gauge() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;
        var metadata = allData.metadata
        var objects = Object.values(metadata)
        
        objects.forEach(({id, wfreq }) => {
            
            var gaugetrace = {
                domain: { x: [0,1], y: [0,1] },
                value: wfreq,
                title: { text: "Wash Frequency" },
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [null, 9] },
                    steps: [
                      { range: [0, 6], color: "lightblue" },
                      { range: [3,6], color: "blue"},
                      { range: [6, 9], color: "navy" }
                    ],
                  }
            };

            var gaugeScore = [gaugetrace];
            var layout = {
                width: 500,
                height: 400,
                margin: { t: 25, r: 25, l: 25, b: 25 }
              };
            Plotly.newPlot('gauge', gaugeScore, layout);
        });
    });
};

d3.selectAll("#selOption").on("change", getData);
function getData() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importedData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importedData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importedData;
        var sample_data = allData.samples;
        var objects = Object.values(sample_data)
        var dropdownMenu = d3.select("#selOption");
        var dataset = dropdownMenu.property("value");
        var filteredData = objects.filter(sd => sd.id === dataset);
        filteredData.forEach(({ sample_values, otu_ids, otu_labels }) => {
            var sv = sample_values;
            var otids = otu_ids
            var otlabels = otu_labels
            var slice_sv = sv.slice(0, 10)
            var slice_otids = otids.slice(0, 10);
            var sort_otids = slice_otids.sort(function (a, b) { return a - b })
            // Reverse the array due to Plotly's defaults
            var reverse_otids = sort_otids.reverse();
            var desired_maximum_marker_size = 40;
            var parsed_otids = parseFloat(otids);
            var parsed_sv = parseFloat(sv);
            var sizeref = (parsed_otids ** parsed_sv) / (desired_maximum_marker_size ** 2);
            Plotly.restyle("plot-container plotly", "x", [sort_otids]);
            Plotly.restyle("plot-container plotly", "y", [slice_sv]);
            Plotly.restyle("plot-container plotly", "text", [otlabels]);
            Plotly.restyle("plot-container plotly", "text", [otids]);
            Plotly.restyle("bubble-container plotly", "x", otids);
            Plotly.restyle("bubble-container plotly", "y", [sv]);
            Plotly.restyle("bubble-container plotly", "text", [otlabels]);
            Plotly.restyle("bubble-container plotly", "sizeref", [sizeref]);
        });
    });
};
function getMetaData() {
<<<<<<< HEAD
    d3.json("https://chewy-program.github.io/plotly-challenge/data/samples.json").then((importMetaData) => {
=======
    d3.json("./plotly-challlenge/data/samples.json").then((importMetaData) => {
>>>>>>> 8e7a39750f66bc4d05fbcf366d87dfb54c5e19f1
        var allData = importMetaData;
        var metadata = allData.metadata;
        var metaobjects = Object.values(metadata);
        var dropdownMenu = d3.select("#selOption");
        var metadataset = dropdownMenu.property("value");
        var filtermetaobject = metaobjects.filter(mo => mo.id == metadataset);
        console.log(filtermetaobject)
        filtermetaobject.forEach(({ id, wfreq }) => {
            var wash = wfreq;
            Plotly.restyle("gauge", "value", [wash]);
        });
    
    });
};

getData();
getMetaData();
horibar();
bubble();
gauge();
// 6. Update all of the plots any time that a new sample is selected.

    // Assign the value of the dropdown menu option to a variable
    // Initialize an empty array for the country's data
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ![hw](Images/hw03.png)

// Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

// ![hw](Images/hw02.png)

// ## Advanced Challenge Assignment (Optional)

// The following task is advanced and therefore optional.

// * Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

// * You will need to modify the example gauge code to account for values ranging from 0 through 9.

// * Update the chart whenever a new sample is selected.

// ![Weekly Washing Frequency Gauge](Images/gauge.png)

// ## Deployment

// Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo
