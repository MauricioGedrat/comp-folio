import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const HeroSvg = (props: svgProps): JSX.Element => {
    const { size = 100, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                fill={color}
            >
                <path
                    d="M3622.6 1624.3H2213.49C2206.22 1624.29 2199.26 1621.19 2194.12 1615.68C2188.99 1610.17 2186.1 1602.7 2186.09 1594.9V29.3928C2186.1 21.6 2188.99 14.1289 2194.12 8.61855C2199.26 3.10822 2206.22 0.00870693 2213.49 0H3622.6C3629.86 0.00869339 3636.83 3.10822 3641.97 8.61855C3647.1 14.1289 3649.99 21.6 3650 29.3928V1594.9C3649.99 1602.7 3647.1 1610.17 3641.97 1615.68C3636.83 1621.19 3629.86 1624.29 3622.6 1624.3ZM2213.49 10.2479C2208.76 10.2537 2204.22 12.2726 2200.88 15.8617C2197.53 19.4508 2195.65 24.317 2195.64 29.3928V1594.9C2195.65 1599.98 2197.53 1604.85 2200.88 1608.44C2204.22 1612.03 2208.76 1614.04 2213.49 1614.05H3622.6C3627.33 1614.04 3631.87 1612.03 3635.21 1608.44C3638.56 1604.85 3640.44 1599.98 3640.45 1594.9V29.3928C3640.44 24.317 3638.56 19.4508 3635.21 15.8617C3631.87 12.2726 3627.33 10.2537 3622.6 10.2479H2213.49Z"
                    fill="#3F3D56"
                />
                <path
                    d="M3183.65 657.95C3215.13 720.324 3226.66 792.058 3216.46 862.139C3206.27 932.221 3174.91 996.776 3127.21 1045.89C3079.5 1095.01 3018.09 1125.98 2952.39 1134.04C2886.7 1142.09 2820.35 1126.8 2763.54 1090.5C2706.73 1054.21 2662.6 998.911 2637.92 933.108C2613.24 867.305 2609.37 794.631 2626.92 726.243C2644.46 657.855 2682.44 597.534 2735.04 554.541C2787.63 511.548 2851.92 488.259 2918.04 488.25C2920.44 488.25 2922.83 488.288 2925.21 488.347L2922.02 349.972C2920.69 349.959 2919.37 349.918 2918.04 349.918C2822.91 349.947 2730.45 383.759 2655.11 446.078C2579.77 508.396 2525.78 595.715 2501.57 694.408C2477.35 793.101 2484.28 897.616 2521.26 991.644C2558.24 1085.67 2623.2 1163.92 2706 1214.18C2788.8 1264.45 2884.79 1283.89 2978.97 1269.49C3073.16 1255.08 3160.25 1207.64 3226.66 1134.56C3293.06 1061.48 3335.05 966.87 3346.06 865.502C3357.07 764.134 3336.49 661.708 3287.53 574.205L3183.65 657.95Z"
                    fill="#6C63FF"
                />
                <path
                    d="M3183.65 657.95L3287.53 574.205C3249.59 506.394 3196.06 450.165 3132.06 410.903C3068.06 371.641 2995.74 350.661 2922.02 349.972L2925.21 488.347C2978.4 489.684 3030.31 506.074 3075.7 535.857C3121.08 565.641 3158.32 607.76 3183.65 657.95V657.95Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M3137.39 1208.92L3132.06 1214.58L3283.38 1378.43L3288.71 1372.77L3137.39 1208.92Z"
                    fill="#3F3D56"
                />
                <path
                    d="M3234.54 205.931L3129.36 407.091L3135.91 411.03L3241.09 209.87L3234.54 205.931Z"
                    fill="#3F3D56"
                />
                <path
                    d="M3399.28 1438.89H3175.96C3171.99 1438.88 3168.19 1437.19 3165.38 1434.18C3162.57 1431.17 3160.99 1427.09 3160.99 1422.83V1389.1C3160.99 1384.84 3162.57 1380.76 3165.38 1377.75C3168.19 1374.74 3171.99 1373.04 3175.96 1373.04H3399.28C3403.25 1373.04 3407.05 1374.74 3409.86 1377.75C3412.67 1380.76 3414.25 1384.84 3414.25 1389.1V1422.83C3414.25 1427.09 3412.67 1431.17 3409.86 1434.18C3407.05 1437.19 3403.25 1438.88 3399.28 1438.89V1438.89Z"
                    fill="#6C63FF"
                />
                <path
                    d="M3342.67 210.773H3119.35C3115.38 210.768 3111.57 209.075 3108.77 206.064C3105.96 203.054 3104.38 198.973 3104.38 194.716V160.977C3104.38 156.72 3105.96 152.639 3108.77 149.628C3111.57 146.618 3115.38 144.925 3119.35 144.92H3342.67C3346.63 144.925 3350.44 146.618 3353.25 149.628C3356.05 152.639 3357.63 156.72 3357.64 160.977V194.716C3357.63 198.973 3356.05 203.054 3353.25 206.064C3350.44 209.075 3346.63 210.768 3342.67 210.773V210.773Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M1960.84 747.446H368.408C361.487 747.438 354.852 744.485 349.958 739.236C345.065 733.986 342.312 726.869 342.304 719.445V33.1257C342.312 25.7018 345.065 18.5843 349.958 13.3348C354.852 8.08533 361.487 5.13245 368.408 5.12402H1960.84C1967.76 5.1327 1974.39 8.08566 1979.29 13.3351C1984.18 18.5846 1986.93 25.702 1986.94 33.1257V719.445C1986.93 726.868 1984.18 733.986 1979.29 739.235C1974.39 744.485 1967.76 747.438 1960.84 747.446ZM368.408 15.372C364.02 15.3771 359.813 17.2492 356.71 20.5776C353.608 23.9059 351.862 28.4187 351.858 33.1257V719.445C351.862 724.152 353.608 728.664 356.71 731.993C359.813 735.321 364.02 737.193 368.408 737.198H1960.84C1965.23 737.193 1969.43 735.321 1972.53 731.992C1975.64 728.664 1977.38 724.151 1977.39 719.445V33.1257C1977.38 28.4189 1975.64 23.9063 1972.53 20.5779C1969.43 17.2496 1965.23 15.3773 1960.84 15.372H368.408Z"
                    fill="#3F3D56"
                />
                <path
                    d="M989.16 577.117H834.873C830.93 577.109 827.118 575.6 824.116 572.859C821.113 570.118 819.115 566.324 818.477 562.15C808.413 492.034 808.413 420.678 818.477 350.561C819.115 346.388 821.113 342.593 824.116 339.852C827.118 337.112 830.93 335.603 834.873 335.595H989.16C991.66 335.586 994.129 336.19 996.379 337.359C998.629 338.528 1000.6 340.233 1002.14 342.343C1003.72 344.482 1004.82 346.98 1005.36 349.645C1005.9 352.31 1005.87 355.072 1005.27 357.722C990.836 422.566 990.836 490.145 1005.27 554.989C1005.87 557.639 1005.9 560.402 1005.36 563.067C1004.82 565.732 1003.72 568.229 1002.14 570.369C1000.6 572.479 998.629 574.183 996.379 575.352C994.129 576.522 991.66 577.125 989.16 577.117Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M1505.74 577.117H1351.45C1347.51 577.108 1343.7 575.599 1340.7 572.859C1337.7 570.118 1335.7 566.323 1335.06 562.15C1324.99 492.034 1324.99 420.678 1335.06 350.561C1335.7 346.388 1337.7 342.594 1340.7 339.853C1343.7 337.112 1347.51 335.603 1351.45 335.595H1505.74C1508.24 335.586 1510.71 336.19 1512.96 337.36C1515.21 338.53 1517.18 340.235 1518.73 342.345C1520.3 344.484 1521.4 346.981 1521.95 349.646C1522.49 352.311 1522.45 355.073 1521.85 357.722C1507.42 422.567 1507.42 490.145 1521.85 554.99C1522.45 557.639 1522.49 560.401 1521.95 563.065C1521.4 565.73 1520.3 568.227 1518.73 570.367C1517.18 572.477 1515.21 574.182 1512.96 575.352C1510.71 576.522 1508.24 577.125 1505.74 577.117Z"
                    fill="#E6E6E6"
                />
                <path
                    d="M726.727 416.975H572.439C568.497 416.967 564.685 415.459 561.682 412.718C558.68 409.977 556.682 406.182 556.044 402.009C545.979 331.892 545.979 260.536 556.044 190.42C556.682 186.246 558.68 182.451 561.682 179.711C564.685 176.97 568.497 175.461 572.439 175.453H726.727C729.227 175.445 731.696 176.048 733.946 177.217C736.196 178.387 738.167 180.091 739.71 182.201C741.287 184.341 742.388 186.838 742.93 189.503C743.471 192.168 743.439 194.931 742.836 197.58C728.402 262.425 728.401 330.003 742.835 394.848C743.439 397.497 743.471 400.26 742.93 402.925C742.389 405.59 741.288 408.088 739.711 410.227C738.167 412.337 736.196 414.042 733.946 415.211C731.696 416.38 729.227 416.984 726.727 416.975V416.975Z"
                    fill="#6C63FF"
                />
                <path
                    d="M1248.51 416.975H1094.22C1091.72 416.984 1089.25 416.38 1087 415.211C1084.75 414.041 1082.78 412.336 1081.24 410.225C1079.66 408.086 1078.56 405.589 1078.02 402.924C1077.48 400.259 1077.51 397.497 1078.11 394.848C1092.55 330.003 1092.55 262.425 1078.11 197.58C1077.51 194.931 1077.48 192.169 1078.02 189.505C1078.56 186.84 1079.66 184.343 1081.24 182.203C1082.78 180.093 1084.75 178.388 1087 177.218C1089.25 176.048 1091.72 175.445 1094.22 175.453H1248.51C1252.45 175.461 1256.26 176.97 1259.27 179.711C1262.27 182.452 1264.27 186.247 1264.9 190.42C1274.97 260.536 1274.97 331.892 1264.9 402.009C1264.27 406.182 1262.27 409.977 1259.27 412.718C1256.26 415.458 1252.45 416.967 1248.51 416.975Z"
                    fill="#6C63FF"
                />
                <path
                    d="M1756.81 416.975H1602.52C1600.02 416.984 1597.55 416.38 1595.3 415.211C1593.05 414.041 1591.08 412.336 1589.53 410.225C1587.96 408.086 1586.86 405.589 1586.32 402.924C1585.77 400.259 1585.81 397.497 1586.41 394.848C1600.84 330.003 1600.84 262.425 1586.41 197.58C1585.81 194.931 1585.77 192.169 1586.31 189.504C1586.86 186.84 1587.96 184.343 1589.53 182.203C1591.08 180.093 1593.05 178.388 1595.3 177.218C1597.55 176.048 1600.02 175.445 1602.52 175.453H1756.81C1760.75 175.462 1764.56 176.971 1767.56 179.711C1770.56 182.452 1772.56 186.247 1773.2 190.42C1783.27 260.536 1783.27 331.892 1773.2 402.009C1772.56 406.182 1770.56 409.976 1767.56 412.717C1764.56 415.458 1760.75 416.967 1756.81 416.975V416.975Z"
                    fill="#FF6584"
                />
                <path
                    d="M897.733 1636.93C890.382 1635.33 883.449 1632.01 877.422 1627.22C871.394 1622.43 866.42 1616.28 862.848 1609.2C859.277 1602.12 857.196 1594.29 856.751 1586.26C856.306 1578.23 857.508 1570.19 860.273 1562.71L648.497 1074.95L755.93 1042.56L930.505 1532.79C941.913 1538.61 950.935 1548.71 955.863 1561.18C960.791 1573.66 961.281 1587.64 957.242 1600.47C953.202 1613.31 944.913 1624.11 933.945 1630.83C922.977 1637.55 910.093 1639.72 897.733 1636.93V1636.93Z"
                    fill="#A0616A"
                />
                <path
                    d="M487.608 2415.25H546.171L574.03 2172.95H487.599L487.608 2415.25Z"
                    fill="#A0616A"
                />
                <path
                    d="M659.113 2473.58L475.06 2473.59L475.057 2397.31L587.999 2397.3C606.858 2397.3 624.946 2405.34 638.283 2419.64C651.619 2433.95 659.112 2453.35 659.113 2473.58V2473.58V2473.58Z"
                    fill="#2F2E41"
                />
                <path
                    d="M183.208 2347.54L237.038 2372.27L351.594 2161.31L272.142 2124.81L183.208 2347.54Z"
                    fill="#A0616A"
                />
                <path
                    d="M319.448 2473.59L150.262 2395.85L178.26 2325.74L282.079 2373.44C299.415 2381.4 313.092 2396.43 320.1 2415.21C327.108 2433.99 326.874 2454.99 319.448 2473.59V2473.59V2473.59Z"
                    fill="#2F2E41"
                />
                <path
                    d="M632.399 846.123C697.195 846.123 749.722 789.778 749.722 720.273C749.722 650.768 697.195 594.424 632.399 594.424C567.604 594.424 515.077 650.768 515.077 720.273C515.077 789.778 567.604 846.123 632.399 846.123Z"
                    fill="#A0616A"
                />
                <path
                    d="M547.639 2356.01L483.172 2342.84C477.872 2341.79 473.139 2338.63 469.919 2333.99C466.7 2329.36 465.232 2323.59 465.81 2317.84L508.56 1870.73C508.968 1866.46 507.938 1862.18 505.656 1858.66C503.374 1855.14 499.991 1852.61 496.121 1851.54C492.251 1850.46 488.15 1850.91 484.561 1852.8C480.973 1854.69 478.134 1857.89 476.56 1861.84L289.925 2328.97C288.804 2331.78 287.173 2334.32 285.129 2336.44C283.085 2338.57 280.667 2340.24 278.017 2341.35C275.367 2342.47 272.536 2343.01 269.69 2342.94C266.844 2342.87 264.039 2342.2 261.437 2340.96L209.004 2315.96C204.109 2313.65 200.197 2309.46 198.039 2304.21C195.88 2298.96 195.631 2293.03 197.341 2287.6L324.986 1876.82C325.346 1875.67 325.594 1874.48 325.728 1873.27L367.162 1497.95C367.614 1493.85 369.082 1489.96 371.414 1486.68C373.745 1483.4 376.855 1480.85 380.418 1479.3L511.247 1422.29C515.117 1420.6 519.362 1420.16 523.462 1421.02C527.562 1421.88 531.34 1424 534.334 1427.13L699.468 1599.6C702.042 1602.28 703.948 1605.61 705.011 1609.28C706.075 1612.95 706.263 1616.85 705.557 1620.61L572.745 2337.86C571.762 2343.08 569.124 2347.79 565.28 2351.17C561.435 2354.55 556.619 2356.41 551.646 2356.42C550.302 2356.42 548.96 2356.28 547.639 2356.01V2356.01Z"
                    fill="#2F2E41"
                />
                <path
                    d="M474.143 1518.65C451.288 1490.26 434.607 1477.37 423.2 1479.41C411.88 1481.37 405.351 1498.33 398.436 1516.29C389 1540.8 378.303 1568.59 351.938 1570.76C347.833 1571.52 343.612 1571.02 339.759 1569.33C335.905 1567.63 332.573 1564.81 330.145 1561.18C309.406 1528.09 359.149 1418.61 363.694 1408.77L361.362 890.94C361.329 886.762 362.359 882.654 364.339 879.056C366.319 875.458 369.176 872.507 372.601 870.519C509.297 791.448 693.873 928.964 729.484 957.341C732.334 959.605 734.615 962.591 736.124 966.033C737.634 969.474 738.324 973.264 738.133 977.062C733.835 1063.79 712.4 1501.35 712.4 1598.95C712.4 1625.97 703.712 1643.14 686.576 1649.98C680.79 1652.18 674.685 1653.25 668.546 1653.15C616.261 1653.15 530.627 1588.8 474.143 1518.65Z"
                    fill="#CCCCCC"
                />
                <path
                    d="M664.908 1267.2C662.05 1265.21 659.68 1262.51 657.998 1259.33C656.317 1256.15 655.373 1252.58 655.246 1248.93L645.987 1016.99C645.416 1002.71 649.601 988.676 657.793 977.404C665.985 966.131 677.649 958.353 690.698 955.462C703.747 952.571 717.329 954.754 729.015 961.623C740.7 968.491 749.725 979.595 754.476 992.949L823.774 1187.74C825.801 1193.46 825.631 1199.8 823.303 1205.38C820.974 1210.96 816.678 1215.32 811.356 1217.51L684.385 1269.48C681.206 1270.8 677.777 1271.29 674.387 1270.89C670.998 1270.49 667.747 1269.23 664.908 1267.2V1267.2Z"
                    fill="#CCCCCC"
                />
                <path
                    d="M342.25 1629.61C336.026 1625.12 330.794 1619.22 326.926 1612.32C323.057 1605.43 320.645 1597.71 319.858 1589.7C319.072 1581.7 319.931 1573.61 322.375 1566C324.82 1558.4 328.789 1551.45 334.004 1545.67L311.6 1008.14L422.43 1022.14L409.564 1546.74C418.043 1556.78 422.793 1569.81 422.914 1583.36C423.036 1596.91 418.52 1610.03 410.222 1620.25C401.925 1630.46 390.423 1637.06 377.895 1638.78C365.367 1640.51 352.685 1637.24 342.25 1629.61H342.25Z"
                    fill="#A0616A"
                />
                <path
                    d="M265.291 1151.28C263.282 1148.32 261.965 1144.89 261.45 1141.28C260.936 1137.66 261.24 1133.97 262.336 1130.51L330.776 910.265C334.989 896.705 343.563 885.196 354.963 877.797C366.364 870.398 379.847 867.592 392.999 869.882C406.152 872.171 418.116 879.407 426.75 890.293C435.384 901.18 440.125 915.007 440.125 929.3V1137.8C440.118 1143.91 437.851 1149.77 433.822 1154.09C429.792 1158.42 424.328 1160.85 418.629 1160.85H282.729C279.32 1160.87 275.956 1160.01 272.921 1158.35C269.886 1156.68 267.269 1154.26 265.291 1151.28V1151.28Z"
                    fill="#CCCCCC"
                />
                <path
                    d="M556.634 804.92C552.243 808.612 546.756 810.48 541.184 810.182C535.611 809.884 530.325 807.44 526.297 803.298C501.152 778.086 479.931 747.939 469.192 713.024C456.886 673.016 460.029 626.159 483.596 592.457C503.518 563.967 535.051 547.872 566.111 535.289C578.236 529.789 591.046 526.221 604.134 524.697C617.355 523.226 630.601 527.216 641.176 535.854C646.329 540.268 650.122 546.245 652.061 553.006C654 559.767 653.994 566.998 652.045 573.756C667.973 558.237 687.406 547.454 708.417 542.474C721.717 538.692 735.772 539.317 748.734 544.266C766.747 552.212 778.448 571.621 783.839 591.696C788.298 607.01 788.659 623.359 784.882 638.883C782.942 646.601 779.514 653.796 774.819 660.003C770.124 666.21 764.267 671.291 757.626 674.916C741.146 683.245 721.589 680.101 704.357 673.761C687.126 667.421 670.788 658.065 652.966 654.021C635.143 649.976 614.565 652.336 601.954 666.438C593.073 676.368 589.576 690.338 586.4 703.67L569.878 773.018C568.055 783.119 564.566 792.79 559.576 801.577C558.74 802.828 557.751 803.953 556.634 804.92V804.92Z"
                    fill="#2F2E41"
                />
                <path
                    d="M1032.44 1805.57H878.152C874.21 1805.56 870.398 1804.05 867.396 1801.31C864.393 1798.57 862.395 1794.78 861.757 1790.6C851.693 1720.49 851.693 1649.13 861.757 1579.02C862.395 1574.84 864.393 1571.05 867.396 1568.31C870.398 1565.57 874.21 1564.06 878.152 1564.05H1032.44C1034.94 1564.04 1037.41 1564.64 1039.66 1565.81C1041.91 1566.98 1043.88 1568.69 1045.42 1570.8C1047 1572.94 1048.1 1575.44 1048.64 1578.1C1049.18 1580.76 1049.15 1583.53 1048.55 1586.18C1034.12 1651.02 1034.12 1718.6 1048.55 1783.44C1049.15 1786.09 1049.18 1788.85 1048.64 1791.52C1048.1 1794.18 1047 1796.68 1045.42 1798.82C1043.88 1800.93 1041.91 1802.64 1039.66 1803.81C1037.41 1804.98 1034.94 1805.58 1032.44 1805.57Z"
                    fill="#6C63FF"
                />
                <path
                    d="M773.837 2480H4.77677C3.50989 2480 2.2949 2479.46 1.39908 2478.5C0.503262 2477.54 0 2476.23 0 2474.88C0 2473.52 0.503262 2472.21 1.39908 2471.25C2.2949 2470.29 3.50989 2469.75 4.77677 2469.75H773.837C775.104 2469.75 776.319 2470.29 777.215 2471.25C778.111 2472.21 778.614 2473.52 778.614 2474.88C778.614 2476.23 778.111 2477.54 777.215 2478.5C776.319 2479.46 775.104 2480 773.837 2480Z"
                    fill="#3F3D56"
                />
            </svg>
        </>
    )
}

export default HeroSvg
