// 1. Use the D3 library to read in `samples.json`.
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function horibar() {d3.json("../StarterCode/samples.json").then((importedData) => {
    var allData = importedData;
    var sample_data = allData.samples;

    sample_data.forEach(({ sample_values, otu_ids, otu_labels }) => {

        var sv = sample_values;
        var otids = otu_ids;
        var otlabels = otu_labels;
        // Slice the first 10 objects for plotting
        slice_sv = sv.slice(0,10)
        slice_otids = otids.slice(0, 10);
        sort_otids = slice_otids.sort(function(a, b){return a-b})
        // Reverse the array due to Plotly's defaults
        reverse_otids = sort_otids.reverse();

        var bartrace = {
            x: reverse_otids,
            y: slice_sv,
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
                text: otids,
                line: {
                    color: slice_sv,
                    colorscale: [["Viridis"]],
                    width: 5
                }
        }};


        // place trace into object 
        var barChartData = [bartrace];

        // Apply the group bar mode to the layout
        var barLayout = {
            title: "Sample Data Belly Button research",
            xaxis: { title: "Sample Value" },
            yaxis: { title: "OTU ID" },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            },
            bargap:100
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("plot-container plotly", barChartData, barLayout);
    });
})};
horibar();

function bubble(){ d3.json("../StarterCode/samples.json").then((importedData) => {
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
        var sizeref = (parsed_otids ** parsed_sv) / (desired_maximum_marker_size**2)
        // 3. Create a bubble chart that displays each sample.
        
        // * Use `otu_ids` for the x values.
        var bubbletrace = {
            x: otids,
            y: sv,
            mode: 'markers',
            text: [[otids], [otlabels]],
            
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
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Sample Values"},
            height: 600,
            width: 900
        };
        Plotly.newPlot("bubble-container plotly", bubbleData, bubbleLayout);
        // * Use `otu_ids` for the marker colours.

        // * Use `otu_labels` for the text values.

        // ![Bubble Chart](Images/bubble_chart.png)
    });
})};

bubble();
// 4. Display the sample metadata, i.e., an individual's demographic information.
function metadata() {d3.json("../StarterCode/samples.json").then((importedData) => {
    var allData = importedData;
    var metadata = allData.metadata;
    
    metadata.forEach(({id, ethnicity, gender, age, location, bbtype, wfreq}) =>
            document.getElementById('selDataset').innerHTML +='<option value="'+id+'"></option>'
    );
  
})}
metadata()
function getData() {d3.json("../StarterCode/samples.json").then((importedData) => {
    var allData = importedData;
    var metadata = Object.values(allData.metadata);
    var demoInfo = d3.select("Demo-info");
    var inputElement = d3.select("#selDataset");
    var inputValue = inputElement.property("value");
    var filteredData = metadata.filter(md => md.id === inputValue)
    filteredData.forEach(({id, ethnicity, gender, age, location, bbtype, wfreq}) => {
        var field = demoInfo.append("p")
        field.append("p").text(id);
        field.append("p").text(ethnicity);
        field.append("p").text(gender);
        field.append("p").text(age);
        field.append("p").text(location);
        field.append("p").text(bbtype);
        field.append("p").text(wfreq);

    });
})};
getData()
    // Assign the value of the dropdown menu option to a variable
    // Initialize an empty array for the country's data
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ![hw](Images/hw03.png)

var select = document.getElementById("selDataset"); 





// 6. Update all of the plots any time that a new sample is selected.

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