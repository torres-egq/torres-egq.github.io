import React from 'react';
import ReactApexChart from 'react-apexcharts';

import Colunas from '../charts/colunas'
function randomizeArray(data) {
    return data.map(() => Math.floor(Math.random() * 100));
}

const sparklineData = Array(10).fill(0); // Isso criará um array com 10 zeros

class SparklineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
      
            series: [{
              data: randomizeArray(sparklineData)
            }],
            options: {
              chart: {
                type: 'area',
                height: 160,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3,
              },
              yaxis: {
                min: 0
              },
              colors: ['#DCE6EC'],
              title: {
                text: '$424,652',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Vendas',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              }
            },
          
            seriesSpark2: [{
              data: randomizeArray(sparklineData)
            }],
            optionsSpark2: {
              chart: {
                type: 'area',
                height: 160,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3,
              },
              yaxis: {
                min: 0
              },
              colors: ['#DCE6EC'],
              title: {
                text: '$235,312',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Lucro',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              }
            },
          
            seriesSpark3: [{
              data: randomizeArray(sparklineData)
            }],
            optionsSpark3: {
              chart: {
                type: 'area',
                height: 160,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              yaxis: {
                min: 0
              },
              title: {
                text: '$135,965',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Investimento',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              }
            },
          
            series1: [{
              data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            options1: {
              chart: {
                type: 'line',
                width: 100,
                height: 35,
                sparkline: {
                  enabled: true
                }
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            },
          
            series2: [{
              data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options2: {
              chart: {
                type: 'line',
                width: 100,
                height: 35,
                sparkline: {
                  enabled: true
                }
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            },
          
            series3: [43, 32, 12, 9],
            options3: {
              chart: {
                type: 'pie',
                width: 40,
                height: 40,
                sparkline: {
                  enabled: true
                }
              },
              stroke: {
                width: 1
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
              }
            },
          
            series4: [43, 32, 12, 9],
            options4: {
              chart: {
                type: 'donut',
                width: 40,
                height: 40,
                sparkline: {
                  enabled: true
                }
              },
              stroke: {
                width: 1
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
              }
            },
          
            series5: [{
              data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            options5: {
              chart: {
                type: 'bar',
                width: 100,
                height: 35,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '80%'
                }
              },
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            },
          
            series6: [{
              data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            options6: {
              chart: {
                type: 'bar',
                width: 100,
                height: 35,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '80%'
                }
              },
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            },
          
            series7: [45],
            options7: {
              chart: {
                type: 'radialBar',
                width: 50,
                height: 50,
                sparkline: {
                  enabled: true
                }
              },
              dataLabels: {
                enabled: false
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '50%'
                  },
                  track: {
                    margin: 0
                  },
                  dataLabels: {
                    show: false
                  }
                }
              }
            },
          
            series8: [53, 67],
            options8: {
              chart: {
                type: 'radialBar',
                width: 40,
                height: 40,
                sparkline: {
                  enabled: true
                }
              },
              dataLabels: {
                enabled: false
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 0,
                    size: '50%'
                  },
                  track: {
                    margin: 1
                  },
                  dataLabels: {
                    show: false
                  }
                }
              }
            },
          
          
          };
    }




    render() {
      return (
        

  <div>
<div className="grid grid-cols-3">

  <div id="chart-spark1">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={160} />
</div>


  <div id="chart-spark2">
<ReactApexChart options={this.state.optionsSpark2} series={this.state.seriesSpark2} type="area" height={160} />
</div>


  <div id="chart-spark3">
<ReactApexChart options={this.state.optionsSpark3} series={this.state.seriesSpark3} type="area" height={160} />
</div>

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div className="grid grid-cols-2 gap-10">
<table>
  <thead>
    <th>Total Value</th>
    <th>Percentage of Portfolio</th>
    <th>Last 10 days</th>
    <th>Volume</th>
  </thead>
  <tbody>
  
    <tr>
    <td>Facebook</td>
      <td>$32,554</td>
      <td>15%</td>
      <td>
        <div id="chart-1">
<ReactApexChart options={this.state.options1} series={this.state.series1} type="line" height={100} width={300} />
</div>
      </td>
      <td>
        <div id="chart-5">
<ReactApexChart options={this.state.options5} series={this.state.series5} type="bar" height={100} width={300} />
</div>
      </td>
    </tr>
    <tr>
    <td>Instragram</td>
      <td>$23,533</td>
      <td>7%</td>
      <td>
        <div id="chart-2">
<ReactApexChart options={this.state.options2} series={this.state.series2} type="line" height={100} width={300} />
</div>
      </td>
      <td>
        <div id="chart-6">
<ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={100} width={300} />
</div>
      </td>
    </tr>
    <tr>
    <td>YouTube</td>
      <td>$54,276</td>
      <td>9%</td>
      <td>
        <div id="chart-3">
<ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={100} width={100} />
</div>
      </td>
      <td>
        <div id="chart-7">
<ReactApexChart options={this.state.options7} series={this.state.series7} type="radialBar" height={150} width={150} />
</div>
      </td>
    </tr>
    <tr>
    <td>WhatsApp</td>
      <td>$11,533</td>
      <td>2%</td>
      <td>
        <div id="chart-4">
<ReactApexChart options={this.state.options4} series={this.state.series4} type="donut" height={100} width={100} />
</div>
      </td>
      <td>
        <div id="chart-8">
<ReactApexChart options={this.state.options8} series={this.state.series8} type="radialBar" height={100} width={100} />
</div>
      </td>
    </tr>
  </tbody>
</table>
<Colunas />
</div>
</div>


      );
    }
  }export default SparklineComponent;

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);