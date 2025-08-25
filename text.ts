<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Cost Dashboard</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      background-color: #f8f9fa;
    }
    .card {
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    .metric {
      font-size: 1.8rem;
      font-weight: bold;
    }
    .section-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 1.5rem 0 1rem 0;
    }
  </style>
</head>
<body class="p-4">

  <!-- Executive Summary -->
  <div class="container-fluid mb-4">
    <div class="section-title">Executive Summary</div>
    <div class="row g-3">
      <div class="col-md-6">
        <div class="card p-3 text-center">
          <div>Total Cost for Selected Duration</div>
          <div class="metric">$8,230</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-3 text-center">
          <div>Avg Daily Cost</div>
          <div class="metric">$276</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-3 text-center">
          <div>Total Monthly Cost</div>
          <div class="metric">$9,000</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-3 text-center">
          <div>Aggregate Quarterly Cost</div>
          <div class="metric">$26,700</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Current Trends & Distribution -->
  <div class="container-fluid mb-4">
    <div class="section-title">Current Trends & Distribution</div>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="card p-3">
          <div>Daily EC2 Cost for Account XYZ</div>
          <canvas id="dailyCostChart" height="120"></canvas>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3">
          <div>Cost Distribution by Tag/Node Groups</div>
          <canvas id="donutChart" height="120"></canvas>
        </div>
      </div>
    </div>
  </div>

  <!-- Deep Dive & Comparisons -->
  <div class="container-fluid mb-4">
    <div class="section-title">Deep Dive & Comparisons</div>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="card p-3">
          <div>Node Group Cost Trends Over Given Time</div>
          <canvas id="multiLineChart" height="120"></canvas>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3">
          <div>Monthly Cost Comparison by Node Groups</div>
          <canvas id="barChart" height="120"></canvas>
        </div>
      </div>
    </div>
  </div>

  <!-- Advanced Analytics & Optimization -->
  <div class="container-fluid mb-4">
    <div class="section-title">Advanced Analytics & Optimization</div>
    <div class="row g-3">
      <div class="col-md-8">
        <div class="card p-3">
          <div>Node Group Cost Heatmap</div>
          <canvas id="heatmapChart" height="120"></canvas>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3">
          <div>Cost Variance Analysis</div>
          <canvas id="boxPlotChart" height="120"></canvas>
        </div>
      </div>
    </div>
  </div>

  <!-- Dummy Chart JS Setup -->
  <script>
    const ctx1 = document.getElementById('dailyCostChart');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Day 1','Day 2','Day 3','Day 4','Day 5'],
        datasets: [{label: 'Cost', data: [2,4,3,5,6], borderColor: '#007bff'}]
      }
    });

    const ctx2 = document.getElementById('donutChart');
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Tag A','Tag B','Tag C'],
        datasets: [{data:[30,40,30], backgroundColor:['#0d6efd','#6c757d','#198754']}]
      }
    });

    const ctx3 = document.getElementById('multiLineChart');
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [
          {label: 'Group A', data: [3,4,5,6,7], borderColor: '#0d6efd'},
          {label: 'Group B', data: [2,3,4,3,4], borderColor: '#198754'}
        ]
      }
    });

    const ctx4 = document.getElementById('barChart');
    new Chart(ctx4, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr'],
        datasets: [
          {label: 'Group A', data: [3,4,5,6], backgroundColor: '#0d6efd'},
          {label: 'Group B', data: [2,3,2,4], backgroundColor: '#6c757d'}
        ]
      }
    });

    const ctx5 = document.getElementById('heatmapChart');
    new Chart(ctx5, {
      type: 'matrix', // Chart.js doesn’t have native heatmap; placeholder
      data: {datasets:[{label:'Heatmap',data:[],backgroundColor:'#adb5bd'}]},
      options: {plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
    });

    const ctx6 = document.getElementById('boxPlotChart');
    new Chart(ctx6, {
      type: 'bar', // Placeholder for boxplot
      data: {
        labels: ['Grp A','Grp B','Grp C'],
        datasets: [{label:'Variance', data: [3,2,4], backgroundColor: '#ffc107'}]
      }
    });
  </script>

</body>
</html>
