// 点击量饼图数据
const clickLabel = ["哔哩哔哩(大号 播放量)", "哔哩哔哩(大号 阅读量)", "哔哩哔哩(小号 播放量)", "哔哩哔哩(小号 阅读量)", "知乎", "CSDN", "VSMarketplace"];
const clickData = [249546, 52422, 191916, 48322, 112313, 153508, 20246];

// 点击量求和
var clickAll = 0;
for (let i = 0; i < clickData.length; i++) {
    clickAll += clickData[i];
}

// 粉丝量饼图数据
const followerLabel = ["哔哩哔哩(大号)", "哔哩哔哩(小号)", "知乎", "CSDN"];
const followerData = [1294, 469, 56, 198];

// 点击量求和
var followerAll = 0;
for (let i = 0; i < followerData.length; i++) {
    followerAll += followerData[i];
}

// 饼图背景色
const doughnutBackgroundColor = ["rgba(255, 99, 132)", "rgba(255, 159, 64)", "rgba(255, 205, 86)", "rgba(75, 192, 192)", "rgba(54, 162, 235)", "rgba(153, 102, 255)", "rgba(201, 203, 207)"]

// VSCode扩展折线图数据
const date = ['3-18', '3-19', '3-20', '3-21', '3-22', '3-23', '3-24', '3-25', '3-26', '3-27', '3-28', '3-29', '3-30', '3-31', '4-1', 
    '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'];
const jeiData = [1311, 1341, 1374, 1408, 1447, 1489, 1527, 1556, 1587, 1620, 1670, 1697, 1734, 1760, 1799, 
    1827, 1856, 1895, 1933, 1961, 1996, 2008];
const pdData = [1142, 1170, 1202, 1252, 1292, 1339, 1371, 1411, 1443, 1470, 1518, 1554, 1584, 1620, 1662, 
    1690, 1719, 1753, 1797, 1823, 1859, 1885];
const vsbData = [831, 881, 929, 981, 1036, 1101, 1149, 1304, 1529, 1790, 2065, 2329, 2559, 2820, 3097, 
    3297, 3559, 3808, 4049, 4347, 4585, 4815];
const jpiData = [294, 394, 545, 685, 839, 1012, 1156, 1285, 1453, 1670, 1898, 2110, 2309, 2520, 2754, 
    2905, 3107, 3300, 3495, 3714, 3990, 4079];
const cjsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 
    46, 81, 121, 168, 211, 257, 295]