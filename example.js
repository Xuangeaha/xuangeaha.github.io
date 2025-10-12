clearProject();

player_datas[0].nickname = '卡猫kat';
player_datas[1].nickname = '猫卡';
player_datas[2].nickname = '猫卡';
player_datas[3].nickname = '猫卡';
player_datas[0].avatar_id = 400102;
player_datas[1].avatar_id = 400102;
player_datas[2].avatar_id = 400102;
player_datas[3].avatar_id = 400102;

setConfig({
    category: 1,
    meta: {mode_id: 0},
    mode: {
        mode: 1,
        detail_rule: {
            _scores_: [80000, 80000, 80000, 80000]
        }
    }
});

// 第1局: 东亲, 东起 天和
begin_tiles[0] = '678s567p333z88m77z8m';
begin_tiles[1] = '1112340678999m';
begin_tiles[2] = '1112340678999p';
begin_tiles[3] = '1112340678999s';
randomPaishan();
roundBegin();
hupai();

// 第3局: 南亲, 南起 大三元
begin_tiles[0] = '345p112z55666777z';
begin_tiles[1] = '1112340678999m';
begin_tiles[2] = '1112340678999p';
begin_tiles[3] = '1112340678999s';
randomPaishan('2z5z5z');
roundBegin();
qiepai('2z');
mopai();
qiepai('2z');
mopai();
qiepai('5z');
hupai();

// 第4局: 南亲, 南起 四暗刻
begin_tiles[0] = '555m888p444s11447z';
begin_tiles[1] = '1112340678999m';
begin_tiles[2] = '1112340678999p';
begin_tiles[3] = '1112340678999s';
randomPaishan('2224z');
roundBegin();
qiepai();
normalMoqie(3);
zimoHu();

// 第5局: 南亲, 南起 字一色
begin_tiles[0] = '11122233355667z';
begin_tiles[1] = '1112340678999m';
begin_tiles[2] = '1112340678999p';
begin_tiles[3] = '1112340678999s';
randomPaishan('775z');
roundBegin();
qiepai();
normalMoqie(3);
hupai();

// 第6局: 南亲, 南起 绿一色
begin_tiles[0] = '223344666888s6z7z';
begin_tiles[1] = '1112340678999m';
begin_tiles[2] = '1112340678999p';
begin_tiles[3] = '1112340678999s';
randomPaishan('776z');
roundBegin();
qiepai();
normalMoqie(3);
hupai();

// 第7局: 南亲, 南起 清老头
begin_tiles[0] = '11199m999p11999s1z';
begin_tiles[1] = '2223405567888m';
begin_tiles[2] = '2223405567888p';
begin_tiles[3] = '2223405567888s';
randomPaishan('1s');
roundBegin();
qiepai();
normalMoqie();
hupai();

// 第8局: 南亲, 南起 国士无双
begin_tiles[0] = '119m19p19s1234577z';
begin_tiles[1] = '2223405567888m';
begin_tiles[2] = '2223405567888p';
begin_tiles[3] = '2223405567888s';
randomPaishan('1z1m7z6z');
roundBegin();
qiepai('7z');
mopai();
qiepai('1z');
mopai();
qiepai('1m');
mopai();
qiepai('7z');
mopai();
hupai();

// 第10局: 南亲, 南起 四杠子
begin_tiles[0] = '333222m999p11127z';
begin_tiles[1] = '1115405567888m';
begin_tiles[2] = '2223405567888p';
begin_tiles[3] = '2223405567888s';
randomPaishan('1z', '2z3m9p2m');
roundBegin();
qiepai();
normalMoqie();
mingpai();
mopai();
comboMopai(3);
hupai();

// 第11局: 南亲, 南起 九莲宝灯
begin_tiles[0] = '1123465789999m7z';
begin_tiles[1] = '2223405567888m';
begin_tiles[2] = '2223405567888p';
begin_tiles[3] = '2223405567888s';
randomPaishan('11z1m');
roundBegin();
qiepai();
normalMoqie(3);
hupai();