// 点击量饼图数据
const clickLabel = ["CSDN", "哔哩哔哩(大号 播放量)", "哔哩哔哩(小号 播放量)", "知乎", "VSMarketplace"];
const clickData = [564104, 268184, 214997, 245426, 251675];

// 点击量求和
var clickAll = 0;
for (let i = 0; i < clickData.length; i++) {
    clickAll += clickData[i];
} 

// 粉丝量饼图数据
const followerLabel = ["哔哩哔哩(大号)", "哔哩哔哩(小号)", "知乎", "CSDN"];
const followerData = [1324, 554, 133, 303];

// 点击量求和
var followerAll = 0;
for (let i = 0; i < followerData.length; i++) {
    followerAll += followerData[i];
}

// 饼图背景色
const doughnutBackgroundColor = ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)"];

// VSCode扩展折线图数据
const date = ["-7 Day", "-6 Day", "-5 Day", "-4 Day", "-3 Day", "-2 Day", "-1 Day", "今日"];
const jei = 17676
const pd = 15809
const vsb = 99968
const jpi = 99652
const cjs = 18770
const jeiData = [jei-700, jei-600, jei-500, jei-400, jei-300, jei-200, jei-100, jei];
const pdData = [pd-700, pd-600, pd-500, pd-400, pd-300, pd-200, pd-100, pd];
const vsbData = [vsb-700, vsb-600, vsb-500, vsb-400, vsb-300, vsb-200, vsb-100, vsb];
const jpiData = [jpi-700, jpi-600, jpi-500, jpi-400, jpi-300, jpi-200, jpi-100, jpi];
const cjsData = [cjs-700, cjs-600, cjs-500, cjs-400, cjs-300, cjs-200, cjs-100, cjs];