<template>
  <el-tabs type="border-card">
    <el-tab-pane label="流量监控">
      <v-chart :options="chart_1"/>
    </el-tab-pane>
    <el-tab-pane label="标签页2">to be done</el-tab-pane>
    <el-tab-pane label="标签页3">to be done</el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from "axios"
import ECharts from "vue-echarts";
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import "echarts/lib/chart/line";
import "echarts/lib/component/axisPointer";
import "echarts/lib/component/dataZoom";

export default {
  components: {
    "v-chart": ECharts
  },
  mounted() {
    var that = this;
    axios.get("http://localhost:3000/").then(function(res) {
      that.chart_1.series[0].data = res.data.data0;
      that.chart_1.series[1].data = res.data.data1;
    });
    // setInterval(function () {
        //         data.push(randomData(+new Date()));
        //     // }

        //     myChart.setOption({
        //         series: [{
        //             data: data
        //         }]
        //     });
        // },60*1000);
  },
  data() {
    return {
      chart_1: {
        title: {
          text: "武汉区调实时指挥航空器数量监控",
          textStyle: {
            fontSize: 26
          },
          x: "center"
        },
        legend: {
          left: "right"
        },
        // tooltip: {
        //   axisPointer: {}
        // },
        axisPointer: {
          show: true,
          snap: false,
          label:{
            precision: 0
            // formatter: function (value){
            //   console.log(value.value);
            //   return value.value.toFixed();
            // }
          }
        },
        dataZoom: [
          {
            id: "x",
            type: "slider",
            show: true,
            realtime: true,
            start: 45,
            end: 55
          },
          {
            type: "inside"
          }
        ],
        xAxis: {
          type: "time"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "西扇",
            type: "line",
            data: null
          },
          {
            name: "南扇",
            type: "line",
            data: null
          }
          // {
          //     name: 'anchor',
          //     type: 'line',
          //     showSymbol: false,
          //     data: anchor,
          //     itemStyle: { normal: { opacity: 0 } },
          //     lineStyle: { normal: { opacity: 0 } }
          // }
        ]
      }
    };
//     return {
//       chart_1: {
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// }
    // }
  }
};
</script>

<style>
.echarts {
  width: 1600px;
  height: 800px;
}
</style>
