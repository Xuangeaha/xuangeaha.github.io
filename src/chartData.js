// 饼图背景色
const doughnutBackgroundColor = ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(255, 205, 86)"];

// VSCode扩展折线图数据
const date = ["-7 Months", "-6 Months", "-5 Months", "-4 Months", "-3 Months", "-2 Months", "-1 Months", "Today"];
const jei = 31853
const pd = 26160
const vsb = 183209
const jpi = 247012
const cjs = 33099
const jeiData = [jei - 7000, jei - 6000, jei - 5000, jei - 4000, jei - 3000, jei - 2000, jei - 1000, jei];
const pdData = [pd - 7000, pd - 6000, pd - 5000, pd - 4000, pd - 3000, pd - 2000, pd - 1000, pd];
const vsbData = [vsb - 7000, vsb - 6000, vsb - 5000, vsb - 4000, vsb - 3000, vsb - 2000, vsb - 1000, vsb];
const jpiData = [jpi - 7000, jpi - 6000, jpi - 5000, jpi - 4000, jpi - 3000, jpi - 2000, jpi - 1000, jpi];
const cjsData = [cjs - 7000, cjs - 6000, cjs - 5000, cjs - 4000, cjs - 3000, cjs - 2000, cjs - 1000, cjs];

// 点击量饼图数据
const clickLabel = ["哔哩哔哩 Bilibili", "CSDN", "网易云音乐 Netease Cloud Music", "VSMarketplace"];
const clickData = [495006+276624, 623099, 305000+195000+4662, jei+pd+vsb+jpi+cjs];

// 点击量求和
var clickAll = 0;
for (let i = 0; i < clickData.length; i++) {
    clickAll += clickData[i];
} 

// 粉丝量饼图数据
const followerLabel = ["哔哩哔哩 Bilibili", "CSDN", "网易云音乐 Netease Cloud Music"];
const followerData = [723+1293, 324, 517];


// 点击量求和
var followerAll = 0;
for (let i = 0; i < followerData.length; i++) {
    followerAll += followerData[i];
}
